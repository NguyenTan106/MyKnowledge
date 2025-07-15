## ✅ 🎯 Mục tiêu cuối:
***Tạo giao diện hiển thị danh sách nguyên liệu (gồm thao tác, trạng thái tồn kho, ngày nhập...).***

## ✅ 📋 Phân rã thành các subtasks:
### 🔹 1. Cơ sở dữ liệu & API
  - 1.1. Thiết kế schema Prisma: Ingredient (đã có)
  - 1.2. Tạo API GET /ingredients để lấy danh sách nguyên liệu
  - 1.3. (Tuỳ chọn) API phân trang / lọc theo loại / tên

___

### 🔹 2. Giao diện chính - IngredientList.tsx
  - 2.1. Tạo component IngredientList.tsx
  - 2.2. Thiết kế bảng với các cột:
    ```
    Tên | Loại | Đơn vị | Số lượng | Ngày nhập | Trạng thái | Thao tác
    ```
  - 2.3. Hiển thị danh sách từ props hoặc fetch từ API

___

### 🔹 3. Component con
  - 3.1. IngredientRow.tsx: Hiển thị 1 dòng nguyên liệu
  - 3.2. IngredientStatusBadge.tsx: Hiển thị trạng thái tồn kho (Đủ / Sắp hết)
  - 3.3. ActionButtons.tsx: Các nút Xem, Sửa, Xóa

___

### 🔹 4. Tính năng tương tác
  - 4.1. Xem chi tiết (hiện popup / drawer với thông tin nguyên liệu)
  - 4.2. Sửa nguyên liệu (mở form có sẵn thông tin)
  - 4.3. Xóa nguyên liệu (confirm dialog → gọi API)

___

### 🔹 5. Tính năng bổ sung
  - 5.1. Tìm kiếm theo tên nguyên liệu
  - 5.2. Bộ lọc theo loại (malt / hop / yeast / other)
  - 5.3. Hiển thị màu hoặc icon trạng thái trực quan
  - 5.4. Responsive cho mobile/tablet
  - 5.5. Hiển thị loading / empty state / error