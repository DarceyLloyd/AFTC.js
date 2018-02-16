<?php

require_once("./includes/utils.php");

// File to open
$file = fopen('../src/base.js', 'r');


// Value Objects
Class FunctionVo {
    public $name = "";
    public $params = [];
}
Class CommentVo {
    public $type = "";
    public $name = "";
    public $desc = [];
    public $fn = []; // FunctionVo's
    public $alias = [];
    public $return = "";
    public $line1 = "";
}

$filter = ["\t","\n\n","\n\n"];

$comments = []; // Array of commentVo's
$comment = []; // Array of comment lines to be processed into a commentVo
$comment_started = false;
$comment_ended = false;
$function_line_found = false;

while (($line = fgets($file)) !== false) {
    // Clean up file read line
    $str = str_replace($filter,"",$line);
    $str = rtrim(ltrim($str));
    //out("CHECKING: [" . $str . "]");
    
    if (strpos($str,"/**") !== false){
        // out("### comment started");
        $comment = [];
        $comment_started = true;
    } else if (strpos($str,"*/") !== false && $comment_started){
        // out("### comment ended");
        $comment_started = false;
        $comment_ended = true;
    } else if (strpos($str,"*") !== false && $comment_started && !$comment_ended){
        // Add comment line to comment array
        //out("### add comment: [" . $str . "]");
        array_push($comment,$str);
    }

    if (!$comment_started && $comment_ended && !$function_line_found){
        // Check if line is the function definition
        $fn = strpos($str,"function");
        if ($fn !== false){
            out($str . "\n\n");
            // parse into comment vo, store and reset evertyhing for next loop
            parseComment($comment,$str);
            $comment = [];
            $comment_ended = false;
        }
    }
}
fclose($file);



function parseComment($comments,$function_line){
    $vo = new CommentVo();
    $vo->line1 = $function_line;
    $fn_count = 0;
    $params = [];

    $decription_started = false;
    foreach ($comments as $key=>$line){
        //$line = str_replace("* ","",$line);
        $lineTypeDetected = false;
        $lineType = "";

        $checkFunction = strpos($line,"@function");
        if ($checkFunction !== false){
            $lineTypeDetected = true;
            $lineType = "function";
            $fn_count++;
        }

        $checkType = strpos($line,"@type");
        if ($checkType !== false && !$lineTypeDetected){
            $lineTypeDetected = true;
            $lineType = "type";
            $line = trim( str_replace("* @type: ","",$line) );
            $vo->type = $line;
            out("### Setting Comment type: [" . $line . "]");
        }

        $checkName = strpos($line,"@name");
        if ($checkName !== false && !$lineTypeDetected){
            $lineTypeDetected = true;
            $lineType = "name";
            $line = str_replace("* @name: ","",$line);
            $vo->name = $line;
            out("### Setting Comment name: " . $line);
        }

        $checkAlias = strpos($line,"@alias");
        if ($checkAlias !== false && !$lineTypeDetected){
            $lineTypeDetected = true;
            $lineType = "alias";
            $line = trim( str_replace("* @alias: ","",$line) );
            array_push($vo->alias,$line);
            out("### Adding alias: [" . $line . "]");
        }

    
        $paramFlag = strpos($line,"@param");
        if ($paramFlag !== false && !$lineTypeDetected){
            $lineTypeDetected = true;
            // Only process params if type is function, I will take care of it later if type is class or object
            if ($vo->type === "function"){
                $lineType = "param";
                $line = trim( str_replace("* @param","",$line) );
                array_push($params,$line);
                out("### Adding param: [" . $line . "]");
            }
        }
    

        $returnFlag = strpos($line,"@return");
        if ($returnFlag !== false && !$lineTypeDetected){
            $lineTypeDetected = true;
            $lineType = "return";
            $line = trim( str_replace("* @return:","",$line) );
            $vo->return = $line;
            out("### Setting return: [" . $line . "]");
        }
        
        $descFlag1 = strpos($line,"@desc");
        if ($descFlag1 !== false && !$lineTypeDetected){
            $lineTypeDetected = true;
            $lineType = "desc";
            $decription_started = true;
            $line = trim( str_replace("* @desc: ","",$line) );
            array_push($vo->desc,$line);
            out("### Adding desc line: " . $line);
        }


        $descFlag2 = strpos($line,"* ");
        if ($descFlag2 !== false && !$lineTypeDetected){
            // add line to description array
            $line = trim( str_replace("* ","",$line) );
            array_push($vo->desc,$line);
            out("### Adding multi line desc: " . $line);
        } else {
            $decription_started = false;
        }
        
        
        
    }

    // Are we dealing with a class/object or single function
    if ($fn_count == 0){
        // We are dealing with a single function (dont trust comment of @type)
        // We already recorded params into an array in loop above just put that in FunctionVo and into CommentVo
        $fvo = new FunctionVo();
        $fvo->name = "";
        $fvo->params = $params;
        array_push($vo->fn,$fvo);
    } else {
        // Looks like we are dealing with a class or function with 1 or more public functions
    }


    //vd($vo);
}



?>