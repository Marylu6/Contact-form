<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
  $to = "pi6265541@gmail.com";
  $subject = "New message from " . $_POST['name'];
  $message = $_POST['message'];
  $headers = "From: " . $_POST['email'] . "\r\n";
  $headers .= "Reply-To: " . $_POST['email'] . "\r\n";
  $headers .= "Content-Type: text/html\r\n";

  if(mail($to, $subject, $message, $headers)) {
    echo "success";
  } else {
    echo "error";
  }
}
?>
