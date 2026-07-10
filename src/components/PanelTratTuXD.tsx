import React from 'react';
import { Swimlane } from './Swimlane';
import { SWIM_DATA } from '../data/cpxdData';

export const PanelTratTuXD: React.FC<{ searchQuery?: string }> = ({ searchQuery = '' }) => {
  return (
    <>
      <div className="section-title"><h3>Trách nhiệm quản lý trật tự xây dựng</h3><span className="tag">Điều 47 Luật XD 2025 · Điều 67 NĐ 217/2026</span></div>
  <p className="lede">UBND xã, phường, đặc khu Côn Đảo chịu trách nhiệm <b>toàn diện</b> về quản lý trật tự xây dựng đối với công trình cấp III, cấp IV và nhà ở riêng lẻ trên địa bàn quản lý.</p>

  <div className="legalbox">
    <b>Phạm vi thời gian quản lý</b> <span className="cite">(khoản 1 Điều 47 Luật XD 2025; khoản 1 Điều 67 NĐ 217/2026)</span>: liên tục kể từ khi tiếp nhận thông báo khởi công, khởi công xây dựng công trình <b>cho đến khi</b> công trình được nghiệm thu, bàn giao đưa vào khai thác, sử dụng — nhằm phát hiện, ngăn chặn và xử lý kịp thời khi phát sinh vi phạm.
  </div>

  <div className="section-title"><h3>Sơ đồ vòng đời quản lý trật tự xây dựng</h3><span className="tag">khoản 2 Điều 67 · NĐ 217/2026</span></div>
  <Swimlane containerId="swim-ttxd" data={SWIM_DATA['swim-ttxd']} />

  <details className="ref">
    <summary><span className="ref-badge">NGUYÊN VĂN</span>Nội dung quản lý TTXD · Xử lý vi phạm — Mục 5 CV 24472<svg className="ref-chevron" viewBox="0 0 24 24"><use href="#i-chevron"/></svg></summary>
    <div className="ref-body">
      <span className="ref-art">Mục 5.2 CV 24472 — Điều kiện khởi công nhà ở riêng lẻ (khoản 3 Điều 48, Điều 43 Luật XD 2025)</span>
      <p className="ref-quote">Công trình nhà ở riêng lẻ của hộ gia đình, cá nhân khi khởi công chỉ cần đáp ứng điều kiện có giấy phép xây dựng đối với công trình thuộc diện phải cấp phép hoặc đáp ứng điều kiện được miễn giấy phép xây dựng theo quy định và được xây dựng trên đất ở hợp pháp theo quy định của pháp luật về đất đai.</p>
      <span className="ref-art">Mục 5.2 CV 24472 — Công trình miễn GPXD (điểm c khoản 2 Điều 67 NĐ 217/2026)</span>
      <p className="ref-quote">Kiểm tra việc đáp ứng điều kiện được miễn giấy phép xây dựng theo quy định tại khoản 2 Điều 43 Luật Xây dựng năm 2025; kiểm tra sự tuân thủ của việc xây dựng với quy hoạch được sử dụng làm cơ sở lập dự án và sự phù hợp của việc xây dựng với các nội dung, thông số chủ yếu của thiết kế xây dựng tại Báo cáo nghiên cứu khả thi đã được cơ quan chuyên môn về xây dựng thẩm định (nếu có).</p>
      <span className="ref-art">Mục 5.3 CV 24472 — Xử lý và áp dụng biện pháp ngăn chặn</span>
      <p className="ref-quote">Khi phát hiện vi phạm, phải yêu cầu dừng thi công, thực hiện giám sát việc ngừng thi công, áp dụng các biện pháp cần thiết buộc dừng thi công theo quy định của pháp luật về xử lý vi phạm hành chính và thực hiện cưỡng chế công trình vi phạm trật tự xây dựng trên địa bàn theo thẩm quyền (khoản 4 Điều 47 Luật Xây dựng năm 2025; khoản 3 Điều 67, điểm b và điểm c khoản 8 Điều 73 Nghị định số 217/2026/NĐ-CP).</p>
      <span className="ref-art">Mục 5.4 CV 24472 — Cung cấp dữ liệu (khoản 4 Điều 7 NĐ 217/2026)</span>
      <p className="ref-quote">Khi thực hiện và sau khi kết thúc thủ tục hành chính, cơ quan thực hiện thủ tục hành chính, cơ quan chuẩn bị dự án có trách nhiệm cung cấp thông tin, dữ liệu lên Hệ thống thông tin, Cơ sở dữ liệu quốc gia về hoạt động xây dựng theo quy định của Bộ trưởng Bộ Xây dựng. Toàn bộ thông tin kết quả cấp phép, kiểm tra, xử lý vi phạm đối với nhà ở riêng lẻ phải được cập nhật kịp thời, đầy đủ.</p>
    </div>
  </details>

  <div className="callout info">
    <svg><use href="#i-warn"/></svg>
    <div><b>Nghĩa vụ cập nhật dữ liệu</b>Toàn bộ thông tin kết quả cấp phép, kiểm tra, xử lý vi phạm đối với nhà ở riêng lẻ phải được cơ quan thực hiện thủ tục hành chính cập nhật kịp thời, đầy đủ lên Hệ thống thông tin, cơ sở dữ liệu quốc gia về hoạt động xây dựng — đây là căn cứ tra cứu lịch sử pháp lý công trình khi thẩm định pháp lý mua bán/chuyển nhượng.</div>
  </div>
    </>
  );
};
