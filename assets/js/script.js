(function($){
  $(function(){

    $('.button-collapse').sideNav({
      edge: 'right'
    });
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

    if (location.hash === "#message-sent") {
      Materialize.toast('Message Sent. Thanks!', 2000);
    }
    
    $("#headline-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1500,
      vertical: true,
      adaptiveHeight: true,
      mobileFirst: true
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space