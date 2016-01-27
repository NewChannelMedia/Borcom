$(document).ready( function(){
  $('.dropdown').hover(function(){
    $(this).addClass('open');
  },
  function(){
    $(this).removeClass('open');
  });

  if ($(window).width() < 768) {
    $('#nav').addClass('navbar-fixed-top');
    $('body').addClass('mobile');
  }
  else {
    $('#nav').removeClass('navbar-fixed-top');
    $('body').removeClass('mobile');
  }
})
