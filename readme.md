# <b>AFTC.js</b>
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<b>A collection of utilities / functions I find useful when working with BROWSER based JavaScript.</b>

<br><br>


## Whats new 1.4.1

    - AFTC.Animate() has taken a re-write to allow for better functionality, eg:

        var anim1 = new AFTC.Animate("#box1", onCompleteHandler);
        anim1
            .anim("width",100,0.5)
            .anim("height",100,0.5)
            .anim("padding",10,0.5)
            .anim("left",100,0.5)
            .anim("top",25,0.5)
            .anim("backgroundColor","#000000",0.5)
            .anim("color","#FFFFFF",0.5)
            .anim("borderColor","#00FFFF",0.5)
            .anim("borderWidth",5,0.5)
            .anim("borderRadius",50,0.5)
            .set("fontWeight","bold")
            .set("fontSize","18px")
            .set("textAlign","center")
            .delay(2)
            .anim("width",50,0.2)
            .anim("height",50,0.2)
            .anim("padding",0,0.2)
            .anim("left",0,0.2)
            .anim("top",0,0.2)
            .anim("backgroundColor","#FFCC00",0.2)
            .anim("color","#000000",0.2)
            .anim("borderColor","#990000",0.2)
            .anim("borderWidth",2,0.2)
            .anim("borderRadius",0,0.2)
            .set("fontWeight","normal")
            .set("fontSize","normal")
            .set("textAlign","inherit");
            .start();

        Chainable methods are:
            wait(seconds)
            set([array of css styles],[values])
            set(["html","opacity"],["hello",0.5])
            anim([array of css styles],[values],[durations])
        etc

    See tests/animation.htm for further details

    - Various fixes and additions throughout
    - In progress of testing all tests for 100% migration to this version


<br><br>



# <b>Main features</b>

## <b>onReady(function) || ready(function)</b>
No more jQuery for document.ready or addEventListener DOMLoaded etc, just use onReady(fn); or ready(fn);

## <b>log(arg)</b>
No need to type <b>console.</b>log(arg) anymore! Just type log!

```
var msg = "Hello World!";
log("msg = " + msg);
```

## <b>configLog({options})</b>
Want to log to a HTML element for visual debug using log? You also have logTo(elementId,string);
```
// This will dump log usage to a html element with ID of debug
configLog({autoLogTo:"debug"});
//configLog({autoLogEnable:false});
log("Darcey@AllForTheCode.co.uk - AFTC.JS");
```

## <b>getElementById(str)</b>
No more typing document.getElementById(str)! It's shorter and runs much quicker as it also caches element id queries.

## <b>querySelector(str)</b>
No more typing document.querySelector(str)! It's shorter and runs much quicker as it also caches dom element searches.

## <b>var myAnimVar = new AFTC.Animate("#box1", onComplete).ChainFunctions()</b>
```
    var myAnimation = new AFTC.Animate("#box1",myOnCompleteFunction)
        // Chain functions
        myAnimation
        .delay(1) // delay in seconds
        .anim("width",100,0.5) // prop(style,targetValue,duration)
        .anim("opacity",0,0.5);
        .anim("backgroundColor","#990000",2)
        .start()
```
or fade and hide etc etc

```
    var myFade = AFTC.Animate("elementIdToFadeOut");
    myFade.anim("opacity",0,1); // Tweem opacity to 0 in 1 second
    myFade.set("dispaly","none"); // hide element fully
    myFade.start();
```

## <b>AFTC.Color(color)</b>
- <b>lighten</b>(percent);
- <b>darken</b>(percent);
- And more, full details below

Lightens or darkens a color like sass and less does.
```
    var color = new AFTC.Color([10,20,30]);
    color.lighten(10);
    color.darken(10);
    log("color.getHex() = " + color.getHex());
    log("color.getRGB().r = " + color.getRGB().r);
    log("color.getRGB().g = " + color.getRGB().g);
    log("color.getRGB().b = " + color.getRGB().b);
    log("color.getRGBString() = " + color.getRGBString());
    // See example.htm for further usage
```

