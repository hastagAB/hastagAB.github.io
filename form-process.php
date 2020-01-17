<?php
if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) ){
	$n = filter_var($_POST['name'], FILTER_SANITIZE_STRING); 
	$e = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
	$m = filter_var(nl2br($_POST['message'], FILTER_SANITIZE_STRING));
	$to = "classicayush@gmail.com";	
	$from = "no-reply@ayushbhardwaj.me";
	$subject = 'New message from Website';
	$message = '<b>Name:</b> '.$n.' <br><b>Email:</b> '.$e.' <p>'.$m.'</p>';
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?> 