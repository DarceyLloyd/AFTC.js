<?php
/**
 * Author: Darcey@AllForTheCode.o.uk
 */

require_once "./includes/utils.php";
require_once("./includes/ValueObjects.php");

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Value Objects
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
class DDoc
{
    // var defs
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    public $out = "";
    private $file = "";
    private $fileName = "";
    private $rawComments = []; // Array of RawCommentVo's
    private $comments = []; // Array of CommentVo's

    // Constructor
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    public function __construct($file)
    {
        // var ini
        $this->file = $file;
        $this->fileName = basename($file) . PHP_EOL;

        // Parse file line by line into an array, 1 block of comments is 1 array
        $this->parseFile();

        // Parse raw comments
        $this->parseRawComments();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // parseFile
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    private function parseFile()
    {
        $filter = ["\t", "\n\n", "\n\n"];
        $comment_started = false;

        $file = fopen($this->file, 'r');
        while (($line = fgets($file)) !== false) {
            // Clean up file read line
            $str = str_replace($filter, "", $line);
            $str = rtrim(ltrim($str));
            //out("CHECKING: [" . $str . "]");

            if (!isset($rcvo)) {
                $rcvo = new RawCommentVo();
            }

            if (strpos($str, "@function:") !== false && $comment_started) {
                $rcvo->fnCount++;
            }

            if (strpos($str, "@constructor:") !== false && $comment_started) {
                $rcvo->hasConstructor = true;
            }

            if (strpos($str, "/**") !== false && !$comment_started) {
                // out("### comment started");
                $comment_started = true;
            } else if (strpos($str, "*/") !== false && $comment_started) {
                // out("### comment ended");
                array_push($this->rawComments, $rcvo);
                unset($rcvo);
                $comment_started = false;
            } else if (strpos($str, "*") !== false && $comment_started) {
                // Add comment line to comment array
                // out("### add comment: [" . $str . "]");
                array_push($rcvo->comments, $str);
            }
        }
        fclose($file);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // Parse raw comments to commentVo's
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    private function parseRawComments()
    {
        $started = "";
        foreach ($this->rawComments as $rcvo) {
            if (!isset($commentVo)) {
                $commentVo = new CommentVo();
            }
            //print_r($rcvo);
            $rootDescriptionComplete = false;
            $previousLineType = "";
            $currentLineType = "";

            $functionStarted = false;

            $cvo = new CommentVo();
            $fvo;
            foreach ($rcvo->comments as $comment) {
                if (inStr($comment, "@type:")){
                    $currentLineType = "type";
                } else if (inStr($comment, "@name:")){
                    $currentLineType = "name";
                } else if (inStr($comment, "@alias:")){
                    $currentLineType = "alias";
                } else if (inStr($comment, "@desc:")){
                    $currentLineType = "desc";
                } else if (inStr($comment, "@method:")){
                    $currentLineType = "function";
                } else if (inStr($comment, "@function:")){
                    $currentLineType = "function";
                } else if (inStr($comment, "@func:")){
                    $currentLineType = "function";
                } else if (inStr($comment, "@constructor:")){
                    $currentLineType = "function";
                } else if (inStr($comment, "@param")){
                    $currentLineType = "param";
                } else if (inStr($comment, "@return")){
                    $currentLineType = "return";
                } else if (inStr($comment, "* ")){
                    $currentLineType = "continue";
                } else {
                    $currentLineType = "unknown";
                }


                // out("####: " . $currentLineType . "  -  " . $comment);


                if ($currentLineType == "type"){
                    //out("### Processing [" . $currentLineType . "]: " . $comment);
                    $out = trim(str_replace("* @type:", "", $comment));
                    $cvo->type = $out;
                    continue;
                }

                if ($currentLineType == "name"){
                    //out("### Processing [" . $currentLineType . "]: " . $comment);
                    $out = trim(str_replace("* @name:", "", $comment));
                    $cvo->name = $out;
                    continue;
                }

                if ($currentLineType == "alias"){
                    //out("### Processing [" . $currentLineType . "]: " . $comment);
                    $out = trim(str_replace("* @alias:", "", $comment));
                    array_push($cvo->alias,$out);
                    continue;
                }


                if ($currentLineType == "function"){
                    //out("### Processing [" . $currentLineType . "]: " . $comment);
                    $functionStarted = true;

                    // save old method if exists
                    if (isset($fvo)){
                        array_push($cvo->fn,$fvo);
                        unset($fvo);
                    }

                    // Record fvo->name
                    $fvo = new FunctionVo();
                    $out = trim(str_replace("* @function: ", "", $comment));
                    $out = trim(str_replace("* @func: ", "", $out));
                    $fvo->name = $out;
                    continue;
                }


                if ($currentLineType == "param"){
                    //out("### Processing [" . $currentLineType . "]: " . $comment);
                    $pvo = $this->parseParam($comment);
                    //out("comment = " . $comment);
                    array_push($fvo->params,$pvo);
                    $previousLineType = $currentLineType;
                    continue;
                }

                if ($currentLineType == "return"){
                    //out("### Processing [" . $currentLineType . "]: " . $comment);
                    $out = trim(str_replace("* @return:", "", $comment));
                    // out("##### " . $out);
                    $fvo->return = $out;
                    $previousLineType = $currentLineType;
                    continue;
                }


                if ($currentLineType == "desc"){
                    if ($functionStarted){
                        $currentLineType = "function description";
                        //out("### Processing [" . $currentLineType . "]: " . $comment);
                        if (!isset($fvo)){
                            $fvo = new FunctionVo();
                        }
                        $out = trim(str_replace("* @desc:", "", $comment));
                        array_push($fvo->desc,$out);
                    } else {
                        $currentLineType = "root description";
                        //out("### Processing [" . $currentLineType . "]: " . $comment);
                        $out = trim(str_replace("* @desc:", "", $comment));
                        array_push($cvo->desc,$out);
                    }
                    $previousLineType = $currentLineType;
                    continue;
                }

                if ($currentLineType == "continue"){
                    if ($functionStarted){
                        $currentLineType = "function description";
                        //out("### Processing [" . $currentLineType . "]: " . $comment);
                        $out = trim(str_replace("* ", "", $comment));
                        array_push($fvo->desc,$out);
                        continue;
                    } else {
                        $currentLineType = "root description";
                        //out("### Processing [" . $currentLineType . "]: " . $comment);
                        $out = trim(str_replace("* ", "", $comment));
                        array_push($cvo->desc,$out);
                        continue;
                    }
                }


                // Good to show what haasn't been processed in loop
                out("##### UNHANDLED: current: [" . $currentLineType . "]     previous: [" . $previousLineType . "]    [" . $comment . "]");
            }

            // Process anything left over
            if (isset($fvo)){
                array_push($cvo->fn,$fvo);
                unset($fvo);
            }

            //print_r($cvo);

            array_push($this->comments,$cvo);
        }

        //print_r($this->comments);
    }
    private function parseParam($comment){
        // out("#### Processing: " . $comment);
        $comment = trim(str_replace("* @param", "", $comment));
        $bits = explode(":",$comment,2);
        if (sizeof($bits) != 2){ return false;}
        $left = explode(" ",$bits[0]);
        $right = trim($bits[1]);
        $pvo = new ParamVo();
        // out("sizeof(left) = " . sizeof($left));
        if (sizeof($left) == 2){
            $pvo->type = $left[0];
            $pvo->name = $left[1];
            $pvo->optional = "";
            $pvo->desc = $right;
        } else if (sizeof($left) == 3){
            //out($left);
            $pvo->type = $left[0];
            $pvo->name = $left[2];
            $pvo->optional = $left[1];
            $pvo->desc = $right;
        }
        // print_r($pvo);
        return $pvo;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    public function buildReadme(){
        $out = "";
        foreach($this->comments as $cvo){
            //print_r($cvo);

           

            $out .= "## <b>" . $cvo->fn[0]->name . "</b>\n";
            $out .= " --- \n";

            if (!empty($cvo->alias)){
                $out .= "<b>Aliases:</b>\n";
                foreach($cvo->alias as $alias){
                    $out .= "> " . $alias . "  \n";
                }
    
                $out .= "  \n";
            }
            

            //out("cvo->desc = " . $cvo->desc);
            foreach($cvo->desc as $desc){
                $out .= $desc . "  \n";
            }

            $out .= "  \n";


            if (!empty($cvo->fn)){
                //print_r($cvo);
                $skippedFirst = false;
                foreach($cvo->fn as $fvo){

                    if ($skippedFirst){
                        $out .= "## <b>" . $fvo->name . "</b>\n";
                    }
                    $skippedFirst = true;
                    


                    foreach($fvo->desc as $desc){
                        $out .= $desc . "  \n";
                    }
                    if (!empty($fvo->params)){
                        $out .= "param | type | optional | description\n";
                        $out .= "--- | --- | --- | ---\n";
                        foreach($fvo->params as $param){
                            $out .= $param->name . " | ";
                            $out .= $param->type . " | ";
                            $out .= $param->optional . " | ";
                            // if ($param->optional == ""){
                            //     $out .= "required | ";
                            // } else {
                            //     $out .= "optional | ";
                            // }
                            $out .= $param->desc . " | \n";
                        }
                    }

                    if ($fvo->return != ""){
                        $out .= "  \n";
                        $out .= "<b>Return:</b> " . $fvo->return . "\n\n";
                    }
                }
            }


            $out .= "\n --- \n <br><br>\n\n";
            //break;

        } // end foreach


        //out("this->fileName = " . $this->fileName);
        $file = "./github/" . removeExt($this->fileName) . ".md";
        out("CREATED: " . $file);
        file_put_contents($file,$out);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    public function buildWebPage(){

    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