## <b>addEvent(obj,type,callback,eventReturn)</b>
Detects addEventListener availability and switches to attachEvent if it's not available.



<br><br><br><br>




# <b>Installation</b>
```
npm i aftc.js
gulp build
```

<br><br><br><br>

# <b>Build</b>
You can use webpack or gulp, I pref' gulp at the moment.

```
gulp build
gulp watch
```

<br><br><br><br>

# <b>Build Guide</b>:
io.js is the only module which has jquery as a dependancy, I have it commented out in the build, if you wish to include it, uncomment io.js in gulpfile.js and re-build, note if you do not have jquery included on your page or as part of your build io.js will fail.

- <b>aftc.min.js with everything plugged in is less than 35KB!</b>

## <b>Step by step</b>

- Open aftc.js directory in VSCode
- Open "gulpfile.js" and edit / comment out or uncomment any of the imports that you want or don't want

```
var jsFiles = [
    
    // The base, the essentials, the foundations
    "./src/base.js", // Dependencies: none

    // Dev assist utility functions / tools
    "./src/string.js", // Dependencies: none
    "./src/random.js", // Dependencies: none
    "./src/conversion.js", // Dependencies: none
    "./src/datetime.js", // Dependencies: none
    "./src/cookies.js", // Dependencies: none
    "./src/validation.js", // Dependencies: none
    "./src/graphics.js", // Dependencies: none

    // Utilities / tools which focus on a specific area / task(s)
    "./src/animation.js", // Dependencies: none
    './src/color.js', // Dependencies: none
    "./src/detection.js", // Dependencies: none
    "./src/dom.js", // Dependencies: none
    "./src/styling.js", // Dependencies: none
    "./src/form.js", // Dependencies: none
    // "./src/io.js", // Dependencies: jQuery >= 1.12
];

```

- Open terminal in VSCode by pressing CTRL + '
- Type into terminal
```
gulp build
```




<br><br><br><br>





# <b>So what's inside?</b>
#### Here is the list of functions in each of the files, pick and choose what you want to pack into aftc.js
<br><br>




# <b>base.js</b>



## <b>addEvent(obj,type,fn,useCapture)</b>
 --- 
  
Shortcut for adding events with old browser compatibility  


param | type | optional | description
--- | --- | --- | ---
obj | object |  | The object you wish to attach the event listener to | 
type | string |  | The event type (e.type) mousedown, mouseup, click etc | 
fn | function |  | The function to call when the event is triggered | 
useCapture | boolean | optional | Whether the event should be executed in the capturing or in the bubbling phase | 

 --- 
 <br><br>

## <b>onReady(fn)</b>
 --- 
<b>Aliases:</b>
> ready  
  
  
Replacement for jQuerys $(document).ready  


param | type | optional | description
--- | --- | --- | ---
fn | function |  | inline function or pass it a function for when your page is loaded and ready to be used | 

 --- 
 <br><br>

## <b>AFTC.Resizemanager()</b>
 --- 
  
A function stack manager for resize and orientation change events  
## <b>enable()</b>
enable function stack execution on oritentation and resize change  
## <b>disable()</b>
disable function stack execution on oritentation and resize change  
## <b>add(uid,fn)</b>
add function to orientation and resize stack  


param | type | optional | description
--- | --- | --- | ---
uid | string |  | unique id / label of function to add from stack | 
fn | function |  | function to add to stack | 
## <b>remove(uid)</b>
remove function from orientation and resize stack  


param | type | optional | description
--- | --- | --- | ---
uid | string |  | unique id / label of function to remove from stack | 

 --- 
 <br><br>

## <b>getElementById(id)</b>
 --- 
<b>Aliases:</b>
> getId  
> byId  
  
  
short cut for document.getElementById, it also caches the query  


