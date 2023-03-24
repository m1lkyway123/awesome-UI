$(document).ready(function(){
    $('.quis__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.btn__slider-left'),
        nextArrow: $('.btn__slider-right')
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
    })
})