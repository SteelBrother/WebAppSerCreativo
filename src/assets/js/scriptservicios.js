$(document).ready(function () {
    $('.js-child').on({
        mouseenter: function () {
            $(this).addClass('col__child--hover');
        },
        mouseleave: function () {
            $(this).removeClass('col__child--hover');
        },
        click: function () {
            $(this).toggleClass('col__child--expand').siblings().toggleClass('col__child--collapsed');
        }
    });
});

$(window).on('load', function () {
    $(document).on('keyup', function (evt) {
        if (evt.keyCode === 27) {
            console.log('Esc key pressed.');
            $('.js-child').removeClass('col__child--expand').siblings().removeClass('col__child--collapsed');
        }
    });
});