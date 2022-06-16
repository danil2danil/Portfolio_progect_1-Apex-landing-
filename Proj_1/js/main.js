$(document).ready(function(){
    $('.review__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        infinite: false, 
    });

    $('.btn-menu').click(function(){
        $('.header__nav').toggleClass('header__nav--open');
    });
  
});