<?php

require_once "./includes/utils.php";
require_once("./DDoc.php");


// //$file = "./test2.js";
// $file = "../src/base.js";
// $doc = new DDoc($file);
// $doc->buildReadme();


// $file = "../src/animation.js";
// $doc = new DDoc($file);
// $doc->buildReadme();


$dir    = '../src/';
$files = scandir($dir);
foreach ($files as $file){
    if ($file != ".." && $file != "."){
        //trace($file);
        $file = "../src/" . $file;
        $doc = new DDoc($file);
        $doc->buildReadme();
    }
}