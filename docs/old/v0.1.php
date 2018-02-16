<?php

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

function trace($arg){ echo($arg."<br>"); }

function out($arg){ echo("<pre>"); var_dump($arg); echo("</pre>"); }


//$file = file_get_contents("../src/base.js");


// $comments = getStringBetweenDelimiters($file,"/**","*/",true);
// echo("<pre>");
// print_r($comments);
// echo("</pre>");

// $line = "1234a5678";
// $start = strpos($line,"a");
//     trace($start);
//     $str = substr($line,0,$start);
//     trace($str);
// die;


$file = fopen('../src/base.js', 'r');

$comments = [];
$filter = ["\t","\n\n"];
$conditions = [
    ["* @","3"]
];


$comment_started = false;
$comment_ended = false;
$comment_function_found = false;

Class CommentVO{
    public $type;
    public $name;
    public $desc;
    public $fn;
    public $alias = [];
    public $params= [];
}

$vo = null;

while (($line = fgets($file)) !== false) {
    //trace("<b>CHECKING:: ".$line."</b>");
    $str = str_replace($filter,"",$line);
    $str = rtrim(ltrim($str));
    //trace($str);
    
    $comment_found = false;
    foreach ($conditions as $c){
        if (substr( $str, 0, $c[1] ) === $c[0]){
            $comment_found = true;
            // trace($line);
        }
    }

    if ($vo == null){
        $vo = new CommentVO();
    }


    if ($comment_found){
        $v = strpos($str,"@type");
        if ($v !== false){
            $vo->type = rtrim(ltrim( str_replace("* @type:","",$str) ));
        }
        $v = strpos($str,"@name");
        if ($v !== false){
            $vo->name = rtrim(ltrim( str_replace("* @name:","",$str) ));
        }
        $v = strpos($str,"@alias");
        if ($v !== false){
            $alias = rtrim(ltrim( str_replace("* @alias:","",$str) ));
            array_push($vo->alias,$alias);
        }
        $v = strpos($str,"@param");
        if ($v !== false){
            $bits = explode(":",$str);
            $param = explode(" ",$bits[0]);
            array_push($param,$bits[1]);
            array_shift($param); // removes *
            array_shift($param); // removes param:
            //out($bits);
            // out($param);

            $params = [
                "type" => "",
                "name" => "",
                "optional" => "",
                "desc" => ""
            ];
            if (sizeof($param) == 3){
                $params["type"] = $param[0];
                $params["name"] = $param[1];
                $params["optional"] = "";
                $params["desc"] = $param[2];
            } else if (sizeof($param) == 4){
                //out($param);
                $params["type"] = $param[0];
                $params["name"] = $param[2];
                $params["optional"] = $param[1];
                $params["desc"] = $param[3];
            }

            //$param = array_reverse($param);

            //out($param);
            
            // //>param: [* @param * arg: the variable you wish to convert to a boolean]()</b
            // $rem = ["* @param ","  ","  ","  "];
            // //$param = "[" . str_replace($rem,"",$str) . "]";
            // $param = str_replace($rem,"",$str);
            // $param = str_replace(": "," - ",$param);
            array_push($vo->params,$params);
        }
        $v = strpos($str,"@desc");
        if ($v !== false){
            $vo->desc = rtrim(ltrim( str_replace("* @desc:","",$str) ));
        }
    }

    if ($comment_found && !$comment_started){
        //trace("--------------- comment started");
        $comment_started = true;
    } else if (!$comment_found && $comment_started){
        //trace("--------------- comment ended");
        $comment_started = false;
        $comment_ended = true;
        $comment_function_found = false;
    }


    if (!$comment_started && $comment_ended && !$comment_function_found){
        //trace("<b>CHECKING:: ".$line."</b>");
        $fn = strpos($str,"function");
        //out($fn);
        if ($fn !== false){
            $comment_started = false;
            $comment_ended = false;
            $comment_function_found = false;
            // trace("<div style='color:#006600'>FOUND: " . $line . "</div>");

            //window.getElementsByClassName = function (str) {
            $remove = ["//","window."," "," = ","=","function","{"];
            $strFn = ltrim(rtrim(str_replace($remove,"",$str)));

            $vo->fn = $strFn;
            array_push($comments,$vo);
            $vo = null;
        } else {
            //trace("<div style='color:#cc0000'>NOT FOUND: " . $line . "</div>");
        }
    }
    


    

    
    // $cond1 = substr( $line, 0, 4 );
    // if ($startString === "/**"){
    //     trace($line);
    // }
    

    // $hasWindow = strpos($line,"window.");
    // $hasFunction = strpos($line,"= function");
    // if ($hasWindow !== false && $hasFunction !== false){
    //     $start = strpos($line,"{");
    //     //trace($start);
    //     $str = substr($line,0,$start);
    //     $str = str_replace(" ","",$str);
    //     $str = str_replace("window.","",$str);
    //     $str = str_replace("=function","",$str);
    //     //trace($str);
    //     array_push($functions,$str);
    // }
}
fclose($file);

//array_multisort($comments);
// DEBUG
//out($comments);
//out($comments[0]);


/*
object(CommentVO)#1 (5) {
  ["type"]=>
  string(8) "function"
  ["name"]=>
  string(8) "addEvent"
  ["desc"]=>
  string(57) "Shortcut for adding events with old browser compatibility"
  ["fn"]=>
  string(32) "addEvent(obj,type,fn,useCapture)"
  ["alias"]=>
  array(0) {
  }
}
*/


// generate quick function list for readme.md
$html = "";
foreach ($comments as $vo){
    $html .= "## <b>" . $vo->fn . "</b>\n";

    $html .= "" . ucfirst($vo->desc) . "<br>\n\n";
    
    foreach ($vo->alias as $alt){
        $html .= "><b>alias: " . $alt . "()</b><br>\n\n";
    }

    

    if (sizeof($vo->params) > 0){
        $html .= "param | type | optional | description\n";
        $html .= "--- | --- | --- | ---\n";
        $filter = ["\\","/","|"];
        foreach ($vo->params as $param){
            $html .= $param["name"] . " | ";
            $html .= str_replace("||"," or ",$param["type"]) . " | ";
            $html .= $param["optional"] . " | ";
            $html .= str_replace("||"," or ",$param["desc"]) . " ";
            $html .= "\n";
        }        
    }
    
    
    // $html .= "" . ucfirst($vo->desc) . "<br>\n";
    // foreach ($vo->params as $param){
    //     //$html .= "<b>param: " . $param . "()</b><br>\n";
    //     $html .= "<b>param: ";
    //     foreach ($param as $part){
    //         if ($part != "@param"){
    //             $html .= $part . " ";
    //         }
    //     }
    //     $html .= "</b><br>\n";
    // }

    
    $html .= "<br>\n\n\n\n";
}

echo("<a href='preview.php' target='_blank'>PREVIEW</a><br></hr>\n\n");

echo($html);

file_put_contents("./readme.md",$html);




?>