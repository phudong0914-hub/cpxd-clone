import React from 'react';
import { Swimlane } from './Swimlane';
import { SWIM_DATA } from '../data/cpxdData';
import { InteractiveChecklist } from './InteractiveChecklist';
import type { ChecklistItem } from './InteractiveChecklist';
import { FormLink } from './FormLink';

const hsCaNhan: ChecklistItem[] = [
  { id: 'cm-cn-1', label: <>Đơn đề nghị cấp GPXD (<FormLink formName="Mẫu số 01" />, Phụ lục II)</> },
  { id: 'cm-cn-2', label: <>Một trong các loại giấy tờ hợp pháp về đất đai <span className="cite">(Điều 55)</span></> },
  { id: 'cm-cn-3', label: 'Văn bản ý kiến cơ quan văn hóa cấp tỉnh (nếu thuộc khu vực có yêu cầu về di sản văn hóa)' },
  { id: 'cm-cn-4', label: 'Bộ bản vẽ thiết kế xây dựng: mặt bằng công trình trên lô đất + sơ đồ vị trí; mặt bằng các tầng, mặt đứng, mặt cắt chính; mặt bằng móng, mặt cắt móng + sơ đồ đấu nối hạ tầng kỹ thuật (cấp nước, thoát nước, cấp điện)' },
  { id: 'cm-cn-5', label: 'Bản cam kết bảo đảm an toàn đối với công trình liền kề' },
  { id: 'cm-cn-6', label: 'Kết quả thực hiện thủ tục PCCC & cứu nạn cứu hộ (nếu có yêu cầu); Báo cáo thẩm tra thiết kế (nếu pháp luật yêu cầu)' },
];

const hsToChuc: ChecklistItem[] = [
  { id: 'cm-tc-1', label: <>Đơn đề nghị cấp GPXD (<FormLink formName="Mẫu số 01" />, Phụ lục II)</> },
  { id: 'cm-tc-2', label: <>Giấy tờ hợp pháp về đất đai <span className="cite">(Điều 55)</span> + văn bản ý kiến văn hóa (nếu có yêu cầu)</> },
  { id: 'cm-tc-3', label: 'Bộ bản vẽ thiết kế xây dựng triển khai sau phê duyệt dự án, hoặc thiết kế bản vẽ thi công (nếu chỉ yêu cầu Báo cáo KT-KT), theo cùng cấu trúc bản vẽ như nhóm hộ gia đình/cá nhân' },
  { id: 'cm-tc-4', label: 'Kết quả thủ tục PCCC & cứu nạn cứu hộ (nếu có yêu cầu); Báo cáo thẩm tra thiết kế (nếu pháp luật yêu cầu)' },
  { id: 'cm-tc-5', label: 'Bản cam kết bảo đảm an toàn công trình liền kề' },
];

