function startSplash() {
    let timeSplash = Math.floor(Math.random() * (1500 - 1150) + 1150);

    $("html").css("overflow", "hidden");

    setTimeout(function(){
        $(".splash").fadeOut();
        $("html").css("overflow", "initial");
        window.scrollTo(500, 0);
    }, timeSplash);
}

$(() => {
    startSplash(); 
});