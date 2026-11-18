# Git và backup — Hướng dẫn thực hành

## 1. Kiểm tra trước khi làm

Chạy ở thư mục gốc project:

```bash
git status
git branch --show-current
git log -1 --oneline
```

Trước khi thay đổi một scene hoặc nhóm component, kiểm tra file nào đang có thay đổi chưa lưu. Không cho nhiều coding agents chỉnh cùng một file cùng lúc.

## 2. Commit sau khi đã kiểm tra

```bash
git status
git diff
git add docs/ content/templates/
git diff --cached --check
git diff --cached --stat
git commit -m "docs: update video production guides and templates"
git push origin main
```

Lệnh trên là **ví dụ khi cập nhật tài liệu**, và chỉ đúng nếu bạn đang làm trên branch `main`. Với code video, hãy `git add` đúng các file đã thay đổi và push lên branch hiện tại. Không dùng `git add .` khi chưa rà soát file media, token hoặc dữ liệu riêng tư.

Có thể tạo branch riêng cho một video khi working tree sạch:

```bash
git switch -c video/001-load-balancer
```

Không dùng `git push --force`, `git reset --hard` hoặc xóa branch để “sửa nhanh” khi chưa hiểu hậu quả.

## 3. Những thứ lưu bằng Git

**Nên lưu:** source React/TypeScript, theme, component, scene, Markdown research/script/storyboard, metadata, template, thông tin license và file cấu hình.

**Không nên lưu:** `node_modules/`, `out/`, cache, `.env`, API keys, MP4/WAV lớn nếu không có Git LFS và kế hoạch lưu trữ cụ thể.

## 4. Backup media và file sản xuất

Sau mỗi tập, giữ các tài liệu sau ở ổ cứng hoặc cloud phù hợp:

- WAV gốc, WAV đã xử lý và session Audacity (nếu có).
- Ảnh/SVG nguồn, nhạc/SFX cùng bằng chứng license.
- Project Kdenlive (nếu dùng), thumbnail bản thiết kế và bản xuất.
- Final MP4, SRT, script, storyboard và metadata.

GitHub **không thay thế** backup media dung lượng lớn. Đặt thư mục theo mã tập, ví dụ `001-load-balancer`.

## 5. Chia sẻ source project

Không cần gửi `node_modules` hoặc render nặng. Chia sẻ source code, `package.json`, `package-lock.json`, docs và cấu trúc project; phía nhận có thể chạy `npm ci` để khôi phục dependency trong môi trường tương thích. Kiểm tra ZIP trước khi gửi để tránh lộ `.env`, secret và file riêng tư.
