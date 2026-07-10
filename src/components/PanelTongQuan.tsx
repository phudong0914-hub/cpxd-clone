import React from 'react';
import { FormLink } from './FormLink';

export const PanelTongQuan: React.FC = () => {
  return (
    <>
      <div className="section-title"><h3>1. Thẩm quyền cấp Giấy phép xây dựng</h3><span className="tag">Điều 2 QĐ 29/2025/QĐ-UBND · khoản 1 Điều 53 NĐ 217/2026</span></div>
  <p className="lede">UBND cấp xã, phường và đặc khu Côn Đảo là đầu mối cấp GPXD cho phần lớn nhà ở riêng lẻ trên địa bàn — đây là điểm thay đổi thẩm quyền then chốt kể từ 01/01/2026 (trước đây thuộc UBND quận/huyện). <b>Quyết định 29/2025/QĐ-UBND</b> của UBND TP.HCM cụ thể hóa việc phân cấp này với 3 cấp thẩm quyền và các nguyên tắc xử lý trường hợp đặc biệt.</p>

  <div className="grid2">
    <div className="card">
      <h4><svg className="icon"><use href="#i-scale"/></svg> UBND cấp xã / phường / đặc khu Côn Đảo</h4>
      <ul>
        <li>Nhà ở riêng lẻ của hộ gia đình, cá nhân — <b>trừ nhà ở riêng lẻ từ cấp II trở lên</b> <span className="cite">(điểm a khoản 1 Điều 2 QĐ 29/2025)</span></li>
        <li>Công trình thuộc dự án chỉ có công trình cấp III, cấp IV nằm trên địa bàn <b>2 đơn vị hành chính cấp xã trở lên</b> — nguyên tắc: xã có tỷ lệ diện tích khu đất lớn hơn thực hiện cấp phép</li>
        <li>Trừ các công trình thuộc thẩm quyền Ban quản lý KCN/KCX/KCNC/Khu NN công nghệ cao và Sở Xây dựng</li>
      </ul>
    </div>
    <div className="card">
      <h4><svg className="icon"><use href="#i-house"/></svg> Ban quản lý KCX&amp;CN / KCNC / Khu NN công nghệ cao</h4>
      <ul>
        <li>Cấp GPXD cho công trình xây dựng thuộc chức năng và trong phạm vi địa giới được giao quản lý <span className="cite">(điểm b khoản 1 Điều 2 QĐ 29/2025)</span></li>
      </ul>
    </div>
    <div className="card">
      <h4><svg className="icon"><use href="#i-doc"/></svg> Sở Xây dựng</h4>
      <ul>
        <li>Cấp GPXD cho <b>tất cả công trình còn lại</b> — không thuộc thẩm quyền 2 nhóm trên <span className="cite">(điểm c khoản 1 Điều 2 QĐ 29/2025)</span></li>
      </ul>
    </div>
    <div className="card">
      <h4><svg className="icon"><use href="#i-book"/></svg> Nguyên tắc xử lý đặc biệt</h4>
      <ul>
        <li>Dự án có nhiều công trình, loại/cấp khác nhau → thẩm quyền theo <b>công trình có cấp cao nhất</b> của dự án <span className="cite">(khoản 2 Điều 2)</span></li>
        <li>Điều chỉnh thiết kế/sửa chữa, cải tạo làm <b>thay đổi cấp công trình</b> → thẩm quyền xác định theo cấp công trình <b>sau điều chỉnh</b> <span className="cite">(khoản 5 Điều 2)</span></li>
        <li>Cơ quan cấp GPXD có thẩm quyền điều chỉnh, gia hạn, cấp lại, thu hồi GPXD <b>do chính mình cấp</b>; nếu không thu hồi đúng quy định, UBND Thành phố trực tiếp quyết định thu hồi <span className="cite">(khoản 3, 4 Điều 2)</span></li>
      </ul>
    </div>
  </div>

  <details className="ref">
    <summary><span className="ref-badge">NGUYÊN VĂN</span>Phân cấp thẩm quyền cấp GPXD — Điều 2 QĐ 29/2025/QĐ-UBND<svg className="ref-chevron" viewBox="0 0 24 24"><use href="#i-chevron"/></svg></summary>
    <div className="ref-body">
      <span className="ref-art">Điều 2 Quyết định 29/2025/QĐ-UBND (UBND TP.HCM, hiệu lực 01/01/2026)</span>
      <p className="ref-quote">1. UBND Thành phố Hồ Chí Minh phân cấp cho: a) UBND xã, phường và đặc khu cấp giấy phép xây dựng đối với công trình nhà ở riêng lẻ (trừ công trình nhà ở riêng lẻ từ cấp II trở lên) và công trình thuộc dự án đầu tư xây dựng chỉ có công trình cấp III, cấp IV nằm trên địa bàn hai đơn vị hành chính cấp xã trở lên (trừ các công trình được UBND Thành phố phân cấp tại điểm b khoản này) với nguyên tắc đơn vị hành chính cấp xã chiếm tỷ lệ diện tích khu đất xây dựng công trình lớn hơn sẽ thực hiện việc cấp giấy phép xây dựng; b) Ban Quản lý các Khu Chế xuất và Công nghiệp, Ban Quản lý Khu Công nghệ cao, Ban Quản lý Khu Nông nghiệp công nghệ cao cấp giấy phép xây dựng đối với các công trình xây dựng thuộc chức năng và trong phạm vi địa giới được giao quản lý; c) Sở Xây dựng cấp giấy phép xây dựng đối với tất cả công trình còn lại. 2. Đối với dự án có nhiều công trình với loại và cấp công trình khác nhau thì thẩm quyền cấp giấy phép xây dựng được xác định theo công trình có cấp cao nhất của dự án. 3. Cơ quan có thẩm quyền cấp giấy phép xây dựng được sử dụng con dấu của cơ quan, đơn vị mình và có thẩm quyền điều chỉnh, gia hạn, cấp lại, thu hồi giấy phép xây dựng do mình cấp. 4. Trường hợp cơ quan có thẩm quyền cấp giấy phép xây dựng không thu hồi giấy phép xây dựng đã cấp không đúng quy định thì Ủy ban nhân dân Thành phố trực tiếp quyết định thu hồi giấy phép xây dựng. 5. Trường hợp khi điều chỉnh thiết kế xây dựng hoặc sửa chữa, cải tạo công trình làm thay đổi cấp của công trình thì thẩm quyền cấp giấy phép xây dựng được xác định theo cấp của công trình sau điều chỉnh thiết kế hoặc công trình sửa chữa, cải tạo.</p>
    </div>
  </details>

  <div className="section-title"><h3>2. Nhà ở riêng lẻ được miễn giấy phép xây dựng mới</h3><span className="tag">điểm g khoản 2 Điều 43 · Luật XD 135/2025/QH15</span></div>
  <p className="lede">Trước khi lập hồ sơ xin phép, cần kiểm tra công trình có thuộc diện <b>miễn giấy phép</b> hay không. Công trình nhà ở riêng lẻ được miễn GPXD khi đáp ứng <b style={{ color: "var(--seal)" }}>đồng thời cả 2 điều kiện</b> về quy mô và vị trí:</p>

  <figure style={{ margin: "14px auto 6px", maxWidth: "820px", border: "1px solid var(--line)", borderRadius: "12px", overflow: "hidden", background: "#fff", boxShadow: "0 2px 10px rgba(20,20,10,.07)" }}>
    <img src="/mien-gpxd-infographic.jpg" alt="Infographic: Nhà ở riêng lẻ được miễn giấy phép xây dựng mới — điều kiện quy mô dưới 07 tầng và dưới 500m², không thuộc các khu vực quy hoạch" style={{ display: "block", width: "100%", height: "auto" }} />
    <figcaption style={{ padding: "9px 16px", fontSize: "11.5px", color: "var(--muted)", fontStyle: "italic", borderTop: "1px solid var(--line)" }}>Điều kiện miễn giấy phép xây dựng mới đối với nhà ở riêng lẻ — điểm g khoản 2 Điều 43 Luật Xây dựng số 135/2025/QH15</figcaption>
  </figure>

  <div className="callout warn">
    <svg><use href="#i-warn"/></svg>
    <div><b>Lưu ý quan trọng</b>Nếu nhà ở riêng lẻ dưới 7 tầng và dưới 500 m² nhưng lại nằm trong các khu vực quy hoạch hoặc có quy chế quản lý kiến trúc kể trên thì <strong>vẫn bắt buộc phải xin giấy phép xây dựng</strong>. Khi khởi công, công trình miễn phép vẫn phải được xây dựng trên đất ở hợp pháp và chịu sự kiểm tra của UBND cấp xã về điều kiện miễn phép, sự phù hợp quy hoạch <span className="cite">(khoản 3 Điều 48, Điều 43 Luật XD 2025; điểm c khoản 2 Điều 67 NĐ 217/2026)</span>.</div>
  </div>

  <details className="ref">
    <summary><span className="ref-badge">NGUYÊN VĂN</span>Điều kiện miễn giấy phép xây dựng mới — điểm g khoản 2 Điều 43 Luật XD 2025<svg className="ref-chevron" viewBox="0 0 24 24"><use href="#i-chevron"/></svg></summary>
    <div className="ref-body">
      <span className="ref-art">Điểm g khoản 2 Điều 43 Luật Xây dựng số 135/2025/QH15</span>
      <p className="ref-quote">Công trình nhà ở riêng lẻ được miễn giấy phép xây dựng khi đáp ứng đồng thời cả 2 điều kiện về quy mô và vị trí: có quy mô dưới 07 tầng và có tổng diện tích sàn xây dựng dưới 500 m²; và không thuộc: khu chức năng, khu vực phát triển đô thị được xác định trong quy hoạch chung thành phố; khu chức năng, khu dân cư nông thôn, khu vực phát triển đô thị được xác định trong quy hoạch chung đô thị thuộc tỉnh, thuộc thành phố, quy hoạch chung khu kinh tế, khu du lịch quốc gia; khu vực xây dựng được xác định trong quy hoạch chung xã; khu vực đã có quy chế quản lý kiến trúc.</p>
      <span className="ref-art">Liên hệ điều kiện khởi công — mục 5.2 CV 24472 (khoản 3 Điều 48, Điều 43 Luật XD 2025)</span>
      <p className="ref-quote">Công trình nhà ở riêng lẻ của hộ gia đình, cá nhân khi khởi công chỉ cần đáp ứng điều kiện có giấy phép xây dựng đối với công trình thuộc diện phải cấp phép hoặc đáp ứng điều kiện được miễn giấy phép xây dựng theo quy định và được xây dựng trên đất ở hợp pháp theo quy định của pháp luật về đất đai.</p>
    </div>
  </details>

  <div className="section-title"><h3>3. Sơ đồ logic các nhóm thủ tục</h3><span className="tag">Điều 50–65 · NĐ 217/2026</span></div>
  <p className="lede">Vòng đời GPXD vận hành theo <b>dòng chính</b> gồm 5 bước (trái). Sau khi được cấp phép, 4 <b>tình huống phát sinh</b> (phải) có thể xảy ra bất kỳ lúc nào — xử lý xong quay lại dòng chính. Mã QT.I–QT.VII tương ứng các tab chi tiết.</p>

  <div className="overview-svg-wrap">
  <svg viewBox="0 0 1140 620" width="1140" style={{ minWidth: "900px" }} fontFamily="IBM Plex Sans, sans-serif">
    <defs>
      <marker id="ov-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#5C6B7E"/></marker>
      <marker id="ov-arrow-teal" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#2F6E63"/></marker>
    </defs>

    {/* ===== Tiêu đề 2 vùng ===== */}
    <text x="200" y="26" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="12" fontWeight="700" letterSpacing="1.5" fill="#1C2A3D">DÒNG CHÍNH</text>
    <line x1="60" y1="34" x2="340" y2="34" stroke="#1C2A3D" strokeWidth="1.5"/>
    <text x="790" y="26" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="12" fontWeight="700" letterSpacing="1.5" fill="#7C2E3E">TÌNH HUỐNG PHÁT SINH SAU CẤP PHÉP</text>
    <line x1="480" y1="34" x2="1100" y2="34" stroke="#7C2E3E" strokeWidth="1.5"/>

    {/* ===== DÒNG CHÍNH (trục dọc trái) ===== */}
    {/* B1 */}
    <rect x="60" y="52" width="280" height="82" rx="9" fill="#FBF8F1" stroke="#A9812E" strokeWidth="1.6"/>
    <rect x="60" y="52" width="5" height="82" rx="2.5" fill="#A9812E"/>
    <text x="80" y="74" fontSize="13.5" fontWeight="700" fill="#1C2A3D">① Chuẩn bị hồ sơ &amp; thiết kế</text>
    <text x="80" y="93" fontSize="11.5" fill="#3D4E63">Xây mới → tab QT.I · Sửa chữa / cải tạo /</text>
    <text x="80" y="108" fontSize="11.5" fill="#3D4E63">di dời → tab QT.II</text>
    <text x="80" y="126" fontFamily="IBM Plex Mono" fontSize="9.5" fontWeight="600" fill="#A9812E">ĐIỀU 55, 57, 60, 61</text>

    <line x1="200" y1="134" x2="200" y2="162" stroke="#5C6B7E" strokeWidth="1.8" markerEnd="url(#ov-arrow)"/>

    {/* B2 */}
    <rect x="60" y="166" width="280" height="82" rx="9" fill="#FBF8F1" stroke="#1F3A5F" strokeWidth="1.6"/>
    <rect x="60" y="166" width="5" height="82" rx="2.5" fill="#1F3A5F"/>
    <text x="80" y="188" fontSize="13.5" fontWeight="700" fill="#1C2A3D">② Nộp &amp; thẩm định — UBND cấp xã</text>
    <text x="80" y="207" fontSize="11.5" fill="#3D4E63">Cổng DVC quốc gia · Kiểm tra đất đai,</text>
    <text x="80" y="222" fontSize="11.5" fill="#3D4E63">quy hoạch, an toàn, thiết kế</text>
    <rect x="80" y="230" width="86" height="15" rx="7.5" fill="#1F3A5F"/>
    <text x="123" y="241" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fontWeight="700" fill="#fff">07 NGÀY LV</text>

    <line x1="200" y1="248" x2="200" y2="276" stroke="#5C6B7E" strokeWidth="1.8" markerEnd="url(#ov-arrow)"/>

    {/* B3 : GPXD */}
    <rect x="60" y="280" width="280" height="96" rx="9" fill="#1C2A3D"/>
    <text x="80" y="304" fontSize="14" fontWeight="700" fill="#FFFFFF">③ GIẤY PHÉP XÂY DỰNG</text>
    <text x="80" y="323" fontSize="11.5" fill="#C9D6E4">GPXD chính thức, hoặc GPXD có thời hạn</text>
    <text x="80" y="338" fontSize="11.5" fill="#C9D6E4">nếu đất thuộc quy hoạch chưa triển khai</text>
    <text x="80" y="358" fontFamily="IBM Plex Mono" fontSize="9.5" fontWeight="700" fill="#D9AE55">GPXD CÓ THỜI HẠN → TAB QT.V</text>

    <line x1="200" y1="376" x2="200" y2="404" stroke="#5C6B7E" strokeWidth="1.8" markerEnd="url(#ov-arrow)"/>

    {/* B4 */}
    <rect x="60" y="408" width="280" height="82" rx="9" fill="#FBF8F1" stroke="#3F6B45" strokeWidth="1.6"/>
    <rect x="60" y="408" width="5" height="82" rx="2.5" fill="#3F6B45"/>
    <text x="80" y="430" fontSize="13.5" fontWeight="700" fill="#1C2A3D">④ Khởi công xây dựng</text>
    <text x="80" y="449" fontSize="11.5" fill="#3D4E63">Đủ điều kiện Điều 48 · UBND xã quản lý</text>
    <text x="80" y="464" fontSize="11.5" fill="#3D4E63">trật tự XD liên tục suốt thi công</text>
    <text x="80" y="482" fontFamily="IBM Plex Mono" fontSize="9.5" fontWeight="600" fill="#3F6B45">QUẢN LÝ TTXD → TAB QT.VI</text>

    <line x1="200" y1="490" x2="200" y2="518" stroke="#5C6B7E" strokeWidth="1.8" markerEnd="url(#ov-arrow)"/>

    {/* B5 */}
    <rect x="60" y="522" width="280" height="82" rx="9" fill="#EAF3EC" stroke="#3F6B45" strokeWidth="1.6"/>
    <rect x="60" y="522" width="5" height="82" rx="2.5" fill="#3F6B45"/>
    <text x="80" y="544" fontSize="13.5" fontWeight="700" fill="#1F4A2C">⑤ Nghiệm thu — đưa vào sử dụng</text>
    <text x="80" y="563" fontSize="11.5" fill="#3D4E63">Thi công, giám sát, nghiệm thu · Cập nhật</text>
    <text x="80" y="578" fontSize="11.5" fill="#3D4E63">CSDL quốc gia về hoạt động xây dựng</text>
    <text x="80" y="596" fontFamily="IBM Plex Mono" fontSize="9.5" fontWeight="600" fill="#3F6B45">THI CÔNG &amp; NGHIỆM THU → TAB QT.VII</text>

    {/* ===== KHUNG TÌNH HUỐNG PHÁT SINH ===== */}
    <rect x="480" y="52" width="620" height="440" rx="12" fill="none" stroke="#B8A98B" strokeWidth="1.4" strokeDasharray="7 5"/>

    {/* Card A: Điều chỉnh */}
    <rect x="506" y="80" width="272" height="118" rx="9" fill="#FBF8F1" stroke="#2F6E63" strokeWidth="1.5"/>
    <rect x="506" y="80" width="5" height="118" rx="2.5" fill="#2F6E63"/>
    <rect x="524" y="94" width="66" height="16" rx="8" fill="#2F6E63"/>
    <text x="557" y="105.5" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fontWeight="700" fill="#fff">TAB QT.III</text>
    <text x="524" y="130" fontSize="13" fontWeight="700" fill="#1C2A3D">Điều chỉnh GPXD</text>
    <text x="524" y="148" fontSize="11" fill="#3D4E63">Khi thay đổi: vị trí, diện tích XD, số tầng,</text>
    <text x="524" y="162" fontSize="11" fill="#3D4E63">kết cấu chính, kiến trúc mặt ngoài,</text>
    <text x="524" y="176" fontSize="11" fill="#3D4E63">phân khu chức năng chính · 07 ngày LV</text>

    {/* Card B: Gia hạn */}
    <rect x="802" y="80" width="272" height="118" rx="9" fill="#FBF8F1" stroke="#2F6E63" strokeWidth="1.5"/>
    <rect x="802" y="80" width="5" height="118" rx="2.5" fill="#2F6E63"/>
    <rect x="820" y="94" width="66" height="16" rx="8" fill="#2F6E63"/>
    <text x="853" y="105.5" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fontWeight="700" fill="#fff">TAB QT.III</text>
    <text x="820" y="130" fontSize="13" fontWeight="700" fill="#1C2A3D">Gia hạn GPXD</text>
    <text x="820" y="148" fontSize="11" fill="#3D4E63">Khi hết hiệu lực khởi công mà chưa</text>
    <text x="820" y="162" fontSize="11" fill="#3D4E63">khởi công · Tối đa 02 lần, mỗi lần</text>
    <text x="820" y="176" fontSize="11" fill="#3D4E63">12 tháng · 05 ngày LV</text>

    {/* Card C: Cấp lại */}
    <rect x="506" y="222" width="272" height="118" rx="9" fill="#FBF8F1" stroke="#7C2E3E" strokeWidth="1.5"/>
    <rect x="506" y="222" width="5" height="118" rx="2.5" fill="#7C2E3E"/>
    <rect x="524" y="236" width="62" height="16" rx="8" fill="#7C2E3E"/>
    <text x="555" y="247.5" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fontWeight="700" fill="#fff">TAB QT.IV</text>
    <text x="524" y="272" fontSize="13" fontWeight="700" fill="#1C2A3D">Cấp lại GPXD</text>
    <text x="524" y="290" fontSize="11" fill="#3D4E63">Khi GPXD bị rách, nát hoặc mất ·</text>
    <text x="524" y="304" fontSize="11" fill="#3D4E63">Bản cấp lại là bản sao giấy phép</text>
    <text x="524" y="318" fontSize="11" fill="#3D4E63">đã được cấp · 05 ngày LV</text>

    {/* Card D: Thu hồi / Hủy */}
    <rect x="802" y="222" width="272" height="118" rx="9" fill="#FBEFE1" stroke="#7C2E3E" strokeWidth="1.5"/>
    <rect x="802" y="222" width="5" height="118" rx="2.5" fill="#7C2E3E"/>
    <rect x="820" y="236" width="62" height="16" rx="8" fill="#7C2E3E"/>
    <text x="851" y="247.5" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fontWeight="700" fill="#fff">TAB QT.IV</text>
    <text x="820" y="272" fontSize="13" fontWeight="700" fill="#7C2E3E">Thu hồi / Hủy GPXD</text>
    <text x="820" y="290" fontSize="11" fill="#3D4E63">Cấp sai quy định, hoặc không khắc phục</text>
    <text x="820" y="304" fontSize="11" fill="#3D4E63">vi phạm · Không nộp lại trong 10 ngày</text>
    <text x="820" y="318" fontSize="11" fill="#3D4E63">LV → bị hủy, phải xin cấp phép mới</text>

    {/* Ghi chú trong khung */}
    <text x="506" y="376" fontSize="11" fontStyle="italic" fill="#6B6455">Điều chỉnh · Gia hạn · Cấp lại: xử lý xong quay lại dòng chính, tiếp tục khởi công / thi công.</text>
    <text x="506" y="394" fontSize="11" fontStyle="italic" fill="#6B6455">Riêng Thu hồi / Hủy: giấy phép chấm dứt hiệu lực — phải làm lại thủ tục cấp phép từ bước ①.</text>

    {/* Chú giải màu */}
    <rect x="506" y="424" width="10" height="10" rx="2" fill="#2F6E63"/>
    <text x="522" y="433" fontSize="10.5" fill="#3D4E63">Thủ tục duy trì / cập nhật giấy phép</text>
    <rect x="736" y="424" width="10" height="10" rx="2" fill="#7C2E3E"/>
    <text x="752" y="433" fontSize="10.5" fill="#3D4E63">Thủ tục khôi phục / chấm dứt giấy phép</text>
    <rect x="506" y="448" width="10" height="10" rx="2" fill="#1C2A3D"/>
    <text x="522" y="457" fontSize="10.5" fill="#3D4E63">Mốc pháp lý trung tâm</text>
    <rect x="736" y="448" width="10" height="10" rx="2" fill="#3F6B45"/>
    <text x="752" y="457" fontSize="10.5" fill="#3D4E63">Giai đoạn thi công — hoàn thành</text>

    {/* ===== Mũi tên nối GPXD ↔ khung tình huống ===== */}
    {/* đi: từ GPXD sang khung */}
    <path d="M340,310 L410,310 L410,240 L476,240" fill="none" stroke="#2F6E63" strokeWidth="1.8" markerEnd="url(#ov-arrow-teal)"/>
    <rect x="352" y="292" width="116" height="16" rx="8" fill="#FFFDF7" stroke="#C9BFA6" strokeWidth="0.8"/>
    <text x="410" y="303.5" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fontWeight="600" fill="#2F6E63">KHI PHÁT SINH</text>
    {/* về: từ khung quay lại dòng chính (vào giữa đoạn B3→B4) */}
    <path d="M476,392 L204,392" fill="none" stroke="#5C6B7E" strokeWidth="1.6" strokeDasharray="5 4" markerEnd="url(#ov-arrow)"/>
    <rect x="236" y="383.5" width="154" height="17" rx="8.5" fill="#FFFDF7" stroke="#B8A98B" strokeWidth="1"/>
    <text x="313" y="395.5" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fontWeight="600" fill="#5C6B7E">XONG → VỀ DÒNG CHÍNH</text>
  </svg>
  </div>

  <div className="section-title"><h3>4. Kênh nộp hồ sơ &amp; thời hạn giải quyết chung</h3><span className="tag">Điều 54, 56 · NĐ 217/2026</span></div>
  <div className="grid3">
    <div className="card">
      <h4><svg className="icon"><use href="#i-doc"/></svg> Kênh nộp</h4>
      <p style={{ fontSize: "13.4px", margin: "0" }}>Nộp trực tuyến toàn trình trên <b>Cổng Dịch vụ công quốc gia</b>. Chỉ khi có sự cố khách quan, đột xuất không thể thực hiện trên môi trường điện tử mới được nộp trực tiếp tại Bộ phận Một cửa hoặc qua dịch vụ bưu chính công ích.</p>
    </div>
    <div className="card">
      <h4><svg className="icon"><use href="#i-clock"/></svg> Thời hạn giải quyết</h4>
      <p style={{ fontSize: "13.4px", margin: "0 0 6px" }}>Cấp mới / điều chỉnh / sửa chữa-cải tạo / di dời / có thời hạn: <b>07 ngày làm việc</b>.</p>
      <p style={{ fontSize: "13.4px", margin: "0" }}>Gia hạn / cấp lại: <b>05 ngày làm việc</b>.</p>
    </div>
    <div className="card">
      <h4><svg className="icon"><use href="#i-stamp"/></svg> Xác nhận bản vẽ</h4>
      <p style={{ fontSize: "13.4px", margin: "0" }}>UBND cấp xã dùng chữ ký điện tử hoặc mẫu dấu <FormLink formName="Mẫu số 06" /> <span className="cite">(Phụ lục II)</span> để đóng dấu xác nhận bản vẽ thiết kế kèm theo GPXD cấp cho chủ đầu tư.</p>
    </div>
  </div>

  <div className="callout info">
    <svg><use href="#i-warn"/></svg>
    <div><b>Lưu ý điều hành cho chủ đầu tư</b>Toàn bộ mốc thời gian trong Nghị định 217/2026/NĐ-CP tính bằng <b>ngày làm việc</b>, không phải ngày lịch — cần cộng trừ ngày nghỉ/lễ khi lập tiến độ pháp lý dự án. Mọi thông báo bổ sung hồ sơ chỉ được gửi một lần duy nhất; nếu hồ sơ bổ sung không đạt, hồ sơ bị trả và phải nộp lại từ đầu.</div>
  </div>

  <details className="ref">
    <summary><span className="ref-badge">NGUYÊN VĂN</span>Thẩm quyền cấp phép · Hình thức nộp · Thời gian giải quyết<svg className="ref-chevron" viewBox="0 0 24 24"><use href="#i-chevron"/></svg></summary>
    <div className="ref-body">
      <span className="ref-art">Mục 1 CV 24472 — khoản 1 Điều 53 NĐ 217/2026/NĐ-CP</span>
      <p className="ref-quote">Ủy ban nhân dân cấp xã cấp giấy phép xây dựng cho công trình cấp III, cấp IV, công trình nhà ở riêng lẻ của hộ gia đình, cá nhân trên địa bàn do mình quản lý (trừ các công trình do Ban quản lý khu công nghiệp, khu chế xuất, khu công nghệ cao, khu kinh tế cấp trong phạm vi được giao quản lý).</p>
      <span className="ref-art">Mục 3.1 CV 24472 — khoản 1 Điều 54, khoản 1 Điều 56 NĐ 217/2026/NĐ-CP</span>
      <p className="ref-quote">Tổ chức, cá nhân đề nghị cấp giấy phép xây dựng thực hiện nộp trực tuyến toàn trình tại Cổng Dịch vụ công quốc gia; trường hợp do sự cố khách quan, đột xuất không thể thực hiện trên môi trường điện tử, cơ quan có thẩm quyền cấp giấy phép xây dựng được thực hiện theo hình thức trực tiếp tại Bộ phận Một cửa hoặc thông qua dịch vụ bưu chính công ích.</p>
      <span className="ref-art">Mục 3.2 CV 24472 — điểm b khoản 1 Điều 54 NĐ 217/2026/NĐ-CP</span>
      <p className="ref-quote">Kể từ ngày nhận đủ hồ sơ hợp lệ dưới dạng bản điện tử có giá trị pháp lý, thời gian xem xét cấp giấy phép xây dựng mới, điều chỉnh, sửa chữa cải tạo, di dời hoặc cấp giấy phép có thời hạn đối với nhà ở riêng lẻ là trong thời hạn 07 ngày làm việc. Thời gian gia hạn hoặc cấp lại giấy phép xây dựng là trong thời hạn 05 ngày làm việc.</p>
      <span className="ref-art">Mục 4.4 CV 24472 — điểm b khoản 5 Điều 54 NĐ 217/2026/NĐ-CP</span>
      <p className="ref-quote">Khi hồ sơ đủ điều kiện, Ủy ban nhân dân cấp xã ban hành giấy phép xây dựng và sử dụng chữ ký điện tử của cơ quan mình hoặc mẫu dấu theo quy định tại Mẫu số 06 Phụ lục II ban hành kèm theo Nghị định số 217/2026/NĐ-CP để đóng dấu xác nhận bản vẽ thiết kế kèm theo giấy phép xây dựng cấp cho chủ đầu tư.</p>
    </div>
  </details>
    </>
  );
};
