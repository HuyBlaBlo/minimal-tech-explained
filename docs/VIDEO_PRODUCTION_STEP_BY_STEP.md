# Hướng dẫn làm một video YouTube từ đầu đến cuối

Đây là hướng dẫn thực hành **sau khi đã có project Remotion dùng chung**. Ví dụ xuyên suốt: **How Does a Load Balancer Work?**, mã tập `001-load-balancer`. Với chủ đề khác, thay mã và tên tập tương ứng; không tạo lại project hay thư viện component.

**Đầu ra mong muốn:** video tiếng Anh 3–5 phút, 1920×1080 @ 30 FPS, MP4 H.264, phụ đề, thumbnail và metadata.

## 1. Tạo thư mục video mới

Mở terminal ở thư mục gốc chứa `package.json`:

```bash
git status
npm run lint
mkdir -p content/001-load-balancer/voice content/001-load-balancer/assets
cp content/templates/research.template.md content/001-load-balancer/research.md
cp content/templates/script.template.md content/001-load-balancer/script.md
cp content/templates/storyboard.template.md content/001-load-balancer/storyboard.md
cp content/templates/metadata.template.md content/001-load-balancer/metadata.md
cp content/templates/assets-license.template.md content/001-load-balancer/assets-license.md
cp content/templates/qa.template.md content/001-load-balancer/qa.md
cp content/templates/analytics.template.md content/001-load-balancer/analytics.md
```

Bảy file `.md` là **mẫu để điền**, không phải nội dung video đã hoàn thiện. Nếu file đích đã tồn tại, không chạy lại `cp` để tránh ghi đè nội dung đang làm.

**Kết quả:** có folder riêng cho tập, đủ nơi lưu research, kịch bản, storyboard, voice và tài nguyên.

## 2. Chọn chủ đề và mục tiêu

Điền đầu file `research.md`:

- Chủ đề và người xem mục tiêu (beginner software developers).
- **Một câu hỏi chính** mà video phải trả lời.
- **Hai hoặc ba điều người xem cần nhớ**.
- Những nội dung sẽ không giải thích để tránh quá tải trong 3–5 phút.

Ví dụ: “How does a load balancer distribute requests across servers?”

**Kết quả:** video có mục tiêu rõ ràng, không dàn trải.

## 3. Nghiên cứu và kiểm chứng kỹ thuật

Ưu tiên tài liệu chính thức, RFC và bài engineering đáng tin cậy. Tìm: định nghĩa, vấn đề, cách hoạt động từng bước, request flow, một tình huống lỗi, ưu/nhược điểm và hiểu lầm thường gặp.

**Prompt gửi ChatGPT hoặc AI nghiên cứu có khả năng tra nguồn:**

```text
Research the topic "How Does a Load Balancer Work?" for a 3–5 minute
English technical explainer aimed at beginner developers.
Explain the problem, core mechanism, realistic request flow,
important trade-offs, one failure scenario, and 3 key takeaways.
Use reliable technical sources and give verifiable links for
important claims. Distinguish general concepts from
implementation-specific behavior. Do not invent metrics.
Output structured research notes, not a narration script.
```

Rà lại từng claim quan trọng, lưu URL và kết quả xác minh vào `research.md`. Nếu chưa chắc chắn, **đánh dấu cần kiểm chứng**, không đưa ngay vào lời đọc.

**Kết quả:** `research.md` đủ căn cứ để viết kịch bản.

## 4. Viết lời thoại tiếng Anh

Dùng `script.md`. Chia tự nhiên theo: **Hook → Problem → Explanation → Request Flow → Trade-offs → Summary**. Mốc ban đầu **350–500 từ** là để có bản nháp; muốn đủ 3–5 phút phải đọc thử và canh theo tốc độ thực, khoảng nghỉ và hình minh họa.

**Prompt viết script:**

