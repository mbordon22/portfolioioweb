<?php

$recaptcha_secret = '6LdQuoYaAAAAADJZlp-cuMfRdVMyivEExY3lRedD'; 
$recaptcha_response = $_POST['recaptcha_response']; 
$url = 'https://www.google.com/recaptcha/api/siteverify'; 

$data = array( 'secret' => $recaptcha_secret, 'response' => $recaptcha_response, 'remoteip' => $_SERVER['REMOTE_ADDR'] ); 
$curlConfig = array( CURLOPT_URL => $url, CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_POSTFIELDS => $data ); 
$ch = curl_init(); 
curl_setopt_array($ch, $curlConfig); 
$response = curl_exec($ch); 
curl_close($ch);

$jsonResponse = json_decode($response);
if ($jsonResponse->success === true) { 
    //Recibo las variables
    $nombre = $_POST["txtNombre"];
    $correo = $_POST["txtCorreo"];
    $asunto = $_POST["txtAsunto"];
    $mensaje = $_POST["txtMensaje"];

    //Armo el cuerpo del mensaje
    $cuerpo = "Alguien se contactó con usted: \n";
    $cuerpo .= "Nombre: ${nombre} \n";
    $cuerpo .= "Correo: ${correo} \n";
    $cuerpo .= "Mensaje: ${mensaje} \n";

    //Enviar a mi correo
    mail("rivadenneira@gmail.com", "Mensaje del portfolio web: ${asunto}", $cuerpo);

    // Redirigir al inicio y mostrar mensaje de exito
    header("Location: ". "https://rivadeneiramaximiliano.com/?envio=1");
} else {
   // Redirigir al inicio y mostrar mensaje de error
   header("Location: ". "https://rivadeneiramaximiliano.com/?envio=2");
}


?>