import { Sounds } from './sounds.js'

export function Timer({
  timerTimeOut,
  minutesDisplay,
  secondsDisplay,
  minutes
}) {
  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)
      if (isFinished) {
        Sounds().finishTimer()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function up() {
    minutes++
    updateDisplay(String(minutes), 0)
  }
  function down() {
    minutes--
    updateDisplay(String(minutes), 0)

    if (minutes < 1) {
      minutes = 0
      reset()
    }
  }

  return {
    countdown,
    reset,
    updateDisplay,
    up,
    down
  }
}
