<?php

require_once "./includes/utils.php";



function parseComment($comments, $function_param_count)
{
    $vo = new CommentVo();
    $function_param_found = false;
    $params = [];

    $previousFunction = "";
    $currentFunction = "";
    $fnVo;

    $decription_started = false;
    foreach ($comments as $key => $line) {
        //$line = str_replace("* ","",$line);
        $lineTypeDetected = false;
        $lineType = "";

        $checkFunction = strpos($line, "@function");
        if ($checkFunction !== false) {
            $lineTypeDetected = true;
            $lineType = "function";
        }

        $checkType = strpos($line, "@type");
        if ($checkType !== false && !$lineTypeDetected) {
            $lineTypeDetected = true;
            $lineType = "type";
            $line = trim(str_replace("* @type: ", "", $line));
            $vo->type = $line;
            // out("### Setting Comment type: [" . $line . "]");
        }

        $checkName = strpos($line, "@name");
        if ($checkName !== false && !$lineTypeDetected) {
            $lineTypeDetected = true;
            $lineType = "name";
            $line = str_replace("* @name: ", "", $line);
            $vo->name = $line;
            // out("### Setting Comment name: " . $line);
        }

        $checkAlias = strpos($line, "@alias");
        if ($checkAlias !== false && !$lineTypeDetected) {
            $lineTypeDetected = true;
            $lineType = "alias";
            $line = trim(str_replace("* @alias: ", "", $line));
            array_push($vo->alias, $line);
            // out("### Adding alias: [" . $line . "]");
        }

        $returnFlag = strpos($line, "@return");
        if ($returnFlag !== false && !$lineTypeDetected) {
            $lineTypeDetected = true;
            $lineType = "return";
            $line = trim(str_replace("* @return:", "", $line));
            $vo->return = $line;
            // out("### Setting return: [" . $line . "]");
        }

        $descFlag1 = strpos($line, "@desc");
        if ($descFlag1 !== false && !$lineTypeDetected) {
            $lineTypeDetected = true;
            $lineType = "desc";
            $decription_started = true;
            $line = trim(str_replace("* @desc: ", "", $line));
            array_push($vo->desc, $line);
            // out("### Adding desc line: " . $line);
        }

        // Functions and params or just constructor params
        if ($function_param_count == 0) {
            // constructor only param processing
            $paramFlag = strpos($line, "@param");
            if ($paramFlag !== false && !$lineTypeDetected) {
                $lineTypeDetected = true;
                // Only process params if type is function, I will take care of it later if type is class or object
                if ($vo->type === "function") {
                    $lineType = "param";
                    $line = trim(str_replace("* @param", "", $line));
                    if (!isset($fnVo)) {
                        $fnVo = new FunctionVo();
                    }
                    $fnVo->name = "constructor";
                    array_push($fnVo->params, $line);
                    // out("### Adding param to FunctionVo: [" . $line . "]");
                }
            }
        } else {
            $functionFlag = strpos($line, "@function");
            $paramFlag = strpos($line, "@param");
            if ($functionFlag !== false) {
                $line = trim(str_replace("* @function", "", $line));
                $currentFunction = $line;
                if ($previousFunction == "") {
                    $fnVo = new FunctionVo();
                    $fnVo->name = $line;
                    $previousFunction = $currentFunction;
                } else if ($previousFunction != $currentFunction) {
                    // Store current vo in comment and create new FunctionVo
                    array_push($vo->fn, $fnVo);
                    $fnVo = new FunctionVo();
                    $fnVo->name = $line;
                    $previousFunction = $currentFunction;
                } else {
                    //out("############ SCENARIO SHOULD NEVER RUN!");
                }
            } else if ($paramFlag !== false) {
                $lineType = "param";
                $line = trim(str_replace("* @param", "", $line));
                array_push($fnVo->params, $line);
            } else {

            }
        }

        // Multi line comment handling (done last due to flag)
        $descFlag2 = strpos($line, "* ");
        if ($descFlag2 !== false && !$lineTypeDetected) {
            // add line to description array
            $line = trim(str_replace("* ", "", $line));
            array_push($vo->desc, $line);
            // out("### Adding multi line desc: " . $line);
        } else {
            $decription_started = false;
        }

    } // While loop end

    
    // If no @funcion params then add the single functionVo created to CommentVo->Fn[]
    if (isset($fnVo)){
        array_push($vo->fn, $fnVo);
    }


    // Fixup CommentVo->fn[] FunctionVo->params to contain an array of ParamVo's
    foreach ($vo->fn as $fnVo){
        $cVo = new ParamVo();
        foreach ($fnVo->params as $key => $value){
            //out($value);
            $sides = explode(":",$value);
            $left = explode(" ",$sides[0]);
            $right = trim($sides[1]);
            // out(sizeof($left));
            switch (sizeof($left)){
                case 1:
                    $cVo->name = $left[0];
                    break;
                case 2:
                    $cVo->type = $left[0];
                    $cVo->name = $left[1];
                    break;
                case 3:
                    $cVo->type = $left[0];
                    $cVo->name = $left[1];
                    $cVo->optional = $left[2];
                    break;
            }
            $cVo->desc = $right;
        }
        $fnVo->params = $cVo;
        
        //print_r($fnVo);
    }

    //print_r($vo);
    return $vo; //returns CommentVo
} // end function parse comment