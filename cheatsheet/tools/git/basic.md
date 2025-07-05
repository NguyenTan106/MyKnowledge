---
title: "Basic"
description: ""
tags: ["cheatsheet", "tools", "git"]
category: "git"
slug: "/cheatsheet/tools/git/basic.md"
createdAt: "2025-07-03T15:53:03"
updatedAt: "2025-07-04T17:41:08"
draft: false
---

# 🧩 Git Cheatsheet

Tổng hợp nhanh các lệnh Git thường dùng trong quá trình làm việc. Phù hợp cho người mới và cả khi quên cú pháp cần tra cứu nhanh.

## 📦 1. Cấu hình ban đầu

```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"
git config --list                      # Xem cấu hình hiện tại
```

## 📁 2. Khởi tạo và clone

```bash
git init                              # Khởi tạo Git repo mới
git clone <url>                       # Tải project từ GitHub
git clone <url> <folder>             # Tải và đổi tên thư mục
```

## 📄 3. Trạng thái và theo dõi thay đổi

```bash
git status                            # Kiểm tra trạng thái file
git add <file>                        # Thêm 1 file vào stage
git add .                             # Thêm tất cả file
git restore --staged <file>          # Bỏ file khỏi stage
```

## 💾 4. Commit

```bash
git commit -m "Nội dung commit"      # Commit có message
git commit -am "msg"                 # Add + commit (chỉ file đã được track)
```

## 🌿 5. Branch – Nhánh

```bash
git branch                            # Xem các nhánh
git branch <ten-nhanh>                # Tạo nhánh mới
git checkout <ten-nhanh>              # Chuyển nhánh
git checkout -b <ten-nhanh>           # Tạo và chuyển nhánh
```

## 🔄 6. Pull & Push

```bash
git pull                              # Tải code mới từ remote
git push                              # Đẩy code lên remote
git push -u origin <ten-nhanh>        # Push nhánh mới lên origin
```

## ⚔️ 7. Merge & Rebase

```bash
git merge <ten-nhanh>                 # Gộp nhánh vào hiện tại
git rebase main                       # Rebase nhánh hiện tại theo main
```

## 💣 8. Undo / Rollback

```bash
git log                               # Xem lịch sử commit
git checkout <commit-id>              # Quay về commit cụ thể
git revert <commit-id>                # Tạo commit đảo ngược
git reset --hard <commit-id>          # Quay về commit (mất toàn bộ thay đổi)
```

## 🧹 9. Dọn dẹp & Khắc phục lỗi

```bash
git stash                             # Lưu tạm thay đổi
git stash pop                         # Lấy lại thay đổi đã stash
git clean -fd                         # Xoá file/folder không track
git restore <file>                    # Khôi phục file về trạng thái trước
```

## 🖥️ 10. Remote

```bash
git remote -v                         # Xem remote hiện tại
git remote add origin <url>           # Thêm remote mới
git remote remove origin              # Xoá remote
```

## 💡 Mẹo thực chiến

| Tình huống                   | Mẹo xử lý nhanh                                   |
| ---------------------------- | ------------------------------------------------- |
| 🧪 Test nhánh mới            | `git checkout -b feature-x`                       |
| 💻 Đẩy lên nhánh riêng       | `git push -u origin feature-x`                    |
| ⚔️ Conflict khi pull         | Sửa file bị conflict → `git add .` → `git commit` |
| 🧼 Reset khi hỏng nặng       | `git reset --hard origin/main` (cẩn thận)         |
| 🔒 Gặp lỗi auth (GitHub mới) | Dùng HTTPS + Personal Access Token (PAT)          |
| 🔁 Xem nhánh hiện tại        | `git branch --show-current`                       |
| 📋 Lỡ add nhầm file          | `git restore --staged <file>`                     |
