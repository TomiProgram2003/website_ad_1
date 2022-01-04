(function(){

  // vars
  const $openMenu = document.querySelector('.nav__menu')
  const $closeMenu = document.querySelector('.nav__close')
  const $menu = document.querySelector('.nav__link')

  // open menu action
  $openMenu.addEventListener('click', () => {
    $menu.classList.add('nav__link--show')
  })

  // close menu action
  $closeMenu.addEventListener('click', () => {
    $menu.classList.remove('nav__link--show')
  })

})();