param | type | optional | description
--- | --- | --- | ---
string | id |  | id of html element to retrieve | 

 --- 
 <br><br>

## <b>querySelector(str)</b>
 --- 
<b>Aliases:</b>
> query  
> cssQuery  
  
  
Short cut for document.querySelector, it also caches the query  


param | type | optional | description
--- | --- | --- | ---
str | string |  | the query to be run on the dom | 

 --- 
 <br><br>

## <b>getElementsByClassName(str)</b>
 --- 
<b>Aliases:</b>
> getClass  
> byClass  
  
  
Short cut for document.getElementsByClassName, it also caches the query  


param | type | optional | description
--- | --- | --- | ---
str | string |  | the class name to look for | 

 --- 
 <br><br>

## <b>getElementsByTagName(str)</b>
 --- 
  
shortcut for getElementsByTagName  


param | type | optional | description
--- | --- | --- | ---
str | string |  | tag name to look for | 

 --- 
 <br><br>

## <b>addClass(elementOrId,classname)</b>
 --- 
  
shortcut to add a css class to a html element  


param | type | optional | description
--- | --- | --- | ---
elementOrId | elementORstring |  | The elemnt or id of the html element to add a css class to | 
className | string |  | the class name to add | 

 --- 
 <br><br>

## <b>removeClass(elementOrId,className)</b>
 --- 
  
shortcut to remove a class from a html element  


param | type | optional | description
--- | --- | --- | ---
elementOrId | elementORstring |  | The elemnt or id of the html element to add a css class to | 
className | string |  | the class name to remove | 

 --- 
 <br><br>

## <b>hasClass(elementOrId, cls)</b>
 --- 
  
Check to see if an element has a class attached to it  


param | type | optional | description
--- | --- | --- | ---
elementOrId | string |  | The elemnt or id of the html element | 
cls | string |  | class to look for | 

 --- 
 <br><br>

## <b>AFTC.log{}</b>
 --- 
<b>Aliases:</b>
> trace  
  
  
shortcut for console.log with capabilities to log nice arrays, objects and to html elements via innerHTML  


param | type | optional | description
--- | --- | --- | ---
 |  |  |  | 

 --- 
 <br><br>

## <b>log(input)</b>
 --- 
<b>Aliases:</b>
> trace  
  
  
Shortcut for console.log with capabilities to log nice arrays, objects and to html elements via innerHTML  
````  
log("Hello World");  
log("a = " + a);  
log("myVar1 = " + myVar1 + "  myVar2 = " + myVar2);  
log(MyObject);  
log(MyClass);  
````  


param | type | optional | description
--- | --- | --- | ---
input | * |  | what you want to console.log | 

 --- 
 <br><br>

## <b>logEnable()</b>
 --- 
  
Enables log()  

 --- 
 <br><br>

## <b>logDisable()</b>
 --- 
  
Disable log()  

 --- 
 <br><br>

## <b>configLog({options})</b>
 --- 
  
Configuration function for logTo() autologging see examples folder on usage  


param | type | optional | description
--- | --- | --- | ---
autoLogTo | string |  | html element id to log to | 
autoLogEnable | boolean |  | enable auto log | 
enableAutoLog | boolean |  | enable auto log | 
autoLogDisable | boolean |  | disable auto log | 
disableAutoLog | boolean |  | disable auto log | 

 --- 
 <br><br>

## <b>logTo(elementId,str)</b>
 --- 
  
A console.log alternative that will output to a html element and the console at the same time  
````  
logTo("message","Hello World!");  
````  


param | type | optional | description
--- | --- | --- | ---
elementId | string |  | elementId to output to | 
str | string |  | what innerHTML will be set to | 

 --- 
 <br><br>

## <b>logObjTo(elementId,obj,appendOrPrepend)</b>
 --- 
  
A console.log alternative that will output an object to a html element and the console nicely formatted at the same time  


