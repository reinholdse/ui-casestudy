(function(global) {
'use strict';

var App = {

  settings: {
    modules: {}
  },

  init: function() {
    for (var key in App.settings.modules) {
      if (!App.settings.modules.hasOwnProperty(key)) continue;
      App.settings.modules[key].init();
    }
  },

  require: function(moduleName) {
    return App.settings.modules[moduleName];
  }

};

global.App = App;

})(window);

$(function() {

  App.init();

});
