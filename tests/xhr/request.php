<?php

// UTILITY FUNCTIONS
function getPost($param)
{
    if (isset($_POST[$param])) {
        $value = $_POST[$param];
        return $value;
    } else {
        return "";
    }
}

function getGet($param)
{
    if (isset($_GET[$param])) {
        $value = $_GET[$param];
        return $value;
    } else {
        return "";
    }
}







//$_POST = json_decode(file_get_contents('php://input'), true);

$mode = "";
$response = [];
$response["method"] = $_SERVER['REQUEST_METHOD'];
$response["Psize"] = sizeof($_POST);
$response["Gsize"] = sizeof($_GET);
// $response["Gmode"] = getGet("mode");
// $response["Pmode"] = getPost("mode");
// $response["debug"] = [];
// $response["debug"]["get"] = $_GET;
// $response["debug"]["post"] = $_POST;
$response["input"] = file_get_contents('php://input');


// JSON POST/GET
if ($_SERVER['REQUEST_METHOD'] === 'POST' && sizeof($_POST) < 1) {
    $_POST = json_decode(file_get_contents('php://input'), true);
    $response["Gmode"] = getGet("mode");
    $response["Pmode"] = getPost("mode");
}



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mode = getPost("mode");
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $mode = getGet("mode");
}
$response["mode"] = $mode;



// var_dump($_POST);
// print_r($response);
// die();



switch ($mode) {
    case "json1":
        $file = file_get_contents("./data1.json");
        // echo(json_encode($response));
        header('Content-type:application/json;charset=utf-8');
        echo ($file);
        break;
    case "json2":
        $file = file_get_contents("./data2.json");
        // echo(json_encode($response));
        header('Content-Type: application/json');
        echo ($file);
        break;
    case "image":
        $file = file_get_contents("./amiga.jpg");
        // echo(json_encode($response));
        header('Content-Type: image/jpeg');
        echo (base64_encode($file));
        break;
    case "test":
        print_r($_POST);
        break;
    default:
        echo (json_encode($response));
        break;
}

