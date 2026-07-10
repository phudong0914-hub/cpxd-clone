import React from 'react';
import { FormLink } from './FormLink';
import { Swimlane } from './Swimlane';
import { SWIM_DATA } from '../data/cpxdData';

export const PanelCoThoiHan: React.FC<{ searchQuery?: string }> = ({ searchQuery = '' }) => {
  return (
    <>
      <div className="section-title"><h3>Cấp Giấy phép xây dựng có thời hạn</h3><span className="tag">Điều 52, 62 NĐ 217/2026 · Điều 3 QĐ 29/2025/QĐ-UBND</span></div>

  <div className="grid2">
    <div className="card">
      <h4><svg className="icon"><use href="#i-scale"/></svg> Điều kiện cấp phép</h4>
      <p style={{ fontSize: "13.4px", margin: "0" }}>Thực hiện theo <span className="cite">Điều 52 NĐ 217/2026/NĐ-CP</span> — áp dụng cho khu vực/công trình có quy hoạch nhưng chưa triển khai thực hiện theo kế hoạch.</p>
    </div>
    <div className="card">
      <h4><svg className="icon"><use href="#i-clock"/></svg> Thời hạn tồn tại tối đa</h4>
      <p style={{ fontSize: "13.4px", margin: "0" }}>Theo <span className="cite">Điều 3 QĐ 29/2025/QĐ-UBND</span>, tối đa <b>không quá 05 năm</b>, căn cứ thời hạn thực hiện quy hoạch tại thời điểm cấp phép. Hết hạn mà quy hoạch được điều chỉnh kéo dài → cơ quan cấp phép có trách nhiệm <b>thông báo gia hạn thời gian tồn tại</b> công trình.</p>
    </div>
  </div>

  <div className="section-title"><h3>Quy mô xây dựng theo loại quy hoạch áp dụng</h3><span className="tag">khoản 1, 2 Điều 3 · QĐ 29/2025/QĐ-UBND</span></div>
  <p className="lede">Quy mô công trình được cấp GPXD có thời hạn phụ thuộc vào <b>cấp độ quy hoạch</b> đã được phê duyệt, công bố tại khu đất — nhưng chưa thực hiện và chưa có quyết định thu hồi đất.</p>

  <div className="grid2">
    <div className="card">
      <h4><svg className="icon"><use href="#i-pin"/></svg> Thuộc khu vực quy hoạch phân khu / phân khu chức năng</h4>
      <ul>
        <li>Quy mô xây dựng mới: <b>tối đa 03 tầng</b> (số tầng cao xác định theo TT 06/2021/TT-BXD)</li>
        <li>Tầng hầm (nếu có): <b>tối đa 01 tầng hầm</b> đối với xây dựng mới</li>
        <li>Trường hợp sửa chữa, cải tạo: theo số tầng cao/tầng hầm <b>hiện hữu được công nhận</b></li>
      </ul>
    </div>
    <div className="card">
      <h4><svg className="icon"><use href="#i-pin"/></svg> Thuộc khu vực quy hoạch chi tiết / chi tiết chức năng</h4>
      <ul>
        <li>Quy mô xây dựng mới: <b>tối đa 01 tầng</b> (số tầng cao xác định theo TT 06/2021/TT-BXD)</li>
        <li>Trường hợp sửa chữa, cải tạo: theo số tầng cao và tầng hầm <b>hiện hữu được công nhận</b></li>
        <li>Các chỉ tiêu xây dựng phải phù hợp quy chuẩn quy hoạch xây dựng, Quy chế quản lý kiến trúc hiện hành</li>
      </ul>
    </div>
  </div>

  <div className="callout warn">
    <svg><use href="#i-warn"/></svg>
    <div><b>Trường hợp không được cấp phép xây mới có thời hạn</b>Nếu khu đất thuộc 1 trong 2 trường hợp quy hoạch trên <strong>và đã có kế hoạch sử dụng đất cấp xã</strong> thì <strong>không cấp GPXD có thời hạn cho xây dựng mới</strong> — chỉ được cấp GPXD có thời hạn để <strong>sửa chữa, cải tạo</strong> <span className="cite">(khoản 4 Điều 3 QĐ 29/2025)</span>. Đây là điểm cần kiểm tra trước tiên khi tư vấn đầu tư trên thửa đất vướng quy hoạch.</div>
  </div>

  <div className="section-title"><h3>Thành phần hồ sơ đề nghị cấp GPXD có thời hạn</h3><span className="tag">Điều 62 · NĐ 217/2026</span></div>
  <p className="lede">Tương tự thành phần hồ sơ áp dụng cho từng loại công trình quy định tại <span className="cite">Điều 57 NĐ 217/2026</span> — cùng khung hồ sơ với nhóm Cấp GPXD mới.</p>
  <ul className="checklist" style={{ maxWidth: "820px" }}>
    <li><svg><use href="#i-check"/></svg> Đơn đề nghị cấp giấy phép xây dựng có thời hạn (<FormLink formName="Mẫu số 01" />, Phụ lục II)</li>
    <li><svg><use href="#i-check"/></svg> Một trong các loại giấy tờ hợp pháp về đất đai <span className="cite">(Điều 55)</span> — hoặc tài liệu xác nhận thửa đất thuộc khu vực có quy hoạch chưa triển khai thực hiện</li>
    <li><svg><use href="#i-check"/></svg> Bộ hồ sơ thiết kế xây dựng tương ứng loại công trình theo <span className="cite">Điều 57</span>: bản vẽ mặt bằng công trình trên lô đất + sơ đồ vị trí; mặt bằng các tầng, mặt đứng, mặt cắt chính; mặt bằng móng, mặt cắt móng + sơ đồ đấu nối hạ tầng kỹ thuật</li>
    <li><svg><use href="#i-check"/></svg> Văn bản ý kiến cơ quan văn hóa cấp tỉnh (nếu thuộc khu vực có yêu cầu về di sản văn hóa)</li>
    <li><svg><use href="#i-check"/></svg> Kết quả thực hiện thủ tục PCCC &amp; cứu nạn cứu hộ (nếu có yêu cầu); báo cáo thẩm tra thiết kế (nếu pháp luật yêu cầu)</li>
    <li><svg><use href="#i-check"/></svg> Bản cam kết bảo đảm an toàn đối với công trình liền kề</li>
  </ul>

  <div className="callout warn">
    <svg><use href="#i-warn"/></svg>
    <div><b>Lưu ý về hiệu lực chuyển tiếp</b>QĐ 29/2025/QĐ-UBND có hiệu lực từ <strong>01/01/2026</strong> — trước thời điểm Luật XD 2025 và NĐ 217/2026 có hiệu lực (01/7/2026) — nên văn bản này còn dẫn chiếu căn cứ pháp lý theo Luật Xây dựng 2014 (sửa đổi). Tuy nhiên CV 24472 (khung hướng dẫn hiện hành từ 01/7/2026) tiếp tục dẫn chiếu QĐ 29/2025 cho riêng phần quy mô/thời hạn GPXD có thời hạn; theo <span className="cite">khoản 3 Điều 7 QĐ 29/2025</span>, khi văn bản dẫn chiếu được thay thế thì áp dụng theo văn bản ban hành sau — nội dung Điều 3 vẫn có giá trị áp dụng trong khung pháp lý mới cho đến khi có quyết định thay thế.</div>
  </div>

  <details className="ref">
    <summary><span className="ref-badge">NGUYÊN VĂN</span>Quy mô, thời hạn tồn tại công trình cấp GPXD có thời hạn — Điều 3 QĐ 29/2025/QĐ-UBND<svg className="ref-chevron" viewBox="0 0 24 24"><use href="#i-chevron"/></svg></summary>
    <div className="ref-body">
      <span className="ref-art">Khoản 1–4 Điều 3 Quyết định 29/2025/QĐ-UBND</span>
      <p className="ref-quote">1. Trường hợp thuộc khu vực có quy hoạch phân khu hoặc quy hoạch phân khu khu chức năng đã được cơ quan nhà nước có thẩm quyền phê duyệt, công bố nhưng chưa thực hiện và chưa có quyết định thu hồi đất của cơ quan Nhà nước có thẩm quyền: a) Về quy mô xây dựng, tối đa 03 tầng (số tầng cao được xác định theo Thông tư số 06/2021/TT-BXD). Trường hợp sửa chữa, cải tạo (có thời hạn) thì theo số tầng cao hiện hữu được công nhận. b) Trường hợp xây dựng tầng hầm, đối với công trình xây dựng mới (có thời hạn) quy mô tối đa 01 tầng hầm; đối với công trình sửa chữa, cải tạo (có thời hạn) theo số tầng hầm hiện hữu được công nhận. c) Các chỉ tiêu xây dựng phải phù hợp quy chuẩn quy hoạch xây dựng, Quy chế quản lý kiến trúc được cơ quan nhà nước có thẩm quyền ban hành. 2. Trường hợp thuộc khu vực có quy hoạch chi tiết hoặc quy hoạch chi tiết khu chức năng đã được cơ quan nhà nước có thẩm quyền phê duyệt, công bố nhưng chưa thực hiện và chưa có quyết định thu hồi đất: a) Về quy mô xây dựng, tối đa 01 tầng. Trường hợp sửa chữa, cải tạo (có thời hạn) thì theo số tầng cao và tầng hầm công trình hiện hữu được công nhận. b) Các chỉ tiêu xây dựng phải phù hợp quy chuẩn quy hoạch xây dựng, Quy chế quản lý kiến trúc hiện hành. 3. Thời hạn tồn tại của công trình được ghi trong giấy phép xây dựng có thời hạn do cơ quan cấp giấy phép xây dựng căn cứ thời hạn tính đến thời điểm thực hiện quy hoạch nhưng tối đa không quá 05 năm và theo yêu cầu quản lý, phát triển của từng khu vực. Khi hết thời hạn tồn tại mà quy hoạch có điều chỉnh kéo dài thời hạn thực hiện thì cơ quan đã cấp giấy phép xây dựng có trách nhiệm thông báo về việc gia hạn thời gian tồn tại của công trình. 4. Đối với công trình xây dựng, nhà ở riêng lẻ thuộc trường hợp quy định tại khoản 1 và khoản 2 Điều này và đã có kế hoạch sử dụng đất cấp xã theo quy định thì không cấp giấy phép xây dựng có thời hạn cho việc xây dựng mới mà chỉ cấp giấy phép xây dựng có thời hạn để sửa chữa, cải tạo.</p>
    </div>
  </details>


  <div className="section-title"><h3>Quy trình xử lý</h3><span className="tag">Điều 54 · NĐ 217/2026</span></div>
  <p className="lede">Áp dụng đúng quy trình thẩm định – bổ sung – ban hành như nhóm <b>Cấp GPXD mới</b>, với tổng thời hạn giải quyết <b>07 ngày làm việc</b> kể từ ngày nhận đủ hồ sơ hợp lệ.</p>
  <Swimlane containerId="swim-cothoihan" data={SWIM_DATA['swim-cothoihan']} />

  <details className="ref">
    <summary><span className="ref-badge">NGUYÊN VĂN</span>Cấp GPXD có thời hạn — Mục 2.5 CV 24472<svg className="ref-chevron" viewBox="0 0 24 24"><use href="#i-chevron"/></svg></summary>
    <div className="ref-body">
      <span className="ref-art">Mục 2.5 CV 24472/SXD-QLXDCT</span>
      <p className="ref-quote">Điều kiện cấp Giấy phép xây dựng có thời hạn thực hiện theo Điều 52 Nghị định số 217/2026/NĐ-CP. Quy mô, thời hạn tồn tại của công trình được quy định tại Quyết định số 29/2025/QĐ-UBND ngày 22 tháng 12 năm 2025 của Ủy ban nhân dân Thành phố về phân cấp thẩm quyền cấp giấy phép xây dựng; quy định về quy mô, thời hạn tồn tại của công trình được cấp giấy phép xây dựng có thời hạn trên địa bàn Thành phố Hồ Chí Minh. Thành phần hồ sơ đề nghị cấp Giấy phép xây dựng có thời hạn theo Điều 62 Nghị định số 217/2026/NĐ-CP: hồ sơ đề nghị cấp giấy phép xây dựng có thời hạn tương tự như quy định đối với từng loại công trình, công trình nhà ở riêng lẻ quy định tại Điều 57 Nghị định số 217/2026/NĐ-CP.</p>
    </div>
  </details>
    </>
  );
};
