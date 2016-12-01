(function(App) {
'use strict';

var BannerController = {

  settings: {
    signupBanner: $('#banner-signup'),
    url: {
      small: 'images/banner-signup-background-1920-min.png',
      medium: 'images/banner-signup-background-2650-min.png',
      large: 'images/banner-signup-background-5760.png'
    },
    closeButton: $('.btn-exit')
  },

  init: function() {
    BannerController.adjustBackgroundImgSize();
    BannerController.bindUI();
  },

  bindUI: function() {
    $(window).on('resize', BannerController.adjustBackgroundImgSize);
    BannerController.settings.closeButton.on('click', function(e) {
      e.preventDefault();
      BannerController.close();
    });
  },

  adjustBackgroundImgSize: function() {
    function setImage(url) {
      BannerController.settings.signupBanner.css('background-image', 'url("' + url + '")');
    }

    var windowWidth = $(window).width();
    if (windowWidth < 1921)
      setImage(BannerController.settings.url.small);
    else if (windowWidth > 1920 && windowWidth < 2651)
      setImage(BannerController.settings.url.medium);
    else
      setImage(BannerController.settings.url.large);
  },

  close: function() {
    BannerController.settings.signupBanner.slideUp();
  },

  show: function() {
    BannerController.settings.signupBanner.slideDown(800);
  }

};

App.settings.modules['banner.controller'] = BannerController;

})(App);
