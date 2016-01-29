$(document).ready( function(){
  $("#contacto #submit").click(function() {
    var data = {
      name: $("#form_name").val(),
      email: $("#form_mail").val(),
      message: $("#form_msg").val(),
      phone: $("#form_phone").val()
    };
    console.log(data);

    $.ajax({
      type: "POST",
      url: "send.php",
      data: data,
      success: function(){
        $('.success').removeClass('hidden');
      }
    });

    return false;
  });

  $('.success .close').click(function(){
    $(this).parent().addClass('hidden');
  });

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
