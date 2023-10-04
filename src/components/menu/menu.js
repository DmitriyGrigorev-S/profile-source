import $ from 'jquery';

$(document).ready(function() {
    const btnClose = $('.menu__close');

    btnClose.on('click', function() {
        $(this).closest('.header__menu').removeClass('open');
        $('body').toggleClass('no-scroll');
    });
});