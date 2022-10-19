<?php 
	


	$to = 'Maksim-volkov1994@yandex.ru';
	$subject = 'Заявка с сайта';
	$message = 'Сообщение';

	$headers = "From ";

	mail($to, $subject, $message);


?>