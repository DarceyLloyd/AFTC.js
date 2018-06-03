<?php

function removeExt($input){
    return pathinfo($input, PATHINFO_FILENAME);
}

function inString($haystack,$needle){
    $pos = strpos($haystack,$needle);
    if ($pos !== false){
        return true;
    } else {
        return false;
    }
}
function inStr($haystack,$needle){ return inString($haystack,$needle); }
function find($haystack,$needle){ return inString($haystack,$needle); }

function get_string_between($string, $start, $end){
    $string = ' ' . $string;
    $ini = strpos($string, $start);
    if ($ini == 0) return '';
    $ini += strlen($start);
    $len = strpos($string, $end, $ini) - $ini;
    return substr($string, $ini, $len);
}

function getStringBetween($pool,$var1="",$var2=""){
    $temp1 = strpos($pool,$var1)+strlen($var1);
    $result = substr($pool,$temp1,strlen($pool));
    $dd=strpos($result,$var2);
    if($dd == 0){
        $dd = strlen($result);
    }
    return substr($result,0,$dd);
}

function getStringBetweenDelimiters($string, $start, $end, $multi=false){
    if (strlen($string) > 0) {
        if ($multi) {
            $result_list = explode($end, $string);
            foreach ( $result_list AS $rlkey => $rlrow) {
                $result_start_pos   = strpos($rlrow, $start);
                $result_len         =  strlen($rlrow) - $result_start_pos;
                if ($result_start_pos > 0) {
                    $result[] =   substr($rlrow, $result_start_pos + strlen($start), $result_len);
                }
            }
        } else {
            $result_start_pos   = strpos($string, $start) + strlen($start);
            $result_length      = strpos($string, $end, $result_start_pos);
            $result             = substr($string, $result_start_pos+1, $result_length );
        }
    } else {
        $result = false;
    }
    return $result;
}

function trace($arg){ echo($arg."<br>\n"); }
function out($arg){ echo($arg."\n"); }
function vd($arg){ echo("<pre>"); var_dump($arg); echo("</pre>"); }

function isInString($needle,$haystack){
    if (strpos($haystack, $needle) !== false){
        return true;
    } else {
        return false;
    }
}

function cutStringTo($str,$len){
    //substr ( string $string , int $start [, int $length ] )
    return substr ( $str , 0 , $len );
}

function trimAndReplace($replace,$with,$source){
    $out = str_replace($replace, $with, $source);
    $out = trim($out);
    return $out;
}



function getAnchors($path){
    $anchors = [];
    $filter = ["\t", "\n\n", "\n\n"];
    $function_filter = ["* ","@function:"];
    
    $file = fopen($path, 'r');
    

    while (($line = fgets($file)) !== false) {
        $cLine = trimAndReplace($filter,"",$line);

        // out("CHECKING: " . $cLine);

        if (isInString("@function",$cLine)){
            // function found
            $cLine = trimAndReplace($function_filter,"",$line);
            if (isInString("//",$cLine)){

            } else {
                // out("FOUND");
                array_push($anchors,$cLine);
                // out($cLine);
            }
            
            
        }
    }

    sort($anchors, SORT_NATURAL | SORT_FLAG_CASE);
    $out = "<h3><b>Quick links:</b></h3>\n";
    foreach ($anchors as $value) {
        if (!isInString("//",$value)){
            $link = strtolower( $value );
            $link = preg_replace("/[^A-Za-z0-9 ]/", '', $link); // leaves brackets in
            //$link = preg_replace("/[\W_]+/u", '', $link); // also leaves links in!
            $chars = ["\\","|","(",")","[","]","&",",","`"," ","{","}"];
            $link = strtolower( str_replace($chars,"",$link) );
            $out .= " <a href='#" . $link . "'>" . $value . "</a><br>\n";
        }
    }

    $out .= "<br><br>\n";
    $out .= "<h4>Browse on codepen</h4>\n";
    $out .= "<a href='https://codepen.io/AllForTheCode/pens/public/?grid_type=list' target='_blank'>https://codepen.io/AllForTheCode/pens/public/?grid_type=list</a>\n";

    $out .= "<br><br><hr><br><br>";

    return $out;
}


