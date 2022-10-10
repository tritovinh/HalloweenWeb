// Img Slider
$(document).ready(function () {
    $('.body__slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        arrows: false,
        dots: true,
        swipe: false,
    });
});

// Text Slider
$(document).ready(function () {
    $('.text__slider').slick({
        slidesToShow: 1,
        speed: 800,
        swipe: false,
    });
});