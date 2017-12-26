<?php
    header("Content-Type: text/html; charset=utf-8");
    header('Access-Control-Allow-Origin:*');

    $JSON_DATA = array(
        'userName' => $_GET['userName'],
        'passWord' => $_GET['passWord'],
    );
    echo json_encode(array(
        'state' => 200,
        'data' => $JSON_DATA
    ));