param | type | optional | description
--- | --- | --- | ---
elementId | string |  | html element id to output to | 
obj | object |  | the object to debug output | 
append | boolean | optional | append text or prepend text | 

 --- 
 <br><br>

## <b>openDebugWindow(html)</b>
 --- 
<b>Aliases:</b>
> stringToWindow  
  
  
open a popup window with the html you wish to display in it  


param | type | optional | description
--- | --- | --- | ---
html | dataType |  | the html you wish to display in the popup window | 

 --- 
 <br><br>

## <b>setHTML(elementOrId,html);</b>
 --- 
<b>Aliases:</b>
> html  
  
  
quick shortcut for outputting html to an element  
````  
setHTML("header","Welcome");  
// or  
var myElement = getElementById("header");  
setHTML(myElement,"Welcome!");  
````  


param | type | optional | description
--- | --- | --- | ---
elementOrId | dataType |  | the element or the element id you wish to set the html of | 
html | dataType |  | the html string to insert into your element | 

 --- 
 <br><br>

## <b>arrayRemoveIndex(arr,index)</b>
 --- 
  
remove a specified index from an array  


param | type | optional | description
--- | --- | --- | ---
arr | array |  | the array you wish to remove an index on | 
index | number |  | the array index you wish to remove | 
  
<b>Return:</b> array


 --- 
 <br><br>

## <b>isStringInArray(needle,haystack)</b>
 --- 
  
Check to see if a string is in an array  


param | type | optional | description
--- | --- | --- | ---
needle | string |  | the string your looking for | 
haystack | array |  | the array you wish to search | 

 --- 
 <br><br>

## <b>arrayContains(haystack,needle)</b>
 --- 
  
Check to see if your array contains something you want to find  


param | type | optional | description
--- | --- | --- | ---
arr | array |  | the array you wish to search | 
needle | string |  | what you want to find | 

 --- 
 <br><br>

## <b>arrayRemove(arr,item)</b>
 --- 
<b>Aliases:</b>
> arrayRemoveItem  
  
  
removes an item from an array  


param | type | optional | description
--- | --- | --- | ---
arr | array |  | the array you wish to search and remove from | 
item | string |  | index at which a given element can be found | 

 --- 
 <br><br>

## <b>arrayEmpty(arr)</b>
 --- 
<b>Aliases:</b>
> arrayClear  
  
  
clears/empties an array for garbage collection  


param | type | optional | description
--- | --- | --- | ---
arr | array |  | the array to clear / empty | 

 --- 
 <br><br>

## <b>getMaxFromArray(arr)</b>
 --- 
<b>Aliases:</b>
> arrayGetMax  
> arrayMax  
  
  
returns the maximum value in an array  


param | type | optional | description
--- | --- | --- | ---
arr | array |  | the array you wish to find the maximum value in | 

 --- 
 <br><br>

## <b>arrayGetMin</b>
 --- 
<b>Aliases:</b>
> getMinFromArray  
> arrayMin  
  
  
returns the minimum value in an array  


param | type | optional | description
--- | --- | --- | ---
arr | array |  | the array you wish to find the minimum value in | 

 --- 
 <br><br>

## <b>arrayShuffle(arr)</b>
 --- 
<b>Aliases:</b>
> shuffleArray2  
> shuffleArray3  
  
  
shuffles an array using a random method out of a choice of 2  


param | type | optional | description
--- | --- | --- | ---
arr | array |  | the array to shuffle | 

 --- 
 <br><br>

## <b>arrayShuffle2(arr)</b>
 --- 
  
shuffles an array (method 2)  


param | type | optional | description
--- | --- | --- | ---
arr | array |  | the array to shuffle | 

 --- 
 <br><br>

## <b>arrayShuffle3(a)</b>
 --- 
  
shuffles an array (method 2)  


param | type | optional | description
--- | --- | --- | ---
a | array |  | the array to shuffle | 

 --- 
 <br><br>

## <b>isAlphaNumeric(input)</b>
 --- 
  
