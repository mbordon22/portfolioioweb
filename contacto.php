<?php


if ($_POST) { 
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
