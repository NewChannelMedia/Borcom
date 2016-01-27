<?php
if($_POST){
    $name = $_POST['form_name'];
    $email = $_POST['form_email'];
    $message = $_POST['form_msg'];

//send email
    mail("jcmedinamartinez@gmail.com", "Enviado desde Borcom.cc" .$email, $message);
}
?>
