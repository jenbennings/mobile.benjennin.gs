$(document).ready(function() {
  $slides = $('.homeSlide');
  $body   = $('body');

  var adjustWindow = function() {
    var windowHeight = $(window).height();

    // Keep minimum height 550
    if(windowHeight <= 550) windowHeight = 550;

    // Resize our slides
    return $slides.css({
      height: windowHeight
    });
  }

  adjustWindow();

  //FadeIn all sections
  $body.imagesLoaded(function() {
    setTimeout(function() {
      // Resize sections
      adjustWindow();

      // Fade in sections
      $body.removeClass('loading').addClass('loaded');
    }, 800);
  });
});