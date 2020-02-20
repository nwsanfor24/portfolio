$(document).ready(function () {
    $('.parallax').parallax();

    VANTA.BIRDS({
        el: "#vantajs",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xb1625,
        color1: 0x5cff,
        color2: 0x2eca48
    });

    document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
    document.cookie = 'same-site-cookie=foo; SameSite=Lax';
});

