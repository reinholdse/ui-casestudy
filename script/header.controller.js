(function(App) {
'use strict';

 var HeaderController = {

  settings: {
    header: $('header'),
    loginBar: $('#login-bar'),
    userBar: $('#user-bar'),
    userName: $('#user-bar .username')
  },

  init: function() {
    HeaderController.bindUI();
  },

  bindUI: function() {
    $(window).on('scroll', HeaderController.animateShadow);
  },

  animateShadow: function() {
    if ($(window).scrollTop() > 0)
      HeaderController.settings.header.addClass('off-top');
    else
      HeaderController.settings.header.removeClass('off-top');
  },

  logIn: function(name) {
    HeaderController.settings.userName.text(name);
    HeaderController.settings.loginBar.removeClass('active');
    HeaderController.settings.userBar.addClass('active');
  },

  logOut: function() {
    HeaderController.settings.userName.empty();
    HeaderController.settings.userBar.removeClass('active');
    HeaderController.settings.loginBar.addClass('active');
  }

};

App.settings.modules['header.controller'] = HeaderController;

})(App);
