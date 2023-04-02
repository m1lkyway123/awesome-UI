$(document).ready(function(){
    $('.quis__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.btn__slider-left'),
        nextArrow: $('.btn__slider-right'),
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                prevArrow: false,
                nextArrow: false,
              }
            },
            {
                breakpoint: 430,
                settings: {
                  slidesToShow: 1
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.consectet__inner').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
        document.querySelector("body").classList.toggle("open");
    })
})