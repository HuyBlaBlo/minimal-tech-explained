# Minimal Tech Explainer — Remotion Production System

> Project dùng chung để sản xuất video YouTube faceless bằng tiếng Anh về System Design, Backend, Networking, Databases, Distributed Systems và Cloud. **Không tạo project Remotion mới cho mỗi video.**

## 1. Trạng thái hiện tại

- Stack trong bản ZIP ngày **18/11/2026**: React 19.3.1, Remotion 4.0.545, TypeScript 5.9.3, Rspack, `@remotion/google-fonts`.
- Đã có: theme; `SceneTitle`, `Label`, `InfoCard`, `Badge`, `CodePanel`; 8 system nodes; arrows/connections/packets; 7 hiệu ứng; `ComponentShowcase`.
- `ComponentShowcase`: **1920 × 1080, 30 FPS, 600 frames = 20 giây**. Composition sandbox cũ vẫn được giữ.
- **Chưa có** scene templates sản xuất video, master composition từng tập, hoặc scripts tự động hóa audio/subtitle/export. Đó là Phase 4–6.
- Xem [PROJECT_STATUS](docs/PROJECT_STATUS.md) để biết chính xác việc gì đã làm, việc gì chưa làm.

## 2. Yêu cầu môi trường

- Node.js phù hợp với `engines` trong `package.json`: `^20.19.0 || ^22.13.0 || >=24`.
- npm, Git, trình duyệt để xem Remotion Studio.
- Môi trường đang sử dụng: Arch Linux, Antigravity là coding agent chính. **Không bắt buộc Claude Pro**.
- Tùy bước: Audacity (thu WAV), Kdenlive (dựng âm thanh/video), Faster-Whisper (tạo SRT).

## 3. Chạy project hiện tại

Mở terminal **ở thư mục gốc có `package.json`**:

```bash
npm ci
npm run dev
```

Mở đường dẫn hiện trong terminal, chọn **ComponentShowcase** ở Remotion Studio, nhấn Play hoặc kéo timeline.

Kiểm tra mã nguồn:

```bash
npm run lint
```

Liệt kê composition (chạy tại thư mục gốc):

```bash
npx remotion compositions src/index.ts
```

Render **showcase để kiểm thử** (không phải video YouTube đầu tiên):

```bash
mkdir -p out
npx remotion render src/index.ts ComponentShowcase out/component-showcase.mp4
```

Lưu ý: Remotion CLI cần Chrome/Chromium phù hợp để render headless. Nếu lỗi tải browser, xem tài liệu Remotion và cấu hình môi trường trước; không tự ý đổi stack.

## 4. Cấu trúc project

```text
minimal-tech-explainer/
├── AGENTS.md                    # Quy tắc dùng chung cho coding agents
├── CLAUDE.md                    # Hướng dẫn cho Claude Code
├── README.md
├── docs/
│   ├── CHANNEL_BRIEF.md
│   ├── STYLE_GUIDE.md
│   ├── ANIMATION_GUIDE.md
│   ├── WORKFLOW.md
│   ├── PROJECT_STATUS.md
│   ├── ROADMAP_NEXT_PHASES.md
│   ├── VIDEO_PRODUCTION_STEP_BY_STEP.md
│   ├── VIDEO_QA_CHECKLIST.md
│   ├── ASSETS_AND_AUDIO.md
│   ├── GIT_AND_BACKUP.md
│   └── SOP_ORIGINAL.md
├── content/
│   └── templates/               # Research / script / storyboard / metadata / analytics
├── src/
│   ├── theme/
│   ├── components/
│   │   ├── typography/
│   │   ├── ui/
│   │   ├── diagrams/
│   │   └── effects/
│   ├── compositions/
│   │   └── ComponentShowcase/
│   ├── Composition.tsx          # Sandbox cũ
│   ├── Root.tsx
│   └── index.ts
├── .agents/skills/              # Remotion skills hiện có
├── public/                      # Tạo khi cần tài nguyên phục vụ Remotion
└── out/                         # Output, được .gitignore
```

**Quan trọng:** Một số đường dẫn phía trên (`src/scenes/`, các folder episode, scripts tự động, `public/`) sẽ được tạo khi triển khai các phase sau; danh sách này không có nghĩa chúng đã tồn tại trong bản ZIP.

## 5. Làm video mới sau khi hoàn tất Phase 4–6

Bắt đầu từ [VIDEO_PRODUCTION_STEP_BY_STEP.md](docs/VIDEO_PRODUCTION_STEP_BY_STEP.md). Tóm tắt:

1. Chọn chủ đề, tạo `content/<episode-id>/` từ template.
2. Research có nguồn → viết script tiếng Anh 350–500 từ làm mốc ban đầu → xác minh kỹ thuật.
3. Chuẩn bị giọng đọc và storyboard theo từng scene.
4. Antigravity xây scene **từng cái một**, tận dụng các component đã có.
5. Preview, thu WAV, đồng bộ hình/tiếng, thêm nhạc/SFX có quyền sử dụng.
6. Render MP4 1080p30; làm SRT, thumbnail, metadata; QA toàn bộ bản xuất.
7. Đăng YouTube và ghi lại analytics để cải tiến video sau.

**Không chạy bước tạo episode production ngay khi Phase 4–6 chưa xong**. Có thể research, viết script hoặc luyện đọc trước mà không cần token Antigravity.

## 6. Tài liệu nên đọc theo thứ tự

1. [PROJECT_STATUS](docs/PROJECT_STATUS.md) — đã xong gì, thiếu gì.
2. [ROADMAP_NEXT_PHASES](docs/ROADMAP_NEXT_PHASES.md) — tuần sau bắt đầu Phase 4 thế nào.
3. [CHANNEL_BRIEF](docs/CHANNEL_BRIEF.md) — đối tượng xem và giá trị kênh.
4. [STYLE_GUIDE](docs/STYLE_GUIDE.md) + [ANIMATION_GUIDE](docs/ANIMATION_GUIDE.md).
5. [WORKFLOW](docs/WORKFLOW.md) — quy trình tổng quan.
6. [VIDEO_PRODUCTION_STEP_BY_STEP](docs/VIDEO_PRODUCTION_STEP_BY_STEP.md) — hướng dẫn thao tác từng bước.
7. [VIDEO_QA_CHECKLIST](docs/VIDEO_QA_CHECKLIST.md) — kiểm tra trước khi đăng.

## 7. An toàn project

- Mỗi phase: đọc `AGENTS.md` → chỉ sửa file trong phạm vi → chạy `npm run lint` → xem preview → xem `git diff` → chỉ commit/push khi chủ project chấp thuận.
- Không commit `node_modules/`, `out/`, `.env`, file video render lớn.
- Không làm nhiều coding agents cùng sửa một file.
- Giữ bản gốc WAV, storyboard, thumbnail và file dựng bên ngoài Git hoặc trên nơi lưu trữ riêng.
- Không dùng nhạc, hình, font hoặc assets chưa rõ quyền sử dụng.

## 8. Lưu ý bản quyền

Repository đang khai báo `UNLICENSED` ở `package.json`; không tự ý đổi license. Kiểm tra chính sách license của Remotion và các tài nguyên trước khi thương mại hóa nội dung hoặc chia sẻ source.
