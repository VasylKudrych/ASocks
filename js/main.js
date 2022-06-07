$(document).ready(function () {

    $(".btn-main-popup").click(function(event) {
        $(".main-popup").addClass("target");
        $("body").addClass("lock");
    });

    $(".main-popup__exit").click(function(event) {
        $(".main-popup").removeClass("target");
        $("body").removeClass("lock");
    });

    $(".plan-menu").click(function(event) {
        $(".plan-popup").toggleClass("active");
    });
});



