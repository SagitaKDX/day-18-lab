/**
 * data.js - Metadata, Gates, and Design Rules for Day 18 Lab Guide
 */

const LAB_18_DATA = {
  title: "Track 1 - Day 18 — Multiple Prototypes - Human–AI design",
  author: "VinUni Codelab",
  durationMinutes: 180,
  phases: [
    { title: "Chặng 1: Tổng hợp evidence", time: "0:00 - 0:15", duration: 15, key: "phase1", desc: "Đặt 3 Practice Notes cạnh nhau, chốt 1 Hypothesis Problem." },
    { title: "Chặng 2: Chọn 3 Solution Options", time: "0:15 - 0:35", duration: 20, key: "phase2", desc: "Mở Solution Parking Lot, chọn A/B/C cùng problem/task nhưng khác cơ chế." },
    { title: "Chặng 3: Human–AI Design pass", time: "0:35 - 1:05", duration: 30, key: "phase3", desc: "Chốt 4 trụ cột: Expectation, Role & Agency, Evidence & Uncertainty, Control & Recovery." },
    { title: "Chặng 4: Build 3 Micro-prototypes", time: "1:05 - 2:00", duration: 55, key: "phase4", desc: "Mỗi người phụ trách 1 option, dùng chung 70% bối cảnh & style, chỉ khác critical interaction." },
    { title: "Chặng 5: Chuẩn bị kịch bản test", time: "2:00 - 2:15", duration: 15, key: "phase5", desc: "Chốt 1 relevant context question, 1 outcome task, và 5 điểm quan sát." },
    { title: "Chặng 6: Test với 3 người & Synthesis", time: "2:15 - 3:00", duration: 45, key: "phase6", desc: "Mỗi người test cả A/B/C với 1 người ngoài nhóm ➔ Thu 3 Feedback Notes ➔ Chốt 1 Group Next Change." }
  ],
  gates: [
    { id: 1, title: "GATE 1 — Evidence Continuity", desc: "Hypothesis Problem có user, situation, job, barrier, consequence; chỉ ra được observation Day 17 và điều chưa biết." },
    { id: 2, title: "GATE 2 — Meaningful Options", desc: "3 options cùng user, situation, task, desired outcome; khác biệt có ý nghĩa ở cơ chế hoặc cách chia quyền User–AI." },
    { id: 3, title: "GATE 3 — Human Control", desc: "Nói rõ user/AI làm gì, agency phù hợp với hậu quả khi sai, và user có đường kiểm soát hoặc recovery (undo/edit)." },
    { id: 4, title: "GATE 4 — Test-Ready", desc: "Người ngoài nhóm tự mở và thao tác A/B/C cho cùng task mà không cần facilitator giải thích hộ." },
    { id: 5, title: "GATE 5 — Learning, Not Praise", desc: "Có 3 Feedback Notes độc lập, nêu rõ pattern/khác biệt, chốt 1 Next Change và điều vẫn chưa được chứng minh." }
  ],
  antiPatterns: [
    "Đổi user, situation hoặc task giữa 3 options khiến không thể so sánh được.",
    "3 options chỉ khác màu sắc, wording hoặc bố cục giao diện (không khác cơ chế).",
    "Mỗi người chỉ mang option mình làm đi test thay vì cho tester trải nghiệm cả bộ A/B/C.",
    "Cho AI tự hành động quá đà mà không tính đến hậu quả khi AI đoán sai.",
    "Build full product thay vì tập trung vào 1 critical interaction.",
    "Giải thích giao diện thay vì để tester tự thao tác và tự vấp.",
    "Chỉ ghi 'tester thích B' nhưng không ghi hành vi, lý do và trade-off.",
    "Tuyên bố solution đã được 'validated' chỉ sau 3 feedback ban đầu.",
    "Dùng AI tạo quote, observation hoặc feedback giả không có thật."
  ]
};
