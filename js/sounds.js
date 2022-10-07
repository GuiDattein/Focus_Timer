export function Sounds() {
  const pressButtonPlay = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const finish = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )
  const soundFloresta = new Audio('./sounds/Floresta.wav')
  const soundChuva = new Audio('./sounds/Chuva.wav')
  const soundCafeteria = new Audio('./sounds/Cafeteria.wav')
  const soundLareira = new Audio('./sounds/Lareira.wav')

  function pressButton() {
    pressButtonPlay.play()
  }
  function finishTimer() {
    finish.play()
  }
  function floresta() {
    soundFloresta.play()
  }
  function chuva() {
    soundChuva.play()
  }
  function cafeteria() {
    soundCafeteria.play()
  }
  function lareira() {
    soundLareira.play()
  }

  return {
    cafeteria,
    chuva,
    floresta,
    lareira,
    pressButton,
    finishTimer
  }
}
