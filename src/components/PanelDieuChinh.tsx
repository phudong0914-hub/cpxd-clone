import React from 'react';
import { Swimlane } from './Swimlane';
import { SWIM_DATA } from '../data/cpxdData';
import { FormLink } from './FormLink';

export const PanelDieuChinh: React.FC = () => {
  return (
    <>
      <div className="section-title"><h3>Khi nào phải điều chỉnh Giấy phép xây dựng?</h3><span className="tag">khoản 1 Điều 63 · NĐ 217/2026</span></div>

  <div className="grid2">
    <div className="card">
      <h4><svg className="icon"><use href="#i-warn"/></svg> Bắt buộc điều chỉnh GPXD khi thay đổi</h4>
      <ul>
        <li><b>(a)</b> Hình thức kiến trúc mặt ngoài — đối với công trình thuộc khu vực có yêu cầu quản lý kiến trúc</li>
        <li><b>(b)</b> Vị trí xây dựng, diện tích xây dựng, số tầng, hoặc giải pháp kết cấu chính</li>
        <li><b>(c)</b> Phân khu các chức năng sử dụng chính bên trong công trình</li>
      </ul>
    </div>
    <div className="card">
      <h4><svg className="icon"><use href="#i-check"/></svg> Không cần điều chỉnh GPXD</h4>
      <ul>
        <li>Điều chỉnh thiết kế xây dựng nhưng <b>không</b> làm thay đổi các nội dung (a), (b), (c) nêu trên <span className="cite">điểm d khoản 1 Điều 63</span></li>
      </ul>
    </div>
  </div>

  <div className="section-title"><h3>Hồ sơ đề nghị điều chỉnh GPXD</h3><span className="tag">khoản 2 Điều 63 · NĐ 217/2026</span></div>
  <ul className="checklist" style={{ maxWidth: "760px" }}>
    <li><svg><use href="#i-check"/></svg> Đơn đề nghị điều chỉnh GPXD (<FormLink formName="Mẫu số 02" />, Phụ lục II)</li>
    <li><svg><use href="#i-check"/></svg> GPXD đã cấp kèm hồ sơ bản vẽ đã được cấp</li>
    <li><svg><use href="#i-check"/></svg> Bộ bản vẽ thiết kế xây dựng điều chỉnh (kèm thiết kế điều chỉnh tại Báo cáo nghiên cứu khả thi nếu có điều chỉnh dự án)</li>
    <li><svg><use href="#i-check"/></svg> Báo cáo kết quả thẩm định + văn bản phê duyệt thiết kế điều chỉnh (bảo đảm an toàn chịu lực, PCCC, môi trường) kèm hồ sơ tương ứng phần điều chỉnh <span className="cite">điểm d khoản 1 Điều 57</span></li>
    <li><svg><use href="#i-check"/></svg> Giấy tờ hợp pháp về đất đai (Điều 55) — <b>chỉ khi</b> điều chỉnh thiết kế làm thay đổi diện tích hoặc chức năng sử dụng đất</li>
  </ul>

  <div className="section-title"><h3>Gia hạn Giấy phép xây dựng</h3><span className="tag">khoản 3 Điều 63 · NĐ 217/2026</span></div>
  <div className="badge-row">
    <span className="badge">Điều kiện: công trình chưa khởi công khi GPXD hết hiệu lực khởi công</span>
    <span className="badge">Tối đa 02 lần gia hạn</span>
    <span className="badge">Mỗi lần gia hạn: 12 tháng</span>
  </div>
  <ul className="checklist" style={{ maxWidth: "760px" }}>
    <li><svg><use href="#i-check"/></svg> Đơn đề nghị gia hạn GPXD (<FormLink formName="Mẫu số 02" />, Phụ lục II)</li>
    <li><svg><use href="#i-check"/></svg> Bản chính hoặc bản sao có chứng thực GPXD đã cấp (hoặc GPXD dưới dạng điện tử)</li>
  </ul>
  <div className="callout info">
    <svg><use href="#i-warn"/></svg>
    <div><b>Ghi nhận điều chỉnh/gia hạn</b>Được ghi trực tiếp trên bản chính GPXD đã cấp, hoặc cấp dưới dạng bản phụ lục bổ sung theo mẫu tại Phụ lục II. Trường hợp chuyển nhượng dự án/phần dự án, góp vốn bằng QSDĐ, chia tách, sáp nhập, hợp nhất — tổ chức nhận chuyển nhượng/hình thành sau tái cấu trúc được <b>kế thừa GPXD</b> đã cấp <span className="cite">điểm d khoản 3 Điều 63</span>.</div>
  </div>

  <div className="section-title"><h3>Sơ đồ luồng xử lý điều chỉnh / gia hạn GPXD</h3><span className="tag">khoản 2, 3 Điều 54 · NĐ 217/2026</span></div>
  <Swimlane containerId="swim-dieuchinh" data={SWIM_DATA['swim-dieuchinh']} />

  <details className="ref">
    <summary><span className="ref-badge">NGUYÊN VĂN</span>Điều chỉnh, gia hạn GPXD — Điều 63 NĐ 217/2026<svg className="ref-chevron" viewBox="0 0 24 24"><use href="#i-chevron"/></svg></summary>
    <div className="ref-body">
      <span className="ref-art">Khoản 1 Điều 63 — Trường hợp phải điều chỉnh</span>
      <p className="ref-quote">Trong quá trình xây dựng, trường hợp có điều chỉnh thiết kế làm thay đổi một trong các nội dung dưới đây thì chủ đầu tư phải đề nghị điều chỉnh giấy phép xây dựng: a) Thay đổi hình thức kiến trúc mặt ngoài của công trình đối với công trình thuộc khu vực có yêu cầu về quản lý kiến trúc; b) Thay đổi một trong các yếu tố về vị trí xây dựng công trình, diện tích xây dựng, số tầng, giải pháp kết cấu chính của công trình; c) Điều chỉnh thiết kế bên trong công trình làm thay đổi về phân khu các chức năng sử dụng chính bên trong công trình; d) Chủ đầu tư không phải thực hiện điều chỉnh giấy phép xây dựng trong trường hợp điều chỉnh thiết kế xây dựng nhưng không làm thay đổi các nội dung quy định tại điểm a, b, c khoản 1 Điều này.</p>
      <span className="ref-art">Khoản 3 Điều 63 — Gia hạn giấy phép xây dựng</span>
      <p className="ref-quote">a) Đến thời điểm giấy phép xây dựng hết hiệu lực khởi công xây dựng, nếu công trình chưa được khởi công thì chủ đầu tư phải đề nghị gia hạn giấy phép xây dựng. Mỗi giấy phép xây dựng chỉ được gia hạn tối đa 02 lần. Thời gian gia hạn mỗi lần là 12 tháng; b) Hồ sơ đề nghị gia hạn gồm Đơn đề nghị gia hạn giấy phép xây dựng theo Mẫu số 02 Phụ lục II; bản chính hoặc bản sao có chứng thực giấy phép xây dựng hoặc giấy phép xây dựng dưới dạng điện tử đã được cấp; c) Giấy phép xây dựng điều chỉnh, gia hạn được ghi trực tiếp trên bản chính giấy phép xây dựng đã cấp hoặc cấp dưới dạng bản phụ lục bổ sung kèm theo giấy phép xây dựng đã cấp; d) Trường hợp công trình đã được cấp giấy phép xây dựng, chủ đầu tư thực hiện chuyển nhượng một phần hoặc toàn bộ dự án hoặc góp vốn bằng quyền sử dụng đất, tài sản gắn liền với đất hoặc chia tách, sáp nhập, hợp nhất thì tổ chức nhận chuyển nhượng/nhận góp vốn hoặc tổ chức được hình thành sau chia tách, sáp nhập, hợp nhất được kế thừa giấy phép xây dựng này.</p>
    </div>
  </details>
    </>
  );
};
