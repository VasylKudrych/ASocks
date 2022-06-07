$(document).ready(function () {
    $(function(){
        new Clipboard('.list-proxy__btn');
    });

    $('.list-proxy__content span').click(function() {
        if ($(this).hasClass('ip-proxy--active')) {
            $(this).removeClass('ip-proxy--active');
            $(this).parent().find('.list-proxy__text');
        } else {
            $(this).addClass('ip-proxy--active');
            $(this).parent().find('.list-proxy__text');
        }
    });

    $('.list-proxy__btn').click(function() {
        setTimeout(function (){
            $("span.ip-proxy").removeClass("ip-proxy--active");
        },100);
    });
});