# Checklist kiểm tra video trước khi đăng

Áp dụng cho **file MP4 cuối cùng**, không chỉ preview trong Remotion Studio. Lưu kết quả và lỗi cụ thể vào `content/NNN-topic/qa.md`.

## 1. Nội dung kỹ thuật

- [ ] Video trả lời đúng câu hỏi trung tâm.
- [ ] Các khái niệm, thuật toán, thứ tự request/response đều chính xác.
- [ ] Claim quan trọng có nguồn kiểm chứng; không bịa số liệu.
- [ ] Nêu rõ đâu là nguyên lý chung, đâu là ví dụ của sản phẩm cụ thể.
- [ ] Cảnh lỗi giải thích đúng nguyên nhân và hậu quả.

## 2. Kịch bản và giọng đọc

- [ ] Hook rõ ràng; không có đoạn lan man hoặc lặp ý.
- [ ] Lời thoại tiếng Anh dễ hiểu, phát âm thuật ngữ chính xác.
- [ ] Giọng không bị mất chữ, clipping, nhiễu hoặc thay đổi âm lượng bất thường.
- [ ] Hình ảnh xuất hiện đúng thời điểm lời nói nhắc đến.

## 3. Hình ảnh và animation

- [ ] 1920×1080, 30 FPS, 16:9; đúng màu sắc và font.
- [ ] Không có node/chữ/nhãn bị cắt, tràn khung hay che nhau.
- [ ] Chữ vẫn đọc được khi thu nhỏ trên điện thoại.
- [ ] Arrow và packet đi đúng đường, đúng chiều và đúng node.
- [ ] Fade, glow, shake, highlight không gây giật, nhấp nháy hoặc hiểu sai.
- [ ] Scene đầu/cuối và chuyển cảnh đều mượt, không có khung hình trống bất thường.

## 4. Âm thanh, phụ đề

- [ ] Voice rõ hơn music; SFX không gây giật mình.
- [ ] Không có voice/music bị phát trùng hoặc ngắt không chủ ý.
- [ ] SRT chính xác về chữ, thuật ngữ và timestamp.
- [ ] Không hiển thị hai lớp phụ đề trùng nhau.

## 5. Bản quyền

- [ ] Fonts, icon, hình ảnh, music/SFX có quyền sử dụng phù hợp.
- [ ] Attribution bắt buộc đã được thêm vào mô tả hoặc nơi thích hợp.
- [ ] Không sao chép nguyên thumbnail, video hay tài nguyên không được phép.

## 6. MP4 cuối và xuất bản

- [ ] Đã xem **từ giây đầu đến giây cuối** của file MP4 xuất ra.
- [ ] Kiểm trên cả desktop và màn hình điện thoại.
- [ ] Thumbnail 1280×720 rõ, tiêu đề đúng nội dung.
- [ ] Description, nguồn, chapters đúng timestamp của video cuối.
- [ ] Đã kiểm cài đặt audience, visibility, phụ đề và cảnh báo bản quyền trên YouTube.
- [ ] Bản video, giọng, script, storyboard, thumbnail và SRT đã được backup.

**Chỉ đánh dấu sẵn sàng đăng khi các mục bắt buộc đều đạt.** Ghi timecode, lỗi và cách sửa trong `qa.md` nếu phát hiện vấn đề.
