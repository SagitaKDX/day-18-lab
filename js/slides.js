/**
 * slides.js - Presentation & Simulator Controller for Day 18 Lab Guide (15 Slides)
 * Controls navigation, Human-AI spectrum simulator, and Quiz evaluations.
 */

document.addEventListener('DOMContentLoaded', () => {
  let currentSlideIndex = 0;
  const totalSlides = 15;

  const slideViews = document.querySelectorAll('.slide-view');
  const currentSlideDisplay = document.getElementById('current-slide-num');
  const totalSlideDisplay = document.getElementById('total-slide-num');
  const btnPrev = document.getElementById('nav-btn-prev');
  const btnNext = document.getElementById('nav-btn-next');
  const btnFullscreen = document.getElementById('btn-fullscreen');

  if (totalSlideDisplay) totalSlideDisplay.innerText = totalSlides;

  function showSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    currentSlideIndex = index;

    slideViews.forEach((view, idx) => {
      if (idx === index) {
        view.classList.add('active');
      } else {
        view.classList.remove('active');
      }
    });

    if (currentSlideDisplay) currentSlideDisplay.innerText = index + 1;

    // Update floating buttons state
    if (btnPrev) {
      btnPrev.style.opacity = currentSlideIndex === 0 ? '0.3' : '1';
      btnPrev.style.pointerEvents = currentSlideIndex === 0 ? 'none' : 'auto';
    }
    if (btnNext) {
      btnNext.style.opacity = currentSlideIndex === totalSlides - 1 ? '0.3' : '1';
      btnNext.style.pointerEvents = currentSlideIndex === totalSlides - 1 ? 'none' : 'auto';
    }

    if (window.lucide) window.lucide.createIcons();
  }

  window.jumpToSlide = (index) => {
    showSlide(index);
  };

  // Floating button listeners
  if (btnPrev) btnPrev.onclick = () => showSlide(currentSlideIndex - 1);
  if (btnNext) btnNext.onclick = () => showSlide(currentSlideIndex + 1);

  // Fullscreen toggle
  if (btnFullscreen) {
    btnFullscreen.onclick = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    };
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || (e.key === ' ' && e.target === document.body)) {
      e.preventDefault();
      showSlide(currentSlideIndex + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      showSlide(currentSlideIndex - 1);
    } else if (e.key === 'f' || e.key === 'F') {
      if (btnFullscreen) btnFullscreen.click();
    }
  });

  window.addEventListener('load', () => {
    if (window.lucide) window.lucide.createIcons();
  });

  // ================= INTERACTIVE HUMAN-AI SPECTRUM SIMULATOR =================

  window.simulateOptionMechanism = (optionType) => {
    const display = document.getElementById('human-ai-sim-display');
    const tabs = document.querySelectorAll('.option-sim-tab');
    tabs.forEach(t => t.classList.remove('bg-blue-600', 'text-white'));
    if (event && event.target) event.target.classList.add('bg-blue-600', 'text-white');

    if (!display) return;

    if (optionType === 'optA') {
      display.innerHTML = `
        <div class="p-4 bg-slate-950/90 rounded-xl border border-amber-500/40 space-y-2">
          <div class="flex items-center justify-between text-xs font-mono">
            <span class="text-amber-400 font-bold uppercase">Option A: User-Initiated / On-Demand Assistive</span>
            <span class="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/30">Quyền Kiểm Soát Cao Nhất (High Agency)</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mt-2">
            <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span class="text-slate-400 font-bold block mb-1">👤 User làm gì?</span>
              User tự viết note, khi gặp đoạn khó hiểu thì chủ động bôi đen và nhấn nút <strong>"Giải thích thuật ngữ này"</strong>.
            </div>
            <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span class="text-amber-300 font-bold block mb-1">🤖 AI làm gì?</span>
              AI ở trạng thái bị động (Passive). Chỉ kích hoạt khi có lệnh rõ ràng từ User. Hiện popup giải thích ngắn gọn kèm nguồn.
            </div>
            <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span class="text-rose-300 font-bold block mb-1">⚖️ Trade-off chính</span>
              <strong>Ưu điểm:</strong> User không bị phân tâm, 100% kiểm soát.<br>
              <strong>Nhược điểm:</strong> Tốn nhiều thao tác bấm tay, user lười sẽ không dùng.
            </div>
          </div>
        </div>
      `;
    } else if (optionType === 'optB') {
      display.innerHTML = `
        <div class="p-4 bg-slate-950/90 rounded-xl border border-emerald-500/40 space-y-2">
          <div class="flex items-center justify-between text-xs font-mono">
            <span class="text-emerald-400 font-bold uppercase">Option B: User + AI Co-Create (Real-time Inline Ghosting)</span>
            <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">Cộng Tác Song Hành (Balanced Co-Pilot)</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mt-2">
            <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span class="text-slate-400 font-bold block mb-1">👤 User làm gì?</span>
              User gõ bài bình thường. Khi dừng gõ 1.5s, AI hiện gợi ý chữ mờ (Ghost text). User nhấn <kbd>Tab</kbd> để nhận hoặc gõ tiếp để bỏ qua.
            </div>
            <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span class="text-emerald-300 font-bold block mb-1">🤖 AI làm gì?</span>
              Dự đoán ý tiếp theo dựa trên ngữ cảnh bài giảng hiện tại, tự biến mất ngay khi user gõ ký tự khác (Zero friction).
            </div>
            <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span class="text-rose-300 font-bold block mb-1">⚖️ Trade-off chính</span>
              <strong>Ưu điểm:</strong> Tốc độ ghi chép tăng gấp 3 lần, cực kỳ mượt mà.<br>
              <strong>Nhược điểm:</strong> Gợi ý mờ liên tục có thể gây xao nhãng nếu độ chính xác không cao.
            </div>
          </div>
        </div>
      `;
    } else {
      display.innerHTML = `
        <div class="p-4 bg-slate-950/90 rounded-xl border border-purple-500/40 space-y-2">
          <div class="flex items-center justify-between text-xs font-mono">
            <span class="text-purple-400 font-bold uppercase">Option C: AI Proactively Generates + Human Reviews / Refines</span>
            <span class="px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/30">Tự Động Hóa Cao (Proactive Agent)</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mt-2">
            <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span class="text-slate-400 font-bold block mb-1">👤 User làm gì?</span>
              User chỉ cần nghe giảng. Cuối buổi, AI tự tạo sẵn bản tóm tắt có cấu trúc Flashcards. User duyệt lại, sửa lỗi và bấm "Lưu vào Mindmap".
            </div>
            <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span class="text-purple-300 font-bold block mb-1">🤖 AI làm gì?</span>
              Tự động lắng nghe audio, trích xuất key concepts, đánh dấu mức độ tin cậy (Confidence) và tạo bản nháp hoàn chỉnh.
            </div>
            <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span class="text-rose-300 font-bold block mb-1">⚖️ Trade-off chính</span>
              <strong>Ưu điểm:</strong> Rảnh tay 100%, không lo bỏ sót bài.<br>
              <strong>Nhược điểm:</strong> Rủi ro ảo giác (Hallucination), user ít ghi nhớ kiến thức do không tự tay viết.
            </div>
          </div>
        </div>
      `;
    }
    if (window.lucide) window.lucide.createIcons();
  };

  // Interactive Quiz Logic
  window.checkQuizAnswer = (qIdx, optIdx, isCorrect, explainText) => {
    const quizCard = document.getElementById(`quiz-card-${qIdx}`);
    if (!quizCard) return;

    const options = quizCard.querySelectorAll('.quiz-option');
    options.forEach((opt, idx) => {
      opt.classList.remove('correct', 'wrong');
      if (idx === optIdx) {
        if (isCorrect) {
          opt.classList.add('correct');
        } else {
          opt.classList.add('wrong');
        }
      }
    });

    const explainBox = document.getElementById(`quiz-explain-${qIdx}`);
    if (explainBox) {
      explainBox.classList.remove('hidden');
      explainBox.innerHTML = `
        <div class="flex items-start gap-2 text-xs ${isCorrect ? 'text-emerald-300 bg-emerald-950/60 border-emerald-500/40' : 'text-amber-300 bg-amber-950/60 border-amber-500/40'} p-3 rounded-lg border mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
          </svg>
          <div>
            <strong>${isCorrect ? 'Chính xác!' : 'Giải thích chi tiết:'}</strong> ${explainText}
          </div>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
    }
  };

  // Initial show
  showSlide(0);
});