export const PanelCapMoi: React.FC<{ searchQuery?: string }> = ({ searchQuery = '' }) => {
  return (
    <>
      <div className="section-title"><h3>Điều kiện chung để cấp GPXD mới</h3><span className="tag">Điều 44 Luật XD 2025 · Điều 50 NĐ 217/2026</span></div>

  <div className="grid2">
    <div className="card">
      <h4><svg className="icon"><use href="#i-doc"/></svg> Điều kiện về đất đai &amp; quy hoạch</h4>
      <ul>
        <li>Phù hợp mục đích sử dụng đất, xác định theo giấy tờ hợp pháp về đất đai <span className="cite">điểm a khoản 1 Điều 44 Luật XD 2025; khoản 1 Điều 50, Điều 55 NĐ 217/2026</span></li>
        <li>Phù hợp với <b>một trong bốn</b> loại quy hoạch tương ứng sau <span className="cite">điểm b khoản 1 Điều 44; điểm b khoản 2 Điều 50; điểm g,h,i khoản 1 Điều 26 NĐ 217/2026</span>:</li>
      </ul>
      <ul className="checklist" style={{ marginTop: "2px" }}>
        <li><svg><use href="#i-check"/></svg> <b>(1)</b> Quy hoạch đô thị và nông thôn, hoặc thiết kế đô thị riêng, hoặc quy chế quản lý kiến trúc, hoặc quy hoạch chi tiết ngành khác — trừ trường hợp cấp GPXD có thời hạn</li>
        <li><svg><use href="#i-check"/></svg> <b>(2)</b> Thiết kế đô thị riêng / quy chế quản lý kiến trúc — đối với dự án tại khu vực đã ổn định chức năng sử dụng đất, không yêu cầu lập quy hoạch chi tiết</li>
        <li><svg><use href="#i-check"/></svg> <b>(3)</b> Phương án tuyến công trình, vị trí công trình, mặt bằng tổng thể dự án đã được cơ quan có thẩm quyền chấp thuận <span className="cite">(khoản 4 Điều 73 NĐ 217/2026)</span> — đối với khu vực không phải lập quy hoạch phân khu/chi tiết</li>
        <li><svg><use href="#i-check"/></svg> <b>(4)</b> Quy hoạch chi tiết hoặc quy hoạch tổng mặt bằng — áp dụng cho các dự án còn lại</li>
      </ul>
    </div>
    <div className="card">
      <h4><svg className="icon"><use href="#i-check"/></svg> Điều kiện an toàn &amp; kỹ thuật</h4>
      <ul>
        <li>Bảo đảm an toàn kết cấu chịu lực cho công trình và công trình lân cận; đáp ứng yêu cầu bảo vệ môi trường, PCCC; bảo đảm khả năng kết nối hạ tầng kỹ thuật, hành lang bảo vệ công trình hạ tầng, đê điều, di tích... <span className="cite">điểm c khoản 1 Điều 44; khoản 3 Điều 50</span></li>
        <li>Thiết kế xây dựng đã được lập, thẩm định, phê duyệt theo Luật XD 2025 và NĐ 217/2026; riêng nhà ở riêng lẻ áp dụng <span className="cite">khoản 2 Điều 10 NĐ 207/2026</span></li>
      </ul>
    </div>
  </div>

  <div className="section-title"><h3>Phân cấp yêu cầu thiết kế theo quy mô nhà ở riêng lẻ</h3><span className="tag">khoản 2 Điều 10 · NĐ 207/2026</span></div>
  <table className="steps">
    <tbody>
      <tr><th style={{ width: "8%" }}>Nhóm</th><th style={{ width: "32%" }}>Quy mô công trình</th><th>Yêu cầu về chủ thể thiết kế</th></tr>
      <tr><td className="step-no">A</td><td>Dưới 3 tầng, không tầng hầm, sàn XD &lt;250 m², cao &lt;12 m</td><td>Chủ sở hữu nhà ở được <b>tự tổ chức thực hiện</b> thiết kế xây dựng công trình</td></tr>
      <tr><td className="step-no">B</td><td>Dưới 7 tầng, hoặc có 01 tầng hầm (trừ nhóm A)</td><td>Thiết kế phải do <b>tổ chức/cá nhân có chuyên môn, kinh nghiệm</b> theo quy định pháp luật thực hiện</td></tr>
      <tr><td className="step-no">C</td><td>Từ 7 tầng trở lên, hoặc từ 02 tầng hầm trở lên</td><td>Thiết kế phải do tổ chức/cá nhân có chuyên môn thực hiện; <b>hồ sơ thiết kế phải tuân thủ tiêu chuẩn, quy chuẩn kỹ thuật PCCC</b></td></tr>
    </tbody>
  </table>

  <div className="section-title"><h3>Quy chuẩn, tiêu chuẩn an toàn cháy áp dụng</h3><span className="tag">Điều 20 Luật XD 2025 · TCVN 13967:2024</span></div>
  <p className="lede">Thiết kế xây dựng nhà ở riêng lẻ phải tuân thủ quy chuẩn xây dựng, tiêu chuẩn áp dụng; đáp ứng công năng sử dụng, công nghệ (nếu có), an toàn xây dựng, PCCC, bảo vệ môi trường, ứng phó biến đổi khí hậu <span className="cite">(Điều 20 Luật XD 2025)</span>. Nội dung yêu cầu kỹ thuật chung tham khảo <b>TCVN 13967:2024</b>.</p>
  <table className="steps">
    <tbody>
      <tr><th style={{ width: "34%" }}>Ngưỡng quy mô công trình</th><th>Quy chuẩn / tiêu chuẩn an toàn cháy áp dụng</th></tr>
      <tr>
        <td>Đồng thời thỏa 3 điều kiện: cao <b>dưới 7 tầng</b> (hoặc chiều cao PCCC dưới 25 m) · khối tích <b>dưới 5.000 m³</b> · có <b>01 tầng hầm</b> (hoặc 1 tầng nửa hầm/bán hầm, không tính là tầng hầm)</td>
        <td>Áp dụng yêu cầu an toàn cháy đơn giản theo <b>Điều 9 TCVN 13967:2024</b></td>
      </tr>
      <tr>
        <td>Thuộc một trong các trường hợp: cao <b>từ 7 tầng trở lên</b> (hoặc chiều cao PCCC từ 25 m trở lên) · hoặc khối tích <b>từ 5.000 m³ trở lên</b> · hoặc có <b>trên 1 đến 3 tầng hầm</b></td>
        <td>Phải áp dụng đầy đủ <b>QCVN 06:2022/BXD</b> và <b>Sửa đổi 1:2023 QCVN 06:2022/BXD</b></td>
      </tr>
    </tbody>
  </table>

  <div className="section-title"><h3>Hồ sơ đề nghị cấp GPXD mới</h3><span className="tag">Điều 60 · NĐ 217/2026</span></div>
  <div className="grid2">
    <div className="card">
      <h4><svg className="icon"><use href="#i-house"/></svg> Nhà ở riêng lẻ của hộ gia đình, cá nhân</h4>
      <InteractiveChecklist idPrefix="capmoi_canhan" items={hsCaNhan} searchQuery={searchQuery} />
    </div>
    <div className="card">
      <h4><svg className="icon"><use href="#i-doc"/></svg> Nhà ở riêng lẻ của tổ chức</h4>
      <InteractiveChecklist idPrefix="capmoi_tochuc" items={hsToChuc} searchQuery={searchQuery} />
    </div>
  </div>

  <div className="section-title"><h3>Sơ đồ chi tiết quy trình xử lý hồ sơ</h3><span className="tag">khoản 1, 2 Điều 54 · NĐ 217/2026</span></div>
  <Swimlane containerId="swim-capmoi" data={SWIM_DATA['swim-capmoi']} searchQuery={searchQuery} />

  <div className="callout warn">
    <svg><use href="#i-warn"/></svg>
    <div><b>Red flag thường gặp</b>Bản cam kết an toàn công trình liền kề và hồ sơ thẩm tra kết cấu (khi thuộc nhóm B/C) là hai điểm hồ sơ bị trả bổ sung nhiều nhất trên thực tế — nên chuẩn bị trước khi nộp để không mất lượt "thông báo một lần".</div>
  </div>

  <details className="ref">
    <summary><span className="ref-badge">NGUYÊN VĂN</span>Thiết kế nhà ở riêng lẻ (khoản 2 Điều 10 NĐ 207) · Quy trình cấp phép (khoản 2 Điều 54 NĐ 217)<svg className="ref-chevron" viewBox="0 0 24 24"><use href="#i-chevron"/></svg></summary>
    <div className="ref-body">
      <span className="ref-art">Khoản 2 Điều 10 NĐ 207/2026/NĐ-CP — Thiết kế xây dựng công trình nhà ở riêng lẻ</span>
      <p className="ref-quote">a) Đối với công trình nhà ở riêng lẻ có đồng thời các tiêu chí như sau: dưới 3 tầng, không có tầng hầm, có tổng diện tích sàn xây dựng nhỏ hơn 250 m², chiều cao dưới 12 m thì chủ sở hữu nhà ở được tự tổ chức thực hiện thiết kế xây dựng công trình;<br />
      b) Đối với công trình nhà ở riêng lẻ dưới 7 tầng hoặc có 01 tầng hầm, trừ trường hợp quy định tại điểm a khoản này, việc thiết kế phải được tổ chức, cá nhân có chuyên môn, kinh nghiệm theo quy định của pháp luật thực hiện;<br />
      c) Đối với công trình nhà ở riêng lẻ từ 7 tầng trở lên hoặc có từ 02 tầng hầm trở lên, việc thiết kế phải được tổ chức, cá nhân có chuyên môn, kinh nghiệm theo quy định của pháp luật thực hiện; hồ sơ thiết kế phải tuân thủ các quy định của tiêu chuẩn, quy chuẩn kỹ thuật về phòng cháy, chữa cháy.</p>
      <span className="ref-art">Khoản 2 Điều 54 NĐ 217/2026/NĐ-CP — Quy trình cấp / điều chỉnh giấy phép xây dựng</span>
      <p className="ref-quote">a) Trong thời hạn 03 ngày làm việc đối với công trình nhà ở riêng lẻ hoặc 05 ngày làm việc đối với các công trình còn lại kể từ ngày nhận đủ hồ sơ hợp lệ, cơ quan có thẩm quyền cấp giấy phép xây dựng phải tổ chức thẩm định hồ sơ, kiểm tra thực địa (nếu cần thiết). Đồng thời, đối chiếu các điều kiện theo quy định của Nghị định này để gửi văn bản lấy ý kiến của cơ quan quản lý nhà nước về những lĩnh vực liên quan đến công trình xây dựng nếu trong hồ sơ có thông tin không đầy đủ hoặc không thống nhất;</p>
      <p className="ref-quote">b) Khi thẩm định hồ sơ, cơ quan có thẩm quyền phải xác định tài liệu còn thiếu, tài liệu không đúng theo quy định hoặc không đúng với thực tế để thông báo một lần bằng thư điện tử hoặc tin nhắn cho tổ chức, cá nhân đề nghị cấp giấy phép xây dựng hoặc điều chỉnh giấy phép xây dựng bổ sung, hoàn chỉnh hồ sơ (nếu có). Trong thời gian 02 ngày làm việc kể từ ngày nhận được thông báo, tổ chức, cá nhân đề nghị cấp giấy phép hoặc điều chỉnh giấy phép xây dựng có trách nhiệm bổ sung, hoàn thiện hồ sơ theo nội dung thông báo. Trường hợp việc bổ sung hồ sơ không đáp ứng được các nội dung theo thông báo thì trong thời hạn 01 ngày làm việc, cơ quan có thẩm quyền có trách nhiệm thông báo đến chủ đầu tư về lý do không cấp giấy phép. Tổ chức, cá nhân đề nghị cấp giấy phép thực hiện lại quy trình đề nghị cấp giấy phép xây dựng hoặc điều chỉnh giấy phép xây dựng;</p>
      <p className="ref-quote">c) Các cơ quan quản lý nhà nước được hỏi ý kiến có trách nhiệm trả lời về những nội dung thuộc chức năng quản lý của mình trong thời gian 02 ngày làm việc kể từ ngày nhận được hồ sơ, trừ trường hợp pháp luật có quy định khác. Sau thời hạn trên, nếu các cơ quan này không có ý kiến thì được coi là đã đồng ý và phải chịu trách nhiệm về những nội dung thuộc chức năng quản lý của mình; cơ quan cấp giấy phép xây dựng căn cứ các quy định hiện hành để quyết định việc cấp giấy phép xây dựng hoặc điều chỉnh giấy phép xây dựng.</p>
    </div>
  </details>
    </>
  );
};
