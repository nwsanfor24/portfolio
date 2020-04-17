$(document).ready(function () {
    $('.parallax').parallax();

    $("#port").click(function() {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1000);
    });

    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
        }, 2000);
    });

    $("#work").click(function() {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 2000);
    });

    $("#contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contactMe").offset().top
        }, 2000);
    });

    document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
    document.cookie = 'same-site-cookie=foo; SameSite=Lax';
});

