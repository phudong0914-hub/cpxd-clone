import React from 'react';
import { FormLink } from '../components/FormLink';

export interface TabInfo {
  id: string;
  code: string;
  dieu: string;
  title: string;
  color: string;
}

export interface SwimLane {
  name: string;
  color: string;
}

export interface SwimNode {
  id: string;
  lane: number;
  row: number;
  title: string;
  detail?: React.ReactNode;
  day?: string;
  tone?: "warn" | "success";
}

export type SwimEdge = [string, string, string?];

export interface SwimData {
  lanes: SwimLane[];
  nodes: SwimNode[];
  edges: SwimEdge[];
}

export const TABS: TabInfo[] = [
  { id: "tongquan",  code: "T.00",   dieu: "Điều 4,53,67",     title: "Tổng quan & Thẩm quyền",              color: "#3B4A5E" },
  { id: "capmoi",    code: "QT.I",   dieu: "Điều 50,60",       title: "Cấp GPXD mới",                        color: "#A9812E" },
  { id: "suachua",   code: "QT.II",  dieu: "Điều 51,61",       title: "Sửa chữa – Cải tạo – Di dời",         color: "#B15A3D" },
  { id: "dieuchinh", code: "QT.III", dieu: "Điều 63",          title: "Điều chỉnh & Gia hạn",                color: "#2F6E63" },
  { id: "caplai",    code: "QT.IV",  dieu: "Điều 64,65",       title: "Cấp lại / Thu hồi / Hủy",             color: "#7C2E3E" },
  { id: "cothoihan", code: "QT.V",   dieu: "Điều 52,62",       title: "GPXD có thời hạn",                    color: "#8C7A33" },
  { id: "ttxd",      code: "QT.VI",  dieu: "Điều 47,67",       title: "Quản lý trật tự XD",                  color: "#3F6B45" },
  { id: "thicong",   code: "QT.VII", dieu: "Điều 10,25·NĐ207", title: "Quản lý thi công & nghiệm thu",       color: "#1F3A5F" }
];

