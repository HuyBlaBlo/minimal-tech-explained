# Minimal Tech Explainer

Project **React + TypeScript + Remotion** dùng chung để sản xuất video YouTube **faceless bằng tiếng Anh** về System Design, Backend, Networking, Databases và Cloud Computing.

- **Định dạng:** 1920 × 1080, 30 FPS, 16:9.
- **Thời lượng mục tiêu:** 3–5 phút/video.
- **Phong cách:** Dark minimalist, sơ đồ hệ thống và motion graphics.
- **Nguyên tắc:** Một project cho cả kênh; mỗi video có nội dung riêng và tái sử dụng thư viện component.

## 1. Cài đặt và chạy project

Yêu cầu: Node.js tương thích với `package.json`, npm và Git.

Mở terminal tại thư mục gốc của project (nơi chứa `package.json`):

```bash
# Cài dependency khi thiết lập môi trường lần đầu
npm ci

# Mở Remotion Studio
npm run dev
```

Mở đường dẫn do terminal hiển thị. Trong Remotion Studio, chọn composition cần xem (ví dụ: `ComponentShowcase`) và nhấn **Play** hoặc kéo timeline.

Kiểm tra ESLint và TypeScript:

```bash
npm run lint
```

## 2. Cấu trúc project

```text
minimal-tech-explainer/
├── AGENTS.md                    # Quy tắc làm việc cho coding agents
├── CLAUDE.md                    # Hướng dẫn bổ sung cho Claude Code
├── docs/                        # Quy chuẩn hình ảnh và hướng dẫn sản xuất
├── content/
│   ├── templates/               # Mẫu research, script, storyboard, metadata...
│   └── NNN-topic/               # Nội dung riêng của từng video
├── src/
│   ├── theme/                   # Màu, font, spacing, animation tokens
│   ├── components/              # Node, connection, text, UI và effects
│   ├── compositions/            # Composition được đăng ký trong Root.tsx
│   ├── Root.tsx                 # Danh sách composition
│   └── index.ts                 # Remotion entrypoint
├── public/                      # Media được đưa vào Remotion bằng staticFile()
└── out/                         # File render (không đưa lên Git)
```

Một số thư mục như `content/NNN-topic/` chỉ được tạo khi làm tập mới. Không cần tạo trước toàn bộ thư mục trống.

## 3. Quy trình làm một video mới

**Bắt đầu từ:** [Hướng dẫn từng bước](docs/VIDEO_PRODUCTION_STEP_BY_STEP.md).

1. **Chọn chủ đề, tạo thư mục tập** dưới `content/` và sao chép các file mẫu từ `content/templates/`.
2. **Nghiên cứu và kiểm chứng** nội dung kỹ thuật; lưu nguồn trong `research.md`.
3. **Viết kịch bản tiếng Anh**, đọc thử và chốt nội dung trong `script.md`.
4. **Làm storyboard**: chia scene, chỉ định lời thoại, hình minh họa và thời lượng dự kiến.
5. **Tạo từng scene bằng Remotion**: dùng component sẵn có, preview và sửa trước khi làm scene tiếp theo.
6. **Thu voice-over**, ghi thời lượng thực tế và đồng bộ animation với giọng đọc.
7. **Hoàn thiện âm thanh**, nhạc/SFX, phụ đề; render và xem lại toàn bộ MP4.
8. **Chuẩn bị thumbnail, metadata**, kiểm tra chất lượng và đăng YouTube.

Ví dụ thư mục một tập:

```text
content/001-load-balancer/
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

File trong `content/` lưu nội dung và tài nguyên nguồn của tập. Nếu muốn Remotion đọc media bằng `staticFile()`, đặt bản cần render vào `public/` theo đường dẫn phù hợp.

## 4. Xem và render video

Liệt kê các composition đã đăng ký:

```bash
npx remotion compositions src/index.ts
```

Render thử composition có sẵn:

```bash
mkdir -p out
npx remotion render src/index.ts ComponentShowcase out/component-showcase.mp4
```

Khi sản xuất video thật, thay `ComponentShowcase` bằng **Composition ID thực tế** được đăng ký trong `src/Root.tsx`, rồi chọn tên file đầu ra tương ứng.

Trước khi xuất bản, kiểm tra độ phân giải, FPS, voice-over, âm lượng, lỗi font, clipping, animation và phụ đề trên **file MP4 cuối cùng** — không chỉ trong Studio.

## 5. Tài liệu sử dụng

- [CHANNEL_BRIEF.md](docs/CHANNEL_BRIEF.md): định hướng nội dung và đối tượng người xem.
- [STYLE_GUIDE.md](docs/STYLE_GUIDE.md): màu sắc, font, bố cục và đồ họa.
- [ANIMATION_GUIDE.md](docs/ANIMATION_GUIDE.md): quy tắc chuyển động trong Remotion.
- [WORKFLOW.md](docs/WORKFLOW.md): tổng quan các bước sản xuất.
- [VIDEO_PRODUCTION_STEP_BY_STEP.md](docs/VIDEO_PRODUCTION_STEP_BY_STEP.md): hướng dẫn thực hiện chi tiết.
- [ASSETS_AND_AUDIO.md](docs/ASSETS_AND_AUDIO.md): voice-over, media, phụ đề và giấy phép.
- [VIDEO_QA_CHECKLIST.md](docs/VIDEO_QA_CHECKLIST.md): checklist kiểm tra video.
- [GIT_AND_BACKUP.md](docs/GIT_AND_BACKUP.md): quản lý code và backup.

Quy tắc dành cho AI/coding agent nằm trong [AGENTS.md](AGENTS.md).

## 6. Nguyên tắc cần giữ

- Tái sử dụng theme, component và scene trước khi viết mới.
- Kiểm chứng thông tin kỹ thuật; storyboard phải khớp lời thoại.
- Làm và kiểm tra từng scene; không giao toàn bộ video cho AI trong một lượt.
- Chỉ dùng font, hình ảnh, âm thanh có quyền sử dụng phù hợp.
- Không commit `node_modules/`, `.env`, `out/` hoặc file render nặng.
- Lưu riêng bản gốc voice-over, tài nguyên và file dựng để có thể sửa video sau này.
