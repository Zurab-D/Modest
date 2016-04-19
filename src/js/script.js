(function($){
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      autoplayHoverPause: true,
      items: 3,
      loop: true,
      margin: 30,
      autoplayTimeout: 3000,
      rewind: true,
      lazyLoad: true,
      navSpeed: 5000,
      autoplaySpeed: 1000,
      dotsSpeed: 1000,
      responsive : {
        // breakpoint from 0 up
        0 : {
          items: 1,
          autoplay: true,
          dots: false,
        },
        // breakpoint from 480 up
        768 : {
          items: 2,
          autoplay: true,
          dots: false,
        },
        // breakpoint from 768 up
        976 : {
          items: 3,
          autoPlay: false,
          dots: true,
        }}
    });

    if ($("body").scrollTop() > 80) {
      $('.navbar-fixed-top').removeClass('my-navbar--initial');
    } else {
      $('.navbar-fixed-top').addClass('my-navbar--initial');
    }
  });
})(jQuery);

$(window).scroll(function(){
  if ($("body").scrollTop() > 80) {
    $('.navbar-fixed-top').removeClass('my-navbar--initial');
  } else {
    $('.navbar-fixed-top').addClass('my-navbar--initial');
  }
});
