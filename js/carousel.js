$(document).ready(function(){
    $("#main-carousel").owlCarousel({
        loop:true,
        items:1,
        responsiveClass:true,
        responsive:{
            0:{
                dots: true,
                nav: false,
            },
            768:{
                dots: true,
                nav: true,
            },
        },
        navText: [],
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    })
});

$(document).ready(function(){
    $(".products__list").owlCarousel({
        loop: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots: true,
                nav: false,
            },
            768:{
                items:2,
                dots: true,
                nav: false,
            },
            1200:{
                items:3,
                dots: false,
                nav: false,
            },
            1300:{
                items:4,
                dots: false,
                nav: true,
            }
        },
        margin:30,
        navText: [],
    })
});