check if an input is an alpha numerical value ([a-z],[A-Z],[0-9] only)  


param | type | optional | description
--- | --- | --- | ---
input | string||number |  | variable / value you wish to check | 

 --- 
 <br><br>

## <b>isElement(o)</b>
 --- 
  
checks if your variable is an element or not  


param | type | optional | description
--- | --- | --- | ---
o | * |  | variable you wish to check | 

 --- 
 <br><br>

## <b>isElement2(element)</b>
 --- 
  
checks to see if your vairable is an element or not  


param | type | optional | description
--- | --- | --- | ---
element | * |  | the variable you wish to check | 

 --- 
 <br><br>

## <b>isDOM(obj)</b>
 --- 
  
checks to see if your variable is a DOM object  


param | type | optional | description
--- | --- | --- | ---
obj | object |  | variable to check | 

 --- 
 <br><br>

## <b>radToDeg(input)</b>
 --- 
<b>Aliases:</b>
> rad2deg  
  
  
converts radians to degrees  


param | type | optional | description
--- | --- | --- | ---
input | number |  | the radians you wish converted to degrees | 

 --- 
 <br><br>

## <b>degToRad(input)</b>
 --- 
<b>Aliases:</b>
> deg2rad  
  
  
converts degrees to radians  


param | type | optional | description
--- | --- | --- | ---
input | number |  | the value you wish converted to radians | 

 --- 
 <br><br>

## <b>boolToString(bool)</b>
 --- 
  
converts boolean to a string of true or false  


param | type | optional | description
--- | --- | --- | ---
bool | boolean |  | the boolean you wish to convert | 

 --- 
 <br><br>

## <b>boolToYesNo(bool)</b>
 --- 
  
converts a boolean to yes or no  


param | type | optional | description
--- | --- | --- | ---
bool | boolean |  | the boolean you wish to convert | 

 --- 
 <br><br>

## <b>stringToBool(str)</b>
 --- 
  
converts a string to a boolean (y,yes,"1",no etc)  


param | type | optional | description
--- | --- | --- | ---
str | string |  | the string you wish to convert | 

 --- 
 <br><br>

## <b>getBooleanFrom(input)</b>
 --- 
  
converts an input to a boolean  


param | type | optional | description
--- | --- | --- | ---
input | * |  | the variable you wish to convert to a boolean | 

 --- 
 <br><br>

## <b>isBoolean(input)</b>
 --- 
<b>Aliases:</b>
> isBool  
  
  
checks if a variable is a boolean  


param | type | optional | description
--- | --- | --- | ---
input | * |  | variable to check | 

 --- 
 <br><br>

## <b>isNumeric(n)</b>
 --- 
<b>Aliases:</b>
> isNumber  
  
  
check if variable is numeric  


param | type | optional | description
--- | --- | --- | ---
n | * |  | variable to check | 

 --- 
 <br><br>

## <b>isArray(arr)</b>
 --- 
  
check if variable is an array  


param | type | optional | description
--- | --- | --- | ---
arr | * |  | variable to check | 

 --- 
 <br><br>

## <b>parseArrayToFloat(arr)</b>
 --- 
<b>Aliases:</b>
> arrayToFloat  
  
  
parses all values in array to float  


param | type | optional | description
--- | --- | --- | ---
arr | array |  | array to process | 

 --- 
 <br><br>

## <b>* @function:parseArrayToInt(arr)</b>
 --- 
<b>Aliases:</b>
> arrayToInt  
  
  
parses all values in array to float  


param | type | optional | description
--- | --- | --- | ---
arr | array |  | array to process | 

 --- 
 <br><br>

## <b>* @function:convertToArray(v)</b>
 --- 
<b>Aliases:</b>
> valueToArray  
  
  
takes an input and returns it as index[0] of an array  


param | type | optional | description
--- | --- | --- | ---
v | & |  | value to insert into array | 

 --- 
 <br><br>

## <b>getFunctionName(fn)</b>
 --- 
  
