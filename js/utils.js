$(document).ready( function(){
  $('.dropdown').hover(function(){
    $(this).addClass('open');
  },
  function(){
    $(this).removeClass('open');
  });
})


$(function() {
  $("#contact #submit").click(function() {
    var name = $("#form_name").val();
    var email = $("#form_email").val();
    var text = $("#msg_text").val();
    var dataString = 'name='+ name + '&email=' + email + '&text=' + text;

    $.ajax({
      type: "POST",
      url: "send.php",
      data: dataString,
      success: function(){
      $('.success').fadeIn(1000);
      }
    });

    return false;
  });
});
