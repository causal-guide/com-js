<?php
// Menerima data dari permintaan POST
$data = json_decode(file_get_contents('php://input'), true);

// Proses data, misalnya menyimpan ke file JSON
$jsonFile = 'data.json';
file_put_contents($jsonFile, json_encode($data));

// Menyiapkan respons untuk dikirim kembali ke JavaScript
$response = array('status' => 'Data berhasil diterima dan diproses');

// Mengirim respons dalam bentuk JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
