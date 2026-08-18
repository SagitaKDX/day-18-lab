# 🚀 LAB 18 — Multiple Prototypes & Human–AI Design Guide

Bộ slide trình chiếu hướng dẫn thực hành chi tiết **LAB 18: Multiple Prototypes — Human–AI Design (Track 1: AI Product Management - VinUni Codelab)** với giao diện **Cyber Dark Glassmorphism** sang trọng, phông chữ lớn hiển thị rõ nét trên màn hình máy chiếu lớp học, bộ đếm ngược thời gian (Countdown Timer) tích hợp cho từng chặng, cùng trình mô phỏng tương tác (Interactive Spectrum Simulator) bằng tiếng Việt dễ hiểu.

---

## 📁 Cấu Trúc Thư Mục

```text
/Users/minhlethanh/Documents/Day 18 lab/
├── 📄 index.html        ← Ứng dụng slide trình chiếu chính 15 slide (Mở trực tiếp trên mọi trình duyệt)
├── 🎨 css/
│   └── styles.css    ← Giao diện Cyber Dark Glassmorphism, định dạng chữ lớn, nút chuyển slide nổi
├── ⚡ js/
│   ├── data.js       ← Dữ liệu 6 chặng, 5 Gate đánh giá, 10 lỗi sai phổ biến
│   ├── timer.js      ← Bộ đếm ngược thời gian tương tác (120m sprint, 180m full, chặng 1-6)
│   └── slides.js     ← Bộ điều khiển 15 slide, phím tắt, trình mô phỏng Human-AI và trắc nghiệm
└── 📖 README.md         ← Tài liệu hướng dẫn sử dụng
```

---

## 🗺️ Nội Dung 15 Slide Hướng Dẫn Chi Tiết

1. **Slide 1: Bìa & 3 Đầu Ra Cốt Lõi Day 18** — Three-Option Design Sheet, 3 Micro-Prototypes, 3 Feedback Notes ➔ 1 Group Next Change.
2. **Slide 2: Dòng Chảy Khái Niệm (Concept Flow)** — Sự tiếp nối từ Evidence Day 17 (3 Practice Notes, Hypothesis Problem, Solution Parking Lot) sang Solution Space Day 18.
3. **Slide 3: Chặng 1 — Tổng Hợp Evidence & Chốt Hypothesis Problem (15p — GATE 1)** — Evidence Huddle, phân biệt Lời Nói vs Suy Diễn, công thức chốt Problem 5 thành tố.
4. **Slide 4: Chặng 2 — Chọn Ba Solution Options (A / B / C) (20p — GATE 2)** — Comparison Contract (Constants vs Variables) & Distance Check (không nhắc màu/layout).
5. **Slide 5: Chặng 3 — Human–AI Design Pass (30p — GATE 3)** — 4 Trụ cột thiết kế: Expectation, Role & Agency (Act/Ask/Don't Act), Evidence & Uncertainty, Control & Recovery.
6. **Slide 6: Trình Mô Phỏng Tương Tác: So Sánh 3 Cơ Chế Quyền Lực** — Interactive Spectrum: Option A (User-Led Assistive), Option B (Co-Create Ghosting), Option C (Proactive Agent with Review).
7. **Slide 7: Chặng 4 — Build Ba Micro-Prototypes (55p — GATE 4)** — Cấu trúc 3 màn hình (Common Context ➔ Critical Interaction ➔ Result/Decision), Definition of Test-Ready.
8. **Slide 8: Chặng 5 — Chuẩn Bị Kịch Bản & Luật Vàng Facilitation (15p)** — 1 Context Question, 1 Outcome Task, 5 Observation Focus, 6 Luật Vàng điều phối.
9. **Slide 9: Chặng 6 — Test Với 3 Người & Mẫu Ghi 4 Lớp (20p)** — Mỗi người test cả A/B/C với 1 tester ngoài nhóm ➔ 4 lớp: Observed, Interpreted, Decided, Still Unproven.
10. **Slide 10: Group Feedback Synthesis — Chốt 1 Next Change (GATE 5)** — Bảng tổng hợp 3 Feedback Notes, tìm Pattern chung, chốt 1 Next Change và Still Unproven.
11. **Slide 11: Quy Tắc Dùng AI & Mẫu AI Support Log** — Được dùng AI (gợi ý cơ chế, tạo dữ liệu mẫu, code) vs Cấm dùng AI (bịa quote/feedback), mẫu khai báo 3 câu hỏi.
12. **Slide 12: 5 Gate Đánh Giá & Thang Điểm Chấm Lab** — Chi tiết tiêu chuẩn Đạt vs Chưa Đạt cho cả 5 Gate.
13. **Slide 13: Cấu Trúc Repository & Checklist Nộp Bài** — Cấu trúc thư mục `Track1_Day18_MHV_HoVaTen/` và 6 mục bắt buộc trong `README.md`.
14. **Slide 14: 10 Bẫy Sai Lầm Lớn Nhất Cần Tránh** — Danh sách 10 lỗi anti-pattern phổ biến học viên hay mắc phải.
15. **Slide 15: Mini Checkpoint Quiz** — 4 câu hỏi trắc nghiệm tương tác giúp học viên tự kiểm tra kiến thức trước khi bắt đầu thực hành.

---

## 🎮 Thao Tác & Phím Tắt

- **Bộ đếm ngược thời gian (Timer):** Chọn bài cần làm trong danh sách dropdown và nhấn nút **Bắt Đầu** để theo dõi thời gian làm bài.
- **Nút chuyển slide nổi:** Bấm mũi tên trái/phải ở 2 bên mép màn hình.
- **Phím tắt bàn phím:**
  - Nhấn <kbd>→</kbd> hoặc <kbd>Space</kbd>: Chuyển slide tiếp theo.
  - Nhấn <kbd>←</kbd>: Quay lại slide trước.
  - Nhấn <kbd>F</kbd>: Toàn màn hình (Fullscreen).
- **Thanh Menu trên cùng:** Bấm vào các nút `Tổng quan`, `G1: Evidence`, `G2: 3 Options`, `G3: Human-AI`, `G4: Build`, `G5: Test`, `5 Gates` để nhảy nhanh.

---

## 🖥️ Hướng Dẫn Mở Bài Trình Chiếu

Chỉ cần nhấp đúp mở file [index.html](file:///Users/minhlethanh/Documents/Day%2018%20lab/index.html) bằng bất kỳ trình duyệt nào (Chrome, Safari, Edge, Firefox).
