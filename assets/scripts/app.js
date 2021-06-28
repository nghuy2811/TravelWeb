const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerNavBtn = $('.header__navbar-icon');
const headerNavHorizon = $('.header__navbar__horizon');
const NavHorizonCloseBtn = headerNavHorizon.querySelector('.close-btn');

headerNavBtn.onclick = () => {
    headerNavHorizon.style.right = '0px';
}

NavHorizonCloseBtn.onclick = () => {
    headerNavHorizon.style.right = '-350px';
}

