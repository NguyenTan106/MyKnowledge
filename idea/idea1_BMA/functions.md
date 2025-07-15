---
title: "Functions"
description: ""
tags: ["idea", "idea1_BMA"]
category: "idea1_BMA"
slug: "/idea/idea1_BMA/functions.md"
createdAt: "2025-07-13T11:57:55"
updatedAt: "2025-07-13T20:43:17"
draft: false
---
## ✅ Tóm tắt theo thứ tự ưu tiên triển khai:

| Ưu tiên | Tên chức năng                     | Trạng thái                |
| ------- | --------------------------------- | ------------------------- |
| 1       | Quản lý nguyên liệu               | 🔧 Bắt đầu                |
| 2       | Tạo & theo dõi mẻ nấu             | ✅ Cần hoàn chỉnh logic   |
| 3       | Công thức nấu bia                 | ✅ Có cấu trúc DB         |
| 4       | Lịch sản xuất                     | ⏳ Sau khi có batch       |
| 5       | Thống kê tồn kho / sản xuất       | ⏳ Sau khi có đủ dữ liệu  |
| 6       | Backup/Import dữ liệu             | 🔧 Đề xuất giai đoạn test |
| 7       | Người dùng & phân quyền (nếu cần) | ⚪ Giai đoạn mở rộng      |

---

## 🥇 1. Quản lý nguyên liệu (📦 Ingredient Management) – Cốt lõi

### ✅ Mục tiêu:

- Biết còn bao nhiêu malt, men, hoa bia trong kho
- Cảnh báo khi gần hết để kịp nhập hàng

### 🔧 Chức năng:

- Thêm/sửa/xóa nguyên liệu
- Cập nhật nhập kho
- Cảnh báo khi dưới ngưỡng lowStockThreshold
- Xem lịch sử nhập, ghi chú nguyên liệu
- Tìm kiếm nguyên liệu nhanh

## 🥈 2. Quản lý mẻ nấu (🍺 Batch Management) – Vận hành

### ✅ Mục tiêu:

- Theo dõi từng mẻ nấu: loại bia, tình trạng, tiến trình
- Trừ kho đúng nguyên liệu mỗi mẻ

### 🔧 Chức năng:

- Tạo mẻ nấu mới từ công thức
- Tự động trừ nguyên liệu trong kho
- Theo dõi trạng thái (boiling → fermenting → done)
- Ghi chú quy trình (ngày bắt đầu, ngày đóng chai...)
- Liên kết với công thức

## 🥉 3. Quản lý công thức bia (📖 Recipe Management) – Chuẩn hóa sản xuất

### ✅ Mục tiêu:

- Lưu công thức nấu bia chuẩn, không phụ thuộc vào trí nhớ
- Dễ dùng lại cho nhiều mẻ khác nhau

### 🔧 Chức năng:

- Tạo/sửa/xem công thức
- Định nghĩa nguyên liệu + định lượng
- Hướng dẫn các bước nấu (text/markdown)
- Gắn công thức với mẻ

## 4️⃣ 4. Lịch sản xuất (📅 Production Calendar) – Điều phối

### ✅ Mục tiêu:

- Biết khi nào nên nấu, khi nào kết thúc lên men
- Lập kế hoạch sản xuất ngắn hạn

### 🔧 Chức năng:

- Lịch dạng tháng/tuần
- Hiển thị tiến trình từng mẻ
- Gợi ý ngày rã đông men, lên men xong, đóng chai
- Lên lịch nấu mẻ mới

## 5️⃣ 5. Thống kê (📊 Analytics) – Hiểu và tối ưu

### ✅ Mục tiêu:

- Biết được sử dụng nguyên liệu ra sao, chi phí cao ở đâu

### 🔧 Chức năng:

- Biểu đồ tồn kho nguyên liệu
- Tỷ lệ sử dụng từng loại nguyên liệu
- Tổng sản lượng từng loại bia
- Xu hướng sản xuất theo thời gian

## 6️⃣ 6. Sao lưu & khôi phục dữ liệu (💾 Backup/Restore) – An toàn

### ✅ Mục tiêu:

- Tránh mất dữ liệu, dễ di chuyển giữa máy khác

### 🔧 Chức năng:

- Export/import nguyên liệu, mẻ nấu, công thức (JSON hoặc CSV)
- Lịch sử sao lưu

## 7️⃣ 7. Người dùng & phân quyền (🔐 User Roles – Tuỳ chọn sau)

### ✅ Mục tiêu:

- Tách quyền: chủ xưởng, nhân viên kho, nấu bia...

### 🔧 Chức năng:

- Đăng nhập cơ bản (email/password hoặc không cần nếu single-user)
- Phân quyền truy cập theo vai trò

## 🧠 Mở rộng (Giai đoạn sau)

| Mô-đun             | Mục tiêu                                           |
| ------------------ | -------------------------------------------------- |
| AI gợi ý công thức | Tự động đề xuất thay đổi nguyên liệu/hương vị      |
| Dự báo nguyên liệu | Tự tính lượng cần nhập dựa trên lịch sản xuất      |
| IoT/cảm biến       | Gắn nhiệt kế, pH sensor để theo dõi mẻ nấu tự động |
| Mobile version     | Quản lý & nhập kho từ điện thoại                   |
