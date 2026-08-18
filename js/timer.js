/**
 * timer.js - Countdown Timer Widget for Day 18 Lab
 * Supports task presets (120m sprint, 180m full, Chặng 1-6)
 */

class LabTimer {
  constructor() {
    this.totalSeconds = 120 * 60; // Default 120 mins classroom sprint
    this.remainingSeconds = this.totalSeconds;
    this.timerInterval = null;
    this.isRunning = false;

    this.displayElement = document.getElementById('timer-display');
    this.statusElement = document.getElementById('timer-status');
    this.btnToggle = document.getElementById('timer-toggle-btn');
    this.btnReset = document.getElementById('timer-reset-btn');
    this.taskSelect = document.getElementById('timer-preset-select');

    this.init();
  }

  init() {
    if (this.btnToggle) {
      this.btnToggle.onclick = () => this.toggle();
    }
    if (this.btnReset) {
      this.btnReset.onclick = () => this.reset();
    }
    if (this.taskSelect) {
      this.taskSelect.onchange = (e) => {
        const mins = parseInt(e.target.value, 10);
        this.setDuration(mins);
      };
    }
    this.updateDisplay();
  }

  setDuration(minutes) {
    this.pause();
    this.totalSeconds = minutes * 60;
    this.remainingSeconds = this.totalSeconds;
    this.updateDisplay();
  }

  toggle() {
    if (this.isRunning) {
      this.pause();
    } else {
      this.start();
    }
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    if (this.btnToggle) {
      this.btnToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4"/><rect width="4" height="16" x="14" y="4"/></svg> Tạm Dừng`;
      this.btnToggle.className = "px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-mono text-xs font-bold transition flex items-center gap-1 shadow";
    }
    if (this.displayElement) {
      this.displayElement.classList.add('timer-running');
    }

    this.timerInterval = setInterval(() => {
      if (this.remainingSeconds > 0) {
        this.remainingSeconds--;
        this.updateDisplay();
      } else {
        this.pause();
        this.playBeep();
        if (this.statusElement) this.statusElement.innerText = "⏰ Hết giờ!";
      }
    }, 1000);
  }

  pause() {
    this.isRunning = false;
    clearInterval(this.timerInterval);
    if (this.btnToggle) {
      this.btnToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg> Bắt Đầu`;
      this.btnToggle.className = "px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition flex items-center gap-1 shadow";
    }
    if (this.displayElement) {
      this.displayElement.classList.remove('timer-running');
    }
  }

  reset() {
    this.pause();
    this.remainingSeconds = this.totalSeconds;
    this.updateDisplay();
  }

  updateDisplay() {
    if (!this.displayElement) return;
    const hrs = Math.floor(this.remainingSeconds / 3600);
    const mins = Math.floor((this.remainingSeconds % 3600) / 60);
    const secs = this.remainingSeconds % 60;

    const pad = (n) => String(n).padStart(2, '0');
    if (hrs > 0) {
      this.displayElement.innerText = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    } else {
      this.displayElement.innerText = `${pad(mins)}:${pad(secs)}`;
    }
  }

  playBeep() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime); // 880Hz A5
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.8);
    } catch (e) {}
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.labTimer = new LabTimer();
});
