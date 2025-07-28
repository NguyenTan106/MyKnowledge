---
title: "Get Api Ingredients"
description: ""
tags: ["project-notes", "personal", "brewing-manger", "server", "api", "ingredient"]
category: "ingredient"
slug: "/project-notes/personal/brewing-manger/server/api/ingredient/get_api_ingredients.md"
createdAt: "2025-07-25T10:33:10"
updatedAt: "2025-07-26T06:36:22"
draft: false
---
# 🧩 Service
```ts
const getIngredientStatus = async (
  quantity: number,
  threshold: number
): Promise<string> => {
  if (quantity <= 0) return "Hết";
  if (quantity <= threshold) return "Sắp hết";
  return "Đủ";
};

const getAllIngredients = async (): Promise<{ message: string; data: any }> => {
  try {
    const data = await prisma.ingredient.findMany({
      orderBy: {
        id: "asc", // hoặc "desc" cho giảm dần
      },
      where: {
        isDeleted: false,
      },
    });
    if (data.length === 0) {
      return { message: "Chưa có nguyên liệu nào", data: [] };
    }
    const result = await Promise.all(
      data.map(async (i) => ({
        ...i,
        status: await getIngredientStatus(i.quantity, i.lowStockThreshold),
      }))
    );
    return {
      message: "Thành công",
      data: result,
    };
  } catch (e) {
    console.error(e);
    throw new Error("Lỗi khi truy vấn nguyên liệu");
  }
};
```
## 🔎 Mô tả chi tiết:
### 🧠 Mục tiêu:
Truy vấn tất cả nguyên liệu còn sử dụng, bổ sung thêm trạng thái tồn kho (`status`) cho mỗi nguyên liệu dựa vào `quantity` và `lowStockThreshold`.
### ✅ Bước xử lý:
1. Viết hàm `getIngredientStatus` để xử lí logic so sánh 2 tham số truyền vào `quantity` và `lowStockThreshold`
   - Nếu `quantity <= 0` → `"Hết"`
   - Nếu `quantity <= lowStockThreshold` → `"Sắp hết"`
   - Ngược lại → `"Đủ"`

2. Truy vấn nguyên liệu từ Prisma
   - Điều kiện:
     - `isDeleted: false` → chỉ lấy nguyên liệu còn hoạt động
   - Sắp xếp theo `id` tăng dần (`asc`)

3. Kiểm tra dữ liệu có rỗng hay không
   - Nếu không có nguyên liệu nào:
        ```
        {
            message: "Chưa có nguyên liệu nào",
            data: []
        }
        ```
4. Nếu có dữ liệu:
   - Duyệt qua từng nguyên liệu
   - Thêm trường `status`:
     - Sử dụng hàm `getIngredientStatus` và truyền 2 tham số `quantity` và `lowStockThreshold` để xử lí
   - Trả về kết quả dạng:
        ```json
        {
            "message": "Thành công",
            "data": [
                {
                "id": 1,
                "name": "Đường",
                "quantity": 10,
                "status": "Đủ",
                ...
                }
            ]
        }
        ```
### 💬 Đánh giá:
| **Tiêu chí**          | **Nhận xét**                                                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| ✅ Cách tổ chức        | Đúng chuẩn: tách riêng logic nghiệp vụ ra khỏi controller, dễ mở rộng và test.                                               |
| ✅ Xử lý response      | Trả về `message` và `data` rõ ràng, đúng theo chuẩn REST API thân thiện với frontend.                                        |
| ✅ Xử lý lỗi           | Có `try/catch`, ghi log đầy đủ khi lỗi xảy ra ở phía server.                                                                 |
| ✅ Bổ sung thông tin   | Bổ sung thêm `status` cho từng nguyên liệu giúp frontend dễ phân loại trực quan, nâng cao tính khả dụng.                     |
| ⚠️ Cần cải thiện nhỏ  | Có thể chuyển chuỗi `"Hết"`, `"Sắp hết"`, `"Đủ"` thành Enum để dễ bảo trì và tránh lỗi sai chính tả.                         |
| ⚠️ Có thể tối ưu thêm | Có thể gom logic `status` vào Prisma middleware hoặc computed field nếu tái sử dụng nhiều nơi và giảm lặp logic.             |
| ✅ Hiệu suất           | Sử dụng `Promise.all()` để xử lý song song việc gán `status` cho từng nguyên liệu – đảm bảo hiệu suất tốt khi danh sách lớn. |

___