```text
Write a natural English voiceover script for "How Does a Load Balancer Work?".
Use only the approved research notes as the source of technical facts.
Audience: beginner developers. Aim for 3–5 minutes, starting with
approximately 350–500 words, then adjust for spoken timing.
Structure: Hook, Problem, Explanation, Request Flow, Trade-offs, Summary.
Use short, clear sentences and one concrete example.
For each section include narration and a brief visual suggestion.
Do not invent numbers, benchmarks, or technical behavior.
```

Đọc toàn bộ script một lần; bỏ ý lặp, sửa câu khó đọc, giải thích thuật ngữ mới, so lại dữ kiện với `research.md`.

**Chỉ qua bước này khi script đã được chốt.**

## 5. Luyện giọng tiếng Anh

- Đánh dấu từ khó như *throughput, latency, redundancy, round robin*.
- Chia câu dài thành cụm ngắn, đánh dấu chỗ nghỉ.
- Ghi âm thử 1–2 đoạn, nghe lại mức độ rõ và tự nhiên.
- Không cần nói giống người bản xứ; quan trọng là dễ hiểu và nhất quán.

**Prompt English coach:**

```text
Act as an English narration coach. Review my approved script
sentence by sentence. Identify difficult technical pronunciation,
word stress, natural speaking chunks and pauses. Suggest simpler
phrasing only if the technical meaning stays unchanged.
```

## 6. Viết storyboard

Mở `storyboard.md`. Mỗi scene cần có:

- Scene ID, mục đích, lời thoại tương ứng.
- Thành phần hiển thị: node, mũi tên, packet, thẻ chữ, trạng thái.
- Bố cục và vị trí tương đối, tránh tràn safe zone.
- Animation nào bắt đầu khi lời thoại nói từ/câu nào.
- Thời lượng **dự kiến** (giây và frame), kiểu chuyển cảnh.

Ví dụ minh họa: Client → một Server quá tải → thêm Load Balancer và nhiều Server → request được phân phối → một Server gặp lỗi → kết luận.

**Prompt storyboard:**

```text
Create a scene-by-scene storyboard for the approved English script.
Read docs/STYLE_GUIDE.md, docs/ANIMATION_GUIDE.md, and the
existing Remotion components. For each scene specify its purpose,
narration, on-screen elements, layout, timing, animation cues,
component reuse and transition. Keep request/response directions
technically accurate. Do not write code yet.
```

**Kết quả:** storyboard đủ chi tiết để giao làm từng scene, không để AI tự đoán nội dung hình.

## 7. Chuẩn bị assets và giấy phép

Ưu tiên node/SVG tự dựng bằng code. Nếu cần hình, nhạc, SFX hoặc logo từ ngoài:

1. Lưu bản gốc vào `content/001-load-balancer/assets/` hoặc nơi backup đã chọn.
2. Ghi nguồn, giấy phép, giới hạn sử dụng và yêu cầu ghi công vào `assets-license.md`.
3. Nếu Remotion đọc bằng `staticFile()`, đặt bản dùng để render vào `public/episodes/001-load-balancer/`.
4. Không dùng tài nguyên chưa xác minh quyền sử dụng.

Chi tiết: [ASSETS_AND_AUDIO.md](ASSETS_AND_AUDIO.md).

## 8. Làm animation từng scene

Dùng Antigravity hoặc coding agent đang làm việc trên project. Cho agent đọc `AGENTS.md`, `docs/STYLE_GUIDE.md`, `docs/ANIMATION_GUIDE.md`, script và storyboard **trước khi sửa code**.

**Prompt giao một scene:**

```text
Implement Scene 01 ONLY for episode 001-load-balancer.
Read AGENTS.md, docs/STYLE_GUIDE.md, docs/ANIMATION_GUIDE.md,
content/001-load-balancer/script.md and storyboard.md.
Reuse existing theme, components and scene templates.
Use deterministic Remotion frame-based animation and accurate
request/response directions. Do not alter unrelated scenes or
install dependencies. Run npm run lint, preview the scene,
report changed files and issues. Stop before Scene 02.
```

