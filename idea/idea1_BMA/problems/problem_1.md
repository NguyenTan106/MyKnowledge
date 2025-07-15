---
title: "Problem 1"
description: ""
tags: ["idea", "idea1_BMA", "problems"]
category: "problems"
slug: "/idea/idea1_BMA/problems/problem_1.md"
createdAt: "2025-07-13T12:09:15"
updatedAt: "2025-07-13T20:42:50"
draft: false
---
# 🧩 Vấn đề:

> Nhân viên thao tác local → Làm sao để chủ biết mẻ nào được tạo, khi nào, ai làm?

### ✅ Giải pháp 1: Tạo nhật ký hoạt động (Activity Log)

**📌 Mô tả:**

- Mỗi thao tác quan trọng (tạo mẻ, nhập kho, xóa nguyên liệu...) đều ghi vào bảng ActivityLog
- Chủ xưởng có thể mở app → vào mục "Lịch sử hoạt động" để kiểm tra

**🛠 Cần thêm:**

```prisma
model ActivityLog {
  id        Int       @id @default(autoincrement())
  action    String    // "created batch", "updated stock", ...
  user      String    // Tên nhân viên (nếu có đăng nhập)
  detail    String?   // Ghi chú cụ thể (VD: "Mẻ IPA từ công thức #3")
  createdAt DateTime  @default(now())
}
```

**📲 Giao diện:**

```text
📅 10:24 AM – Quân tạo mẻ nấu IPA (60L) theo công thức #IPA202
📦 10:18 AM – Hồng nhập thêm 20kg malt Pilsner
```

### ✅ Giải pháp 2: Gửi thông báo (Notification)

**🛠 2 hướng triển khai:**

| Phương pháp             | Mô tả                                                    | Ưu điểm                          | Nhược điểm                     |
| ----------------------- | -------------------------------------------------------- | -------------------------------- | ------------------------------ |
| **Email notification**  | Gửi mail khi có sự kiện (tạo mẻ, sắp hết nguyên liệu...) | Dễ triển khai, phù hợp chủ xưởng | Cần mạng, dễ bị bỏ sót         |
| **Zalo / Telegram Bot** | Gửi thông báo trực tiếp qua chatbot                      | Gọn, realtime, dễ thấy           | Cần tạo bot, cấu hình đầu tiên |

**Ví dụ:**

- Khi nhân viên tạo mẻ mới:

  - 📣 [Brewing App] Quân vừa tạo mẻ IPA (60L) lúc 10:24 sáng

- Khi nguyên liệu xuống thấp:
  - ⚠️ Hoa Cascade chỉ còn 300g – dưới mức cảnh báo (500g)

### ✅ Giải pháp 3: Đồng bộ hóa thủ công hoặc bán tự động

Trong giai đoạn test local 2 tuần, bạn có thể:

- Thêm nút “Gửi báo cáo nhanh cho chủ”
- Nút này xuất file .json hoặc .csv liệt kê toàn bộ thao tác trong ngày
- Chủ có thể kiểm tra file từ Zalo/Gmail hoặc ứng dụng quản lý từ xa

### 🔄 Gợi ý kết hợp: Hoạt động nội bộ + Báo cáo định kỳ

| Thành phần        | Công nghệ                            | Lợi ích                          |
| ----------------- | ------------------------------------ | -------------------------------- |
| ActivityLog DB    | Prisma (bảng riêng)                  | Ghi lại mọi thao tác             |
| Gửi thông báo     | Nodemailer / Zalo bot / Telegram bot | Chủ nhận thông báo realtime      |
| Dashboard nhật ký | React UI + bảng log                  | Chủ xem mọi thay đổi trong tuần  |
| Báo cáo PDF / CSV | `json2csv` hoặc `pdfkit`             | Tổng hợp hoạt động mỗi ngày/tuần |

### 🧪 Trong giai đoạn test local (offline), khuyến nghị:

| Cách                                                       |
| ---------------------------------------------------------- |
| ✅ Ghi toàn bộ thao tác vào bảng `ActivityLog`             |
| ✅ Thêm UI xem nhật ký hoạt động trong dashboard           |
| ✅ Gửi báo cáo hằng ngày/tùy chọn qua email                |
| ✅ (Nếu có mạng) gửi cảnh báo quan trọng qua Zalo/Telegram |
