const body = document.querySelector('body');
const html = document.querySelector('html');
const menuToggle = document.querySelector('#menu-toggle');

const btnBack = document.querySelector('.filter-form__back-btn');
const filterToggle = document.querySelector('.filter-top__filter-trigger-btn');

document.addEventListener('DOMContentLoaded', () => {

    menuToggle.addEventListener('click', () =>{
        toggleMobileMenu();
    })

    filterToggle.addEventListener('click', ()=>{
        showMobileFilter();
    })

    btnBack.addEventListener('click', ()=>{
        hideMobileFilter();
    })
})

function toggleMobileMenu(){
    const mobileMenu = document.querySelector('#mobile-menu');

    menuToggle.classList.toggle('menu-icon-active');
    mobileMenu.classList.toggle('mobile-menu--active');
    body.classList.toggle('no-scroll');
    html.classList.toggle('no-scroll');
    body.classList.toggle('mobile-menu-opened');
}

function showMobileFilter(){
    const mobileFilter = document.querySelector('.filter-form');

    mobileFilter.classList.add('filter-form--active');
    body.classList.add('no-scroll');
    html.classList.add('no-scroll');
}

function hideMobileFilter(){
    const mobileFilter = document.querySelector('.filter-form');

    mobileFilter.classList.remove('filter-form--active');
    body.classList.remove('no-scroll');
    html.classList.remove('no-scroll');
}