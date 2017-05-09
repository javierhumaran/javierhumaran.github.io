$(document).ready(function(){

  var navbar = $("#hero nav");

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

});
