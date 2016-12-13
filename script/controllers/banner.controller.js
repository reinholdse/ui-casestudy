(function(App) {
'use strict';

var signupBanner = {
  container: $('#banner-signup'),
  url: {
    small: 'images/banner-signup-background-1920-min.png',
    medium: 'images/banner-signup-background-2650-min.png',
    large: 'images/banner-signup-background-5760.png'
  },
  closeButton: $('#banner-signup .btn-exit'),

  close: function() {
    BannerController.settings.signupBanner.container.slideUp();
  },

  show: function() {
    BannerController.settings.signupBanner.container.slideDown(800);
  },

  adjustBackgroundImgSize: function() {
    var windowWidth = $(window).width();
    if (windowWidth < 1921)
      BannerController.setImage(BannerController.settings.signupBanner.container,
                                BannerController.settings.signupBanner.url.small);
    else if (windowWidth > 1920 && windowWidth < 2651)
      BannerController.setImage(BannerController.settings.signupBanner.container,
                                BannerController.settings.signupBanner.url.medium);
    else
      BannerController.setImage(BannerController.settings.signupBanner.container,
                                BannerController.settings.signupBanner.url.large);
  }
};

var searchBanner = {
  container: $('#banner-search'),
  url: {
    small: 'images/banner-search-bg-1920-min.png',
    medium: 'images/banner-search-bg-2650-min.png'
  },

  adjustBackgroundImgSize: function() {
    var windowWidth = $(window).width();
    if (windowWidth < 1921)
      BannerController.setImage(BannerController.settings.searchBanner.container,
                                BannerController.settings.searchBanner.url.small);
    else
      BannerController.setImage(BannerController.settings.searchBanner.container,
                                BannerController.settings.searchBanner.url.medium);
  }
};

var BannerController = {

  settings: {
    signupBanner: signupBanner,
    searchBanner: searchBanner
  },

  init: function() {
    BannerController.settings.signupBanner.adjustBackgroundImgSize();
    BannerController.settings.searchBanner.adjustBackgroundImgSize();
    BannerController.bindUI();
  },

  bindUI: function() {
    $(window).on('resize', function() {
      BannerController.settings.signupBanner.adjustBackgroundImgSize();
      BannerController.settings.searchBanner.adjustBackgroundImgSize();
    });
    BannerController.settings.signupBanner.closeButton.on('click', function(e) {
      e.preventDefault();
      BannerController.settings.signupBanner.close();
    });
  },

  setImage: function(container, url) {
    container.css('background-image', 'url("' + url + '")');
  }
};

App.settings.modules['banner.controller'] = BannerController;

})(App);
