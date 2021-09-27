let deviceWidth = window.screen.availWidth;
let menuMobileItems = $(".nav__list-content");
let closeMenuMobile = $(".close-menu");

$("nav .link-scroll").click(element => {

    element.preventDefault();

    let navHeight = $(".nav").innerHeight(); 
    let idLink = $(element.target).attr("href");
    let targetOffset = $(idLink).offset().top;

    $("html, body").animate({
        scrollTop: targetOffset - navHeight
    });

    if(deviceWidth <= 512) {
        menuMobileItems.fadeOut();
        closeMenuMobile.fadeOut();
        $("html").css("overflow", "initial");
    }

});