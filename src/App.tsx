import React, { useState, useEffect } from 'react';
import { TABS } from './data/cpxdData';
import { SvgSymbols } from './components/SvgSymbols';
import { PanelTongQuan } from './components/PanelTongQuan';
import { PanelCapMoi } from './components/PanelCapMoi';
import { PanelSuaChua } from './components/PanelSuaChua';
import { PanelDieuChinh } from './components/PanelDieuChinh';
import { PanelCapLai } from './components/PanelCapLai';
import { PanelCoThoiHan } from './components/PanelCoThoiHan';
import { PanelTratTuXD } from './components/PanelTratTuXD';
import { PanelThiCong } from './components/PanelThiCong';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('tongquan');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const handleChecklistClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const li = target.closest('.checklist li');
      if (li) {
        li.classList.toggle('checked');
      }
    };
    document.addEventListener('click', handleChecklistClick);
    return () => {
      document.removeEventListener('click', handleChecklistClick);
    };
  }, []);

  const hexAlpha = (hex: string, alphaHex: string) => hex + alphaHex;

  const getTabStyle = (color: string, isActive: boolean) => {
    if (isActive) {
      return {
        background: color,
        border: `1px solid ${color}`,
      };
    } else {
      return {
        background: hexAlpha(color, '14'),
        border: `1px solid ${hexAlpha(color, '3C')}`,
      };
    }
  };

  const renderActivePanel = () => {
    switch (currentTab) {
      case 'tongquan': return <PanelTongQuan searchQuery={searchQuery} />;
      case 'capmoi': return <PanelCapMoi searchQuery={searchQuery} />;
      case 'suachua': return <PanelSuaChua searchQuery={searchQuery} />;
      case 'dieuchinh': return <PanelDieuChinh searchQuery={searchQuery} />;
      case 'caplai': return <PanelCapLai searchQuery={searchQuery} />;
      case 'cothoihan': return <PanelCoThoiHan searchQuery={searchQuery} />;
      case 'ttxd': return <PanelTratTuXD searchQuery={searchQuery} />;
      case 'thicong': return <PanelThiCong searchQuery={searchQuery} />;
      default: return <PanelTongQuan searchQuery={searchQuery} />;
    }
  };

  const handleTabClick = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  return (
    <>
      {/* SVG Symbols sheet for standard icons */}
      <SvgSymbols />

      {/* Subtle Noise Overlay for premium texture */}
      <div className="noise-overlay" aria-hidden="true" />

      <header className="masthead-v2">

        <div className="masthead-inner">
          <div className="masthead-left">

            <h1>
              QUY TRÌNH CẤP GIẤY PHÉP XÂY DỰNG
              <br />
              &amp; QUẢN LÝ TRẬT TỰ XÂY DỰNG NHÀ Ở RIÊNG LẺ
            </h1>
            <ul className="mh-meta">
              <li>
                <b>Căn cứ:</b> Luật Xây dựng 135/2025/QH15 • NĐ 217/2026/NĐ-CP • NĐ 207/2026/NĐ-CP
              </li>
              <li>
                <b>Phạm vi:</b> Công văn 24472/SXD-QLXDCT (08/7/2026) • UBND xã, phường, đặc khu Côn Đảo — TP.HCM
              </li>
              <li>
                <b>Đối tượng:</b> Hộ gia đình, cá nhân, tổ chức xây dựng nhà ở riêng lẻ, công trình cấp III–IV thuộc thẩm quyền UBND cấp xã
              </li>
            </ul>
          </div>
          <div className="mh-divider"></div>
          <div className="mh-profile">
            <div className="mh-avatar" style={{ overflow: 'hidden' }}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', stroke: 'none', fill: 'none' }}>
                <rect width="100" height="100" fill="#3cdce4" />
                <text x="50" y="70" fontFamily="'Georgia', serif" fontSize="72" fontStyle="italic" fill="#ffffff" textAnchor="middle">α</text>
                <rect x="25" y="80" width="50" height="6" fill="#ffffff" />
                <path d="M42 20 Q42 24 38 24 Q42 24 42 28 Q42 24 46 24 Q42 24 42 20" fill="#003399" />
                <path d="M26 42 Q26 46 22 46 Q26 46 26 50 Q26 46 30 46 Q26 46 26 42" fill="#003399" />
                <path d="M64 42 Q64 46 60 46 Q64 46 64 50 Q64 46 68 46 Q64 46 64 42" fill="#003399" />
                <path d="M42 72 Q42 74.5 39.5 74.5 Q42 74.5 42 77 Q42 74.5 44.5 74.5 Q42 74.5 42 72" fill="#003399" />
                <path d="M70 60 Q70 62 68 62 Q70 62 70 64 Q70 62 72 62 Q70 62 70 60" fill="#003399" />
              </svg>
            </div>
            <div className="mh-role">Pháp lý dự án</div>
            <div className="mh-name">Alpha Xây dựng</div>
            <div className="mh-phone">0836.384.168</div>
          </div>
        </div>
      </header>

      <div className="legal-source-strip">
        <span className="chip"><b>Luật Xây dựng</b> 2025</span>
        <span className="chip"><b>Nghị định</b> 217/2026/NĐ-CP</span>
        <span className="chip"><b>Nghị định</b> 207/2026/NĐ-CP</span>
        <span className="chip"><b>Quyết định</b> 29/2025/QĐ-UBND</span>
        <span className="chip"><b>Công văn</b> 24472/SXD-QLXDCT</span>
      </div>

      <div className="tabs-wrap">
        <div className="search-bar" style={{ marginBottom: '16px', position: 'relative' }}>
          <svg style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', stroke: 'var(--color-text-secondary)', fill: 'none' }}>
             <use href="#i-search" />
          </svg>
          <input
            type="text"
            placeholder="Tìm kiếm thủ tục, bước thực hiện, hồ sơ (VD: PCCC, Môi trường)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', padding: '12px 12px 12px 42px', borderRadius: 'var(--radius-button)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', fontSize: '15px', fontFamily: 'var(--font-sans)', boxShadow: 'var(--shadow-soft)' }}
          />
        </div>
        <nav className="tabs" id="tabs">
          {TABS.map((t) => {
            const isActive = currentTab === t.id;
            return (
              <button
                key={t.id}
                className={`tab-card${isActive ? ' active' : ''}`}
                style={getTabStyle(t.color, isActive) as React.CSSProperties}
                onClick={() => handleTabClick(t.id)}
              >
                <span
                  className="tab-card-top"
                  style={{
                    color: isActive ? 'rgba(255, 255, 255, 0.85)' : t.color,
                  }}
                >
                  <span
                    className="tab-dot"
                    style={{
                      backgroundColor: isActive ? '#fff' : t.color,
                    }}
                  ></span>
                  {t.code} · {t.dieu}
                </span>
                <span
                  className="tab-card-title"
                  style={{
                    color: isActive ? '#fff' : 'var(--ink)',
                  }}
                >
                  {t.title}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <main className="content" id="content">
        {renderActivePanel()}

        <div className="footnote">
          Tài liệu được biên soạn dựa trên nội dung Công văn số 24472/SXD-QLXDCT ngày 08/7/2026 của Sở Xây dựng TP.HCM.
          Nội dung mang tính tổng hợp, hệ thống hóa để tra cứu thao tác nhanh — không thay thế các quy định tại Luật Xây dựng
          số 135/2025/QH15, Nghị định số 217/2026/NĐ-CP, Nghị định số 207/2026/NĐ-CP và Quyết định số 29/2025/QĐ-UBND trong quá
          trình áp dụng, triển khai thực hiện. Trường hợp phát sinh vướng mắc vượt thẩm quyền, cần báo cáo Sở Xây dựng TP.HCM
          để được hướng dẫn.
        </div>
      </main>
    </>
  );
}