Quy trình mỗi cảnh: **code → lint → mở Studio → Play/scrub → phát hiện lỗi → sửa → duyệt**. Sau đó mới làm scene tiếp. Không yêu cầu AI làm nguyên video 3–5 phút trong một lượt.

## 9. Preview và kiểm từng scene

```bash
npm run lint
npm run dev
```

Mở URL Remotion Studio mà terminal hiển thị, chọn composition tương ứng. Xem frame đầu/giữa/cuối, phát toàn đoạn và kiểm tra:

- Chữ/node có bị cắt hay che nhau không?
- Packet có chạy đúng kết nối và đúng hướng không?
- Nhãn có đọc được khi thu nhỏ không?
- Lỗi và response có được diễn tả đúng logic không?
- Animation có ăn khớp lời thoại dự kiến không?

**Kết quả:** các cảnh đã được chấp nhận về nội dung và hình ảnh.

## 10. Thu voice-over chính thức

Dùng Audacity hoặc phần mềm thu WAV tương đương:

- Chọn phòng yên tĩnh, thu test 10 giây trước.
- **48 kHz, mono, WAV**. Không để tín hiệu clipping.
- Thu theo từng đoạn tương ứng scene, ví dụ `01_hook.wav`, `02_problem.wav`, `03_explanation.wav`, `04_flow.wav`, `05_tradeoffs.wav`, `06_summary.wav`.
- Cắt lỗi, giảm nhiễu nhẹ, cân chỉnh âm lượng; giữ bản WAV gốc.
- Ghi **thời lượng thật** của từng đoạn vào `script.md` / `storyboard.md`.

Sau khi có voice, có thể phải đổi số frame và thời điểm xuất hiện animation. **Hình phải theo lời đọc**, không ép lời đọc theo animation cố định.

## 11. Đồng bộ voice và dựng âm thanh

Chọn **một trong hai cách**:

**Cách A — Làm trong Remotion:** copy WAV phục vụ render vào `public/episodes/001-load-balancer/voice/`; dùng `staticFile()` và component audio theo timeline của composition. Phù hợp nếu muốn render video + tiếng bằng code.

**Cách B — Dựng trong Kdenlive:** xuất animation từ Remotion rồi ghép giọng ở Kdenlive theo track `V1` (video), `A1` (voice), `A2` (music), `A3` (SFX). Phù hợp khi muốn kéo thả timeline và chỉnh âm thanh trực quan.

Kiểm tra câu nói kết thúc đúng cảnh, không bị cắt và không bị thêm voice hai lần.

## 12. Nhạc nền và hiệu ứng âm thanh

- Dùng nhạc/SFX có quyền sử dụng thương mại phù hợp, ví dụ YouTube Audio Library hoặc nguồn có license rõ.
- Voice luôn rõ hơn nhạc. SFX chỉ xuất hiện khi có ý nghĩa: click, packet, warning, error.
- Kiểm volume trên tai nghe và loa thường; tránh âm thanh đột ngột, rè hoặc clipping.
- Ghi nguồn nhạc/SFX vào `assets-license.md`.

## 13. Tạo và kiểm subtitle

Dùng audio **đã chốt** để tạo `.srt` bằng Faster-Whisper hoặc nhập thủ công. Lưu `content/001-load-balancer/001-load-balancer.srt`.

- Đối chiếu từng câu với script và audio.
- Sửa thuật ngữ kỹ thuật nhận dạng sai (Redis, Kubernetes, throughput, gRPC...).
- Chỉnh thời điểm để caption đúng lời đọc, không che diagram.
- Chọn phụ đề rời trên YouTube **hoặc** burn-in; tránh hiển thị hai lớp lặp nhau.

## 14. Render video

Trong terminal project:

```bash
npm run lint
mkdir -p out
npx remotion compositions src/index.ts
```

