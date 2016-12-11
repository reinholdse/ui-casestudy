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
    var numToInsert = (width / SugController.settings.sideScrollElemWidth) + 2;
    for (var i = 0; i < numToInsert; i++) {
      SugController.settings.scrollElemContainer.append(SugController.fillSnippet(SugController.settings.db[i%5]))
    }
  },

  fillSnippet: function(profile) {
    return '<div class="side-scroll-elem"><img src="images/' + profile.img +
           '" alt=""><p class="username">' + profile.name + '</p></div>';
  },

  next: function() {
    SugController.settings.scrollElemContainer.addClass('next');
    setTimeout(function(){
      SugController.settings.scrollElemContainer.children().css('transition', 'all 0s');
      var first = SugController.settings.scrollElemContainer.children().first();
      first.remove();
      SugController.settings.scrollElemContainer.append(first);
      SugController.settings.scrollElemContainer.removeClass('next');
      setTimeout(function() {
        SugController.settings.scrollElemContainer.children().css('transition', 'all 0.6s');
      }, 30);
    }, 600);
  },

  prev: function() {
    SugController.settings.scrollElemContainer.addClass('prev');
    setTimeout(function(){
      SugController.settings.scrollElemContainer.children().css('transition', 'all 0s');
      var last = SugController.settings.scrollElemContainer.children().last();
      last.remove();
      SugController.settings.scrollElemContainer.prepend(last);
      SugController.settings.scrollElemContainer.removeClass('prev');
      setTimeout(function(){
        SugController.settings.scrollElemContainer.children().css('transition', 'all 0.6s');
      }, 30);

    }, 600);
  }

};

App.settings.modules['suggestions.controller'] = SugController;

})(App);
