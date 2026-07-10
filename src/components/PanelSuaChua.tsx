import React from 'react';
import { Swimlane } from './Swimlane';
import { FormLink } from './FormLink';
import { SWIM_DATA } from '../data/cpxdData';

export const PanelSuaChua: React.FC<{ searchQuery?: string }> = ({ searchQuery = '' }) => {
  return (
    <>
      <div className="section-title"><h3>Hồ sơ cấp GPXD Sửa chữa, Cải tạo, Di dời</h3><span className="tag">Điều 46 Luật XD 2025 · Điều 51, 61 NĐ 217/2026</span></div>
  <div className="grid2">
    <div className="card">
      <h4><svg className="icon"><use href="#i-doc"/></svg> Thành phần hồ sơ — Sửa chữa / cải tạo</h4>
      <ul className="checklist">
        <li><svg><use href="#i-check"/></svg> Đơn đề nghị cấp phép sửa chữa, cải tạo (<FormLink formName="Mẫu số 01" />, Phụ lục II)</li>
        <li><svg><use href="#i-check"/></svg> Một trong các loại giấy tờ hợp pháp về đất đai <span className="cite">(Điều 55)</span></li>
        <li><svg><use href="#i-check"/></svg> Bản vẽ hiện trạng các bộ phận dự kiến sửa chữa, cải tạo đã được phê duyệt — tỷ lệ tương ứng tỷ lệ bản vẽ trong hồ sơ đề nghị</li>
        <li><svg><use href="#i-check"/></svg> Ảnh chụp hiện trạng công trình và công trình lân cận trước khi sửa chữa (kích thước tối thiểu <b>10×15 cm</b>)</li>
        <li><svg><use href="#i-check"/></svg> Hồ sơ thiết kế sửa chữa, cải tạo tương ứng loại công trình <span className="cite">(Điều 57)</span></li>
      </ul>
    </div>
    <div className="card">
      <h4><svg className="icon"><use href="#i-house"/></svg> Thành phần hồ sơ — Di dời công trình</h4>
      <ul className="checklist">
        <li><svg><use href="#i-check"/></svg> Bản sao giấy tờ chứng minh quyền sử dụng đất nơi công trình sẽ di dời đến + giấy tờ hợp pháp về sở hữu công trình</li>
        <li><svg><use href="#i-check"/></svg> Bản vẽ hoàn công (nếu có) hoặc bản vẽ thiết kế mô tả thực trạng công trình (mặt bằng, mặt cắt móng, kết cấu chịu lực chính)</li>
        <li><svg><use href="#i-check"/></svg> Bản vẽ tổng mặt bằng địa điểm sẽ di dời tới; bản vẽ mặt bằng, mặt cắt móng tại địa điểm mới</li>
        <li><svg><use href="#i-check"/></svg> Báo cáo khảo sát đánh giá chất lượng hiện trạng công trình (do tổ chức có chức năng thiết kế/kiểm định thực hiện)</li>
        <li><svg><use href="#i-check"/></svg> Phương án di dời: thuyết minh hiện trạng, giải pháp di dời, bố trí phương tiện — nhân lực, an toàn, vệ sinh môi trường, tiến độ, biện pháp thi công</li>
      </ul>
    </div>
  </div>

  <div className="section-title"><h3>Sơ đồ luồng xử lý hồ sơ sửa chữa / cải tạo / di dời</h3><span className="tag">Điều 54 · NĐ 217/2026</span></div>
  <Swimlane containerId="swim-suachua" data={SWIM_DATA['swim-suachua']} />

  <div className="callout info">
    <svg><use href="#i-warn"/></svg>
    <div><b>Phân biệt với trường hợp miễn phép</b>Không phải mọi sửa chữa, cải tạo đều cần GPXD — cần đối chiếu với các trường hợp miễn giấy phép xây dựng tại khoản 2 Điều 43 Luật XD 2025 trước khi lập hồ sơ, tránh làm hồ sơ không cần thiết.</div>
  </div>

  <details className="ref">
    <summary><span className="ref-badge">NGUYÊN VĂN</span>Thành phần hồ sơ di dời công trình — Điều 61 NĐ 217/2026<svg className="ref-chevron" viewBox="0 0 24 24"><use href="#i-chevron"/></svg></summary>
    <div className="ref-body">
      <span className="ref-art">Mục 2.1.c CV 24472 — Điều 61 NĐ 217/2026/NĐ-CP (trường hợp di dời)</span>
      <p className="ref-quote">Bản sao giấy tờ chứng minh quyền sử dụng đất nơi công trình sẽ di dời đến và giấy tờ hợp pháp về sở hữu công trình theo quy định của pháp luật; Bản vẽ hoàn công công trình (nếu có) hoặc bản vẽ thiết kế mô tả thực trạng công trình được di dời, gồm mặt bằng, mặt cắt móng và bản vẽ kết cấu chịu lực chính; bản vẽ tổng mặt bằng địa điểm công trình sẽ được di dời tới; bản vẽ mặt bằng, mặt cắt móng tại địa điểm công trình sẽ di dời đến; Báo cáo kết quả khảo sát đánh giá chất lượng hiện trạng của công trình do tổ chức có chức năng về thiết kế hoặc kiểm định thực hiện.</p>
      <p className="ref-quote">Phương án di dời do tổ chức có chức năng về thiết kế hoặc kiểm định thực hiện gồm phần thuyết minh về hiện trạng công trình và khu vực công trình sẽ được di dời đến; giải pháp di dời, phương án bố trí sử dụng phương tiện, thiết bị, nhân lực; giải pháp bảo đảm an toàn cho công trình, người, máy móc, thiết bị và công trình lân cận; bảo đảm vệ sinh môi trường; tiến độ di dời; tổ chức, cá nhân thực hiện di dời công trình; bản vẽ biện pháp thi công di dời công trình.</p>
    </div>
  </details>
    </>
  );
};
