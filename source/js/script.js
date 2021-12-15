var menuToggle = document.querySelector('.page-header__menu-toggle');
var navMain = document.querySelector('.main-nav');

menuToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    menuToggle.classList.remove('page-header__menu-toggle--closed');
    menuToggle.classList.add('page-header__menu-toggle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    menuToggle.classList.add('page-header__menu-toggle--closed');
    menuToggle.classList.remove('page-header__menu-toggle--opened');
  }
});