(function(App) {
'use strict';

var HeaderController = App.require('header.controller');
var BannerController = App.require('banner.controller');

var LoginController = {

  settings: {
    body: $('body'),
    overlay: $('.user-overlay'),
    closeOverlayButton: $('.overlay .btn-exit-user-overlay'),
    login: {
      tab: $('#tab-login'),
      modal: $('#modal-login'),
      userLoginButton: $('.btn-user-login')
    },
    signup: {
      tab: $('#tab-signup'),
      modal: $('#modal-signup'),
      userSignupButton: $('.btn-user-signup')
    },
    loginButton: $('.btn-login'),
    signupButton: $('.btn-signup'),
    logoutButton: $('.btn-logout'),
    checkBox: $('#modal-signup .checkbox')
  },

  init: function() {
    LoginController.bindUI();
  },

  bindUI: function() {
    LoginController.settings.closeOverlayButton.on('click', function(e) {
      e.preventDefault();
      LoginController.close();
    });
    LoginController.settings.loginButton.on('click', function(e) {
      e.preventDefault();
      LoginController.open(LoginController.settings.login);
    });
    LoginController.settings.signupButton.on('click', function(e) {
      e.preventDefault();
      LoginController.open(LoginController.settings.signup);
    });
    LoginController.settings.logoutButton.on('click', function(e) {
      e.preventDefault();
      HeaderController.logOut();
      BannerController.show();
    });
    LoginController.settings.login.userLoginButton.on('click', function(e) {
      e.preventDefault();
      LoginController.logInUser();
    });
    LoginController.settings.signup.userSignupButton.on('click', function(e) {
      e.preventDefault();
      LoginController.signUpUser();
    });
    LoginController.settings.login.tab.on('click', function(e) {
      e.preventDefault();
      LoginController.switchFromTo(LoginController.settings.signup,
                                   LoginController.settings.login);
    });
    LoginController.settings.signup.tab.on('click', function(e) {
      e.preventDefault();
      LoginController.switchFromTo(LoginController.settings.login,
                                   LoginController.settings.signup);
    });
    LoginController.settings.checkBox.on('click', function() {
      LoginController.settings.checkBox.toggleClass('active');
    });
    LoginController.settings.body.on('keydown', function(e) {
      if (LoginController.settings.overlay.is(':visible'))
        if (LoginController.settings.login.modal.is(':visible'))
          Utils.reactToKeypress(LoginController.logInUser,
                                LoginController.close,
                                e);
        else if (LoginController.settings.signup.modal.is(':visible'))
          Utils.reactToKeypress(LoginController.signUpUser,
                                LoginController.close,
                                e);
    });
  },

  activate: function(pane) {
    pane.tab.addClass('active');
    pane.modal.addClass('active');
  },

  deactivate: function(pane) {
    pane.tab.removeClass('active');
    pane.modal.removeClass('active');
    LoginController.clearForm(pane.modal);
  },

  clearForm: function(modal) {
    modal.find('input').val('');
    modal.find('checkbox').removeClass('active');
  },

  open: function(pane) {
    LoginController.activate(pane);
    LoginController.settings.overlay.fadeIn(150);
  },

  close: function() {
    LoginController.settings.overlay.fadeOut(150);
    LoginController.deactivate(LoginController.settings.login);
    LoginController.deactivate(LoginController.settings.signup);
  },

  switchFromTo: function(origin, dest) {
    LoginController.deactivate(origin);
    LoginController.activate(dest);
  },

  logInUser: function() {
    var name = LoginController.settings.login.modal.find('[name=username]').val();
    LoginController.close();
    HeaderController.logIn(name);
    BannerController.settings.signupBanner.slideUp();
  },

  signUpUser: function() {
    var name = LoginController.settings.login.modal.find('[name=username]').val();
    LoginController.close();
    HeaderController.logIn(name);
    BannerController.settings.signupBanner.slideUp();
  }

};

App.settings.modules['login.controller'] = LoginController;

})(App);
