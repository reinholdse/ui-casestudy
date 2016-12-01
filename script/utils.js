var Utils = {

  reactToKeypress: function(enter, esc, e) {
    if (e.which == 13 || e.keyCode == 13) {
      enter();
    } else if (e.which == 27 ||e.keyCode == 27) {
      esc();
    }
  }
  
};
