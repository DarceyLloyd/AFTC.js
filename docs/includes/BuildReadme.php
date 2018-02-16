<?php

require_once "./includes/utils.php";


function buildReadme($comments)
{
    $out = "";
    foreach ($comments as $key => $comment){
        $out .= "## <b>" . $comment->name . "</b>\n";
        foreach ($comment->desc as $desc){
            $out .= $desc . "\n";
        }

        if (sizeof($comment->fn) == 1){
            
        } else {

        }
        foreach ($comment->fn as $fn){
            print_r($fn);
            
        }

        out("####################################################");
    }


    file_put_contents("./readme.md",$out);
}


/*
## <b>getElementById(id)</b>
Short cut for document.getElementById, it also caches the query<br>

><b>alias: getId()</b><br>

><b>alias: byId()</b><br>

param | type | optional | description
--- | --- | --- | ---
string | id |  |  id of html element to retrieve 
<br>



*/