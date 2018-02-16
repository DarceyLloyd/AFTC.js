<?php

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Value Objects
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
class RawCommentVo
{
    public $fnCount = 0;
    public $hasConstructor = false;
    public $comments = [];
}

class CommentVo
{
    public $type = "";
    public $name = "";
    public $desc = [];
    public $alias = [];
    public $constructor; // FunctionVo
    public $fn = []; // FunctionVo's
    
}

class FunctionVo
{
    public $name = "";
    public $desc = [];
    public $params = []; // ParamVo's
    public $return = "";
}

class ParamVo
{
    public $type = "";
    public $name = "";
    public $optional = false;
    public $desc = "";
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
