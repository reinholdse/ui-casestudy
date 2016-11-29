(function(global) {
'use strict';

var $user = {};

$user.name = "";

// Cache queries
var $login_bar = $('#login-bar');
var $user_bar = $('#user-bar');
var $username = $user_bar.find('.username');

$user.logIn = function(name) {
  $user.name = name;
  $username.text($user.name);
  $login_bar.removeClass('active');
  $user_bar.addClass('active');
};

$user.logOut = function()  {
  $user.name = "";
  $username.empty();
  $user_bar.removeClass('active');
  $login_bar.addClass('active');
};

// Expose $user to global scope
global.$user = $user;

})(window);
