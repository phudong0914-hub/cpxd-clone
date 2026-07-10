import React, { useState, useEffect } from 'react';

export interface ChecklistItem {
  id: string;
  label: React.ReactNode;
  tags?: React.ReactNode[];
}

interface Props {
  idPrefix: string;
  items: ChecklistItem[];
  searchQuery?: string;
}

export const InteractiveChecklist: React.FC<Props> = ({ idPrefix, items, searchQuery = '' }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`checklist_${idPrefix}`);
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, [idPrefix]);

  const toggleItem = (id: string) => {
    const newChecked = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(newChecked);
    try {
      localStorage.setItem(`checklist_${idPrefix}`, JSON.stringify(newChecked));
    } catch (e) {
      console.error(e);
    }
  };

  const filteredItems = items.filter(item => {
    if (!searchQuery) return true;
    
    // Convert React Node to string for basic searching if it's string-like
    const textContent = typeof item.label === 'string' ? item.label : JSON.stringify(item.label);
    return textContent.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const checkedCount = items.filter(item => checkedItems[item.id]).length;
  const progressPercent = items.length > 0 ? (checkedCount / items.length) * 100 : 0;

  return (
    <div className="interactive-checklist">
      <div className="checklist-progress">
        <div className="progress-text" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text)' }}>Tiến độ chuẩn bị: {checkedCount}/{items.length}</div>
        <div className="progress-bar-bg" style={{ width: '100%', height: '6px', background: 'var(--elevate-1)', borderRadius: '3px', marginTop: '6px', overflow: 'hidden' }}>
          <div className="progress-bar-fill" style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--path-gold)', transition: 'width 0.3s ease' }}></div>
        </div>
      </div>
      <ul className="checklist" style={{ marginTop: '16px' }}>
        {filteredItems.map(item => {
          const isChecked = !!checkedItems[item.id];
          return (
            <li 
              key={item.id} 
              className={isChecked ? 'checked' : ''} 
              onClick={() => toggleItem(item.id)}
              style={{ cursor: 'pointer', display: 'flex', gap: '10px', alignItems: 'flex-start' }}
            >
              <svg style={{ flexShrink: 0, marginTop: '2px' }}><use href="#i-check"/></svg>
              <div>
                {item.label}
                {item.tags && item.tags.length > 0 && (
                  <div style={{ marginTop: '6px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {item.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                  </div>
                )}
              </div>
            </li>
          );
        })}
        {filteredItems.length === 0 && (
          <li style={{ opacity: 0.5, fontStyle: 'italic' }}>Không tìm thấy tài liệu phù hợp với "{searchQuery}"</li>
        )}
      </ul>
    </div>
  );
};
