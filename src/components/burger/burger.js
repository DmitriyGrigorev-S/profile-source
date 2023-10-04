import $ from 'jquery';

$(document).ready(function() {
    const burger = $('.burger');
    const menu = $('.menu');

    burger.on('click', function() {
        menu.toggleClass('open');
        $('body').toggleClass('no-scroll');
    });
});