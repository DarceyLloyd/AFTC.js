# <b>AFTC.js</b>
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<b>A collection of utilities / functions I find useful when working with BROWSER based JavaScript.</b>

<br><br>


## Whats new 1.3.14

    - added quick set html function, setHTML(elementOrElementId,string)
    - added quick set html function alias, html(elementOrElementId,string)
    - added easy css function, addClass(elementOrElementId,className)
    - added easy css function, removeClass(elementOrElementId,className)
    - reworked hide to hide(element,classListToRemoveOnShow,classListToAddOnShow) // args 2 and 3 are optional
    - reworked show to show(element,classListToRemoveOnShow,classListToAddOnShow) // args 2 and 3 are optional
    - removed array prototypes, I can't get along with my arrays being polluted with function code
    - added arrayContains(array,needle); // replacement for the removed prototype
    - added arrayRemove(array,item); // replacement for the removed prototype
    - added arrayEmpty(array); // replacement for the removed prototype
    - added arrayClear(array); // replacement for the removed prototype which is an alias of arrayEmpty
    - added hide(elementID or element, optional); (optional = mode:string display or opacity)
    - added show(elementID or element, optional); (optional = mode:string display or opacity)
    - fixed bug on AFTC.Animate


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

## <b>AFTC.Animate("#box1", onComplete).ChainFunctions()</b>
```
    AFTC.Animate("#box1",myOnCompleteFunction)
        // Chain functions
        .delay(1) // delay in seconds
        .prop("width",100,0.5) // prop(style,targetValue,duration)
        .prop("opacity",0,0.5);
        .prop("backgroundColor","#990000",2)
```
or fade and hide etc etc

```
    AFTC.Animate("elementIdToFadeOut",function(){
        hide("elementIdToFadeOut"); // hide once opacity reaches zero
    }).prop("opacity",0,1); // Tweem opacity to 0 in 1 second
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

- <b>aftc.min.js with everything plugged in is less than 30KB!</b>

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






## <b>addEvent(obj,type,fn,useCapture)</b>
Shortcut for adding events with old browser compatibility<br>

param | type | optional | description
--- | --- | --- | ---
obj | object | required |  The object you wish to attach the event listener to 
type | string | required |  The event type (e.type) mousedown, mouseup, click etc 
fn | function | required |  The function to call when the event is triggered 
useCapture | boolean | optional |  Whether the event should be executed in the capturing or in the bubbling phase 
<br>



## <b>onReady(fn)</b>
Replacement for jQuerys $(document).ready<br>

><b>alias: ready()</b><br>

param | type | optional | description
--- | --- | --- | ---
fn | function |  |  inline function or pass it a function for when your page is loaded and ready to be used 
<br>





## <b>getElementById(id)</b>
Short cut for document.getElementById, it also caches the query<br>

><b>alias: getId()</b><br>

><b>alias: byId()</b><br>

param | type | optional | description
--- | --- | --- | ---
string | id |  |  id of html element to retrieve 
<br>



## <b>querySelector(str)</b>
Short cut for document.querySelector, it also caches the query<br>

><b>alias: query()</b><br>

><b>alias: cssQuery()</b><br>

param | type | optional | description
--- | --- | --- | ---
str | string |  |  the query to be run on the dom 
<br>



## <b>getElementsByClassName(str)</b>
Short cut for document.getElementsByClassName, it also caches the query<br>

><b>alias: getClass()</b><br>

><b>alias: byClass()</b><br>

param | type | optional | description
--- | --- | --- | ---
str | string |  |  the class name to look for 
<br>



## <b>getElementsByTagName(str)</b>
Shortcut for getElementsByTagName<br>

param | type | optional | description
--- | --- | --- | ---
str | string |  |  tag name to look for 
<br>



## <b>addClass(elementOrId,className)</b>
Shortcut to add a css class to a html element<br>

param | type | optional | description
--- | --- | --- | ---
elementOrId | element or string |  |  The elemnt or id of the html element to add a css class to 
className | string |  |  the class name to add 
<br>



## <b>removeClass(elementOrId,className)</b>
Shortcut to remove a class from a html element<br>

param | type | optional | description
--- | --- | --- | ---
elementOrId | element or string |  |  The elemnt or id of the html element to add a css class to 
className | string |  |  the class name to remove 
<br>



## <b>log(arg)</b>
Shortcut for console.log with capabilities to log nice arrays, objects and to html elements via innerHTML<br>

><b>alias: trace()</b><br>

param | type | optional | description
--- | --- | --- | ---
arg | * |  |  what you want to console.log 


```
var msg = "Hello World!";
log("msg = " + msg);
```

<br>



## <b>logEnable()</b>
Enable log<br>

<br>



## <b>logDisable()</b>
Disable log<br>

<br>


## <b>configLog({options})</b>
```
// Will also log to HTML element with id debug

