const enableDarkMode = () => {
  document.body.classList.add('dark')
  localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
  document.body.classList.remove('dark')
  localStorage.setItem('darkMode', 'disabled')
}

export const initDarkMode = () => {
  const themeSwitch = document.getElementById('theme-switch')

  if (themeSwitch) {
    themeSwitch.addEventListener(
      'click',
      () => {
        const darkMode = localStorage.getItem('darkMode') || 'disabled'

        if (darkMode !== 'enabled') {
          enableDarkMode()
        } else {
          disableDarkMode()
        }
      },
      false
    )
    
    const darkMode = localStorage.getItem('darkMode') || 'disabled'
    if (darkMode !== 'enabled') {
      document.body.classList.remove('dark')
    } else {
      document.body.classList.add('dark')
    }
  }
}

initDarkMode()
