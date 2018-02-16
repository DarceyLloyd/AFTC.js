## <b>AFTC.Animate(elementQuery, onComplete)</b>
 --- 
  
Animate anything with ease.  
You have access to any style in the element.style attributes/properties via the 3 chainable functions.  
.prop(style:String,targetValue:number||string,duration:number||float)  
.set(style:String,targetValue:number||string)  
.delay(duration in seconds)  
````  
// You have access to all the props in element.style  
// Will repeat forever as onComplete is set to animateBox1  
function animateBox1(){  
AFTC.Animate("#box1", animateBox1)  
.prop("width",100,0.5)  
.prop("height",100,0.5)  
.prop("padding",10,0.5)  
.prop("left",100,0.5)  
.prop("top",25,0.5)  
.prop("backgroundColor","#000000",0.5)  
.prop("color","#FFFFFF",0.5)  
.prop("borderColor","#00FFFF",0.5)  
.prop("borderWidth",5,0.5)  
.prop("borderRadius",50,0.5)  
.set("fontWeight","bold")  
.set("fontSize","18px")  
.set("textAlign","center")  
.delay(2)  
.prop("width",50,0.2)  
.prop("height",50,0.2)  
.prop("padding",0,0.2)  
.prop("left",0,0.2)  
.prop("top",0,0.2)  
.prop("backgroundColor","#FFCC00",0.2)  
.prop("color","#000000",0.2)  
.prop("borderColor","#990000",0.2)  
.prop("borderWidth",2,0.2)  
.prop("borderRadius",0,0.2)  
.set("fontWeight","normal")  
.set("fontSize","normal")  
.set("textAlign","inherit");  
}  
````  

 --- 
 <br><br>

## <b>getElementOffsetTop(elementIdOrQuery)</b>
 --- 
  
Gets an elements top offset  
param | type | optional | description
--- | --- | --- | ---
elementId | string |  | the element ID you wish to get the top offset of | 

 --- 
 <br><br>

## <b>scrollToElement(elementId, arg_duration, offset)</b>
 --- 
  
Scroll to element on page  
param | type | optional | description
--- | --- | --- | ---
elementId | string |  | ID of element you wish to scroll to | 
arg_duration | string |  | Duration in seconds | 
offset | number |  | How much to offset scroll by | 

 --- 
 <br><br>