configLog({autoLogTo:"debug"});
//configLog({autoLogEnable:false}); // turn it off
//configLog({autoLogEnable:true}); // turn it on

var a = 1;
log("a = " + a);
```


<br>




## <b>logTo(elementId,msg)</b>
A console.log alternative that will output to a html element and the console at the same time<br>

param | type | optional | description
--- | --- | --- | ---
elementId | string |  |  elementId to output to 
msg | string |  |  what innerHTML will be set to 
<br>



## <b>logObjTo(elementId,obj,append)</b>
A console.log alternative that will output an object to a html element and the console nicely formatted at the same time<br>

param | type | optional | description
--- | --- | --- | ---
elementId | string |  |  html element id to output to 
obj | object |  |  the object to debug output 
optional | boolean | append |  append text or prepend text 
<br>



## <b>openDebugWindow(html)</b>
Open a popup window with the html you wish to display in it<br>

><b>alias: stringToWindow()</b><br>

param | type | optional | description
--- | --- | --- | ---
html | dataType |  |  the html you wish to display in the popup window 
<br>



## <b>setHTML(elementOrId,str)</b>
Quick shortcut for outputting html to an element<br>

><b>alias: html()</b><br>

param | type | optional | description
--- | --- | --- | ---
elementOrId | dataType |  |  the element or the element id you wish to set the html of 
str | dataType |  |  the html string to insert into your element 
<br>



## <b>arrayRemoveIndex(array,index)</b>
Remove a specified index from an array<br>

param | type | optional | description
--- | --- | --- | ---
arr | array |  |  the array you wish to remove an index on 
index | number |  |  the array index you wish to remove 
<br>



## <b>isStringInArray(str,array)</b>
Check to see if a string is in an array<br>

param | type | optional | description
--- | --- | --- | ---
str | string |  |  the string your looking for 
arr | array |  |  the array you wish to search 
<br>



## <b>arrayContains(arr,needle)</b>
Check to see if your array contains something you want to find<br>

param | type | optional | description
--- | --- | --- | ---
arr | array |  |  the array you wish to search 
needle | string |  |  what you want to find 
<br>



## <b>arrayRemove(arr,item)</b>
Removes an item from an array<br>

><b>alias: arrayRemoveItem()</b><br>

param | type | optional | description
--- | --- | --- | ---
arr | array |  |  the array you wish to search and remove from 
item | string |  |   index at which a given element can be found 
<br>



## <b>arrayEmpty(arr)</b>
Clears/empties an array for garbage collection<br>

><b>alias: arrayClear()</b><br>

param | type | optional | description
--- | --- | --- | ---
arr | array |  |  the array to clear / empty 
<br>



## <b>getMaxFromArray(arr)</b>
Returns the maximum value in an array<br>

><b>alias: arrayGetMax()</b><br>

><b>alias: arrayMax()</b><br>

param | type | optional | description
--- | --- | --- | ---
arr | array |  |  the array you wish to find the maximum value in 
<br>



## <b>arrayGetMin(arr)</b>
Returns the minimum value in an array<br>

><b>alias: getMinFromArray()</b><br>

><b>alias: arrayMin()</b><br>

param | type | optional | description
--- | --- | --- | ---
arr | array |  |  the array you wish to find the minimum value in 
<br>



## <b>arrayShuffle(array)</b>
Shuffles an array<br>

><b>alias: shuffleArray()</b><br>

param | type | optional | description
--- | --- | --- | ---
arr | array |  |  the array to shuffle 
<br>



## <b>arrayShuffle2(array)</b>
Shuffles an array (method 2)<br>

param | type | optional | description
--- | --- | --- | ---
arr | array |  |  the array to shuffle 
<br>



## <b>arrayShuffle3(a)</b>
Shuffles an array (method 2)<br>

param | type | optional | description
--- | --- | --- | ---
arr | array |  |  the array to shuffle 
<br>



## <b>isAlphaNumeric(input)</b>
Check if an input is an alpha numerical value ([a-z],[A-Z],[0-9] only)<br>

param | type | optional | description
--- | --- | --- | ---
input | string or number |  |  variable / value you wish to check 
<br>



## <b>isElement(o)</b>
Checks if your variable is an element or not<br>

param | type | optional | description
--- | --- | --- | ---
o | * |  |  variable you wish to check 
<br>



## <b>isElement2(element)</b>
Checks to see if your vairable is an element or not<br>

param | type | optional | description
--- | --- | --- | ---
element | * |  |  the variable you wish to check 
<br>



## <b>isDOM(obj)</b>
Checks to see if your variable is a DOM object<br>

param | type | optional | description
--- | --- | --- | ---
obj | object |  |  variable to check 
<br>



## <b>radToDeg(input)</b>
Converts radians to degrees<br>

><b>alias: rad2deg()</b><br>

param | type | optional | description
--- | --- | --- | ---
input | number |  |  the radians you wish converted to degrees 
<br>



## <b>degToRad(input)</b>
Converts degrees to radians<br>

><b>alias: deg2rad()</b><br>

param | type | optional | description
--- | --- | --- | ---
input | number |  |  the value you wish converted to radians 
<br>



## <b>boolToString(bool)</b>
Converts boolean to a string of true or false<br>

param | type | optional | description
--- | --- | --- | ---
bool | boolean |  |  the boolean you wish to convert 
<br>



## <b>boolToYesNo(arg)</b>
Converts a boolean to yes or no<br>

param | type | optional | description
--- | --- | --- | ---
arg | boolean |  |  the boolean you wish to convert 
<br>



## <b>stringToBool(str)</b>
Converts a string to a boolean (y,yes,"1",no etc)<br>

param | type | optional | description
--- | --- | --- | ---
str | string |  |  the string you wish to convert 
<br>



## <b>getBooleanFrom(arg)</b>
Converts an input to a boolean<br>

param | type | optional | description
--- | --- | --- | ---
arg | * |  |  the variable you wish to convert to a boolean 
<br>



## <b>isBoolean(arg)</b>
Checks if a variable is a boolean<br>

><b>alias: isBool()</b><br>

param | type | optional | description
--- | --- | --- | ---
arg | * |  |  variable to check 
<br>



## <b>isNumeric(n)</b>
Check if variable is numeric<br>

><b>alias: isNumber()</b><br>

param | type | optional | description
--- | --- | --- | ---
n | * |  |  variable to check 
<br>



## <b>isArray(arg)</b>
Check if variable is an array<br>

param | type | optional | description
--- | --- | --- | ---
arg | * |  |  variable to check 
<br>



## <b>getFunctionName(fn)</b>
Tries to get the function name of a suppled function<br>

param | type | optional | description
--- | --- | --- | ---
fn | function |  |  the function wish to get the name of 
<br>



## <b>getRandomInt(min,max)</b>
Returns a random number / int betwen your specified min and max values<br>

><b>alias: getRandom()</b><br>

param | type | optional | description
--- | --- | --- | ---
min | number |  |  the minimum your random number is allowed to go 
max | number |  |  the maximum your random number is allowed to go 
<br>



## <b>randomString(length)</b>
Get a random string of a specified length<br>

><b>alias: getRandomString()</b><br>

param | type | optional | description
--- | --- | --- | ---
length | number |  |  the length of the string you wish to generate 
<br>



## <b>getArrayOfRandomNumbers(arraySize,min,max)</b>
Generate an array of random number between your max and min values<br>

param | type | optional | description
--- | --- | --- | ---
arraySize | number |  |  the number of random numbers to generate also the array size that will be returned 
min | number |  |  the minimum your random number is allowed to be 
max | number |  |  the maximum your random number is allowed to be 
<br>



## <b>getArrayOfRandomStrings(arraySize,strLength)</b>
Generate an array of random string of a specified length<br>

param | type | optional | description
--- | --- | --- | ---
arraySize | number |  |  the number of random strings to generate also the array size that will be returned 
strLength | number |  |  the length of the strings to be generated 
<br>



## <b>guid()</b>
Generates a guid<br>

><b>alias: getGUID()</b><br>

<br>



## <b>redirect(url)</b>
No more typing self.location.href, just use redirect(url)<br>

param | type | optional | description
--- | --- | --- | ---
url | string |  |  the url you wish to redirect to 
<br>



## <b>AFTC.Benchmark()</b>
Quick and easy benchmarking, see examples benchmark.htm for usage<br>

<br>



## <b>hide(element,classListToRemoveOnHide,classListToAddOnHide)</b>
Hides a html element, can also add or remove any amount of classes on element hide at the same time<br>

param | type | optional | description
--- | --- | --- | ---
element | element or string |  |  the element or the string id of the element you wish to hide 
classListToRemoveOnHide | array |  |  string of class to remove or array of string classes to remove on hide 
classListToAddOnHide | array |  |  string of class to remove or array of string classes to add on hide 
<br>



## <b>show(element,classListToRemoveOnShow,classListToAddOnShow)</b>
Show a html element, can also add or remove any amount of classes on element show at the same time<br>

param | type | optional | description
--- | --- | --- | ---
element | element or string |  |  the element or the string id of the element you wish to hide 
classListToRemoveOnShow | array |  |  string of class to remove or array of string classes to remove on show 
classListToAddOnShow | array |  |  string of class to remove or array of string classes to add on show 
<br>




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

