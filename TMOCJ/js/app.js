$(document).ready(function(){

  var body            = $("body");
  var navbar          = $("#navbar");
  var menuButton      = $(".icon-menu");
  var menuOverlay     = $(".menu-items");
  var menuOptions     = $(".menu-items li");

  var heroSection     = $("#hero");
  var synopsisSection = $("#synopsis");
  var castSection     = $("#cast");
  var gallerySection  = $("#gallery");
  var supportSection  = $("#support");
  var sections        = [heroSection, synopsisSection, castSection,
                        gallerySection, supportSection];

  var scrollable = true;
  var currentSection   = heroSection;
  var currentScroll;

  $(window).scroll(function() {
    // Only applies when mobile overlay menu is closed.
    if (scrollable == true) {
      // Checks current scroll position of the window
      var scroll = $(window).scrollTop();
      // Takes difference between closer to top section and window scroll pos.
      var closerDif = scroll - currentSection[0].offsetTop;

      // Converts negative amounts to positive
      if (closerDif < 0) {
        closerDif = closerDif * -1;
      }

      // Compares all sections to closer section
      for (i = 0; i < sections.length; i++) {
        var section = sections[i];

        // Only evaluates sections that are not the active one
        if (section[0].id != currentSection[0].id) {
          var secDif = scroll - section[0].offsetTop;

          // Convers negative amounts to positive
          if (secDif < 0) {
            secDif = secDif * -1;
          }

          // If section position to top is closer than current, updates.
          if (secDif < closerDif){
            // Removes active class from current active
            $(".menu-items li" + "." + currentSection[0].id).removeClass("active");
            currentSection = section;
            // Assigns active class to new active
            $(".menu-items li" + "." + currentSection[0].id).addClass("active");
          }
        }
      }

      if(scroll >= 100) {
        navbar.addClass("black");
      } else {
        navbar.removeClass("black");
      }
    }
  });

  menuButton.click(function() {
    scrollable = false;
    currentScroll = $(window).scrollTop();
    body.addClass("no-scroll");
    navbar.addClass("transparent");
    menuOverlay.addClass("active");
    // for (i = 0; i < sections.length; i++){
    //   $(sections[i].addClass("blurred"));
    // }
    heroSection.addClass("blurred");

    setTimeout(function() {
      menuOverlay.addClass("opacity");
    }, 50);
  });

  menuOverlay.click(function() {
    if (menuOverlay.hasClass("active")) {
      // Fade out the menu overlay and set back to normal the other elements
      body.removeClass("no-scroll");
      navbar.removeClass("transparent");
      menuOverlay.removeClass("opacity");
      heroSection.removeClass("blurred");

      // Set scroll position back to original before opening the menu
      scrollable = true;
      window.scrollTo(0, currentScroll);

      setTimeout(function() {
        // Removes all the attributes left to the menu overlay
        menuOverlay.removeClass("active");
      }, 400);
    }
  });

  menuOptions.click(function() {
    // Remove active class from all menu elements
    for (i = 0; i < menuOptions.length; i++) {
      $(menuOptions[i]).removeClass("active");
    }
    // Add active class to selected element
    $(this).addClass("active");
  });

});
