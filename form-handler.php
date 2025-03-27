<?php
  $name =$_POST['name'];
  $visitor_email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  
  
  $email_from ='alihyderlaghari2006@gmail.com';
  
  $email_subject ='New form submission';
  
  $email_body = "User Name": $name.\n".
                "User Email": $visitor_email.\n".
                "subject": $subject.\n".
				        "User Message": $message.\n".;
				
  $to = "alihyderlaghari2007@gmail.com";
  
  $headers = "from: $email_from \r\n";
  
   $headers = "Reply-to: $visitor_email \r\n";
   
   mail($to,$email_subject,$email_body,$headers);
   
   header("location: contact.html");
?>