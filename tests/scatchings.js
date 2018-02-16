<!DOCTYPE html>
<html lang="en">

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="../dist/aftc.js"></script>

    <style>
        html,
        body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
        }

        #debug {
            display: inline-block;
            border: 1px solid #000000;
            width: 100%;
            min-height: 50px;
        }

        button {
            padding: 5px;
            cursor: pointer;
        }

        button:hover {
            background: #990000;
            color: #FFFFFF;
        }

        .box-container {
            display: block;
            position: relative;
            border: 2px solid #000000;
            padding: 0;
            margin: 0;
            height: 250px;
            overflow: hidden;
        }

        #box1 {
            background: rgba(150, 0, 0, 1);
            color: #FFFFFF;
            border: 2px solid #990000;

        }


        #box2 {
            background: rgba(150, 0, 0, 0.5);
            color: #FFFFFF;
            border: 2px solid #009900;
        }


        .box {
            display: table;
            position: relative;
            /* width: 75px;
            height: 75px; */
            transition-duration: 5s;
        }
    </style>

    <script>
        var debug;



        var onCompleteHandler = function () {
            log("I AM DONE, I AM DUSTED, MY MISSION HERE IS OVER!");
        }



        function init() {
            // Debug.js usage exmaples
            log("Darcey@AllForTheCode.co.uk - AFTC.JS")

            debug = querySelector("#debug");

            // Auto run box2 animations
            //animateBox1();
            //animateBox2();
            //AFTC.Animate("#box1").a();

            var boxAnim1 = new AFTC.Animate({
                elementId: "box1",
                // onComplete: animateBox2
            });
            //boxAnim1.set(["width","fontSize", "fontWeight"], ["100px","24px", "bold"]);
            //boxAnim1.set("paddingLeft", "10px");
            // boxAnim1.animate(
            //     ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom","fontSize"],
            //     ["20px", "20px", "10px", "10px","32px"],
            //     [0.5, 0.5, 1, 1,2.5]
            // );

            // boxAnim1.animate(
            //     ["left", "top", "backgroundColor","color"],
            //     ["100px", "100px", "RGBA(0,0,0,0.2)","RGBA(0,0,0,1)"],
            //     [0.5, 0.75,1,1]
            // );

            boxAnim1.animate("width","400px",0.25);
            // boxAnim1.animate("left","200px",10);


            // boxAnim1.animate(
            //     ["fontSize"],
            //     ["32px"],
            //     [0.5]
            // );

            // boxAnim1.animate(
            //     ["backgroundColor"],
            //     ["RGBA(255,0,0,1)"],
            //     [0.5]
            // );

            // boxAnim1.animate("left","200px",1);

            // boxAnim1.animate(
            //     ["backgroundColor"],
            //     ["RGBA(0,255,0,1)"],
            //     [1.5]
            // );

            // boxAnim1.animate(
            //     ["backgroundColor"],
            //     ["RGBA(0,0,255,1)"],
            //     [1.5]
            // );

            // boxAnim1.animate(
            //     ["backgroundColor","color"],
            //     ["RGBA(255,255,255,1)","RGBA(0,0,0,1)"],
            //     [0.5,1]
            // );
            // boxAnim1.animate(
            //     ["backgroundColor","color"],
            //     ["RGBA(0,0,0,1)","RGBA(255,255,255,1)"],
            //     [0.5,1]
            // );

            // boxAnim1.animate(
            //     ["left", "top", "backgroundColor","color"],
            //     ["100px", "100px", "RGBA(0,0,0,0.2)","RGBA(0,0,0,1)"],
            //     [0.5, 0.75,1,1])
            //     .animate("width", 600, 0.5)
            //     .animate("width", 300, 0.5)
            //     .animate("backgroundColor", "RGBA(150,0,0,0.5)", 1);
            // boxAnim1.set("paddingLeft", "0");
            // boxAnim1.set(
            //     ["paddingLeft","paddingTop"],
            //     [0,"200px"]
            // );
            //boxAnim1.wait(0.5);
            //boxAnim1.set("fontWeight", "normal");
            //boxAnim1.animate(["left", "top"], [0, 0], [1,1]);
            //boxAnim1.repeat(3);
            boxAnim1.start();


            // var boxAnim2 = new AFTC.Animate({
            //     elementId: "box2"
            // });
            // boxAnim2.set(["fontSize", "fontWeight"], ["24px", "bold"]);
            // boxAnim2.set("paddingLeft", "10px");
            // boxAnim2
            //     .animate(["left", "top"], ["100px", "100px"], [1,1.5])
            //     .animate("width", 100, 1)
            //     .animate("width", 50, 1);
            // boxAnim2.set("paddingLeft", "0");
            // boxAnim2.wait(0.5);
            // boxAnim2.set("fontWeight", "normal");
            // boxAnim2.animate(["left", "top"], [0, 0], [1,1]);
            // boxAnim2.repeat(3);
            // boxAnim2.start();

        }


        function animateBox1() {
            log("animateBox1()");
            // AFTC.Animate("#box1")
            //     .prop("left", 100, 1)
            //     .prop("left", 0, 1)
            // .prop("width",100,0.5)
            // .prop("height",100,0.5)
            // .prop("padding",10,0.5)
            // .prop("left",100,0.5)
            // .prop("top",25,0.5)
            // .prop("backgroundColor","#000000",0.5)
            // .prop("color","#FFFFFF",0.5)
            // .prop("borderColor","#00FFFF",0.5)
            // .prop("borderWidth",5,0.5)
            // .prop("borderRadius",50,0.5)
            // .set("fontWeight","bold")
            // .set("fontSize","18px")
            // .set("textAlign","center")
            // .delay(2)
            // .prop("width",50,0.2)
            // .prop("height",50,0.2)
            // .prop("padding",0,0.2)
            // .prop("left",0,0.2)
            // .prop("top",0,0.2)
            // .prop("backgroundColor","#FFCC00",0.2)
            // .prop("color","#000000",0.2)
            // .prop("borderColor","#990000",0.2)
            // .prop("borderWidth",2,0.2)
            // .prop("borderRadius",0,0.2)
            // .set("fontWeight","normal")
            // .set("fontSize","normal")
            // .set("textAlign","inherit");
        }




        function animateBox2() {
            log("animateBox2()");
            var boxAnim2 = new AFTC.Animate({
                elementId: "box2",
                onComplete: animateBox2
            });
            //boxAnim1.set(["width","fontSize", "fontWeight"], ["100px","24px", "bold"]);
            //boxAnim1.set("paddingLeft", "10px");
            // boxAnim1.animate(
            //     ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom","fontSize"],
            //     ["20px", "20px", "10px", "10px","32px"],
            //     [0.5, 0.5, 1, 1,2.5]
            // );

            boxAnim2.animate(
                ["fontSize"],
                ["32px"],
                [0.5]
            ).animate("left","200px",1);
            boxAnim2.start();

            // AFTC.Animate("#box2")
            //     .prop("left", 100, 1)
            //     .prop("left", 0, 1)
            // .prop("width",100,0.5)
            // .prop("height",100,0.5)
            // .prop("padding",10,0.5)
            // .prop("left",100,0.5)
            // .prop("top",25,0.5)
            // .prop("backgroundColor","#000000",0.5)
            // .prop("color","#FFFFFF",0.5)
            // .prop("borderColor","#00FFFF",0.5)
            // .prop("borderWidth",5,0.5)
            // .prop("borderRadius",50,0.5)
            // .set("fontWeight","bold")
            // .set("fontSize","18px")
            // .set("textAlign","center")
            // .delay(2)
            // .prop("width",50,0.2)
            // .prop("height",50,0.2)
            // .prop("padding",0,0.2)
            // .prop("left",0,0.2)
            // .prop("top",0,0.2)
            // .prop("backgroundColor","#FFCC00",0.2)
            // .prop("color","#000000",0.2)
            // .prop("borderColor","#990000",0.2)
            // .prop("borderWidth",2,0.2)
            // .prop("borderRadius",0,0.2)
            // .set("fontWeight","normal")
            // .set("fontSize","normal")
            // .set("textAlign","inherit")
            // .delay(2);
        }


        // Document ready (same as jquery document.ready just, shorter and smaller)
        ready(init);
    </script>
</head>

<body>
    <h2>animate.js</h2>

    <style>
    </style>
    <button onclick="animateBox1()">animateBox1()</button>
    <button onclick="animateBox2()">animateBox2()</button>
    <div class="box-container">
        <div id="box1" class="box">box 1</div>
        <div id="box2" class="box">box 2</div>
    </div>


    <br>

    <div id="debug"></div>




</body>

</html>