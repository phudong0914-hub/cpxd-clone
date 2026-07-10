import React, { useLayoutEffect, useRef, useState } from 'react';
import type { SwimData } from '../data/cpxdData';

interface SwimlaneProps {
  containerId: string;
  data: SwimData;
  searchQuery?: string;
}

interface EdgePath {
  d: string;
}

interface EdgeLabel {
  text: string;
  x: number;
  y: number;
  width: number;
}

export const Swimlane: React.FC<SwimlaneProps> = ({ containerId, data, searchQuery = '' }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
  const [paths, setPaths] = useState<EdgePath[]>([]);
  const [labels, setLabels] = useState<EdgeLabel[]>([]);

  const draw = () => {
    const grid = gridRef.current;
    if (!grid) return;
    const gRect = grid.getBoundingClientRect();
    if (gRect.width === 0) return;

    setSvgSize({ width: gRect.width, height: gRect.height });

    const incoming: Record<string, number> = {};
    data.edges.forEach(e => {
      incoming[e[1]] = (incoming[e[1]] || 0) + 1;
    });
    const usedIn: Record<string, number> = {};

    const newPaths: EdgePath[] = [];
    const newLabels: EdgeLabel[] = [];

    data.edges.forEach(edge => {
      const [fromId, toId, label] = edge;
      const a = nodeRefs.current[fromId];
      const b = nodeRefs.current[toId];
      if (!a || !b) return;

      const ar = a.getBoundingClientRect();
      const br = b.getBoundingClientRect();
      const total = incoming[toId] || 1;
      const idx = (usedIn[toId] = (usedIn[toId] || 0) + 1) - 1;

      // Phân tán điểm vào trên cạnh trên của node đích
      const spread = Math.min(64, (br.width - 40) / Math.max(1, total - 1) || 0);
      const xIn = br.left + br.width / 2 - gRect.left + (total > 1 ? (idx - (total - 1) / 2) * spread : 0);
      const x1 = ar.left + ar.width / 2 - gRect.left;
      const y1 = ar.bottom - gRect.top;
      const x2 = xIn;
      const y2 = br.top - gRect.top;

      let d = "";
      if (Math.abs(x1 - x2) < 2) {
        d = `M${x1},${y1} L${x2},${y2 - 6}`;
      } else {
        const midY = y1 + 22;
        d = `M${x1},${y1} L${x1},${midY} L${x2},${midY} L${x2},${y2 - 6}`;
      }

      newPaths.push({ d });

      if (label) {
        const rectW = label.length * 6.2 + 16;
        newLabels.push({
          text: label,
          x: x2,
          y: y2 - 18,
          width: rectW
        });
      }
    });

    setPaths(newPaths);
    setLabels(newLabels);
  };

  useLayoutEffect(() => {
    // Initial draw
    draw();

    // ResizeObserver to re-draw on size change
    const observer = new ResizeObserver(() => {
      draw();
    });
    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    // Window resize fallback
    window.addEventListener('resize', draw);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', draw);
    };
  }, [data]);

  const markerId = `${containerId}-arrow`;

  return (
    <div className="swim" id={containerId}>
      <div className="swim-lanes" style={{ gridTemplateColumns: `repeat(${data.lanes.length}, 1fr)` }}>
        {data.lanes.map((l, i) => (
          <div key={i} className="swim-lane-label" style={{ color: l.color }}>
            {l.name}
          </div>
        ))}
      </div>
      <div className="swim-grid" ref={gridRef} style={{ gridTemplateColumns: `repeat(${data.lanes.length}, 1fr)` }}>
        <svg
          className="swim-connectors"
          width={svgSize.width}
          height={svgSize.height}
          style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'visible' }}
        >
          <defs>
            <marker id={markerId} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path className="swim-marker-path" d="M0,0 L6,3 L0,6 Z" />
            </marker>
          </defs>

          {/* Paths */}
          {paths.map((p, i) => (
            <path
              key={i}
              className="swim-path"
              d={p.d}
              fill="none"
              strokeWidth="1.6"
              markerEnd={`url(#${markerId})`}
            />
          ))}

          {/* Labels */}
          {labels.map((lbl, i) => (
            <g key={i}>
              <rect
                x={lbl.x - lbl.width / 2}
                y={lbl.y - 9}
                width={lbl.width}
                height={17}
                fill="var(--color-surface-2)"
                stroke="var(--color-border)"
                strokeWidth="1"
                rx={8.5}
              />
              <text
                x={lbl.x}
                y={lbl.y + 3.5}
                textAnchor="middle"
                fontFamily="IBM Plex Mono, monospace"
                fontSize="9.2"
                fontWeight="600"
                fill="var(--color-text)"
              >
                {lbl.text}
              </text>
            </g>
          ))}
        </svg>

        {/* Nodes */}
        {data.nodes.map((n) => {
          const textContent = `${n.title} ${n.detail || ''} ${n.day || ''}`.toLowerCase();
          const isMatch = !searchQuery || textContent.includes(searchQuery.toLowerCase());
          return (
          <div
            key={n.id}
            ref={(el) => {
              nodeRefs.current[n.id] = el;
            }}
            className={`swim-node ${n.tone ? `tone-${n.tone}` : ''} ${!isMatch ? 'dimmed' : ''}`}
            style={{
              gridColumn: String(n.lane + 1),
              gridRow: String(n.row + 1),
              ['--accent' as any]: data.lanes[n.lane].color
            }}
          >
            <div className="swim-node-title">{n.title}</div>
            {n.detail && <div className="swim-node-detail">{n.detail}</div>}
            {n.day && <div className="swim-node-day">{n.day}</div>}
          </div>
        )
        })}
      </div>
    </div>
  );
};
