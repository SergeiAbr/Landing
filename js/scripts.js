// Custom Scripts
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    const navBtns = document.querySelector('.nav__btns')
    const navBtn = document.querySelector('.nav__btn')
    const prim = document.querySelector('.btn__primary')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
        navBtns.classList.add('active')
        navBtn.classList.add('active')
        prim.classList.add('active')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
        navBtns.classList.remove('active')
        navBtn.classList.remove('active')
        prim.classList.remove('active')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
        navBtns.classList.remove('active')
        navBtn.classList.remove('active')
        prim.classList.remove('active')
      }
    })
  }
  burgerMenu()
  
// subMenu

function submenu() {
  const submenu = document.querySelector('.submenu')
  const trigger = document.querySelector('.with__submenu')
  const arrow = document.querySelector('.submenu__arrow')
  const triggerLink = document.querySelector('.trigger__link')
  trigger.addEventListener('click', () => {
     submenu.classList.toggle('active')
     triggerLink.classList.toggle('active')
     arrow.classList.toggle('active')
  })
}
submenu()


