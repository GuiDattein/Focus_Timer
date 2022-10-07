import { Timer } from './timer.js'
import { Controls } from './controls.js'
import { Sounds } from './sounds.js'
import {
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
} from './elements.js'

const timer = Timer({
  timerTimeOut,
  minutesDisplay,
  secondsDisplay,
  minutes
})

const controls = Controls({
  darkMode,
  darkRoot,
  lightMode
})

const sounds = Sounds()

darkMode.addEventListener('click', function () {
  controls.transitionForDark()
})
lightMode.addEventListener('click', function () {
  controls.transitionForLight()
})
buttonPlay.addEventListener('click', () => {
  timer.countdown()
  Sounds().pressButton()
})
buttonStop.addEventListener('click', () => {
  clearTimeout(timerTimeOut)
  timer.reset()
  Sounds().pressButton()
})
buttonDownTime.addEventListener('click', () => {
  timer.down()
  Sounds().pressButton()
})
buttonUpTime.addEventListener('click', () => {
  timer.up()
  Sounds().pressButton()
})

buttonFloresta.addEventListener('click', () => {
  sounds.floresta()
  sounds.pressButton()
})
buttonChuva.addEventListener('click', () => {
  sounds.chuva()
  sounds.pressButton()
})
buttonCafeteria.addEventListener('click', () => {
  sounds.cafeteria()
  sounds.pressButton()
})
buttonLareira.addEventListener('click', () => {
  sounds.lareira()
  sounds.pressButton()
})
