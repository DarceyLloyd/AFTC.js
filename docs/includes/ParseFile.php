<?php

require_once "./includes/utils.php";


function parseFile($input)
{

    // File to open
    $file = fopen($input, 'r');

    $filter = ["\t", "\n\n", "\n\n"];

    $comments = []; // Array of commentVo's
    $comment; // Array of comment lines to be processed into a commentVo
    $comment_started = false;
    $function_param_found = false;
    $function_param_count = 0;

    // Get comment lines
    while (($line = fgets($file)) !== false) {
        // Clean up file read line
        $str = str_replace($filter, "", $line);
        $str = rtrim(ltrim($str));
        //out("CHECKING: [" . $str . "]");

        if (strpos($str, "/**") !== false && !$comment_started) {
            // out("### comment started");
            $comment = [];
            $comment_started = true;
        } else if (strpos($str, "*/") !== false && $comment_started) {
            // out("### comment ended");
            $cvo = parseComment($comment, $function_param_count);
            array_push($comments,$cvo);
            $comment_started = false;
            $function_param_found = false;
            $function_param_count = 0;
        } else if (strpos($str, "*") !== false && $comment_started) {
            // Add comment line to comment array
            // out("### add comment: [" . $str . "]");
            array_push($comment, $str);
        }

        // Check for function params
        if ($comment_started && strpos($str, "@function") !== false) {
            $function_param_found = true;
            $function_param_count++;
        }
    }
    fclose($file);


    return $comments;
}