export const SWIM_DATA: Record<string, SwimData> = {
  "swim-capmoi": {
    lanes: [
      { name: "Chủ đầu tư", color: "#A9812E" },
      { name: "UBND cấp xã", color: "#1F3A5F" },
      { name: "Cơ quan liên quan", color: "#8A2A2A" }
    ],
    nodes: [
      { id: "n1", lane: 0, row: 0, title: "Nộp hồ sơ trực tuyến toàn trình", detail: "Cổng Dịch vụ công quốc gia (hoặc Bộ phận Một cửa khi có sự cố khách quan)" },
      { id: "n2", lane: 1, row: 1, title: "Tiếp nhận, kiểm tra tính hợp lệ", detail: "Thông báo tiếp nhận, hoặc hướng dẫn hoàn thiện theo Điều 45 Luật XD 2025" },
      { id: "n3", lane: 1, row: 2, title: "Thẩm định hồ sơ + kiểm tra thực địa", detail: "Đối chiếu điều kiện; gửi văn bản lấy ý kiến nếu thông tin chưa đầy đủ", day: "≤ 03 ngày LV" },
      { id: "n4", lane: 1, row: 3, title: "Thông báo bổ sung (1 lần duy nhất)", detail: "Qua email/tin nhắn — nêu rõ tài liệu thiếu, không đúng quy định", tone: "warn" },
      { id: "n5", lane: 2, row: 3, title: "Trả lời ý kiến chuyên môn", detail: "Quá hạn không ý kiến = coi như đồng ý và chịu trách nhiệm", day: "≤ 02 ngày LV" },
      { id: "n6", lane: 0, row: 4, title: "Bổ sung, hoàn thiện hồ sơ", detail: "Không đạt → UBND xã thông báo lý do (≤01 ngày LV), nộp lại từ đầu", day: "≤ 02 ngày LV" },
      { id: "n7", lane: 1, row: 5, title: "Ban hành GPXD + đóng dấu bản vẽ", detail: <>Ký điện tử hoặc mẫu dấu (<FormLink formName="Mẫu số 06" />, Phụ lục II)</>, day: "Tổng: 07 ngày LV", tone: "success" }
    ],
    edges: [
      ["n1", "n2"],
      ["n2", "n3"],
      ["n3", "n4", "nếu thiếu/sai"],
      ["n3", "n5", "lấy ý kiến"],
      ["n4", "n6"],
      ["n5", "n7"],
      ["n6", "n7"]
    ]
  },

  "swim-suachua": {
    lanes: [
      { name: "Chủ đầu tư / Chủ sở hữu", color: "#B15A3D" },
      { name: "UBND cấp xã", color: "#1F3A5F" },
      { name: "Cơ quan liên quan", color: "#8A2A2A" }
    ],
    nodes: [
      { id: "n1", lane: 0, row: 0, title: "Chụp ảnh hiện trạng + hồ sơ thiết kế", detail: "Bắt buộc ảnh hiện trạng công trình & công trình lân cận (≥10×15cm)" },
      { id: "n2", lane: 1, row: 1, title: "Tiếp nhận → Thẩm định → Kiểm tra thực địa", detail: "Đối chiếu bản vẽ hiện trạng với thực tế công trình liền kề", day: "≤ 03 ngày LV" },
      { id: "n3", lane: 2, row: 2, title: "Lấy ý kiến cơ quan liên quan (nếu cần)", detail: "Quá hạn không ý kiến = coi như đồng ý", day: "≤ 02 ngày LV" },
      { id: "n4", lane: 1, row: 3, title: "Cấp GPXD + đóng dấu bản vẽ", detail: "Sửa chữa / cải tạo / di dời công trình", day: "Tổng: 07 ngày LV", tone: "success" }
    ],
    edges: [
      ["n1", "n2"],
      ["n2", "n3", "nếu cần"],
      ["n3", "n4"]
    ]
  },

  "swim-dieuchinh": {
    lanes: [
      { name: "Chủ đầu tư", color: "#2F6E63" },
      { name: "UBND cấp xã", color: "#1F3A5F" }
    ],
    nodes: [
      { id: "n1a", lane: 0, row: 0, title: "Nộp hồ sơ điều chỉnh GPXD", detail: <><FormLink formName="Mẫu số 02" />, Phụ lục II</> },
      { id: "n1b", lane: 0, row: 1, title: "Nộp hồ sơ gia hạn / cấp lại", detail: "Tối đa 02 lần gia hạn, mỗi lần 12 tháng" },
      { id: "n2", lane: 1, row: 2, title: "Thẩm định, kiểm tra thực địa", detail: "Lấy ý kiến cơ quan liên quan nếu hồ sơ thiếu thông tin" },
      { id: "n3", lane: 1, row: 3, title: "Thông báo bổ sung (1 lần)", detail: "Không đạt → thông báo từ chối, làm lại hồ sơ", tone: "warn" },
      { id: "n4", lane: 1, row: 4, title: "Ban hành GPXD điều chỉnh / gia hạn / cấp lại", detail: "Ghi trực tiếp trên bản chính hoặc phụ lục bổ sung", day: "07 ngày LV (điều chỉnh) · 05 ngày LV (gia hạn/cấp lại)", tone: "success" }
    ],
    edges: [
      ["n1a", "n2"],
      ["n1b", "n2"],
      ["n2", "n3", "nếu thiếu/sai"],
      ["n2", "n4", "nếu đủ"],
      ["n3", "n4"]
    ]
  },

  "swim-caplai": {
    lanes: [
      { name: "Cơ quan QLNN về XD", color: "#7C2E3E" },
      { name: "Cơ quan cấp phép", color: "#1F3A5F" },
      { name: "Chủ đầu tư", color: "#A9812E" }
    ],
    nodes: [
      { id: "n1", lane: 0, row: 0, title: "Kết luận thanh tra / văn bản kiểm tra", detail: "Xác định GPXD thuộc trường hợp bị thu hồi" },
      { id: "n2", lane: 1, row: 1, title: "Ban hành Quyết định thu hồi GPXD", day: "≤ 10 ngày LV" },
      { id: "n3", lane: 1, row: 2, title: "Gửi QĐ + đăng tải + báo UBND cấp xã", detail: "Công bộ công khai tại UBND cấp xã", day: "≤ 05 ngày LV" },
      { id: "n4a", lane: 2, row: 3, title: "Nộp lại bản gốc GPXD", detail: "Hồ sơ khép lại tại bước thu hồi", day: "≤ 05 ngày LV", tone: "success" },
      { id: "n4b", lane: 1, row: 3, title: "Ban hành Quyết định hủy GPXD", detail: "Nếu không nộp lại sau 10 ngày LV — đăng tải website + tích hợp Sở XD", tone: "warn" },
      { id: "n5", lane: 2, row: 4, title: "Được đề nghị cấp GPXD mới", detail: "Sau khi hoàn thành nghĩa vụ, trách nhiệm theo quy định", tone: "success" }
    ],
    edges: [
      ["n1", "n2"],
      ["n2", "n3"],
      ["n3", "n4a"],
      ["n3", "n4b"],
      ["n4a", "n5"],
      ["n4b", "n5"]
    ]
  },

  "swim-cothoihan": {
    lanes: [
      { name: "Chủ đầu tư", color: "#8C7A33" },
      { name: "UBND cấp xã", color: "#1F3A5F" }
    ],
    nodes: [
      { id: "n1", lane: 0, row: 0, title: "Chuẩn bị hồ sơ theo Điều 62", detail: "Tương tự hồ sơ cấp GPXD thông thường (Điều 57)" },
      { id: "n2", lane: 1, row: 1, title: "Thẩm định như quy trình cấp mới", detail: "Đối chiếu quy mô, thời hạn theo QĐ 29/2025/QĐ-UBND", day: "07 ngày LV" },
      { id: "n3", lane: 1, row: 2, title: "Ban hành GPXD có thời hạn", tone: "success" }
    ],
    edges: [
      ["n1", "n2"],
      ["n2", "n3"]
    ]
  },

  "swim-ttxd": {
    lanes: [
      { name: "UBND cấp xã", color: "#3F6B45" },
      { name: "Đối tượng quản lý", color: "#1F3A5F" }
    ],
    nodes: [
      { id: "n1", lane: 0, row: 0, title: "Kiểm tra điều kiện khởi công", detail: "Đối chiếu Điều 48 Luật XD 2025" },
      { id: "n2a", lane: 1, row: 1, title: "Công trình có GPXD", detail: "Quản lý theo nội dung GPXD đã cấp" },
      { id: "n2b", lane: 1, row: 2, title: "Công trình miễn GPXD", detail: "Kiểm tra điều kiện miễn phép + phù hợp quy hoạch" },
      { id: "n3", lane: 0, row: 3, title: "Theo dõi, kiểm tra định kỳ trong thi công", detail: "Phát hiện, ngăn chặn, xử lý kịp thời vi phạm" },
      { id: "n4", lane: 1, row: 4, title: "Yêu cầu dừng thi công → cưỡng chế", detail: "Theo pháp luật xử lý vi phạm hành chính", tone: "warn" },
      { id: "n5", lane: 0, row: 5, title: "Nghiệm thu, bàn giao đưa vào sử dụng", detail: "Cập nhật dữ liệu lên CSDL quốc gia về HĐXD", tone: "success" }
    ],
    edges: [
      ["n1", "n2a"],
      ["n1", "n2b"],
      ["n2a", "n3"],
      ["n2b", "n3"],
      ["n3", "n4", "nếu vi phạm"],
      ["n3", "n5", "nếu không vi phạm"],
      ["n4", "n5"]
    ]
  },

  "swim-thicong": {
    lanes: [
      { name: "Chủ sở hữu nhà ở", color: "#A9812E" },
      { name: "Cơ quan Nhà nước", color: "#1F3A5F" }
    ],
    nodes: [
      { id: "n1", lane: 0, row: 0, title: "Tổ chức thi công xây dựng", detail: "Chịu trách nhiệm an toàn công trình, công trình lân cận, môi trường" },
      { id: "n2", lane: 0, row: 1, title: "Tổ chức giám sát thi công", detail: "Khuyến khích nếu <7 tầng & <2 hầm · Bắt buộc nếu ≥7 tầng hoặc ≥2 hầm" },
      { id: "n3a", lane: 0, row: 2, title: "Công trình thông thường", detail: "Chủ sở hữu tự nghiệm thu", tone: "success" },
      { id: "n3b", lane: 1, row: 2, title: "Thuộc Phụ lục IX / ảnh hưởng cộng đồng", detail: "Nhà nước kiểm tra công tác nghiệm thu — trong thi công & khi hoàn thành", tone: "success" }
    ],
    edges: [
      ["n1", "n2"],
      ["n2", "n3a"],
      ["n2", "n3b"]
    ]
  }
};