function getComments($path){
    $comments = []; // Array of comment arrays (a comment array for every /** ? */)
    $filter = ["\t", "\n\n", "\n\n"]; // Things we don't want in our comment lines

    $file = fopen($path, 'r');

    // Var ini & reset for looping
    $commentVo = new CommentVo();
    $comment_started = false;
    $comment_complete = false;
    $description_started = false;
    $description_complete = false;
    $previous = "";

    $comment_count = 0;

    while (($line = fgets($file)) !== false) {
        

        // Clean up line read and trim
        $cLine = str_replace($filter, "", $line);
        $cLine = rtrim(ltrim($cLine));

        $lineFirstChar = cutStringTo($cLine,1);

        // reset for next comment
        if ($comment_started && $comment_complete){
            array_push($comments,$commentVo);
            $commentVo = new CommentVo();
            $comment_started = false;
            $comment_complete = false;
            $description_started = false;
            $description_complete = false;
            $previous = "";
        }

        // Work out if the line we are on is a comment or not and clean it up
        $comment_found = false;
        // out("CHECKING: " . $cLine);
        if (!$comment_started) {
            if (isInString("/**",$cLine)){
                // out("-- comment start");
                $comment_started = true;
                $comment_found = true;
                $cLine = trimAndReplace("/**","",$cLine);
                //array_push($comment,$cLine);
            }
        } else {
            if (isInString("*/",$cLine)){
                // out("-- comment end");
                $comment_complete = true;
                $comment_found = true;
                $cLine = trimAndReplace("*/","",$cLine);
                // array_push($comment,$cLine);
            } else if ($lineFirstChar == "*"){
                // out("-- found comment line");
                //$cLine = trimAndReplace("*","",$cLine);
                $cLine = trim($cLine);
                $comment_found = true;
                // array_push($comment,$cLine);
            }
        }

        // Populate commentVo with line data
        if ($comment_found){
            //out("---- COMMNET FOUND!");
            // Run lim for dev
            // $comment_count++;
            // if ($comment_count > 90){
            //     die();
            // }
            // out("--- " . $comment_count);
            

            $bits = explode(":",$cLine);
            $left = $bits[0];
            if (strlen($left) > 0){
                if (isset($bits[1])){ $right = $bits[1]; } else { $right = ""; }
                //out($left . " \t\t\t\t\t\t " . $right);
                $left = trimAndReplace("@","",$left);
                $right = trim($right);
                
                if (isInString("@function:",$cLine)){
                    // Function
                    // out("Found: Function: " . $right);
                    $commentVo->type = "function";
                    $commentVo->title = $right;
                    $previous = ""; // reset
                } else if (isInString("@class:",$cLine)){
                    // Class
                    // out("Found: Class: " . $right);
                    $commentVo->type = "class";
                    $commentVo->title = $right;
                    $previous = ""; // reset
                } else if (isInString("desc",$left)){
                    // Desc
                    // out("Found: Desc: " . $right);
                    $description_started = true;
                    $previous = "desc";
                    array_push($commentVo->desc,$right);
                } else if (isInString("alias",$left)){
                    // Alias
                    // out("Found: Alias: " . $right);
                    $previous = ""; // reset
                    array_push($commentVo->alias,$right);
                } else if (isInString("@link",$cLine)){
                    // Links
                    $link = trimAndReplace("* @link:","",$cLine);
                    // out("Found: Link: " . $link);
                    $previous = ""; // reset
                    array_push($commentVo->links,$link);
                } else if (isInString("return",$left)){
                    // Return
                    //out("Found: Return: " . $right);
                    $commentVo->return = trim($right);
                    $previous = ""; // reset
                } else if (isInString("method",$left)){
                    // Methods
                    // out("Found: Method: [" . $left . "] - [" . $right . "]");
                    $mvo = new MethodVo();
                    $mvo->name = trimAndReplace("* method","",$left);
                    $mvo->desc = trim($right);
                    $previous = ""; // reset
                    array_push($commentVo->methods,$mvo);
                } else if (isInString("param",$left)){
                    // Params
                    //out("Found: Param: [" . $left . "] - [" . $right . "]");
                    $cLine = trimAndReplace(["* @param","* param"],"",$cLine);
                    // out("Found: Param: " . $cLine);
                    $param_bits = explode(":",$cLine);
                    $left_bits =  explode(" ",$param_bits[0]);
                    $pvo = new ParamVo();
                    $pvo->name = trim($left_bits[0]);
                    $pvo->data_type = trim($left_bits[1]);
                    if (isset($param_bits[1])){
                        $pvo->desc = trim($param_bits[1]);
                    }
                    // print_r($pvo);
                    array_push($commentVo->params,$pvo);
                } else {
                    // Its either a continuance of description or an unhandled line (probably user error)
                    $left = trimAndReplace("* ","",$left);
                    if ($previous == "desc"){
                        // out("Found: Desc: " . $left);
                        if ($left != null && $left != ""){ 
                            array_push($commentVo->desc,$left);
                        }
                    }
                }
            }
        } // End comment found
    };

    

    return $comments;
}






