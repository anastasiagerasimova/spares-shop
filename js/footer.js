const footermMenucColumns = document.querySelectorAll('.footer__menu-col');

footermMenucColumns.forEach(function(item) {
    item.addEventListener('click', function(e){
        if(e.target.classList.contains('footer__menu-title')) {
            e.target.closest('.footer__menu-col').classList.toggle('footer-menu--opened');
            // this.querySelector('.footer-menu').classList.toggle('footer-menu--opened');
            e.target.classList.toggle('icon-arrow-top');
        } 
    })
})