let containerContent = $(".animation-section");
let classAnimationSectionStart = "animation-section-start";

function animationScroll() {
    let documentScrollTop = $(document).scrollTop();
    let offSet = $(window).height() * 3 / 4 - 75;

    containerContent.each((index, element) => {
        let elementOffSet = $(element).offset().top;
        documentScrollTop > elementOffSet - offSet ? $(element).addClass(classAnimationSectionStart) : $(element).removeClass(classAnimationSectionStart);
    });
};

animationScroll();
$(document).scroll(() => animationScroll());