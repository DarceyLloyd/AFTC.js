## <b>AFTC.Animate(elementId, onComplete)</b>
 --- 
@version: 2.3.14  
@requires: base.js  
  
Quick and easy css animation for nearly every css element style  
````  
var anim1 = new AFTC.Animate("box1", onCompleteFunction);  
anim1.wait(2); // wait in 2 seconds  
anim1.set("backgroundColor","RGBA(255,255,255,0.5)"); // sets background color to white 50% opacity  
anim1.anim("fontColor","RGBA(255,0,0,1)",1.5); // animates the font color to red over 1.5 seconds  
anim1.set(["html","paddingLeft",left"],["hello","10px","100px"],[1,2,3]); // sets innerHTML, padding-left and left position over 1, 2 and 3 seconds  
````  
@link: see usage example in test/animation.htm  

 --- 
 <br><br>

## <b>fadeIn(elementId, duration)</b>
 --- 
  
fades in an element over a specified duration  


param | type | optional | description
--- | --- | --- | ---
elementId | string |  | the id of the html element you wish to fade | 
duration | number |  | how long you want the fade to run over in seconds | 

 --- 
 <br><br>

## <b>fadeOut(elementId, duration)</b>
 --- 
  
fades out an element over a specified duration  


param | type | optional | description
--- | --- | --- | ---
elementId | string |  | the id of the html element you wish to fade | 
duration | number |  | how long you want the fade to run over in seconds | 

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

