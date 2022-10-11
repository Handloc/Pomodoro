const categoryButton = document.querySelectorAll(".category-button");
const time = document.querySelector(".time-container");
const settingsButton = document.querySelector(".settings-button");
const mainContainer = document.querySelector(".main-container");
const settingsContainer = document.querySelector(".settings-container");
const acceptSettingsButton = document.querySelector(".accept-button");

let pomodoroValue = "253:00";
let shortBreakValue = "5:00";
let longBreakValue = "15:00";

const changeCategory = function () {
  categoryButton.forEach(function (button) {
    button.addEventListener("click", function () {
      categoryButton.forEach((button) => button.classList.remove("active"));
      button.classList.add("active");
      if (button.textContent == "Pomodoro") time.textContent = pomodoroValue;
      else if (button.textContent == "Short break")
        time.textContent = shortBreakValue;
      else time.textContent = longBreakValue;
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
    time.textContent = document.querySelector(".time-input").value;
    mainContainer.classList.toggle("inactive");
    settingsContainer.classList.toggle("inactive");
  });
};

changeCategory();
showSettings();
acceptSettings();
