const menuButton = document.querySelector('.header__menu-button')
const asideMenuElement = document.querySelector('.header__aside-menu-wrapper')

let isOpen = false

menuButton.addEventListener('click', () => {
    if(!isOpen) {
        document.body.style.overflow = 'hidden'
        asideMenuElement.style.display = 'block'
        menuButton.classList.add('active')
        isOpen = true
    } else {
        document.body.style.overflow = ''
        asideMenuElement.style.display = ''
        menuButton.classList.remove('active')
        isOpen = false
    }
})