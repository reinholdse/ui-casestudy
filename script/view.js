(function(global) {

  var $view = {};

  /* HEADER, SIGNUP BANNER */
  $view.$header = $('header');
  $view.$banner_signup = $('#banner-signup');

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


  /* OVERLAY */
  $view.$overlay = $('.overlay');
  $view.login = {};
  $view.login.$tab = $('#tab-login');
  $view.login.$modal = $('#modal-login');
  $view.signup = {};
  $view.signup.$tab = $('#tab-signup');
  $view.signup.$modal = $('#modal-signup');

  $view.login.deactivate = $view.signup.deactivate = function() {
    this.$modal.removeClass('active');
    this.$tab.removeClass('active');
    $view.clearModalForm(this.$modal);
  }

  $view.clearModalForm = function($modal) {
    $modal.find('input').val('');
    $modal.find('.checkbox').removeClass('active');
  }

  $view.login.activate = $view.signup.activate = function () {
    this.$modal.addClass('active');
    this.$tab.addClass('active');
  }


  $view.openOverlay = function(mode) {
    mode.$tab.addClass('active');
    mode.$modal.addClass('active');
    $view.$overlay.fadeIn(150);
  }

  $view.closeOverlay = function() {
    $view.$overlay.fadeOut(150);
    $view.login.deactivate();
    $view.signup.deactivate();
  }

  $view.reactToKeypress = function(enter, esc, e) {
    if (e.which == 13 || e.keyCode == 13) {
      enter();
    } else if (e.which == 27 ||e.keyCode == 27) {
      esc();
    }
  }

  $view.loginUser = function() {
    var name = $view.login.$modal.find('[name=username]').val();
    $view.closeOverlay();
    $user.logIn(name);
    $view.$banner_signup.slideUp();
    $view.bindEventListeners();
  }

  $view.signupUser = function() {
    var name = $view.signup.$modal.find('[name=username]').val();
    $view.closeOverlay();
    $user.logIn(name);
    $view.$banner_signup.slideUp();
    $view.bindEventListeners();
  }


  /* BIND EVENTS */
  $view.bindEventListeners = function() {

    // Header, Signup Banner
    $(global).on('resize', $view.adjustSignupBanner);
    $(global).on('scroll', $view.adjustHeader)
    $('.btn-exit').on('click', function() {
      $(this).parent().slideUp();
    });

    // Overlay
    $('.overlay .btn-exit-overlay').on('click', $view.closeOverlay);
    $('body').on('keydown', function(e) {
      if ($view.$overlay.is(':visible'))
        if ($view.login.$modal.is(':visible'))
          $view.reactToKeypress($view.loginUser, $view.closeOverlay, e);
        else if ($view.signup.$modal.is(':visible'))
          $view.reactToKeypress($view.signupUser, $view.closeOverlay, e);
    });
    $('.btn-login').on('click', function() {
      $view.openOverlay($view.login);
    });
    $('.btn-signup').on('click', function() {
      $view.openOverlay($view.signup);
    });
    $('.btn-logout').on('click', function() {
      $user.logOut();
      $view.$banner_signup.slideDown(800);
    });
    $('.btn-user-login').on('click', $view.loginUser);
    $('.btn-user-signup').on('click', $view.signupUser);
    $('#tab-login').on('click', function() {
      $view.login.activate();
      $view.signup.deactivate();
    });
    $('#tab-signup').on('click', function() {
      $view.login.deactivate();
      $view.signup.activate();
    });
    $('.checkbox').on('click', function() {
      $(this).toggleClass('active');
    });

  };

  // Expose $view to global scope
  global.$view = $view;

})(window);

$(document).ready(function() {
  $view.initialize();
});
