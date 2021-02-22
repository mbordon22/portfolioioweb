<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$pg = "contacto";

include_once "PHPMailer/src/SMTP.php";
include_once "PHPMailer/src/PHPMailer.php";
$msg = "";

function guardarCorreo($correo)
{
    $archivo = fopen("mails.txt", "a+");
    fwrite($archivo, $correo . ";\n\r");
    fclose($archivo);
}

if ($_POST) { /* es postback */

    $nombre = $_POST["txtNombre"];
    $correo = $_POST["txtCorreo"];
    $asunto = $_POST["txtAsunto"];
    $mensaje = $_POST["txtMensaje"];

    if ($nombre != "" && $correo != "") {
        guardarCorreo($correo);

        $mail = new PHPMailer();
        $mail->IsSMTP();
        $mail->SMTPAuth = true;
        $mail->Host = "smtp.hostinger.com.ar"; // SMTP a utilizar. Por ej. mail.dominio.com.ar*/
        $mail->Username = "rivadenneira@rivadeneiramaximiliano.com"; // Correo completo a utilizar
        $mail->Password = "Racing14"; //Clave
        $mail->Port = 587;
        $mail->From = "rivadenneira@rivadeneiramaximiliano.com"; // Desde donde enviamos (Para mostrar)
        $mail->FromName = "Maximiliano Rivadeneira Bordón";
        $mail->IsHTML(true);
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true,
            ),
        );

        //Destinatario
        $mail->addAddress($correo);
        $mail->addBCC("rivadenneira@rivadeneiramaximiliano.com");
        $mail->Subject = "Contacto página web";
        $mail->Body = "Recibimos tu consulta, <br>te responderemos a la brevedad.";
        //  if(!$mail->Send()){
        //     $msg = "Error al enviar el correo, intente nuevamente mas tarde.";
        //   }
        $mail->ClearAllRecipients(); //Borra los destinatarios

        //Nosotros
        $mail->addAddress("rivadenneira@gmail.com");
        $mail->Subject = "Recibiste un mensaje desde tu página web";
        $mail->Body = "Te escribió $nombre cuyo correo es $correo, con el asunto $asunto y el siguiente mensaje:<br><br>$mensaje";

        if ($mail->Send()) {
            header('Location: index.html');
        } else {
            $msg = "Error al enviar el correo, intente nuevamente mas tarde.";
        }
    } else {
        $msg = "Complete todos los campos";
    }
}
?>