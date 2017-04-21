
<?php
require("class.phpmailer.php");
$nombre= $_POST['name'];
$correo= $_POST['email'];
$asunto= $_POST['subject'];
$mensaje= $_POST['message'];
$mobile= $_POST['mobile'];
$fecha= $_POST['date'];
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Host = "mail.tecshopsystems.com"; // SMTP a utilizar. Por ej. smtp.elserver.com
$mail->Username = "correos@tecshopsystems.com"; // Correo completo a utilizar
$mail->Password = "Anabantha666"; // Contraseña
$mail->Port = 587; // Puerto a utilizar
$mail->From = "correos@tecshopsystems.com"; // Desde donde enviamos (Para mostrar)
$mail->FromName = "SANATORIO ESPAÑOL CONTACTO";
$mail->AddAddress("ventas@tecshopsystems.com"); // Esta es la dirección a donde enviamos
$mail->AddCC("ventas@tecshopsystems.com"); // Copia
$mail->AddBCC("ventas@tecshopsystems.com"); // Copia oculta
$mail->IsHTML(true); // El correo se envía como HTML
$mail->Subject = $asunto; // Este es el titulo del email.
$body = "<br>Nombre del Remitente:".$nombre."</br>";
$body .= "<br>Correo:".$correo."</br>";
$body .= "<br>No. Asociado:".$mobile."</br>";
$body .= "<br>Fecha:".$fecha."</br>";
$body .= "<br>Mensaje:".$mensaje."</br>";
$mail->Body = $body; // Mensaje a enviar
$mail->AltBody = "Nombre del Remitente:".$nombre.""; // Texto sin html
$mail->AddAttachment("../img/blog/1.jpg", "1.jpg");
$exito = $mail->Send(); // Envía el correo.

if($exito){
echo'<script type="text/javascript">
            alert("Gracias por su mensaje en el Sanatorio Español nos importa su opinion");
            window.location="../asociados/index.html"
         </script>';
}else{
 echo'<script type="text/javascript">
            alert("NO ENVIADO, intentar de nuevo");
            window.location="#"
         </script>';
}

?>