tries to get the function name of a suppled function  


param | type | optional | description
--- | --- | --- | ---
fn | function |  | the function wish to get the name of | 

 --- 
 <br><br>

## <b>getRandomInt(min,max)</b>
 --- 
<b>Aliases:</b>
> getRandom  
  
  
returns a random number / int betwen your specified min and max values  


param | type | optional | description
--- | --- | --- | ---
min | number |  | the minimum your random number is allowed to go | 
max | number |  | the maximum your random number is allowed to go | 

 --- 
 <br><br>

## <b>randomString(length)</b>
 --- 
<b>Aliases:</b>
> getRandomString  
  
  
get a random string of a specified length  


param | type | optional | description
--- | --- | --- | ---
length | number |  | the length of the string you wish to generate | 

 --- 
 <br><br>

## <b>getUniqueId()</b>
 --- 
<b>Aliases:</b>
> getUID  
> generateRandomId  
> generateUID  
  
  
Generates a random id  

 --- 
 <br><br>

## <b>getArrayOfRandomNumbers(arraySize,min,max)</b>
 --- 
  
generate an array of random number between your max and min values  


param | type | optional | description
--- | --- | --- | ---
arraySize | number |  | the number of random numbers to generate also the array size that will be returned | 
min | number |  | the minimum your random number is allowed to be | 
max | number |  | the maximum your random number is allowed to be | 

 --- 
 <br><br>

## <b>getArrayOfRandomStrings(arraySize,strLength)</b>
 --- 
  
generate an array of random string of a specified length  


param | type | optional | description
--- | --- | --- | ---
arraySize | number |  | the number of random strings to generate also the array size that will be returned | 
strLength | number |  | the length of the strings to be generated | 

 --- 
 <br><br>

## <b>guid()</b>
 --- 
<b>Aliases:</b>
> getGUID  
  
  
generates a guid  

 --- 
 <br><br>

## <b>redirect(url)</b>
 --- 
  
no more typing self.location.href, just use redirect(url)  


param | type | optional | description
--- | --- | --- | ---
url | string |  | the url you wish to redirect to | 

 --- 
 <br><br>

## <b>AFTC.Benchmark()</b>
 --- 
  
Quick and easy benchmarking, see examples benchmark.htm for usage  
````  
AFTC.Benchmark().start();  
// do you stuff  
AFTC.Benchmark().end();  
log( AFTC.Benchmark().getTime() );  
````  
@function start: start benchmark  
@function stop: stop benchmark  
@function getTime: return benchmark result  

 --- 
 <br><br>

## <b>hide(element,classListToRemove,classListToAdd)</b>
 --- 
  
hides a html element, can also add or remove any amount of classes on element hide at the same time  


param | type | optional | description
--- | --- | --- | ---
element | element||string |  | the element or the string id of the element you wish to hide | 
classListToRemoveOnHide | array |  | string of class to remove or array of string classes to remove on hide | 
classListToAddOnHide | array |  | string of class to remove or array of string classes to add on hide | 

 --- 
 <br><br>

## <b>show(element,classListToRemove,classListToSAdd)</b>
 --- 
  
show a html element, can also add or remove any amount of classes on element show at the same time  


param | type | optional | description
--- | --- | --- | ---
element | element||string |  | the element or the string id of the element you wish to hide | 
classListToRemoveOnShow | array |  | string of class to remove or array of string classes to remove on show | 
classListToAddOnShow | array |  | string of class to remove or array of string classes to add on show | 

 --- 
 <br><br>







<br><br><br><br>






# <b>color.js</b>
#### <b>Dependencies:</b> NONE<br><br>

