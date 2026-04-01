const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stopt = document.getElementById("stopt");
const reset = document.getElementById("reset");
let interval;
let timeLeft = 1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      alert("Time is up");
      clearInterval(interval);
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

start.addEventListener("click", startTimer);
stopt.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