function generateReadmeSingleFile($comments){
    $ts = "<table>";
    $te = "</table>";
    $comment_template = "
<h3><b>[title]</b><h3>
[desc]

<details>
    <summary><b>More information</b></summary>
[table]
[methods]
<b>Returns:</b> [return]
[alias]
</details>

[links]

<hr><br><br><br>
    ";

    $out = "";
    foreach ($comments as $key => $commentVo) {
        if (strlen($commentVo->title) > 0){
            $out .= $comment_template;
            // trace($commentVo->title);
    
            // Title
            $out = str_replace("[title]",$commentVo->title,$out);
    
            // Description
            $desc = "";
            $code_started = false;
            foreach ($commentVo->desc as $line) {
                if (isInString("````",$line)){
                    if (!$code_started){
                        // code comment open
                        $code_started = true;
                        $desc .= "\n" . $line . "\n";
                    } else {
                        // code comment close
                        $code_started = false;
                        $desc .= "````";
                    }
                } else {
                    if ($code_started){
                        // inner code comment (not 1st and not last)
                        $desc .= $line . "\n";
                    } else {
                        // Standard description line
                        $desc .= $line . "<br>";
                    }
                }
            }
            $out = str_replace("[desc]",$desc,$out);
    
            // Links
            if (count($commentVo->links)>0){
                // out("LINKS FOUND = " . count($commentVo->links));
                // print_r($commentVo->links);
                $links = "<h4> Usage examples:</h4>\n";
                $cnt = 0;
                foreach ($commentVo->links as $link) {
                    // trace($link);
                    $cnt ++;
                    $html_link = "Usage example " . $cnt;
                    $links .= " - <a href='" . $link . "' target='_blank'>" . $link . "</a>\n";
                }
                $out = str_replace("[links]",$links,$out);
            } else {
                $out = str_replace("[links]","",$out);
            }
    
            // Params table
            if (count($commentVo->params)>0){
                $table = "\n";
                $table .= "<h4>Parameters:</h4>\n";
                $table .= "<table>\n";
                $table .= "\t<tr>\n";
                    $table .= "\t\t<th>Name</th>" . "\n";
                    $table .= "\t\t<th>Type</th>" . "\n";
                    $table .= "\t\t<th>Description</th>" . "\n";
                $table .= "\t</tr>\n";
                foreach ($commentVo->params as $param) {
                    $table .= "\t<tr>\n";
                    $table .= "\t\t<td>" . $param->name . "</td>" . "\n";
                    $table .= "\t\t<td>" . $param->data_type . "</td>" . "\n";
                    $table .= "\t\t<td>" . $param->desc . "</td>" . "\n";
                    $table .= "\t</tr>\n";
                }
                $table .= "</table>\n";
                $out = str_replace("[table]",$table,$out);
            } else {
                $out = str_replace("[table]","",$out);
            }

            // Methods
            if (count($commentVo->methods)>0){
                $table = "\n";
                $table .= "<h4> Methods:</h4>\n";
                $table .= "<table>\n";
                $table .= "\t<tr>\n";
                    $table .= "\t\t<th>Name</th>" . "\n";
                    $table .= "\t\t<th>Description</th>" . "\n";
                $table .= "\t</tr>\n";
                foreach ($commentVo->methods as $method) {
                    $table .= "\t<tr>\n";
                    $table .= "\t\t<td>" . $method->name . "</td>" . "\n";
                    $table .= "\t\t<td>" . $method->desc . "</td>" . "\n";
                    $table .= "\t</tr>\n";
                }
                $table .= "</table>\n";
                $out = str_replace("[methods]",$table,$out);
            } else {
                $out = str_replace("[methods]","",$out);
            }
    
            // Alias
            if (count($commentVo->alias)>0){
                $alias = "<h4>Alias's:</h4>\n";
                foreach ($commentVo->alias as $alt) {
                    $alias .= " - " . $alt . "\n";
                }
                $out = str_replace("[alias]",$alias,$out);
            } else {
                $out = str_replace("[alias]","",$out);
            }
    
            // Return
            // out("return = " . $commentVo->return . " len = " . strlen($commentVo->return));
            if (strlen($commentVo->return) > 0){
                $out = str_replace("[return]",$commentVo->return,$out);
            } else {
                $out = str_replace("[return]","",$out);
            }
        } // END - if ($commentVo->$name != ""){

    } // END - foreach ($comments as $key => $commentVo) {
    //echo($out);

    // file_put_contents("./docs.md",$out);
    // file_put_contents("./readme.htm",$out);
    return $out;
}