# <b>AFTC.Color(color)</b>
### <b>lighten</b>(percent);
### <b>darken</b>(percent);
Lightens or darkens a color like sass and less does.
```
    var color = new AFTC.Color([10,20,30]);
    color.lighten(10);
    color.darken(10);
    log("color.getHex() = " + color.getHex());
    log("color.getRGB().r = " + color.getRGB().r);
    log("color.getRGB().g = " + color.getRGB().g);
    log("color.getRGB().b = " + color.getRGB().b);
    log("color.getRGBString() = " + color.getRGBString());
    // See example.htm for further usage
```

## <b>getHSLColor(float)</b>
Returns a HSL Colour from a float, input range is 0 to 1

## <b>getRandomRGBString()</b>
Returns a random RGB string eg "rgb(R,G,B)"

## <b>getRandomHexColor()</b>
Returns a random hex color

## <b>rgbToHex(r,g,b)</b>
Alternate version rgb2hex(r,g,b);
Converts a RGB value to a HEX value.

## <b>hexToRgb()</b>
Converts hex to rgb, returns object{}

## <b>numberToHex(num)</b>
Converts a number to hex string.

## rgb2hsv({r:0,g:0,b:0})</b>
Converts an rgb object to a hsv object.

## getRandomRGBColor()
returns an rgb string with random color value



<br><br><br><br>





# <b>animate.js</b>
#### <b>Dependencies:</b> NONE<br><br>

# <b>AFTC.Animate(elementQuery,onComplete)</b>
<b>Animate anything with ease.</b>

You have access to any style in the element.style attributes/properties via the 3 chainable functions.

.prop(style:String,targetValue:number||string,duration:number||float)

.set(style:String,targetValue:number||string)

.delay(duration in seconds)

```
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
```

## <b>scrollToElement(elementId||query||element,duration,offset)</b>

```
// no offset
scrollToElement("myElementId",0.5);

// with offset
scrollToElement("myElementId",0.5,-100);
```





<br><br><br><br>





# <b>random.js</b>

## <b>getWeightedRandom(odds,iterations)</b>
Will return a weighted random. If you ever wanted to balance your random numbers to favor a more specific output use this.






<br><br><br><br>





# <b>string.js</b>

## <b>getAnchorFromUrl(url)</b>
Will return the anchor from a url string.

## <b>escapeHTML</b>
Escapes a HTML string (eg < turns into &amp;lt; etc)

## <b>trimStringLength(input,length)</b>
Trims a string to a number (length) of characters.

## <b>getFileExtension(file)</b>
Returns the file extension from a supplied file path if available

## <b>getFileExtension2(file)</b>
Returns the file extension from a supplied file path if available (method2)

## <b>getLastPartofUrl()</b>
Returns the last part of the URL

## <b>getAnchorFromUrl(url)</b>
Return the anchor from the url.

## <b>removeFileFromPath</b>
Attempts to remove the file from a full file path, eg a/b/c/text.txt would return a/b/c/

## <b>cleanJSONString(string)</b>
Will remove special characters from a json string and return it for you to JSON.parse

## <b>yourString.startsWith(str)</b>
Return true if yourString starts with str, else false.

## <b>yourString.endsWith(str)</b>
Returns true if yourString ends with str, else false.

## <b>getStringBetween(str,start,end)</b>
Returns string between two strings.

## <b>getAllStringsBetween(str,start,end)</b>
Returns an array of strings it finds of occurances between two strings.






<br><br><br><br>





# <b>validation.js</b>

## <b>validateEmail(email)</b>
<b>Aliases:</b> isValidEmail(email)<br>
Validates an email adddress (string) via regex.






<br><br><br><br>





# <b>cookies.js</b>

## <b>setCookie(name,value)</b>
Sets a javascript cookie.

## <b>getCookie(name)</b>
Reads a javascript cookie.







<br><br><br><br>






# <b>datetime.js</b>

## <b>getUkDateFromDbDateTime(arg)</b>
Gets a UK date from a MySQL datetime (2016-04-08 21:11:59).

## <b>getUkDateTimeFromDbDateTime(arg)</b>
Gets the UK date and time from a MySQL datetime (2016-04-08 21:11:59).

