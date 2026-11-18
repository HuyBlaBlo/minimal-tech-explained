# Quy trình sản xuất video — Tổng quan

Tài liệu này mô tả quy trình **lặp lại cho mỗi video** của kênh Minimal Tech Explainer. Một project Remotion được dùng chung cho cả kênh; mỗi video có một thư mục nội dung riêng. Muốn thao tác chi tiết, mở [VIDEO_PRODUCTION_STEP_BY_STEP.md](VIDEO_PRODUCTION_STEP_BY_STEP.md).

## Tiêu chuẩn đầu ra

- Video tiếng Anh, không lộ mặt, chủ đề công nghệ / System Design.
- Thời lượng mục tiêu: **3–5 phút**, xác định bằng voice-over thực tế.
- Video: **1920 × 1080**, **30 FPS**, **MP4 H.264**.
- Thumbnail: **1280 × 720**. Subtitle: **SRT** (nếu dùng phụ đề rời).
- Nội dung kỹ thuật phải được kiểm chứng; animation phải khớp lời giải thích.

## Các bước thực hiện

| Bước | Việc cần làm | Đầu ra |
|---|---|---|
| 1 | Chọn chủ đề, tạo folder tập mới | `content/NNN-topic/` |
| 2 | Nghiên cứu, lưu nguồn, kiểm chứng claim | `research.md` |
| 3 | Viết và duyệt kịch bản tiếng Anh | `script.md` |
| 4 | Luyện phát âm, chia lời thoại thành đoạn | Script đọc được, tự nhiên |
| 5 | Làm storyboard theo từng cảnh | `storyboard.md` |
| 6 | Chuẩn bị asset và giấy phép sử dụng | `assets/`, `assets-license.md` |
| 7 | Triển khai từng scene bằng Remotion, preview và sửa | Code scene của tập |
| 8 | Thu WAV, xử lý giọng và ghi thời lượng thật | `voice/*.wav` |
| 9 | Đồng bộ animation, lời đọc, nhạc/SFX | Timeline hoàn chỉnh |
| 10 | Tạo và kiểm tra phụ đề | `NNN-topic.srt` |
| 11 | Render, nghe và xem toàn bộ MP4 | `out/NNN-topic-final.mp4` |
| 12 | Tạo thumbnail, tiêu đề, mô tả, chapters | `metadata.md`, thumbnail |
| 13 | Kiểm tra chất lượng và bản quyền | `qa.md` |
| 14 | Đăng video và đánh giá kết quả | `analytics.md` |

Được phép thu âm thử sớm để ước lượng nhịp đọc, nhưng **chỉ thu giọng chính thức sau khi chốt script**. Thời lượng scene cuối cùng cần khớp audio đã thu.

## Cấu trúc một tập

```text
content/
├── templates/
└── 001-load-balancer/
    ├── research.md
    ├── script.md
    ├── storyboard.md
    ├── metadata.md
    ├── assets-license.md
    ├── qa.md
    ├── analytics.md
    ├── voice/
    └── assets/
```

- `content/`: hồ sơ nội dung và tài nguyên gốc.
- `src/components/`, `src/scenes/`, `src/compositions/`: giao diện, scene và composition Remotion.
- `public/`: asset được Remotion đọc bằng `staticFile()`.
- `out/`: file đã render; không đưa render nặng lên Git.

## Nguyên tắc làm việc

1. Chỉ có **một repo Remotion**, không khởi tạo project mới cho từng tập.
2. Research và script phải được duyệt trước khi viết animation.
3. Giao coding agent **một scene mỗi lượt**, preview rồi mới làm scene khác.
4. Tái sử dụng theme, components và scene templates; chỉ thêm component mới khi thực sự cần.
5. Chọn một phương án quản lý audio: **trong Remotion** hoặc **hậu kỳ bằng Kdenlive**, tránh ghép giọng hai lần.
6. Luôn kiểm tra **MP4 xuất ra thật**, không chỉ dựa vào preview hay kết quả lint.
7. Lưu bản gốc voice, tài liệu, nguồn và hồ sơ giấy phép; chủ động backup media ngoài Git.

## Tài liệu liên quan

- [VIDEO_PRODUCTION_STEP_BY_STEP.md](VIDEO_PRODUCTION_STEP_BY_STEP.md): hướng dẫn làm từng bước, có lệnh và prompt.
- [ASSETS_AND_AUDIO.md](ASSETS_AND_AUDIO.md): voice, nhạc, SFX, asset, subtitle.
- [VIDEO_QA_CHECKLIST.md](VIDEO_QA_CHECKLIST.md): checklist kiểm tra trước đăng.
- [GIT_AND_BACKUP.md](GIT_AND_BACKUP.md): quản lý thay đổi và backup.
