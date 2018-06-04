<?php

function pre($arg){ echo("<pre>".print_f($arg)."</pre>"); }

/**
 * @function: xxxxxx(xxxxxxx)
 * @desc: xxxxxxxxx
 * @param args object: xxxxxxxxxxx
 * @param obj object: xxxxxxx
 * @param strict boolean: xxxxxxxxxx
 * @return: xxxxxxxxxxx
 * @alias: xxxxxxxxxxxxxx
 * @link: https://codepen.io/AllForTheCode/pen/xxxxxxx
 */



 /**
 * @function: xxxxxx(xxxxxxx)
 * @desc: xxxxxxxxx
 * @param args object: xxxxxxxxxxx
 * @return: xxxxxxxxxxx
 * @alias: xxxxxxxxxxxxxx
 * @link: https://codepen.io/AllForTheCode/pen/xxxxxxx
 */


function cmp($a, $b){
    //return strcmp($a->name, $b->name); // Case sensitive sorting 
    return strcasecmp($a->name, $b->name); // Binary safe case-insensitive string comparison 
}

// Using this cuts off after 1st comment for some reason....
// function getCommentsForDir($dir){
//     $comments = [];
//     if ($handle = opendir($dir)) {
//         while (false !== ($entry = readdir($handle))) {
//             if ($entry != "." && $entry != "..") {
//                 if (is_file($entry)){
//                     echo "$entry\n";
//                     $item = [
//                         "file" => $entry,
//                         "comments" => getComments($entry)
//                     ];
//                     //$comments = getComments($file);
//                     array_push($comments,$item);
//                 }
                
//             }
//         }
//         closedir($handle);
//         return $comments;
//     } else {
//         return null;
//     }    
// }


$response = "";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require_once("./includes/functions.php");
    require_once("./includes/parse_comment.php");
    require_once("./includes/vos.php");

    // Anchors
    $file = "../dist/aftc.js";
    $anchors = getAnchors($file);
    file_put_contents("./anchros.md",$anchors);

    // print_r($anchors);
    // $file = "../dist/aftc.js";
    // // $file = "../src/AFTC/AFTC.Color.js";
    // $anchors = getAnchors($file);
    // file_put_contents("./anchros.md",$anchors);
    // // print_r($anchors);
    // // die();
    // $comments = getComments($file);

    // $file = "../src/aftc.js";
    $files = [
        "../src/aftc.js",
        "../src/core/array.js",
        "../src/core/browser.js",
        "../src/core/conversion.js",
        "../src/core/cookies.js",
        "../src/core/css.js",
        "../src/core/datetime.js",
        "../src/core/debug.js",
        "../src/core/detection.js",
        "../src/core/dom.js",
        "../src/core/easing.js",
        "../src/core/events.js",
        "../src/core/form.js",
        "../src/core/geometry.js",
        "../src/core/get.js",
        "../src/core/is.js",
        "../src/core/misc.js",
        "../src/core/random.js",
        "../src/core/string.js",
        "../src/core/tables.js",
        "../src/core/validation.js",
        "../src/core/video.js",
        "../src/AFTC/AFTC.Color.js",
        "../src/AFTC/AFTC.Animate.js",
        // "../src/AFTC/AFTC.AR.js",
        "../src/AFTC/AFTC.Audio.js",
        // "../src/AFTC/AFTC.Benchmark.js",
        // "../src/AFTC/AFTC.Canvas.js",
        // "../src/AFTC/AFTC.CheckboxHideShow.js",
        "../src/AFTC/AFTC.Color.js",
        // "../src/AFTC/AFTC.ResizeManager.js",
        "../src/AFTC/AFTC.Visibility.js",
        // "../src/AFTC/AFTC.VR.js",
        "../src/AFTC/AFTC.XHR.js"
    ];
    $collection = [];
    //echo(__DIR__); // W:\www\GIT\AFTC.js\docs
    //array_push($collection,getCommentsForDir("../src/",$collection));
    //array_push($collection,getComments($file));
    foreach ($files as $file) {
        $bits = explode("/",$file);
        $file_name = $bits[count($bits)-1];
        $entry = new Class(){
            public $file_name;
            public $comments;
        };
        $entry = [
            "file_name" => $file_name,
            "comments" => getComments($file)
        ];
        //$entry->file_name = $file_name;
        //$entry->comments = getComments($file);
        //usort($entry->comments, "cmp"); // this works
        array_push($collection,$entry);
    }
    //var_dump($collection);
    //die();


    

    //usort($comments, "cmp"); // this works
    //usort($comments, array($comments, "cmp"));


    // $response .= "<h4><b>No of comments to be generatd: </b> " . count($comments->comments) . "</h4>";
    //trace("No of comments processed = " . count($comments));
    // $comments = getComments("./aftc.js");
    //print_r($comments);
    //die();
    
    $header = file_get_contents("./header.md");
    $footer = file_get_contents("./footer.md");

    $out = generateReadmeMultiFile($collection);
    
    $readme = $header . $anchors . $out . $footer;
    file_put_contents("../readme.md",$readme);
    // file_put_contents("../readme.htm",$readme);
    $response .= "<h4><b>Generation complete...</b>";
    // trace("Complete...");
    // echo($out);
    // die();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>darcey@aftc.io - github readme.md generator</title>
</head>
<body>
    <h3>darcey@aftc.io - github readme.md generator</h3>
    <form method="post">
        <button>CLICK TO GENERATE README.MD</button>
    </form>
    <?php

    if ($response != ""){
        echo("<hr>".$response);
    }
    ?>

</body>
</html>

