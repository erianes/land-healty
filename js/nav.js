const submenuContainer = ".drop-down";
const subMenuClass = ".drop-down__sub-menu";
const displayBlock = "block";

let nav = $(".nav");
let displayNav = nav.css("display");
let dropDownLink = $("#drop-down-link");
let auxSubMenu = 0;
let deviceWidthNav = $(document).width();

if(displayNav != displayBlock) {
   $(window).scroll(() => {
      let scrollPage = $(this).scrollTop();
      let positionShowNav = 900;
      
      scrollPage >= positionShowNav ? nav.fadeIn() : nav.fadeOut();
   });
}

function openSubmenu(element) {
   return $(subMenuClass, element).stop().slideDown();
}

function closeSubmenu(element) {
   return  $(subMenuClass, element).stop().slideUp();
}

if(deviceWidthNav > 900) {
   $(submenuContainer).hover(function () {
      openSubmenu(this);
   },
   function () {
      closeSubmenu(this);
   });
} else {
   dropDownLink.removeClass("link-scroll");

   $(submenuContainer).click(function () {
      auxSubMenu += 1;
      auxSubMenu >= 3 ? auxSubMenu = 1 : false;
      auxSubMenu == 1 ? openSubmenu(this) : closeSubmenu(this);
   });
}
