const categoryButton = document.querySelectorAll(".category-button");
const time = document.querySelector(".time-container");
const settingsButton = document.querySelector(".settings-button");
const mainContainer = document.querySelector(".main-container");
const settingsContainer = document.querySelector(".settings-container");
const acceptSettingsButton = document.querySelector(".accept-button");
const startButton = document.querySelector(".start-stop-button");

let pomodoroDefaultValue = 25;
let shortBreakDefaultValue = 5;
let longBreakDefaultValue = 15;
let breakIntervalDefaultValue = 4;
let timeValue = pomodoroDefaultValue * 60;
let timer;
let pomodoroTimerValue;
let shortBreakTimerValue;
let longBreakTimerValue;
let isRunning = false;
let intervalCounter = 1;

const changeCategory = function () {
  categoryButton.forEach(function (button) {
    time.textContent = `${pomodoroDefaultValue}:00`;
    startButton.addEventListener("click", timerButtonAction);
    button.addEventListener("click", function () {
      startButton.addEventListener("click", timerButtonAction);
      categoryButton.forEach((button) => button.classList.remove("active"));
      button.classList.add("active");
      if (button.textContent == "Pomodoro") {
        time.textContent = `${String(pomodoroDefaultValue).padStart(
          2,
          "0"
        )}:00`;
        timeValue = pomodoroDefaultValue * 60;
      } else if (button.textContent == "Short break") {
        time.textContent = `${String(shortBreakDefaultValue).padStart(
          2,
          "0"
        )}:00`;
        timeValue = shortBreakDefaultValue * 60;
      } else {
        time.textContent = `${String(longBreakDefaultValue).padStart(
          2,
          "0"
        )}:00`;
        timeValue = longBreakDefaultValue * 60;
      }
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
    pomodoroDefaultValue = document.querySelector("#pomodoro-length").value;
    shortBreakDefaultValue = document.querySelector(
      "#short-break-length"
    ).value;
    longBreakDefaultValue = document.querySelector("#long-break-length").value;
    breakIntervalDefaultValue = document.querySelector(
      "#long-break-interval"
    ).value;
    categoryButton.forEach(function (button) {
      if (button.textContent == "Pomodoro") {
        button.classList.add("active");
        button.click();
      } else {
        button.classList.remove("active");
      }
    });
    mainContainer.classList.toggle("inactive");
    settingsContainer.classList.toggle("inactive");
    pomodoroTimerValue = pomodoroDefaultValue * 60;
    shortBreakTimerValue = shortBreakDefaultValue * 60;
    longBreakTimerValue = longBreakDefaultValue * 60;
  });
};

const stopTimer = function () {
  isRunning = false;
  startButton.textContent = "START";
  clearInterval(timer);
};

const timerButtonAction = function () {
  if (isRunning == false) {
    isRunning = true;
    startButton.textContent = "STOP";
    timer = setInterval(function () {
      let minutes = String(Math.trunc(timeValue / 60)).padStart(2, "0");
      let seconds = String(Math.trunc(timeValue % 60)).padStart(2, "0");
      time.textContent = `${minutes}:${seconds}`;
      timeValue--;
      if (timeValue <= -2) {
        intervalCounter++;
        categoryButton.forEach(function (button) {
          console.log(`>>${button.textContent}
          >>${intervalCounter}`);
          if (intervalCounter % (breakIntervalDefaultValue * 2) == 0) {
            if (button.textContent == "Long break") {
              button.classList.add("active");
              button.click();
            } else {
              button.classList.remove("active");
            }
          } else if (intervalCounter % 2 == 0) {
            if (button.textContent == "Short break") {
              button.classList.add("active");
              button.click();
            } else {
              button.classList.remove("active");
            }
          } else if (intervalCounter % 1 == 0) {
            if (button.textContent == "Pomodoro") {
              button.classList.add("active");
              button.click();
            } else {
              button.classList.remove("active");
            }
          }
        });
      }
    }, 1000);
  } else {
    stopTimer();
  }
};

changeCategory();
showSettings();
acceptSettings();
