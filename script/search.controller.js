(function(App) {
'use strict';

var SearchController = {

  settings: {
    body: $('body'),
    overlay: $('.search-overlay'),
    closeOverlayButton: $('.overlay .btn-exit-search-overlay'),
    searchButton: $('.btn-search')
  },

  init: function() {
    SearchController.bindUI();
  },

  bindUI: function() {
    SearchController.settings.closeOverlayButton.on('click', function(e) {
      e.preventDefault();
      SearchController.close();
    });
    SearchController.settings.searchButton.on('click', function(e) {
      e.preventDefault();
      if (!SearchController.settings.searchButton.hasClass('btn-dark'))
        SearchController.open();
      else
        SearchController.close();
    })
    SearchController.settings.body.on('click', function(e) {
      if (SearchController.settings.overlay.is(':visible'))
        if (!$(e.target).closest('#floating-action-search').length)
          SearchController.close();
    });
    SearchController.settings.body.on('keydown', function(e) {
      if (SearchController.settings.overlay.is(':visible'))
        Utils.reactToKeypress(SearchController.close(),
                              SearchController.close(),
                              e);
    });
  },

  open: function() {
    SearchController.settings.searchButton.parent().addClass('active');
    SearchController.settings.overlay.fadeIn(150);
    SearchController.settings.searchButton.addClass('btn-dark');
    SearchController.settings.searchButton.next().focus();
  },

  close: function() {
    SearchController.settings.searchButton.next().val('');
    SearchController.settings.searchButton.removeClass('btn-dark');
    SearchController.settings.overlay.fadeOut(150);
    SearchController.settings.searchButton.parent().removeClass('active');
  }

};

App.settings.modules['search.controller'] = SearchController;

})(App);
