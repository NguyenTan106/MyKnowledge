---
title: "Idea1 MPM (Material & Production Manager)"
description: ""
tags: ["idea"]
category: "idea"
slug: "/idea/idea1_MPM (Material & Production Manager).md"
createdAt: "2025-07-11T12:14:36"
updatedAt: "2025-07-11T12:29:42"
draft: false
---
# 🎯 Ý tưởng 1: Phần mềm quản lý nguyên liệu & sản xuất

## 🖥️ Giao diện chính (Dashboard)

**Thanh điều hướng trái (sidebar):**

- 📦 Nguyên liệu
- 🍺 Mẻ nấu
- 📊 Thống kê
- 📅 Lịch sản xuất
- ⚙️ Cài đặt

___

## 📦 1. Module: Quản lý nguyên liệu

### Giao diện: Danh sách nguyên liệu

| Tên nguyên liệu | Đơn vị tính | Số lượng tồn | Cảnh báo khi dưới | Ngày nhập cuối |
| --------------- | ----------- | ------------ | ----------------- | -------------- |
| Malt Pilsner    | kg          | 48           | 30                | 05/07/2025     |
| Hoa bia Cascade | g           | 850          | 500               | 01/07/2025     |
| Men US-05       | gói         | 15           | 5                 | 30/06/2025     |

👉 **Tính năng:**

- Nút “➕ Thêm nguyên liệu mới”
- Nút “📥 Nhập kho” để cập nhật thêm số lượng
- Tự động hiện cảnh báo 🔴 nếu số lượng dưới ngưỡng

___


## 🍺 2. Module: Quản lý mẻ nấu (Batch Management)

### Giao diện: Danh sách mẻ nấu gần đây

| Mẻ    | Loại bia | Ngày bắt đầu | Tình trạng   | Sản lượng | Ghi chú               |
| ----- | -------- | ------------ | ------------ | --------- | --------------------- |
| #B001 | IPA      | 01/07/2025   | Đang lên men | 60 lít    | Dùng men US-05        |
| #B002 | Stout    | 03/07/2025   | Đang ủ lạnh  | 50 lít    | Thêm hoa Cascade cuối |

👉 **Tính năng:**

- Nhấn vào từng mẻ để xem **chi tiết quy trình**
- Tự động trừ kho nguyên liệu khi bắt đầu mẻ
- Có thể **ghi chú từng bước**, ví dụ:
  - Nấu (Boiling): 90 phút
  - Lên men chính: 10 ngày
  - Ủ lạnh: 8 ngày

___

## 📊 3. Module: Thống kê tồn kho & lịch sử sản xuất

- **Biểu đồ cột**: Nguyên liệu sắp hết
- **Biểu đồ tròn**: Tỷ lệ nguyên liệu sử dụng theo tháng
- **Biểu đồ timeline**: Các mẻ nấu theo tiến trình

___

## 📅 4. Lịch sản xuất (Production Calendar)

- Hiển thị lịch từng tháng với các mốc:
  - Ngày nấu
  - Ngày lên men kết thúc
  - Ngày đóng chai dự kiến
- Có thể **đặt lịch mẻ nấu mới** → chọn nguyên liệu → phần mềm gợi ý đủ/thiếu nguyên liệu

___

## ⚙️ 5. Cài đặt và quy trình

- Định nghĩa **công thức nấu bia** (đặt trước): tên, nguyên liệu, bước nấu
- Tự động áp dụng khi tạo mẻ mới
- Tùy chỉnh **định mức nguyên liệu**

___


## 🔁 Quy trình hoạt động mô phỏng

1. Bạn nhập danh sách nguyên liệu vào phần mềm
2. Khi muốn bắt đầu nấu 1 mẻ mới, bạn nhấn **"Tạo mẻ nấu"** → chọn công thức → hệ thống:
   - Kiểm tra kho có đủ nguyên liệu không
   - Trừ kho tương ứng
   - Tạo bản ghi mẻ mới trong hệ thống
3. Trong quá trình nấu, bạn có thể cập nhật tiến trình (ví dụ: đã lên men 3 ngày)
4. Sau khi hoàn thành, bạn đóng mẻ → ghi nhận sản lượng → lưu trữ lịch sử
5. Các nguyên liệu cạn kiệt sẽ hiển thị trên dashboard để nhắc nhập hàng

___


## ✅ Ưu điểm của hệ thống

- Thay thế file Excel thủ công
- Biết chính xác mình còn gì để nấu, thiếu gì để mua
- Quản lý quy trình từng mẻ giúp kiểm soát chất lượng
- Dễ mở rộng khi có thêm nhân viên hoặc tăng quy mô
