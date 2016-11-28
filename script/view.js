(function(global) {

  var $view = {};

  // Cache queries
  $view.$header = $('header');
  $view.$banner_signup = $('#banner-signup');
  $view.$overlay = $('.overlay');

  $view.initialize = function() {
    $view.adjustSignupBanner();
    $view.bindEventListeners();
  };

  $view.adjustSignupBanner = function() {
    var w = $(window).width();
    if (w > 1920 && w < 2651)
      $view.$banner_signup.css('background-image', 'url("images/banner-signup-background-2650-min.png")');
    else if (w > 2650)
      $view.$banner_signup.css('background-image', 'url("images/banner-signup-background-5760.png")');
    else
      $view.$banner_signup.css('background-image', 'url("images/banner-signup-background-1920-min.png")');
  };

  $view.adjustHeader = function() {
    if ($(window).scrollTop() > 0) $view.$header.addClass('off-top');
    else $view.$header.removeClass('off-top');
  };

  $view.bindEventListeners = function() {

    $(global).on('resize', $view.adjustSignupBanner);
    $(global).on('scroll', $view.adjustHeader)
    $('.btn-exit').on('click', function() {
      $(this).parent().slideUp();
    });
    $('.overlay .btn-exit-overlay').on('click', function() {
      $view.$overlay.fadeOut(150);
    });
    $('.btn-login, .btn-signup').on('click', function() {
      $view.$overlay.fadeIn(150);
    });

  };

  // Expose $view to global scope
  global.$view = $view;

})(window);

$(document).ready(function() {
  $view.initialize();
});
