const darkRoot = document.querySelector('.html')
const darkMode = document.querySelector('.light-mode')
const lightMode = document.querySelector('.dark-mode')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonUpTime = document.querySelector('.up-time')
const buttonDownTime = document.querySelector('.down-time')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonFloresta = document.querySelector('.floresta')
const buttonChuva = document.querySelector('.chuva')
const buttonCafeteria = document.querySelector('.cafeteria')
const buttonLareira = document.querySelector('.lareira')
let timerTimeOut
let minutes = Number(minutesDisplay.textContent)

export {
  darkMode,
  darkRoot,
  lightMode,
  buttonPlay,
  buttonStop,
  buttonUpTime,
  buttonDownTime,
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  minutes,
  buttonChuva,
  buttonCafeteria,
  buttonFloresta,
  buttonLareira
}
