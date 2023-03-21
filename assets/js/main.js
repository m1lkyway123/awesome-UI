$(document).ready(function(){
    $('.quis__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.btn__slider-left'),
        nextArrow: $('.btn__slider-right')
    });
});