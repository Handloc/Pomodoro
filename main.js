const categoryButton = document.querySelectorAll(".category-button");
const time = document.querySelector(".time-container");
const settingsButton = document.querySelector(".settings-button");
const mainContainer = document.querySelector(".main-container");
const settingsContainer = document.querySelector(".settings-container");
const acceptSettingsButton = document.querySelector(".accept-button");
const startButton = document.querySelector(".start-stop-button");

let pomodoroValue = 25;
let shortBreakValue = 5;
let longBreakValue = 15;
let breakInterval = 4;
let timer;
let timeValue = pomodoroValue * 60;
let pomodoroTimerValue;
let shortBreakTimerValue;
let longBreakTimerValue;

const changeCategory = function () {
  categoryButton.forEach(function (button) {
    time.textContent = `${pomodoroValue}:00`;

    button.addEventListener("click", function () {
      categoryButton.forEach((button) => button.classList.remove("active"));
      button.classList.add("active");
      if (button.textContent == "Pomodoro") {
        time.textContent = `${pomodoroValue}:00`;
        startButton.timeValue = 33;
        console.log("POMO");
      } else if (button.textContent == "Short break") {
        console.log("sb");
        time.textContent = `${shortBreakValue}:00`;
        startButton.timeValue = 3;
      } else {
        console.log("lb");
        time.textContent = `${longBreakValue}:00`;
        startButton.timeValue = 13;
      }

      startButton.addEventListener("click", function () {
        startButton.addEventListener("click", timerStates);
      });
    });
  });
};

const showSettings = function () {
  settingsButton.addEventListener("click", function () {
    mainContainer.classList.toggle("inactive");
    settingsContainer.classList.toggle("inactive");
  });
};

const acceptSettings = function () {
  acceptSettingsButton.addEventListener("click", function () {
    pomodoroValue = document.querySelector("#pomodoro-length").value;
    shortBreakValue = document.querySelector("#short-break-length").value;
    longBreakValue = document.querySelector("#long-break-length").value;
    breakInterval = document.querySelector("#long-break-interval").value;
    categoryButton.forEach(function (button) {
      if (button.textContent == "Pomodoro") button.classList.add("active");
      else {
        button.classList.remove("active");
      }
    });
    mainContainer.classList.toggle("inactive");
    settingsContainer.classList.toggle("inactive");
    pomodoroTimerValue = pomodoroValue * 60;
    shortBreakTimerValue = shortBreakValue * 60;
    longBreakTimerValue = longBreakValue * 60;
  });
};

const timerStates = function (e) {
  console.log("TIMER START");
  if (startButton.textContent == "START") {
    startButton.textContent = "STOP";
    timer = setInterval(function () {
      let minutes = String(Math.trunc(e.timeValue / 60)).padStart(2, "0");
      let seconds = String(Math.trunc(e.timeValue % 60)).padStart(2, "0");
      time.textContent = `${minutes}:${seconds}`;
      timeValue--;
    }, 1000);
  } else {
    startButton.textContent = "START";
    clearInterval(timer);
  }
};

changeCategory();
showSettings();
acceptSettings();
