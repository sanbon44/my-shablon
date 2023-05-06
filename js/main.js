$(document).ready(function () {
    /* подключение слайдера: */
    $('.main__slider').slick({
        autoplay: false,
        autoplaySpeed: 2000,
    });

    $('.header__burger').click(function(e){
        $('.header__burger, .header__nav').toggleClass('active')
        $('body').toggleClass('lock');
    });
});


$("a[href*='#']").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
});