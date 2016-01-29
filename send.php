<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $phone = $_POST['phone'];
    $nameC = ucwords($name);
    $fecha = date('m / d / y');

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type:text/html;charset=utf-8" . "\r\n";
    /*$headers .= 'Bcc: pruebamasivos@newchannel.mx' . "\r\n";*/
    $headers .= 'From: Borcom <info@borcom.cc>'."\r\n";

    $fullMsg = '
    <table align="center" style="background-color:#F5F7FA;width:100%;margin:0;border:0px;text-align:center;min-height:300px;font-family:" arial ";padding:0;border-spacing:0;">
      <tbody style="vertical-align:top;padding:0;margin:0;border:0;">
        <tr>
          <td style="padding:0;">
            <table align="center" style="max-width:650px;border:none;margin:0 auto;min-height:120px;padding:0;border-spacing:0;">
              <tbody>
                <tr style="height:100px;">
                  <td style="width:200px;padding:0;">
                    <img style="width:100%;" src="http://www.borcom.cc/img/logo/borcom.png">
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <p style="text-align:center;font-size:16px;">
              Haz recibido un mensaje desde la p&aacute;gina de <strong>borcom.cc</strong>:
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:0;">
            <table style="max-width:650px;width:100%;border:none;background-color:#f5f5f5;margin:0 auto;min-height:150px;border-spacing:0;border:solid 1px rgba(0,0,0,.2);">
              <tbody>
                <tr style="padding:20px;">
                  <td style="text-align:justify;vertical-align:middle;font-size:14px;color:#333;padding: 20px 0;">
                    <table style="width:100%;">
                      <tr>
                        <td style="width:20px;height:100%;border-right: solid 4px #e42629;">
                          &nbsp;
                        </td>
                        <td style="padding-left:25px;">
                          <p style="font-size:16px;text-align:right;">
                            '.$fecha.'
                            <br>
                          </p>
                          <p style="text-align:justify;font-size:16px;border:0px;border-left:0px;">
                            <q>'.$message.'</q>
                          </p>
                          <p style="text-align:right;font-size:15px;color:#666;">
                            <em><span style="text-transform:capitalize;">'.$name.'</span>
                              <br>'.$phone.'
                              <br>'.$email.'
                            </em>
                          </p>
                        </td>
                        <td style="width:40px;">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    ';

    mail("info@borcom.cc", "Borcom Web: " .$nameC, $fullMsg, $headers);
}
?>
