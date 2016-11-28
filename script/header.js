(function() {

  var $header = $('header');
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) $header.addClass('off-top');
    else $header.removeClass('off-top');
  });

})()
