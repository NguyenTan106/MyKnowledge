Ingredient
- chức năng xóa
  - cập nhật isDeleted = true
  - các bảng liên quan
    - Recipe:
      - Xóa nguyên liệu khỏi công thức
    - Batch:
      - TH1: Xóa khi mẻ chưa được tạo
        - Hiện công thức mới nhất
      - TH2: Xóa khi mẻ đã được tạo
        - Hiện `đã xóa` kế bên tên của nguyên liệu
    - ẩn công thức đã xóa ở chức năng:
      - Lấy tất cả nguyên liệu
      - Lấy nguyên liệu theo ID
      - Lẩy tất cả nguyên liệu theo trang đã phân trang

Recipe
- chức năng xóa
  - cập nhật isDeleted = true
  - các bảng liên quan
    - Batch:
      - TH1: Xóa khi mẻ chưa được tạo
        - Không hiện không thức đã xóa
      - TH2: Xóa khi mẻ đã được tạo
        - Hiện `đã xoá` kế bên tên của công thức
  - ẩn công thức đã xóa ở chức năng:
    - Lấy tất cả công thức
    - Lấy công thức theo ID
    - Lẩy tất cả công thức theo trang đã phân trang

Batch
- chức năng xóa
  - cập nhật trạng thái status = cancel (hủy)
  - không cần ẩn công thức đã hủy