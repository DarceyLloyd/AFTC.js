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
            // Run lim for dev
            // $comment_count++;
            // if ($comment_count > 90){
            //     die();
            // }
            //out("--- " . $comment_count);
            

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
                    $commentVo->name = $right;
                    $previous = ""; // reset
                } else if (isInString("@class:",$cLine)){
                    // Class
                    // out("Found: Class: " . $right);
                    $commentVo->type = "class";
                    $commentVo->name = $right;
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
                } else if (isInString("link",$left)){
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






function generateReadme($comments){
    $ts = "<table>";
    $te = "</table>";
    $comment_template = "
### <b>[title]</b>
[desc]

<details>
    <summary><b>More information</b></summary>
[table]
[return]
[alias]
[links]
</details>

<hr><br><br><br>
    ";

    $out = "";
    foreach ($comments as $key => $commentVo) {
        $out .= $comment_template;
        // trace($commentVo->name);

        // Title
        $out = str_replace("[title]",$commentVo->name,$out);

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
            $links = "#### Usage examples:\n";
            $cnt = 0;
            foreach ($commentVo->links as $link) {
                // trace($link);
                $cnt ++;
                $html_link = "Usage example " . $cnt;
                $links .= " - <a href='" . $link . "' target='_blank'>" . $link . "</a>\n";
            }
            $out = str_replace("[links]",$links,$out);
        }

        // Params table
        if (count($commentVo->params)>0){
            $table = "\n";
            $table .= " #### Parameters: \n";
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
        }

        // Alias
        if (count($commentVo->alias)>0){
            $alias = "#### Alias's:\n";
            foreach ($commentVo->alias as $alt) {
                $alias .= " - " . $alt . "\n";
            }
            $out = str_replace("[alias]",$alias,$out);
        }

        // Return
        if ($commentVo->return != ""){
            $out = str_replace("[title]",$commentVo->name,$out);
        } else {
            $out = str_replace("[title]","",$out);
        }



    } // Exit for loop
    //echo($out);

    // file_put_contents("./docs.md",$out);
    // file_put_contents("./readme.htm",$out);
    return $out;
}



?>