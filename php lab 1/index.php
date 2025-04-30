<?php

$errors = [];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (empty($_POST['fname'])) {
        $errors[] = "First Name is required.";
    }

    if (empty($_POST['lname'])) {
        $errors[] = "Last Name is required.";
    }

    if (empty($_POST['id']) || !is_numeric($_POST['id'])) {
        $errors[] = "Student ID is required and should be a valid number.";
    }

    if (empty($_POST['email']) || !filter_var($_POST['email'])) {
        $errors[] = "Valid Email is required.";
    }

    if (empty($_POST['password'])) {
        $errors[] = "Password is required.";
    }

    if (empty($_POST['dob'])) {
        $errors[] = "Date of Birth is required.";
    }

    if (empty($_POST['gender'])) {
        $errors[] = "Gender is required.";
    }

    if (empty($_POST['hobby'])) {
        $errors[] = "At least one hobby should be selected.";
    }

    if (empty($_POST['dep'])) {
        $errors[] = "Department is required.";
    }

    if (empty($_POST['add'])) {
        $errors[] = "Address is required.";
    }


    if (empty($errors)) {
        echo "Form submitted successfully!";
    } else {
        foreach ($errors as $error) {
            echo "<p style='color:red;'>$error</p>";
        }
    }
}

?>
