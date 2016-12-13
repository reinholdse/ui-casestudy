(function(App){
'use strict';

var ProfileController = {

  settings:{
    body: $('body'),
    image: $('.image'),
    gallery: $('.gallery'),
    photoExpanded: $('#photo-expanded'),
    back: $('.btn-back')
},

  init: function(){
    ProfileController.bindUI();
    ProfileController.settings.photoExpanded.css("display", "none");
  },

  bindUI: function(){
    ProfileController.settings.image.on('click', function(e) {
      e.preventDefault();
      ProfileController.settings.gallery.css("display", "none");
      var src = $(this).attr("src");
      ProfileController.settings.photoExpanded.find('.graphic').attr("src", src);
      ProfileController.settings.photoExpanded.css("display", "flex");
    });
    ProfileController.settings.back.on('click', function(e){
          e.preventDefault();
          ProfileController.close();
    });
    ProfileController.settings.body.on('keydown', function(e) {
      if (ProfileController.settings.photoExpanded.is(':visible'))
        Utils.reactToKeypress(function(){},
                              ProfileController.close,
                              e);
    });

  },

  close: function(){
    ProfileController.settings.photoExpanded.css("display", "none");
    ProfileController.settings.gallery.css("display", "initial");
  }
};

App.settings.modules['profile.controller'] = ProfileController;

})(App);