function processCommentTitle($out,$title){
    // Title
    // trace($title);
    $out = str_replace("[title]",$title,$out);
    return $out;
}

function processCommentDescription($out,$description){
    // Description
    // print_r($description);
    $desc = "";
    $code_started = false;
    foreach ($description as $line) {
        //str_replace("```",("\n\nAAAA".$line),$line);// Doesnt work

        if (isInString("```",$line)){
            if (!$code_started){
                $line = "\n" . $line;
                // code comment open
                $code_started = true;
                $desc .= "\n" . $line . "\n";
            } else {
                // code comment close
                $code_started = false;
                $desc .= "\n```\n";
            }
        } else {
            if ($code_started){
                // inner code comment (not 1st and not last)
                $desc .= $line . "\n";
            } else {
                // Standard description line
                $desc .= $line . "<br>";
            }
        }
    }
    $out = str_replace("[desc]",$desc,$out);
    $out .= "\n\n";
    return $out;
}

function processCommentLinks($out,$links){
    // Links
    if (count($links)>0){
        // out("LINKS FOUND = " . count($links));
        // print_r($commentVo->links);
        $str = "<h4> Usage examples:</h4>\n";
        $cnt = 0;
        foreach ($links as $link) {
            // trace($link);
            $cnt ++;
            $str .= " - <a href='" . $link . "' target='_blank'>" . $link . "</a>\n";
        }
        $out = str_replace("[links]",$str,$out);
    } else {
        $out = str_replace("[links]","",$out);
    }
    return $out;
}

