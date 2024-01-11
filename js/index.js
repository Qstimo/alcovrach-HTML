const navToggle = document.querySelector('.header__btn');
const buttons = document.querySelectorAll('.main-headline__nav__list_btn')
const lists = document.querySelectorAll('.main-headline__nav__list')

if (navToggle) {
    const navMenu = document.querySelector('.navbar');
    navToggle.addEventListener("click", function (e) {
        navMenu.classList.toggle('_active');
    });
}


buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        const target = button.getAttribute('data-target');
        const list = document.getElementById(target);

        const isActive = list.classList.contains('main-headline__nav__list_active');
        console.log('isActive')
        if (isActive) {
            list.classList.remove('main-headline__nav__list_active');
        } else {
            list.classList.add('main-headline__nav__list_active');
        }
    });
});