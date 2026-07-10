import React from 'react';
import { Swimlane } from './Swimlane';
import { SWIM_DATA } from '../data/cpxdData';
import { FormLink } from './FormLink';

export const PanelCapLai: React.FC<{ searchQuery?: string }> = ({ searchQuery = '' }) => {
  return (
    <>
      <div className="section-title"><h3>Cấp lại Giấy phép xây dựng</h3><span className="tag">Điều 64 Luật XD 2025 · Điều 64 NĐ 217/2026</span></div>
  <div className="grid2">
    <div className="card">
      <h4><svg className="icon"><use href="#i-doc"/></svg> Hồ sơ đề nghị cấp lại</h4>
      <div style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginBottom: "8px" }}>Trường hợp GPXD bị rách, nát hoặc bị mất (Bản cấp lại là bản sao của GPXD đã cấp)</div>
      <ul className="checklist">
        <li><svg><use href="#i-check"/></svg> Đơn đề nghị cấp lại GPXD (<FormLink formName="Mẫu số 02" />, Phụ lục II), nêu rõ lý do đề nghị cấp lại</li>
        <li><svg><use href="#i-check"/></svg> Bản chính hoặc bản sao có chứng thực GPXD đã cấp (đối với trường hợp bị rách, nát)</li>
      </ul>
    </div>
  </div>

  <div className="section-title"><h3>Thu hồi &amp; hủy Giấy phép xây dựng</h3><span className="tag">Điều 65 · NĐ 217/2026</span></div>
  <div className="grid2">
    <div className="card">
      <h4><svg className="icon"><use href="#i-warn"/></svg> Trường hợp thu hồi</h4>
      <ul>
        <li><b>(a)</b> GPXD được cấp không đúng quy định của pháp luật</li>
        <li><b>(b)</b> Chủ đầu tư không khắc phục việc xây dựng sai phép trong thời hạn ghi tại văn bản xử lý vi phạm</li>
      </ul>
    </div>
    <div className="card">
      <h4><svg className="icon"><use href="#i-stamp"/></svg> Trường hợp hủy</h4>
      <ul>
        <li>Chủ đầu tư <b>không nộp lại</b> GPXD trong vòng <b>10 ngày làm việc</b> kể từ ngày có quyết định thu hồi của cơ quan có thẩm quyền</li>
      </ul>
    </div>
  </div>

  <div className="section-title"><h3>Sơ đồ trình tự thu hồi, hủy GPXD</h3><span className="tag">khoản 3 Điều 65 · NĐ 217/2026</span></div>
  <Swimlane containerId="swim-caplai" data={SWIM_DATA['swim-caplai']} />

  <details className="ref">
    <summary><span className="ref-badge">NGUYÊN VĂN</span>Cấp lại (Điều 64) · Trình tự thu hồi, hủy GPXD (Điều 65) — NĐ 217/2026<svg className="ref-chevron" viewBox="0 0 24 24"><use href="#i-chevron"/></svg></summary>
    <div className="ref-body">
      <span className="ref-art">Điều 64 — Cấp lại giấy phép xây dựng</span>
      <p className="ref-quote">1. Giấy phép xây dựng được cấp lại trong trường hợp bị rách, nát hoặc bị mất. Giấy phép được cấp lại là bản sao giấy phép đã được cấp. 2. Hồ sơ đề nghị cấp lại gồm: a) Đơn đề nghị cấp lại giấy phép xây dựng theo Mẫu số 02 Phụ lục II, trong đó nêu rõ lý do đề nghị cấp lại; b) Bản chính hoặc bản sao có chứng thực giấy phép xây dựng đã được cấp đối với trường hợp giấy phép xây dựng bị rách, nát.</p>
      <span className="ref-art">Khoản 3 Điều 65 — Trình tự thu hồi, hủy giấy phép xây dựng</span>
      <p className="ref-quote">a) Trong thời hạn 10 ngày làm việc, kể từ ngày nhận được kết luận thanh tra, văn bản kiểm tra của cơ quan quản lý nhà nước về xây dựng xác định giấy phép xây dựng thuộc trường hợp bị thu hồi, cơ quan có thẩm quyền thu hồi giấy phép xây dựng ban hành quyết định thu hồi giấy phép xây dựng; b) Cơ quan có thẩm quyền thu hồi có trách nhiệm gửi quyết định thu hồi cho tổ chức/cá nhân bị thu hồi và đăng tải trên trang thông tin điện tử của mình; đồng thời gửi thông tin cho Ủy ban nhân dân cấp xã nơi có công trình để công bố công khai trong thời hạn 05 ngày làm việc kể từ ngày ban hành quyết định; c) Đối với giấy phép được cấp dưới dạng bản giấy, tổ chức, cá nhân bị thu hồi phải nộp lại bản gốc cho cơ quan ra quyết định thu hồi trong thời hạn 05 ngày làm việc kể từ ngày nhận được quyết định thu hồi; d) Trường hợp không nộp lại, cơ quan có thẩm quyền thu hồi ban hành quyết định hủy giấy phép xây dựng và thông báo cho chủ đầu tư, Ủy ban nhân dân cấp xã nơi có công trình. Quyết định hủy phải được đăng tải trên trang thông tin điện tử của cơ quan thu hồi và tích hợp trên trang thông tin điện tử của Sở Xây dựng địa phương.</p>
      <span className="ref-art">Khoản 4 Điều 65 — Cấp phép lại sau thu hồi</span>
      <p className="ref-quote">Tổ chức, cá nhân bị thu hồi giấy phép xây dựng được đề nghị cấp giấy phép xây dựng theo quy định tại Nghị định này sau khi đã nộp lại hoặc hủy giấy phép xây dựng và hoàn thành các trách nhiệm, nghĩa vụ theo quy định của pháp luật.</p>
    </div>
  </details>
    </>
  );
};
