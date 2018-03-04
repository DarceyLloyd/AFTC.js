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
cls | bool |  | clear before appending html string | 

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

