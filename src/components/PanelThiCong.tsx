import React from 'react';
import { Swimlane } from './Swimlane';
import { SWIM_DATA } from '../data/cpxdData';

export const PanelThiCong: React.FC = () => {
  return (
    <>
      <div className="section-title"><h3>Quản lý thi công xây dựng nhà ở riêng lẻ</h3><span className="tag">Điều 10 · NĐ 207/2026/NĐ-CP</span></div>

  <div className="grid2">
    <div className="card">
      <h4><svg className="icon"><use href="#i-scale"/></svg> Nguyên tắc quản lý &amp; nghiệm thu</h4>
      <p style={{ fontSize: "13.4px", margin: "0" }}>Việc quản lý xây dựng công trình nhà ở riêng lẻ thực hiện theo <span className="cite">Điều 10 NĐ 207/2026</span>; đồng thời <b>khuyến khích</b> chủ sở hữu áp dụng các quy định của Nghị định để tổ chức giám sát, thi công, nghiệm thu công trình <span className="cite">khoản 5 Điều 4 NĐ 207/2026</span>.</p>
    </div>
    <div className="card">
      <h4><svg className="icon"><use href="#i-house"/></svg> Trách nhiệm của chủ sở hữu</h4>
      <p style={{ fontSize: "13.4px", margin: "0" }}>Chủ sở hữu nhà ở <b>tự tổ chức</b> thi công xây dựng, giám sát thi công xây dựng và chịu trách nhiệm về an toàn cho công trình, công trình lân cận và môi trường trong quá trình thi công <span className="cite">điểm b khoản 3 Điều 10</span>.</p>
    </div>
  </div>

  <div className="section-title"><h3>Ngưỡng bắt buộc tổ chức giám sát thi công</h3><span className="tag">điểm c khoản 3 Điều 10 · NĐ 207/2026</span></div>
  <table className="steps">
    <thead>
      <tr><th style={{ width: "18%" }}>Quy mô công trình</th><th style={{ width: "32%" }}>Yêu cầu giám sát thi công</th><th>Lưu trữ hồ sơ công trình</th></tr>
    </thead>
    <tbody>
      <tr><td>Dưới 7 tầng và dưới 2 tầng hầm</td><td>Khuyến khích chủ sở hữu tổ chức giám sát thi công</td><td>Khuyến khích lập, lưu trữ hồ sơ công trình</td></tr>
      <tr><td className="step-no">≥7 tầng hoặc ≥2 tầng hầm</td><td><b>Bắt buộc</b> chủ sở hữu tổ chức giám sát thi công xây dựng</td><td>Theo quy định của Nghị định (không thuộc trường hợp chỉ khuyến khích)</td></tr>
    </tbody>
  </table>

  <div className="section-title"><h3>Đối tượng bắt buộc cơ quan Nhà nước kiểm tra công tác nghiệm thu</h3><span className="tag">khoản 1 Điều 25 · NĐ 207/2026</span></div>
  <ul className="checklist" style={{ maxWidth: "820px" }}>
    <li><svg><use href="#i-check"/></svg> Công trình thuộc dự án quan trọng quốc gia, công trình quy mô lớn, kỹ thuật phức tạp <span className="cite">(Phụ lục IX NĐ 207/2026)</span></li>
    <li><svg><use href="#i-check"/></svg> Công trình có ảnh hưởng lớn đến an toàn, lợi ích cộng đồng theo quy định của Chính phủ về quản lý hoạt động xây dựng</li>
  </ul>
  <div className="callout info">
    <svg><use href="#i-warn"/></svg>
    <div><b>Trường hợp dự án nhiều công trình</b>Nếu dự án đầu tư xây dựng có nhiều công trình, tổ hợp công trình hoặc một dây chuyền công nghệ, cơ quan nhà nước <b>chỉ kiểm tra</b> đối với các hạng mục/công trình thuộc hai trường hợp nêu trên — không kiểm tra toàn bộ dự án một cách mặc định.</div>
  </div>

  <div className="section-title"><h3>Sơ đồ trách nhiệm thi công — giám sát — nghiệm thu</h3><span className="tag">Điều 10 · NĐ 207/2026</span></div>
  <Swimlane containerId="swim-thicong" data={SWIM_DATA['swim-thicong']} />

  <details className="ref">
    <summary><span className="ref-badge">NGUYÊN VĂN</span>Quản lý thi công nhà ở riêng lẻ · Kiểm tra nghiệm thu — Mục 6 CV 24472<svg className="ref-chevron" viewBox="0 0 24 24"><use href="#i-chevron"/></svg></summary>
    <div className="ref-body">
      <span className="ref-art">Mục 6.2 CV 24472 — điểm b khoản 3 Điều 10 NĐ 207/2026/NĐ-CP</span>
      <p className="ref-quote">Chủ sở hữu nhà ở tổ chức thi công xây dựng, giám sát thi công xây dựng và chịu trách nhiệm về an toàn trong thi công xây dựng công trình, công trình lân cận và môi trường trong quá trình thi công xây dựng. Khuyến khích chủ sở hữu nhà ở tổ chức giám sát thi công xây dựng, lập và lưu trữ hồ sơ công trình nhà ở riêng lẻ theo quy định của Nghị định này, trừ trường hợp quy định tại điểm c khoản này.</p>
      <span className="ref-art">Điểm c khoản 3 Điều 10 NĐ 207/2026/NĐ-CP</span>
      <p className="ref-quote">Chủ sở hữu nhà ở phải tổ chức thi công, giám sát thi công xây dựng công trình theo quy định của Nghị định này đối với công trình nhà ở riêng lẻ từ 7 tầng trở lên hoặc có từ 02 tầng hầm trở lên (quy định tại điểm c khoản 2 Điều 10).</p>
      <span className="ref-art">Mục 6.3 CV 24472 — khoản 1 Điều 25 NĐ 207/2026/NĐ-CP</span>
      <p className="ref-quote">Việc cơ quan nhà nước có thẩm quyền kiểm tra công tác nghiệm thu trong quá trình thi công và khi hoàn thành thi công xây dựng chỉ áp dụng đối với các công trình: Công trình thuộc dự án quan trọng quốc gia, công trình có quy mô lớn, kỹ thuật phức tạp theo quy định tại Phụ lục IX Nghị định này; Công trình có ảnh hưởng lớn đến an toàn, lợi ích cộng đồng theo quy định của Chính phủ về quản lý hoạt động xây dựng. Trường hợp dự án đầu tư xây dựng có nhiều công trình, tổ hợp công trình hoặc một dây chuyền công nghệ, cơ quan nhà nước chỉ thực hiện kiểm tra đối với các hạng mục công trình, công trình xây dựng thuộc hai trường hợp trên.</p>
    </div>
  </details>
    </>
  );
};
