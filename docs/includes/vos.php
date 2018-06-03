<?php

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Value Objects
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class CommentVo
{
    public $type = "";
    public $title = "";
    public $desc = [];
    public $params = [];
    public $methods = [];
    public $alias = [];
    public $links = [];
    public $return = "";
}

class MethodVo {
    public $name = "";
    public $desc = "";
}

class ParamVo {
    public $name = "";
    public $data_type = "";
    public $desc = "";
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
