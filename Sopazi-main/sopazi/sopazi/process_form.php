<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $message = test_input($_POST["message"]);


    $to = "luyandasopazi@Outlook.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

    header("Location: index.html");
    exit();
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
