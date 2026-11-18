# AGENTS.md — Minimal Tech Explainer

> Quy tắc chung cho Antigravity, Claude Code, Codex và coding agent tương thích. Antigravity đang là agent chính. **Đọc file này trước khi thay đổi code.**

## 1. Mục tiêu, phạm vi và trạng thái

- Một **Remotion base project** phục vụ nhiều video faceless English tech explainers (3–5 phút; 1920×1080; 30 FPS).
- Chủ đề: System Design, Backend, Networking, Databases, Distributed Systems, Cloud.
- Tái sử dụng component/theme/scene; mỗi episode có thư mục riêng ở `content/`.
- Trạng thái tính theo bản ZIP ngày 18/11/2026: hoàn tất thư viện component Phase 3A–3D; **Phase 4–6 chưa triển khai**.
- Trước mỗi task, đọc **`docs/PROJECT_STATUS.md`** và **`docs/ROADMAP_NEXT_PHASES.md`**; không coi mô tả roadmap là code đã tồn tại.

## 2. Tài liệu chuẩn

1. `docs/CHANNEL_BRIEF.md`: định vị và khán giả.
2. `docs/STYLE_GUIDE.md`: theme và màu, font, geometry.
3. `docs/ANIMATION_GUIDE.md`: frame-based motion, spring và sequence timing.
4. `docs/WORKFLOW.md`: pipeline cấp cao.
5. `docs/VIDEO_PRODUCTION_STEP_BY_STEP.md`: SOP thao tác thực tế **sau khi đã hoàn tất base project**.
6. `docs/VIDEO_QA_CHECKLIST.md`: nghiệm thu video.
7. `docs/ASSETS_AND_AUDIO.md`: audio/assets/fonts/license.
8. `docs/GIT_AND_BACKUP.md`: quản lý phiên bản và media.
9. `docs/SOP_ORIGINAL.md`: bản SOP người dùng gửi làm tài liệu gốc; nếu khác nhau, báo xung đột rõ ràng thay vì tự ý suy đoán.

## 3. Repo hiện có (không suy diễn)

- `src/theme/`: tokens, layout, fonts, animation configs.
- `src/components/{typography,ui,diagrams,effects}/`: các thành phần đã có.
- `src/compositions/ComponentShowcase/index.tsx`: demo 4 segment Phase 3A–3D (600 frames).
- `src/Composition.tsx`: sandbox cũ; **giữ nguyên** trừ khi có yêu cầu cụ thể.
- `src/Root.tsx`: đăng ký sandbox + `ComponentShowcase`.
- `.agents/skills/`: Remotion skills có trong ZIP.
- `.claude/skills/`: thư mục có nhưng **trống trong ZIP được kiểm tra**; không tuyên bố là symlink hoặc chứa skills nếu chưa kiểm tra lại môi trường thực tế.
- `src/scenes/`, episode master composition và automation scripts: **chưa triển khai**.

## 4. Protocol cho agent

1. Trước code: đọc các tài liệu phù hợp, kiểm tra source hiện tại, báo rõ phạm vi, file sẽ sửa và rủi ro.
2. Đọc Remotion skills đã cài trong `.agents/skills/` theo loại nhiệm vụ: `remotion-best-practices`, `remotion-markup`, `remotion-interactivity`, `remotion-studio`, `remotion-render`, `remotion-captions` khi liên quan.
3. **Không** reinstall hoặc overwrite skills, không thêm dependency hoặc thay đổi kiến trúc lớn nếu chưa được duyệt.
4. **Không** xóa/sửa `remotion.config.ts`, `package.json`, `tsconfig.json`, sandbox, các phase đã duyệt nếu không liên quan.
5. Reuse `src/theme/` và các components hiện có. Không hardcode lại palette khi đã có token.
6. Animation Remotion phải deterministic dựa trên frames; phân biệt frame toàn composition với frame cục bộ bên trong `<Sequence>`.
7. Mỗi task chỉ làm **một phase hoặc một scene**, luôn có preview và kiểm thử.
8. Không dùng ảnh, nhạc, font, video hoặc logo không rõ quyền sử dụng; fact-check thông tin kỹ thuật.
9. Không chạy commit, push, rebase, reset, force push nếu không có yêu cầu trực tiếp.
10. Khi kết thúc: nêu thay đổi, lệnh đã chạy, kết quả lint/typecheck, các frame đã preview, vấn đề còn tồn tại, `git status` và diff tóm tắt.

## 5. Design / technical standards

- Kích thước production: `1920x1080 @ 30fps` (sandbox có thể khác).
- Màu theo `src/theme/colors.ts`, font từ `src/theme/fonts.ts`: Inter và JetBrains Mono qua `@remotion/google-fonts`.
- Safe zone hiện có theo `src/theme/layout.ts`: x = 80px, y = 60px.
- Cần cân đối bố cục và độ lớn chữ cho thiết bị di động; preview không đủ, phải xem **render thật**.
- Dùng props rõ nghĩa, strongly typed TypeScript, component tái sử dụng, hạn chế dependency.

## 6. Lệnh kiểm tra đã có

```bash
npm run dev
npm run lint
npx remotion compositions src/index.ts
```

Chỉ thực hiện `npm ci` khi cần cài dependency trong môi trường mới. Không tái tạo project Blank.

## 7. Workflow review

- Xem diff: `git status --short`, `git diff`, `git diff --cached`.
- Kiểm tra `npm run lint` (bao gồm `eslint src && tsc` theo package.json hiện tại).
- Preview Scene ở Remotion Studio; kiểm tra trước/giữa/sau animation, clipping và audio sync.
- Sau khi được người dùng chấp thuận mới commit/push theo `docs/GIT_AND_BACKUP.md`.
