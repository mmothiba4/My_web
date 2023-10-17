/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("contact me");
    if (x.className === "contact me") {
      x.className += " responsive";
    } else {
      x.className = "contact me";
    }
  }

function validateForm() {
    const name = document.getElementById().value;
    const email = document.getElementById().value;
    const message = document.getElementById().value;
    const error = "";

    if (name == "") {
        error += "Please enter your name.\n";
    }

    if (email == "") {
        error += "Please enter your email address.\n";
    } else if (!validateEmail(email)) {
        error += "Please enter a valid email address.\n";
    }

    if (message == "") {
        error += "Please enter a message.\n";
    }

    if (error != "") {
        alert(error);
        return false;
    }
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}


<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please fill out all required fields and enter a valid email address.";
        exit;
    }

    $recipient = "mmothiba4@gmail.com";
    $subject = "New Contact Form Submission";
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        http_response_code(500);
      echo "Oops! Something went wrong and we couldn't send your message.";
}
} else {
http_response_code(403);
echo "There was a problem with your submission, please try again.";
}