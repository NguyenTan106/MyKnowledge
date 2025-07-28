# Các bước để thực hiện được chức năng phân quyền người dùng
## 🔐 1. Thiết kế CSDL phân quyền
## 🧮 2. Tạo API đăng nhập và sinh JWT
## ✅ 3. Lưu JWT ở frontend
## 🔍 4. Tạo middleware xác thực ở backend
## 🛡️ 5. Tạo middleware phân quyền
## 🧭 6. Tạo component RequireAuth trên frontend
## 🔁 7. Bảo vệ route bằng RequireAuth
## 🧩 8. Hiển thị UI tương ứng với role

## 🔚 Tổng kết
| Bước | Mô tả                               |
| ---- | ----------------------------------- |
| 1.   | Thiết kế role trong CSDL            |
| 2.   | API đăng nhập trả JWT               |
| 3.   | Lưu token ở frontend                |
| 4.   | Middleware `authenticate` (backend) |
| 5.   | Middleware `requireRole` (backend)  |
| 6.   | Component `RequireAuth` (frontend)  |
| 7.   | Bảo vệ routes bằng `RequireAuth`    |
| 8.   | Hiển thị UI tùy theo quyền          |


1. Tạo CSDL Prisma
```prisma
model User {
  id        Int      @id @default(autoincrement())
  username  String   @unique
  password  String // hashed password
  role      Role // enum: 'SUPER_ADMIN' | 'ADMIN'
  branch    String? // tên chi nhánh, chỉ dành cho ADMIN
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  isDeleted Boolean  @default(false)
}

enum Role {
  SUPER_ADMIN
  ADMIN
}
```
2. Tạo API đăng nhập
Và trả ra kết quả dạng này
```ts
    return {
      message: "Đăng nhập thành công",
      data: token,
    };
```
3. Sử dụng token đó lưu vào localStorage
4. Tạo middleware để xác tực token
   1. Nhận các trường id, username, password từ frontend
    (Dùng jwt.sign(data, JWT_SECRET, { expiresIn: "7d" }) ở backend để decode
      1. Trong đó data là dữ liệu các trường từ frontend
      2. Ngày hết hạn của token đó
      3. Và dùng JWT_SECRET để xác thực cho phép token đó được truy cập vào dữ liệu
    => Nó sẽ trả ra một chuỗi token đã được decode gồm 3 phần trên) phần này được viết khi tạo api login
    2. Và tiếp theo sẽ lấy cái chuỗi được decode từ api login vào dùng jwt.verify(token, JWT_SECRET)
    => Hàm này dùng để kiểm tra xem trong token này nó có được kí bằng JWT_SECRET hay không

5. Tạo middleware để phân quyền cho các api
6. Tạo component RequireAuth để bảo về route (cần phải đăng nhập hoặc có quyền đặc biệt thì mới vào được trang)
7. Hiển thị ui tương ứng với role


Các bước tôi đã làm
1. Tạo logic xử login (service)
   - Trả ra dữ liệu cùng với token đã ký từ jwt.sign
2. Tạo controller để xử lí kết quả từ client body (username, password)
   - Trả ra kết quả dạng json (message, token: token, data)
3. Viết route api /user-login