(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    //$('.scrollspy').scrollSpy();

    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });

    if (location.hash === "message-sent") {
      alert('Message sent. Thanks!');
    }
    

  }); // end of document ready
})(jQuery); // end of jQuery name space