(function(App){
'use strict';

var SugController = {

  settings: {
    container: $('#suggestions'),
    scrollElemContainer: $('.side-scroll-elements'),
    nextButton: $('.scroll-btn-next'),
    prevButton: $('.scroll-btn-prev'),
    sideScrollElemSnippet: '<div class="side-scroll-elem">' +
                             '<img src="" alt=""><p class="username"></p>' +
                           '</div>',
    db: [
      { img: 'prof1.png', name: 'mujjo' },
      { img: 'prof2.png', name: 'elise' },
      { img: 'prof3.png', name: 'michel' },
      { img: 'prof4.png', name: 'photographo' },
      { img: 'prof5.png', name: 'masooma' }
    ],
    sideScrollElemWidth: 210,
    scrollBarState: 0
  },

  init: function() {
    SugController.fillContent();
    SugController.bindUI();
  },

  bindUI: function() {
    SugController.settings.prevButton.on('click', function(e) {
      e.preventDefault();
      SugController.prev();
    });
    SugController.settings.nextButton.on('click', function(e) {
      e.preventDefault();
      SugController.next();
    });
  },

  fillContent: function() {
    var width = SugController.settings.scrollElemContainer.width();
    var numToInsert = width / SugController.settings.sideScrollElemWidth;
    SugController.settings.scrollElemContainer.append(SugController.fillSnippet(SugController.settings.db[numToInsert%5]));
    for (var i = 0; i < numToInsert; i++) {
      SugController.settings.scrollElemContainer.append(SugController.fillSnippet(SugController.settings.db[i%5]))
    }
    SugController.settings.scrollElemContainer.append(SugController.fillSnippet(SugController.settings.db[0]));
  },

  fillSnippet: function(profile) {
    return '<div class="side-scroll-elem"><img src="images/' + profile.img +
           '" alt=""><p class="username">' + profile.name + '</p></div>';
  },

  next: function() {
    SugController.settings.scrollElemContainer.append(SugController.fillSnippet(SugController.settings.db[SugController.settings.scrollBarState%5]));
    SugController.settings.scrollBarState++;
    SugController.settings.scrollElemContainer.append(SugController.fillSnippet(SugController.settings.db[SugController.settings.scrollBarState%5]));
    SugController.settings.scrollBarState++;
  },

  prev: function() {
    SugController.settings.scrollElemContainer.prepend(SugController.fillSnippet(SugController.settings.db[SugController.settings.scrollBarState%5]));
    SugController.settings.scrollBarState++;
    SugController.settings.scrollElemContainer.prepend(SugController.fillSnippet(SugController.settings.db[SugController.settings.scrollBarState%5]));
    SugController.settings.scrollBarState++;
  }

};

App.settings.modules['suggestions.controller'] = SugController;

})(App);
