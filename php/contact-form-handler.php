<?php
$firstName  = $_POST['firstName'];
$lastName  = $_POST['lastName'];
$inputEmail4  = $_POST['inputEmail4'];
$inputAddress  = $_POST['inputAddress'];
$inputCity  = $_POST['inputCity'];
$inputState  = $_POST['inputState'];
$inputZip  = $_POST['inputZip'];
$textArea  = $_POST['textArea'];

//Who it's from
$email_from = 'shannonsivertsen@gmail.com';
//Subject line
$email_subject = "New Form Submission";
//What goes in the email
$email_body = "First Name: $firstName.\n".
              "Last Name: $lastName.\n".
              "Email: $inputEmail4.\n".
              "Address: $inputAddress.\n".
              "City: $inputCity.\n".
              "State: $inputState.\n".
              "Zip: $inputZip.\n".
              "Message: $textArea.\n";

              $to = "shannonsivertsen@gmail.com";
              $headers = "From: $email_from \r\n";
              $headers = "Reply-To: $inputEmail4 \r\n";
              //Send info
              mail($to, $email_subject, $email_body, $headers);
              //javascript function to open the popup

              header("Location: ../contact.html");

              echo '<script type="text/javascript">openPopup();</script>';

 ?>
