const openSidebar = () => {
  document.body.classList.add('dark')
  localStorage.setItem('darkMode', 'enabled')

  const sidebarElement = document.getElementById('nav-sidebar')
  if (sidebarElement)
  {
    // sidebarElement.
    console.log('got side')
  }
}

const closeSidebar = () => {
  document.body.classList.remove('dark')
  localStorage.setItem('darkMode', 'disabled')

  const sidebarElement = document.getElementById('nav-sidebar')
  if (sidebarElement) {
    console.log('got side')
  }
}

export const initSidebar = () => {
  const hamburgerMenu = document.getElementById('hamburger-menu')

  if (hamburgerMenu) {
    hamburgerMenu.addEventListener(
      'click',
      () => {
        const darkMode = localStorage.getItem('darkMode') || 'disabled'

        if (darkMode !== 'enabled') {
          openSidebar()
        } else {
          closeSidebar()
        }
      },
      false
    )

    // const darkMode = localStorage.getItem('darkMode') || 'disabled'
    // if (darkMode !== 'enabled') {
    //   closeSidebar()
    // } else {
    //   openSidebar()
    // }
  }
}

// Initialize sidebar on page load.
initSidebar()
