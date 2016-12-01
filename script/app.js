(function(global) {
'use strict';

var App = {

  settings: {
    modules: []
  },

  init: function() {
    App.settings.modules['header.controller'].init();
    App.settings.modules['banner.controller'].init();
    App.settings.modules['search.controller'].init();
    App.settings.modules['login.controller'].init();

    // App.settings.modules.forEach(function(module) {
    //   module.init();
    // });
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