Tìm **composition ID của video đang làm** trong danh sách (không dùng `ComponentShowcase` để xuất video chính). Ví dụ nếu ID đã đăng ký là `Episode001LoadBalancer`:

```bash
npx remotion render src/index.ts Episode001LoadBalancer out/001-load-balancer-animation.mp4
```

Nếu chọn Kdenlive, import bản animation và voice/music/SFX, sau đó xuất bản cuối thành `out/001-load-balancer-final.mp4` (H.264, 1080p, 30 FPS). Nếu mix audio trong Remotion, bản render hoàn chỉnh có thể là bản cuối sau khi QA.

**Quan trọng:** mở và xem **toàn bộ MP4 cuối**, không chỉ xem preview. Kiểm frame đầu/cuối, âm thanh, fonts, hình mất, lỗi clipping và tính đúng của luồng hệ thống.

## 15. Tạo thumbnail và metadata

- Thumbnail 1280×720, một ý chính, chữ ngắn và dễ đọc khi thu nhỏ; không sao chép thiết kế của kênh khác.
- Mở `metadata.md`, chọn tiêu đề tiếng Anh rõ ràng, không hứa nội dung video không có.
- Viết mô tả tóm tắt điểm chính, thêm nguồn tham khảo và credit cần thiết.
- Đo **YouTube chapters** theo MP4 cuối; không dùng thời điểm storyboard nháp.

**Prompt metadata:**

```text
Based on the final approved script, suggest 5 clear English
YouTube titles, a concise description, relevant keywords,
a pinned comment and a thumbnail concept. Do not use clickbait.
Do not invent chapter timestamps: mark them as needing review
against the final exported MP4.
```

## 16. QA và đăng YouTube

Mở `qa.md` và [VIDEO_QA_CHECKLIST.md](VIDEO_QA_CHECKLIST.md). Đảm bảo:

- Nội dung kỹ thuật đã được kiểm chứng.
- Lời thoại dễ nghe; âm thanh không lấn nhau.
- Animation, mũi tên, packet và trạng thái lỗi hợp lý.
- Không có cảnh thiếu asset, chữ tràn, fade sai hoặc nhấp nháy.
- Video cuối 1920×1080 @ 30 FPS, chạy đủ từ đầu đến cuối.
- Subtitle, thumbnail, tiêu đề, mô tả, nguồn và license đã kiểm.

Upload lên YouTube Studio, kiểm video đã xử lý, cài đặt đối tượng/chế độ hiển thị, phụ đề và cảnh báo bản quyền. Chỉ publish sau khi duyệt đủ checklist.

## 17. Theo dõi và cải thiện tập sau

Ghi vào `analytics.md`: impressions, CTR, views, average view duration, audience retention, subscribers và câu hỏi nổi bật từ bình luận. Nên xem theo các mốc 48 giờ, 7 ngày, 28 ngày thay vì kết luận ngay trong vài giờ đầu.

Ghi lại tối đa 3–5 cải tiến rõ ràng cho video sau: hook, nhịp nói, diagram khó hiểu, thời lượng cảnh, thumbnail hoặc một component cần nâng cấp.

---

## Checklist nhanh cho một tập

- [ ] Research và nguồn đã kiểm chứng
- [ ] Script tiếng Anh đã duyệt
- [ ] Luyện đọc và chốt storyboard
- [ ] Assets có giấy phép phù hợp
- [ ] Mỗi scene đã preview và đạt yêu cầu
- [ ] Voice WAV đã xử lý, timing đã đồng bộ
- [ ] Nhạc/SFX và subtitle được kiểm
- [ ] Render 1080p30 và xem toàn bộ MP4 cuối
- [ ] Thumbnail, metadata và chapters đầy đủ
- [ ] QA đạt; video đã đăng; analytics được ghi lại

**Ghi nhớ:** làm video mới bằng cách **tái sử dụng** theme, components và scene templates hiện có; chỉ tạo thêm phần thật sự khác biệt của chủ đề mới.
