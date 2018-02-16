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


?>