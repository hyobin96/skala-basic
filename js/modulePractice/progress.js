// progress.js

/**
 * 진행바를 제어하는 컨트롤러 생성
 * @param {HTMLElement} progressBarEl - #progress-bar 요소
 * @param {HTMLButtonElement} startBtnEl - #start-btn 요소
 */
export function createProgressController(progressBarEl, startBtnEl) {
  let progress = 0;
  let intervalId = null;

  // 3~5초 랜덤 종료 시간
  const getEndTime = () => 3000 + Math.random() * 2000;

  // progress bar 업데이트
  const updateProgressBar = (value) => {
    progressBarEl.style.width = value + "%";
    progressBarEl.textContent = value + "%";
    progressBarEl.setAttribute("aria-valuenow", String(value));
  };

  const start = () => {
    if (intervalId) return; // 중복 실행 방지

    startBtnEl.disabled = true;
    progress = 0;
    updateProgressBar(0);

    const endTime = getEndTime();
    const startTime = Date.now();

    intervalId = setInterval(() => {
      const elapsed = Date.now() - startTime;

      // 랜덤 종료 시간 도달 시
      if (elapsed >= endTime) {
        updateProgressBar(100);
        clearInterval(intervalId);
        intervalId = null;
        startBtnEl.disabled = false;
        return;
      }

      // 1초마다 10% 증가
      progress += 10;
      if (progress > 100) progress = 100;
      updateProgressBar(progress);
    }, 1000);
  };

  return { start };
}
