$(document).ready(function(){

  var body            = $("body");
  var navbar          = $("#navbar");
  var menuButton      = $(".icon-menu");
  var closeButton     = $(".icon-close");
  var menuOverlay     = $(".menu-items");
  var menuOptions     = $(".menu-items li");
  var trailerButton   = $(".btn-trailer");
  var closeTrailerButton = $("#video-box .btn-close");

  var videoBox        = $("#video-box");
  var heroSection     = $("#hero");
  var synopsisSection = $("#synopsis");
  var castSection     = $("#cast");
  var gallerySection  = $("#gallery");
  var supportSection  = $("#support");
  var sections        = [heroSection, synopsisSection, castSection,
                        gallerySection, supportSection];


  var castOptions     = $("#cast article");
  var castDetail      = $("#cast-detail");
  var btnClose        = $(".btn-close");

  var galleryTop    = $("#gallery .image .top");
  var galleryBottom = $("#gallery .image .bottom");
  var galleryNext  = $("#gallery .control.next");
  var galleryPrevious  = $("#gallery .control.previous");

  var scrollable = true;
  var castOpen   = false;
  var currentSection  = heroSection;
  var currentScroll;
  var currentTop = 1;
  var currentBottom = 2;

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

          // Converts negative amounts to positive
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

  trailerButton.click(function() {
    body.addClass("no-scroll");
    videoBox.addClass("active");

    setTimeout(function() {
      videoBox.addClass("opacity");
    }, 50);
  });

  closeTrailerButton.click(function() {
    videoBox.removeClass("opacity");
    body.removeClass("no-scroll");
    $("#video-frame")[0].src = $("#video-frame")[0].src;

    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 10);

    setTimeout(function() {
      videoBox.removeClass("active");
    }, 400);
  });

  galleryPrevious.click(function() {
    if (galleryTop.hasClass("active")) {

      if (currentTop == 1 && currentBottom == 2) {
        currentBottom = 6;

        var botomSrc = "./img/gallery/gallery-" + currentBottom + ".jpg";
        galleryBottom.attr("src", botomSrc);
      }

      galleryTop.removeClass("active");
      galleryBottom.addClass("active");

      if (currentTop > 1) {
        currentTop = currentTop - 2;
      }
      else {
        currentTop = 5;
      }

      var topSrc = "./img/gallery/gallery-" + currentTop + ".jpg";

      setTimeout(function() {
        galleryTop.attr("src", topSrc);
      }, 400);

    }
    else {
      galleryBottom.removeClass("active");
      galleryTop.addClass("active");

      if (currentBottom > 2) {
        currentBottom = currentBottom - 2;
      }
      else {
        currentBottom = 6;
      }

      var bottomSrc = "./img/gallery/gallery-" + currentBottom + ".jpg";

      setTimeout(function() {
        galleryBottom.attr("src", bottomSrc);
      }, 400);
    }
  });

  galleryNext.click(function() {
    if (galleryTop.hasClass("active")) {

      galleryTop.removeClass("active");
      galleryBottom.addClass("active");

      if (currentTop < 5) {
        currentTop = currentTop + 2;
      }
      else {
        currentTop = 1;
      }

      var imgSrc = 'url(./img/gallery/gallery-' + currentTop + '@2x.jpg)';

      setTimeout(function() {
        galleryTop.css("background-image", imgSrc);
      }, 400);

    }
    else {
      galleryBottom.removeClass("active");
      galleryTop.addClass("active");

      if (currentBottom < 6) {
        currentBottom = currentBottom + 2;
      }
      else {
        currentBottom = 2;
      }

      var imgSrc = 'url(./img/gallery/gallery-' + currentBottom + '@2x.jpg)';

      setTimeout(function() {
        galleryBottom.css("background-image", imgSrc);
      }, 400);
    }
  });

  menuButton.click(function() {
    // Disables scrollable function
    scrollable = false;

    currentScroll = $(window).scrollTop();
    body.addClass("no-scroll");
    navbar.addClass("transparent");
    menuOverlay.addClass("active");
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
      window.scrollTo(0, currentScroll);

      setTimeout(function() {
        // Enables scrollable function
        console.log("Scrollale true from overlay")
        scrollable = true;
      }, 50);

      setTimeout(function() {
        // Removes all the attributes left to the menu overlay
        menuOverlay.removeClass("active");
      }, 350);
    }
  });

  closeButton.click(function() {
    if (menuOverlay.hasClass("active")) {
      // Fade out the menu overlay and set back to normal the other elements
      body.removeClass("no-scroll");
      navbar.removeClass("transparent");
      menuOverlay.removeClass("opacity");
      heroSection.removeClass("blurred");

      // Set scroll position back to original before opening the menu
      window.scrollTo(0, currentScroll);

      setTimeout(function() {
        // Enables scrollable function
        console.log("Scrollale true from overlay")
        scrollable = true;
      }, 50);

      setTimeout(function() {
        // Removes all the attributes left to the menu overlay
        menuOverlay.removeClass("active");
      }, 350);
    }
  });

  menuOptions.click(function() {
    // Disables scrollable function
    scrollable = false;

    // Remove active class from all menu elements
    for (i = 0; i < menuOptions.length; i++) {
      $(menuOptions[i]).removeClass("active");
    }
    // Add active class to selected element
    $(this).addClass("active");

    setTimeout(function() {
      scrollable = true;
    }, 50);
  });

  castOptions.click(function () {
    $(navbar).css("background-color", "black");

    if (castOpen === false) {
      var cast = $(this);
      var content = $(this)[0].childNodes[5];

      castOpen = true;
      $(content).css("opacity", "0");
      $(cast).addClass("active");

      setTimeout(function() {
        $(content).css("transition", "opacity 600ms ease-out");
        $(content).css("opacity", "1");
      }, 50);

      body.addClass("no-scroll");
    }

  });

  btnClose.click(function() {
    var actorSelected = $(this)[0].offsetParent;
    var content = $(actorSelected)[0].childNodes[5];

    $(actorSelected).removeClass("active");
    $(content).css("opacity", "");
    $(content).css("transition", "");
    body.removeClass("no-scroll");

    var positionToGo = $(castSection)[0].offsetTop;
    window.scrollTo(0, positionToGo);

    setTimeout(function() {
      castOpen = false;
      $(navbar).css("background-color", "");
    }, 50);
  });

});