## <b>getSQLDateTime()</b>
Gets a MySQL compatible datetime from the javascript Date().

## <b>getDateTime(local)</b>
Gets a formatted datetime from the javascript Date() object. local:string can be "db", "us" or "gb". It will default to en-GB if local is not supplied.






<br><br><br><br>







# <b>detection.js</b>

## <b>isChrome()</b>
Return true if your browser is Chrome, false if not.

## <b>isFireFox()</b>
Return true if your browser is FireFox, false if not.

## <b>isSafari()</b>
Returns true if your browser is Safari, false if not.

## <b>isIE()</b>
Returns true if your browser is IE, false if not.

## <b>getIEVersion()</b>
Returns the version of IE you are using.

## <b>getBrowser()</b>
Returns the name of the web browser you are using.

## <b>getOS()</b>
Attempts to returns the name of the Operating System (OS) of the laptop/desktop/device/tablet/mobile you are using.
```
var detected = getOS();
log(detected.os);
log(detected.userAgent);
```





<br><br><br><br>







# <b>dom.js</b>
## <b>centerAbsoluteElement(element || elementId)</b>
Attempts to center an absolute positioned element within your browsers current dimensions.

## <b>lockBody({elementId:string})</b>
## <b>unlockBody()</b>
These functions can be used to lock and unlock the body element scroll capabilities (overflow). If you are programming overlays / insite popups then you will notice that some mobiles and browsers don't all lock the body scroll behind correctly, this will fix this issue.






<br><br><br><br>






# <b>form.js</b>
#### <b>Dependencies:</b> NONE<br>

## <b>removeAllSelectOptions(selectBoxId)</b>

## <b>checkBoxReveal(checkboxID,elementIdForHideShow)</b>
Put in the html onclick or any function for a checkbox click to hide or show any element on the page synchronised with state of checkbox.

## <b>isChecked(id:string)</b>
Returns true or false if id of the checkbox / radio is checked.

## <b>isNumberKey(evt)</b>
Place on form text inputs to ensure numbers are only entered into it. eg onKeyUp="isNumberKey(event)"

## <b>parseJSONToSelect(jsonData, element_id, label_index, value_index)</b>
Will attempt to parse a json object into a form select element. jsonData needs to be in the format of [{name:"",code:""}]

```
var jsonString = '
[{"name":"United Kingdom","code":"GB"},
{"name":"United States","code": "US"}]
';

var jsonObj = JSON.parse(jsonString);

var ele = document.getElementById("country");
parseJSONToSelect(jsonString,ele,"name","code")
```

## <b>limitLengthInWords(element, maxWords)</b>
Will place a limit on the number of words you can enter. eg onKeyUp="limitLengthInWords(this,5)"






<br><br><br><br>






# <b>io.js</b>
#### <b>Dependencies:</b> jQuery >= 1.12<br>

## <b>AJAXLoad($url, $method, $data, $callback)</b>
Sends data to a specified url, with a specified method (post||get) with a callback on success which will return the response.

## <b>loadJSONFile($url, $callback)</b>
Loads a json file and sends it to a callback function (onSuccess).






<br><br><br><br>






# <b>graphics.js</b>
#### <b>Dependencies:</b> NONE<br>

## <b>getHSLColor(float)</b>
Returns a HSL Colour from a float, input range is 0 to 1

## <b>getRandomRGBString()</b>
Returns a random RGB string eg "rgb(R,G,B)"

## <b>getRandomHexColor()</b>
Returns a random hex color

## <b>rgbToHex(r,g,b)</b>
Converts a RGB value to a HEX value.

## <b>generateNoise(canvasId, width, height, arg_opacity)</b>
Will generate noise / static / perlin noise on a canvas element.








<br><br><br><br>






## <b>Found this useful? Please Donate...</b>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<br><br><br><br><br><br>

[![Hire](https://www.allforthecode.co.uk/images/pph_widget.jpg)](http://pph.me/Darcey)

