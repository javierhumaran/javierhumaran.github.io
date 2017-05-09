$(document).ready(function(){

  var body          = $("body");
  var navbar        = $("#navbar");
  var menuButton    = $(".icon-menu");
  var menuOverlay   = $(".menu-items");
  var heroSection   = $("#hero");

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if(scroll >= 100) {
        navbar.addClass("black");
          // $(".header").addClass(".change");
      } else {
        navbar.removeClass("black");
          // $(".header").removeClass(".change");
      }
  });

  menuButton.click(function() {

    body.addClass("no-scroll");
    navbar.addClass("transparent");
    menuOverlay.addClass("active");
    heroSection.addClass("blurred");

  });

  menuOverlay.click(function() {

    if (menuOverlay.hasClass("active")) {
      body.removeClass("no-scroll");
      navbar.removeClass("transparent");
      menuOverlay.removeClass("active");
      heroSection.removeClass("blurred");
    }

  });

});
