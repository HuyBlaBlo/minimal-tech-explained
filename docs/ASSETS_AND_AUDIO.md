# Hướng dẫn tài nguyên, thu âm và phụ đề

## 1. Lưu file ở đâu?

| Loại | Vị trí đề xuất |
|---|---|
| Research, script, storyboard | `content/NNN-topic/` |
| WAV gốc và bản xử lý | `content/NNN-topic/voice/` |
| SVG, ảnh, SFX riêng của tập | `content/NNN-topic/assets/` |
| Asset cần đọc bằng `staticFile()` | `public/episodes/NNN-topic/` |
| Nhạc / SFX dùng chung | `public/music/`, `public/sounds/` |
| File xuất | `out/` |

Giữ **bản gốc** riêng với file dùng trong render. `staticFile()` chỉ tìm asset trong `public/`; không trỏ trực tiếp vào `content/` bằng đường dẫn tùy ý.

## 2. Thu voice-over

1. Chốt script trước khi thu chính thức.
2. Chọn phòng yên tĩnh, micro cách miệng khoảng 15–20cm, tránh hơi thổi thẳng vào mic.
3. Ghi 10 giây thử và nghe lại bằng tai nghe.
4. Audacity: thu **48 kHz, mono** và xuất **WAV**.
5. Thu từng đoạn theo scene để dễ thay thế câu đọc lỗi.
6. Cắt lỗi, giảm nhiễu nhẹ nếu cần, compression/normalize vừa phải; đừng xử lý quá mạnh làm méo giọng.
7. Giữ bản ghi gốc và đo thời lượng cuối của từng đoạn để cập nhật storyboard.

Ví dụ:

```text
content/001-load-balancer/voice/
├── 01_hook.wav
├── 02_problem.wav
├── 03_explanation.wav
├── 04_flow.wav
├── 05_tradeoffs.wav
└── 06_summary.wav
```

## 3. Ghép voice, nhạc và SFX

**Phương án Remotion:** copy WAV dùng để xuất qua `public/episodes/NNN-topic/voice/`, sử dụng `staticFile()` và các component audio trong timeline. Phù hợp với sản xuất tự động bằng code.

**Phương án Kdenlive:** render hình từ Remotion, import video và voice sang Kdenlive. Gợi ý track `V1` animation, `A1` voice, `A2` nhạc nền, `A3` SFX. Phù hợp với việc căn waveform và chỉnh sửa trực quan.

- Chọn **một** nguồn phát voice cho MP4 cuối; không phát trùng ở cả Remotion và Kdenlive.
- Voice luôn phải rõ hơn music. Chỉ dùng SFX khi nó làm rõ request, warning, failure hoặc chuyển đoạn.
- Kiểm âm lượng trên tai nghe, loa laptop và điện thoại; tránh clipping, im lặng bất thường và chênh lệch âm lượng giữa các đoạn.

## 4. Phụ đề

1. Tạo SRT từ audio cuối bằng Faster-Whisper hoặc nhập thủ công.
2. Đối chiếu với script và sửa lỗi thuật ngữ chuyên môn.
3. Kiểm timecode, dấu câu, độ dài từng cue và sự đồng bộ.
4. Lưu `content/NNN-topic/NNN-topic.srt`.
5. Chọn **upload subtitle rời** lên YouTube hoặc **burn-in** vào video; không để hai lớp phụ đề trùng nhau.

## 5. Bản quyền và giấy phép

- Ưu tiên hình sơ đồ do mình tự tạo trong Remotion.
- Font Inter và JetBrains Mono được load từ `@remotion/google-fonts`; cần tuân thủ giấy phép font khi phân phối.
- Music/SFX: ưu tiên YouTube Audio Library hoặc nguồn cho phép sử dụng thương mại và có điều kiện ghi công rõ ràng.
- Tránh tải lại nhạc/ảnh/video của người khác khi không có quyền sử dụng.
- Với mỗi tài nguyên bên ngoài, ghi **tên file, nguồn, người tạo, license, quyền sử dụng thương mại, yêu cầu credit** vào `assets-license.md`.
- Không suy đoán giấy phép chỉ từ việc asset được tải xuống miễn phí.

## 6. Trước khi xuất bản

- [ ] Voice không rè, méo hoặc clipping.
- [ ] Lời nói khớp hình ảnh và không bị cắt cuối scene.
- [ ] Music/SFX không che voice.
- [ ] SRT đã đối chiếu với audio cuối.
- [ ] Mọi tài nguyên có quyền sử dụng phù hợp, lưu đủ attribution nếu cần.
- [ ] Đã xem và nghe toàn bộ MP4 cuối.
