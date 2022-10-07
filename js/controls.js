export function Controls({ darkMode, darkRoot, lightMode }) {
  function transitionForDark() {
    darkRoot.classList.add('dark')
    darkMode.classList.add('hide')
    lightMode.classList.remove('hide')
  }
  function transitionForLight() {
    darkRoot.classList.remove('dark')
    darkMode.classList.remove('hide')
    lightMode.classList.add('hide')
  }

  return {
    transitionForDark,
    transitionForLight
  }
}
