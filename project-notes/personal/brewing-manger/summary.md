---
title: "Summary"
description: ""
tags: ["project-notes", "personal", "brewing-manger"]
category: "brewing-manger"
slug: "/project-notes/personal/brewing-manger/summary.md"
createdAt: "2025-07-25T09:59:21"
updatedAt: "2025-07-28T13:45:47"
draft: false
---
## 📦 API Documentation (Tổng hợp tất cả các API đã tạo)
### Ingredient (Nguyên liệu)
| Method | Endpoint                                   | Mô tả                                    |
| ------ | ------------------------------------------ | ---------------------------------------- |
| GET    | `/api/ingredients`                         | [Lấy tất cả nguyên liệu](server/api/ingredient/get_api_ingredients.md)                   |
| GET    | `/api/ingredient/:id`                     | [Lấy nguyên liệu theo ID](server/api/ingredient/get_api_ingredient_id.md)                  |
| POST   | `/api/ingredient`                         | [Tạo nguyên liệu mới](server/api/ingredient/post_api_ingredient.md)                      |
| PUT    | `/api/ingredient/:id`                     | [Cập nhật nguyên liệu theo ID](server/api/ingredient/put_api_ingredient_id.md)            |
| DELETE | `/api/ingredient/:id`                     | [Xóa nguyên liệu theo ID](server/api/ingredient/delete_api_ingredient_id.md)                  |
| GET    | `/api/pagination-ingredient` | [Phân trang nguyên liệu theo trang](server/api/ingredient/get_api_pagination_ingredient.md)        |
| GET    | `/api/total-ingredients`                   | [Tổng số nguyên liệu hiện có trong kho](server/api/ingredient/get_api_total_ingredients.md)     |
| GET    | `/api/total-ingredients-stock-status`      | [Tổng nguyên liệu theo trạng thái tồn kho](server/api/ingredient/get_total_ingredients_stock_status.md)  |

___

### Type (Loại nguyên liệu)
| Method | Endpoint         | Mô tả                                                                 |
| ------ | ---------------- | --------------------------------------------------------------------- |
| GET    | `/api/types`     | [Lấy tất cả loại nguyên liệu](server/api/ingredient/type/get_api_types.md)       |
| POST   | `/api/type`     | [Tạo loại nguyên liệu mới](server/api/ingredient/type/post_api_type.md)          |
| DELETE | `/api/type/:id` | [Xóa loại nguyên liệu theo ID](server/api/ingredient/type/delete_api_type_id.md) |


___

### Batch (Mẻ nấu)
| Method | Endpoint                               | Mô tả                                                                                   |
| ------ | -------------------------------------- | --------------------------------------------------------------------------------------- |
| GET    | `/api/batches`                         | [Lấy tất cả mẻ](server/api/batch/get_api_batches.md)                                    |
| GET    | `/api/batch/:id`                     | [Lấy mẻ theo ID](server/api/batch/get_api_batch_id.md)                                  |
| POST   | `/api/batch`                         | [Tạo mẻ mới](server/api/batch/post_api_batch.md)                                        |
| PUT    | `/api/batch/:id`                     | [Cập nhật mẻ theo ID](server/api/batch/put_api_batch_id.md)                             |
| DELETE | `/api/batch/:id`                     | [Xóa mẻ theo ID](server/api/batch/delete_api_batch_id.md)                               |
| GET    | `/api/pagination-batch` | [Phân trang mẻ theo trang](server/api/batch/get_api_pagination_batches.md)              |
| GET    | `/api/total-batches`                   | [Tổng số mẻ đã tạo](server/api/batch/get_api_total_batches.md)                          |
| GET    | `/api/total-batches-week-month-year`   | [Tổng số mẻ theo tuần / tháng / năm](server/api/batch/get_api_total_batches_by_time.md) |

___

### Recipe (Công thức)
| Method | Endpoint                               | Mô tả                                                                             |
| ------ | -------------------------------------- | --------------------------------------------------------------------------------- |
| GET    | `/api/recipes`                         | [Lấy tất cả công thức](server/api/recipe/get_api_recipes.md)                      |
| GET    | `/api/recipe/:id`                     | [Lấy công thức theo ID](server/api/recipe/get_api_recipe_id.md)                   |
| POST   | `/api/recipe`                         | [Tạo công thức mới](server/api/recipe/post_api_recipe.md)                         |
| PUT    | `/api/recipe/:id`                     | [Cập nhật công thức theo ID](server/api/recipe/put_api_recipe_id.md)              |
| DELETE | `/api/recipe/:id`                     | [Xóa công thức theo ID](server/api/recipe/delete_api_recipe_id.md)                |
| GET    | `/api/pagination-recipe` | [Phân trang công thức](server/api/recipe/get_api_pagination_recipes.md)           |
| GET    | `/api/total-recipes`                   | [Tổng số công thức hiện có](server/api/recipe/get_api_total_recipes.md)           |
| GET    | `/api/top-5-recipes-most-used`         | [Top 5 công thức sử dụng nhiều nhất](server/api/recipe/get_api_top5_most_used.md) |
| GET    | `/api/top-5-recipes-week-month-year`   | [Top 5 công thức cập nhật gần đây](server/api/recipe/get_api_top5_by_time.md)     |

___

### ActivityLog (Nhật kí hoạt động)
| Method | Endpoint                               | Mô tả                                                                             |
| ------ | -------------------------------------- | --------------------------------------------------------------------------------- |
| GET    | `/api/activity-logs`                         | [Lấy tất cả nhật kí hoạt động](server/api/activityLog/get_api_activityLogs.md)                      |
| GET    | `/api/activity-log/:id`                     | [Lấy nhật kí hoạt động theo ID](server/api/activityLog/get_api_activityLog_id.md)                   |
| GET    | `/api/pagination-activity-log` | [Phân trang nhật kí hoạt động](server/api/activityLog/get_api_pagination_activityLog.md)           |

___

### User (Người dùng)
| Method | Endpoint                               | Mô tả                                                                             |
| ------ | -------------------------------------- | --------------------------------------------------------------------------------- |
| GET    | `/api/users`                         | [Lấy tất cả người dùng](server/api/user/get_api_users.md)                      |
| GET    | `/api/user/:id`                     | [Lấy người dùng theo ID](server/api/user/get_api_user_id.md)                   |
| POST | `/api/create-user`                     | [Thêm người dùng mới](server/api/user/post_api_user.md) |
| POST | `/api/user-login`                     | [Đăng nhập](server/api/user/login_api_user.md) |
| PUT | `/api/update-user/:id`                     | [Cập nhật người dùng theo ID](server/api/user/put_api_user_id.md) |
| DELETE | `/api/delete-user/:id`                     | [Xóa người dùng theo ID](server/api/user/delete_api_user_id.md) |


___
### IngredientImport (Nhập kho)
| Method | Endpoint                               | Mô tả                                                                             |
| ------ | -------------------------------------- | --------------------------------------------------------------------------------- |
| POST    | `/api/ingredient-imports`                         | [Nhập kho nguyên liệu](server/api/ingredientImport/post_api_ingredientImports.md)                      |