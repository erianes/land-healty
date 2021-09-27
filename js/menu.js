let menuIcon = $(".menu-mobile");
let menuContent = $(".nav__list-content");
let closeMenu = $(".close-menu");

function scrollActive(status){
    let propertie = status ? "hidden" : "initial";
    return $("html").css("overflow", propertie);
}

menuIcon.click(() => {
    scrollActive(true);
    closeMenu.fadeIn();
    menuContent.fadeIn().css("display", "flex");
});

closeMenu.click(() => {
    scrollActive(false);
    closeMenu.fadeOut();
    menuContent.fadeOut();
});