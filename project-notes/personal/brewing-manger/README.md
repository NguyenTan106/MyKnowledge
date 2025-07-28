# 🛠️ Mô tả chức năng phần mềm quản lý sản xuất bia thủ công (Brewing Manager)
## 🎯 Tổng quan hệ thống
- Phần mềm Brewing Manager là hệ thống quản lý toàn bộ quy trình sản xuất bia thủ công, được thiết kế nhằm hỗ trợ doanh nghiệp kiểm soát các yếu tố cốt lõi trong quy trình sản xuất, từ nguyên liệu đầu vào đến công thức, mẻ nấu, người dùng và lịch sử hoạt động.

- Hệ thống hoạt động dựa trên mô hình web-based API, dễ dàng tích hợp với frontend hoặc ứng dụng quản lý nội bộ của doanh nghiệp.

## 🔍 Hệ thống hiện tại hỗ trợ các chức năng chính sau:
### 🧾 1. Quản lý nguyên liệu (Ingredients)
- Theo dõi toàn bộ nguyên liệu đầu vào dùng cho sản xuất bia.

- Hỗ trợ:
  - Tạo, cập nhật, xóa, xem chi tiết từng nguyên liệu.
  - Phân loại nguyên liệu theo loại (Type).
  - Tự động tính trạng thái tồn kho dựa trên số lượng và hạn mức (Hết hàng / Sắp hết / Đủ hàng).
  - Phân trang dữ liệu và thống kê tổng số nguyên liệu hiện có.
  - Thống kê số lượng nguyên liệu theo trạng thái kho.

### 🧾 2. Nhập kho nguyên liệu (Ingredient Import)
  - Ghi nhận việc nhập kho nguyên liệu mới.
  - Hỗ trợ tạo phiếu nhập nguyên liệu từ nhà cung cấp, phục vụ cho quản lý tồn kho.

### 🧪 3. Quản lý công thức sản xuất (Recipes)
  - Tạo và lưu trữ các công thức nấu bia theo từng loại bia/mẻ.
  - Chức năng bao gồm:
    - Tạo, cập nhật, xóa và xem chi tiết công thức.
    - Phân trang danh sách công thức.
    - Thống kê top 5 công thức sử dụng nhiều nhất.
    - Thống kê top 5 công thức gần đây theo thời gian.

### 🍺 4. Quản lý mẻ nấu (Batches)
- Theo dõi toàn bộ quy trình sản xuất mẻ bia theo từng lần nấu.
- Bao gồm:
  - Tạo, cập nhật, xóa và xem chi tiết mẻ nấu.
  - Phân trang danh sách mẻ.
  - Thống kê tổng số mẻ và số lượng theo tuần / tháng / năm.
- Giúp quản lý sản lượng, lịch sử nấu, và kế hoạch sản xuất theo thời gian.

### 👥 5. Quản lý người dùng (Users)
- Hệ thống hỗ trợ quản lý người dùng nội bộ:
  - Thêm mới, cập nhật, xóa người dùng.
  - Đăng nhập hệ thống (authentication).
  - Phân biệt quyền truy cập qua vai trò (super admin, admin, ...).

### 📜 6. Nhật ký hoạt động (Activity Log)
- Ghi lại toàn bộ hành động quan trọng trong hệ thống:
  - Ai đã làm gì, lúc nào (theo dõi thay đổi dữ liệu).
  - Hỗ trợ truy xuất theo ID và phân trang danh sách log.
- Đảm bảo tính minh bạch, truy vết và bảo mật hệ thống.

### 📈 Lợi ích chính của hệ thống
| Tính năng                    | Lợi ích                             |
| ---------------------------- | ----------------------------------- |
| Quản lý nguyên liệu chặt chẽ | Hạn chế thiếu hụt / tồn kho dư thừa |
| Lưu trữ công thức sản xuất   | Đảm bảo nhất quán giữa các mẻ       |
| Theo dõi từng mẻ nấu         | Quản lý chất lượng và sản lượng     |
| Phân quyền người dùng        | An toàn, dễ kiểm soát truy cập      |
| Ghi log toàn bộ hoạt động    | Truy xuất sai sót và đảm bảo audit  |
| API thống kê linh hoạt       | Hỗ trợ kết nối dashboard và báo cáo |

### 🔄 Tính mở rộng và tương lai
- Có thể dễ dàng mở rộng để tích hợp:
  - Quản lý chi nhánh, nhà cung cấp.
  - Theo dõi sản phẩm đầu ra (chai bia, thùng bia).
  - Tích hợp mã QR / barcode vào dây chuyền.
  - Dashboard trực quan / báo cáo PDF.
  - Cảnh báo tự động khi nguyên liệu sắp hết.