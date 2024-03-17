<?php

// Load the database settings from settings.php
require_once 'settings.php';

// Get the POSTed form data
$data = json_decode(file_get_contents('php://input'), true);

// Validate the form data (e.g., check if the username and password are correct)
if (isset($data['username']) && isset($data['password'])) {
    // Connect to the database
    $conn = new mysqli($host, $user, $pswd, $dbnm);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and execute the SQL query to retrieve the user record
    $stmt = $conn->prepare('SELECT id FROM users WHERE username = ? AND password = ?');
    $stmt->bind_param('ss', $data['username'], $data['password']);
    $stmt->execute();
    $stmt->store_result();

    // If the query returns exactly one row, check the password and set the session variable
    if ($stmt->num_rows === 1) {
        $stmt->bind_result($user_id);
        $stmt->fetch();
        session_start();
        $_SESSION['user_id'] = $user_id;
        header('Content-Type: application/json');
        echo json_encode(['success' => true]);
    } else {
        // If the query does not return exactly one row, send an error response
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'message' => 'Invalid username or password database']);
    }

    // Close the database connection
    $stmt->close();
    $conn->close();
} else {
    // If the username or password is not set, send an error response
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Username or password not provided']);
} ?>