(function() {


  function adjustSignupBanner() {
    var w = $(window).width();
    if (w > 1920 && w < 2651)
      $('#banner-signup').css('background-image', 'url("images/banner-signup-background-2650.png")');
    else if (w > 2650)
      $('#banner-signup').css('background-image', 'url("images/banner-signup-background-5760.png")');
    else
      $('#banner-signup').css('background-image', 'url("images/banner-signup-background-1920.png")');
  }

  $(document).ready(function(){
    adjustSignupBanner();

    $(window).on('resize', function() {
      adjustSignupBanner();
    });

    $('.btn-exit').on('click', function() {
      $('#banner-signup').slideUp();
    });
  });


})();
