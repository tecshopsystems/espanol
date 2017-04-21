<?php
// check if fields passed are empty
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No ha dejado mensaje!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// create email body and send it	
$to = 'ventas@tecshopsystems.com'; // put here your email
$email_subject = "Contact form submitted by:  $name";
$email_body = "Han dejado un mensaje en su sitio WEB. \n\n".
			  "Detalles:\n \Nombre: $name \n ".
			  "Email: $email_address\n Mensaje \n $message";
$headers = "From: ventas@tecshopsystems.com\n";
$headers .= "Copiado a: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>