function processCommentParams($out,$params){
    // Params table
    if (count($params)>0){
        $table = "\n";
        $table .= "<h4>Parameters:</h4>\n";
        $table .= "<table>\n";
        $table .= "\t<tr>\n";
            $table .= "\t\t<th>Name</th>" . "\n";
            $table .= "\t\t<th>Type</th>" . "\n";
            $table .= "\t\t<th>Description</th>" . "\n";
        $table .= "\t</tr>\n";
        foreach ($params as $param) {
            $table .= "\t<tr>\n";
            $table .= "\t\t<td>" . $param->name . "</td>" . "\n";
            $table .= "\t\t<td>" . $param->data_type . "</td>" . "\n";
            $table .= "\t\t<td>" . $param->desc . "</td>" . "\n";
            $table .= "\t</tr>\n";
        }
        $table .= "</table>\n";
        $out = str_replace("[table]",$table,$out);
    } else {
        $out = str_replace("[table]","",$out);
    }
    return $out;
}

function processCommentMethods($out,$methods){
    // Methods
    if (count($methods)>0){
        $table = "\n";
        $table .= "<h4> Methods:</h4>\n";
        $table .= "<table>\n";
        $table .= "\t<tr>\n";
            $table .= "\t\t<th>Name</th>" . "\n";
            $table .= "\t\t<th>Description</th>" . "\n";
        $table .= "\t</tr>\n";
        foreach ($methods as $method) {
            $table .= "\t<tr>\n";
            $table .= "\t\t<td>" . $method->name . "</td>" . "\n";
            $table .= "\t\t<td>" . $method->desc . "</td>" . "\n";
            $table .= "\t</tr>\n";
        }
        $table .= "</table>\n";
        $out = str_replace("[methods]",$table,$out);
    } else {
        $out = str_replace("[methods]","",$out);
    }
    return $out;
}

function processCommentAlias($out,$aliases){
    // Alias
    if (count($aliases)>0){
        $alias = "<h4>Alias's:</h4>\n";
        foreach ($aliases as $alt) {
            $alias .= " - " . $alt . "\n";
        }
        $out = str_replace("[alias]",$alias,$out);
    } else {
        $out = str_replace("[alias]","",$out);
    }
    return $out;
}

function processCommentReturn($out,$returns){
    // Return
    // out("return = " . $returns . " len = " . strlen($returns));
    if (strlen($returns) > 0){
        $str = "<b>Returns:</b> " . $returns;
        $out = str_replace("[return]",$str,$out);
    } else {
        $out = str_replace("[return]","",$out);
    }
    return $out;
}


function generateReadmeMultiFile($comments){
$file_template_start = "\n\n\n
<h2><b>[file_name]</b></h2>\n\n";

$file_template_end = "\n\n<br><br><br><br><br>\n\n";

$comment_template = "\n\n
<h3><b>[title]</b></h3>
[desc]

<details>
    <summary><b>More information</b></summary>
[table]
[methods]
[return]
[alias]
</details>

[links]

<hr><br><br><br>
    ";


    $out = "";
    foreach ($comments as $comment) {
        $part = $file_template_start;

        // File name
        $str = "<b>FILE: " . strtoupper($comment["file_name"]) . "</b><hr>";
        $part = str_replace("[file_name]",$str,$part);
        // var_dump($comment["file_name"]);
        
        // Comments for file
        $part .= $comment_template;
        foreach ($comment["comments"] as $commentVo) {
            if (strlen($commentVo->title) > 0){
                $part .= $comment_template;

                $part = processCommentTitle($part,$commentVo->title);
                $part = processCommentDescription($part,$commentVo->desc);
                $part = processCommentLinks($part,$commentVo->links);
                $part = processCommentParams($part,$commentVo->params);
                $part = processCommentMethods($part,$commentVo->methods);
                $part = processCommentAlias($part,$commentVo->alias);
                $part = processCommentReturn($part,$commentVo->return);
            }
        }
        $part .= $file_template_end;

        $out .= $part;
    }

    
    return $out;
}







?>