# 🧩 Controller
```ts
const handleGetAllIngredients = async (req: Request, res: Response) => {
  try {
    const handle = await getAllIngredients();

    res.status(200).json(handle);
  } catch (e) {
    console.error("Lỗi trong controller handleGetAllIngredients:", e);
    res.status(500).json({
      message: "Lỗi server khi tìm nguyên liệu",
    });
  }
};
```
## 🔎 Mô tả chi tiết:
### 🧠 Mục tiêu:
Xử lý HTTP request từ client đến endpoint `GET /api/ingredients`, gọi service `getAllIngredients()` và trả kết quả JSON về cho frontend.

### ✅ Bước xử lý:
1. Gọi Service:
    ```ts
    const handle = await getAllIngredients();
    ```
   - Gọi hàm service truy vấn tất cả nguyên liệu (đã bao gồm xử lý logic & status).

2. Trả response thành công:

    ```ts
    res.status(200).json(handle);
    ```
   - Trả về HTTP 200 (OK)
   - Dữ liệu trả về gồm:
        ```json
        {
            "message": "Thành công",
            "data": [ ... ]
        }
        ```
3. Bắt lỗi tổng quát:
    ```ts
    catch (e) {
        console.error("Lỗi trong controller handleGetAllIngredients:", e);
        res.status(500).json({
            message: "Lỗi server khi tìm nguyên liệu",
        });
    }
    ```
   - Ghi log lỗi chi tiết lên console (giúp dễ debug)
   - Trả về HTTP 500 (Internal Server Error)

### 💬 Đánh giá:
| Tiêu chí             | Nhận xét                                                              |
| -------------------- | --------------------------------------------------------------------- |
| ✅ Cách tổ chức       | Đúng chuẩn: controller **không chứa logic nghiệp vụ**                 |
| ✅ Xử lý response     | Trả về JSON đúng chuẩn RESTful                                        |
| ✅ Xử lý lỗi          | Có bắt lỗi tổng quát, log rõ lỗi phía server                          |
| ⚠️ Cần cải thiện nhỏ | Có thể bổ sung thêm `next(error)` nếu dùng middleware xử lý lỗi chung |

___

### 📁 Route
```ts
import express from "express";
const router = express.Router();

import { handleGetAllIngredients } from "../controllers/CRUD_Controllers/CRUD_ingredient.controller";

const getAllIngredientsController = router.get(
  "/ingredients",
  handleGetAllIngredients
);

export {getAllIngredientsController};
```


### 🌐 Index (entry point)
```ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import {
  getAllIngredientsController,
} from "./routes/api_ingredient";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api", getAllIngredientsController);


app.listen(PORT, () => {
  console.log(`Brewing Manager backend running at http://localhost:${PORT}`);
});
```

## 🔍 Mô tả chi tiết
### 🎯 Mục tiêu
- Thiết lập đường dẫn API `/api/ingredients` để gọi tới controller xử lý `getAllIngredients`.
- Cấu hình app backend Express:
  - Cho phép CORS
  - Xử lý JSON body
  - Gắn các route theo nhóm `/api`
  - Chạy server tại port chỉ định

### ✅ Bước xử lý
**📌 Tại `Route`**
1. Tạo router bằng `express.Router()`.
2. Import controller `handleGetAllIngredients`.
3. Gán route `GET /ingredients` cho hàm controller.
4. Export router để dùng trong file `index.ts`.

**📌 Tại `Index`**
1. Khởi tạo app Express.
2. Nạp biến môi trường bằng `dotenv`.
3. Import route đã tạo (`getAllIngredientsController`).
4. Dùng` app.use(cors())` để cho phép truy cập từ frontend khác domain.
5. Dùng `express.json()` để xử lý các request có body dạng JSON.
6. Mount route tại `/api:` tạo endpoint đầy đủ `/api/ingredients`.
7. Mở server tại port khai báo (mặc định là 8080) và log URL lên console.

### 💬 Đánh giá
| Tiêu chí            | Nhận xét                                                                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ✅ Tổ chức rõ ràng   | Tách riêng từng phần (route, controller, index) rõ ràng theo kiến trúc MVC.                                                               |
| ✅ Cấu hình server   | Đã cấu hình CORS, xử lý JSON, dotenv hợp lý.                                                                                              |
| ✅ Định nghĩa route  | Gán đúng endpoint `/api/ingredients`, dễ mở rộng.                                                                                         |
| ✅ Kết nối đúng flow | `Route → Controller → Service` hoạt động thống nhất, không bị lặp logic.                                                                  |
| ⚠️ Có thể cải thiện | Nên gom router vào `router.ts` tập trung và dùng `app.use("/api", router)` thay vì export từng route một — giúp mở rộng nhiều router hơn. |
| ⚠️ Bảo mật          | Có thể bổ sung thêm middleware auth/token kiểm tra sau nếu cần bảo vệ route (tùy yêu cầu).                                                |