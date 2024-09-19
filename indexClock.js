let [second, minute, hour] = [0, 0, 0];
let timeD = document.querySelector(".timedisplay");
int = null;
console.log(timeD);

function displayTime() {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
    if (minute == 60) {
      minute = 0;
      hour++;
    }
  }
  h = hour < 10 ? "0" + hour : hour;
  m = minute < 10 ? "0" + minute : minute;
  s = second < 10 ? "0" + second : second;
  timeD.innerHTML = `${h}:${m}:${s}`;
}

function stopWatch() {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTime, 1000);
}

function pause() {
  clearInterval(int);
}

function reset() {
  clearInterval(int);
  [second, minute, hour] = [0, 0, 0];
  timeD.innerHTML = "00:00:00";
}
