let timer: NodeJS.Timer;

export function countdownTimer(
  updateTime: (newTime: number) => void,
  totalTime
) {
  let time: number;

  let startTime = new Date().getTime();
  let endTime = startTime + totalTime;

  timer = setInterval(() => {
    let currentTime = new Date().getTime();

    let diff = endTime - currentTime;

    if (diff >= 0) time = diff;
    else {
      time = 0;
      clearInterval(timer);
    }

    updateTime(time);
  }, 1000);
}

export function stopTimer() {
  if (timer) {
    clearInterval(timer);
  }
}
