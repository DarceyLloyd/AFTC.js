# <b>AFTC.js</b>
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<b>A collection of utilities / functions I find useful when working with JavaScript.</b>


### <b>Installation</b>
```
npm i aftc.js
gulp build
```

Then include the version you wish to use, your options are:

 - aftc.core.js - this is the aftc.js core uncompressed (none of the extras like color, animation, canvas, hide show, fade etc)
 - aftc.core.min.js - this is the aftc.js core compressed
 - aftc.js - this is the full aftc.js package uncompressed with all the extras
 - aftc.min.js - this is the full aftc.js package compressed, with all the extras

##### NOTE: You can always customise your build of the AFTC.JS, see the Build Guide below.

 ---

<br><br>



### <b>Build Guide</b>

I pref' gulp at the moment.

```
gulp build
```

 ---

#### <b>Step by step</b>

- Open aftc.js directory in VSCode
- Open "gulpfile.js" and edit / comment out or uncomment any of the imports that you want or don't want

```
// The extras, the modules, the ooo or to some, the bloat
// Nice to have, but not essential
var aftc_modules = [
    "./dist/aftc.core.js", // The AFTC Core (required)
    "./src/AFTC/AFTC.Audio.js", // Enables new AFTC.Audio() and playSound()
    "./src/AFTC/AFTC.Animate.js", // Enables new AFTC.Animate()
    "./src/AFTC/AFTC.Canvas.js", // Enables new AFTC.Canvas();
    // "./src/AFTC/AFTC.CheckboxHideShow.js", // Up for review - to be updated or removed
    "./src/AFTC/AFTC.Color.js", // Enables new AFTC.Color();
    "./src/AFTC/AFTC.Visibility.js", // Enables hide(), show(), fade(), fadeIn() & fadeOut()
    // "./src/AFTC/AFTC.ResizeManager.js", // Up for review - to be updated or removed
    "./src/AFTC/AFTC.XHR.js", // Everyone needs some IO, I know I do...
];

```

- Open terminal in VSCode by pressing CTRL + '
- Type into terminal

```
    gulp build
```


 ---
 
<br><br>

### <b>Quick links:</b>
 <a href='#addclasselementoridclassname'>addClass(elementOrId,classname)</a><br>
 <a href='#addeventobjtypefnusecapture'>addEvent(obj,type,fn,useCapture)</a><br>
 <a href='#aftcanimateelementidoncomplete'>AFTC.Animate(elementId, onComplete)</a><br>
 <a href='#aftccanvasidcanvas'>AFTC.Canvas({id||canvas})</a><br>
 <a href='#aftclog'>AFTC.Log</a><br>
 <a href='#aftcxhrargs'>AFTC.XHR(args)</a><br>
 <a href='#argstoobjectfargsobjstrict'>argsToObject(fArgs, obj, strict)</a><br>
 <a href='#arraycontainsneedlehaystack'>arrayContains(needle,haystack)</a><br>
 <a href='#arrayemptyarr'>arrayEmpty(arr)</a><br>
 <a href='#arraygetmin'>arrayGetMin</a><br>
 <a href='#arrayremoveindexarrindex'>arrayRemoveIndex(arr,index)</a><br>
 <a href='#arrayshufflearr'>arrayShuffle(arr)</a><br>
 <a href='#arrayshuffle2arr'>arrayShuffle2(arr)</a><br>
 <a href='#booltostringbool'>boolToString(bool)</a><br>
 <a href='#booltoyesnobool'>boolToYesNo(bool)</a><br>
 <a href='#centerabsoluteelementeleoreleid'>centerAbsoluteElement(eleOrEleId)</a><br>
 <a href='#cleanjsonstrings'>cleanJSONString(s)</a><br>
 <a href='#converttoarrayv'>convertToArray(v)</a><br>
 <a href='#cycleposmax'>cycle(pos, max)</a><br>
 <a href='#degtoradinput'>degToRad(input)</a><br>
 <a href='#escapehtmlinput'>escapeHTML(input)</a><br>
 <a href='#fadeinelementidduration'>fadeIn(elementId, duration)</a><br>
 <a href='#fadeoutelementidduration'>fadeOut(elementId, duration)</a><br>
 <a href='#getallstringsbetweenstrstartend'>getAllStringsBetween(str,start,end)</a><br>
 <a href='#getanchorurl'>getAnchor(url)</a><br>
 <a href='#getarrayofrandomnumbersarraysizeminmax'>getArrayOfRandomNumbers(arraySize,min,max)</a><br>
 <a href='#getarrayofrandomstringsarraysizestrlength'>getArrayOfRandomStrings(arraySize,strLength)</a><br>
 <a href='#getbooleanfrominput'>getBooleanFrom(input)</a><br>
 <a href='#getbrowser'>getBrowser()</a><br>
 <a href='#getcookiename'>getCookie(name)</a><br>
 <a href='#getdatetimelocal'>getDateTime(local)</a><br>
 <a href='#getdaysbetweenstartdatetimeenddatetime'>getDaysBetween(startDateTime, endDateTime)</a><br>
 <a href='#getelementbyclassnamexxxx'>getElementByClassName(xxxx)</a><br>
 <a href='#getelementbyidid'>getElementById(id)</a><br>
 <a href='#getelementbynamename'>getElementByName(name)</a><br>
 <a href='#getelementbytagnametagname'>getElementByTagName(tagName)</a><br>
 <a href='#getelementoffsettopelementid'>getElementOffsetTop(elementId)</a><br>
 <a href='#getelementsbyclassnameclassname'>getElementsByClassName(className)</a><br>
 <a href='#getelementsbynamename'>getElementsByName(name)</a><br>
 <a href='#getelementsbytagnametagname'>getElementsByTagName(tagName)</a><br>
 <a href='#getfileextensioninput'>getFileExtension(input)</a><br>
 <a href='#getfileextension2input'>getFileExtension2(input)</a><br>
 <a href='#getfunctionnamefn'>getFunctionName(fn)</a><br>
 <a href='#getieversion'>getIEVersion()</a><br>
 <a href='#getlastpartofurlurl'>getLastPartOfUrl(url)</a><br>
 <a href='#getmaxfromarrayarr'>getMaxFromArray(arr)</a><br>
 <a href='#getostestuseragent'>getOS(testUserAgent)</a><br>
 <a href='#getrandomcolor'>getRandomColor()</a><br>
 <a href='#getrandomfloatminmax'>getRandomFloat(min,max)</a><br>
 <a href='#getrandomintminmax'>getRandomInt(min,max)</a><br>
 <a href='#getrandomthatsnotminmaxnot'>getRandomThatsNot(min,max,not)</a><br>
 <a href='#getsqldatetime'>getSQLDateTime()</a><br>
 <a href='#getstringbetweeninputstartend'>getStringBetween(input,start,end)</a><br>
 <a href='#getuidlength'>getUID(length)</a><br>
 <a href='#getukdatefromdatedate'>getUKDateFromDate(date)</a><br>
 <a href='#getukdatefromdbdatetimeinput'>getUkDateFromDbDateTime(input)</a><br>
 <a href='#getukdatetimefromdbdatetimeinput'>getUkDateTimeFromDbDateTime(input)</a><br>
 <a href='#getusdatefromdatedate'>getUSDateFromDate(date)</a><br>
 <a href='#getweightedrandomoddsiterations'>getWeightedRandom(odds, iterations)</a><br>
 <a href='#guid'>guid()</a><br>
 <a href='#hasclasselementoridcls'>hasClass(elementOrId, cls)</a><br>
 <a href='#hextorgbhex'>hexToRgb(hex)</a><br>
 <a href='#isalphanumericinput'>isAlphaNumeric(input)</a><br>
 <a href='#isarrayinput'>isArray(input)</a><br>
 <a href='#isbooleaninput'>isBoolean(input)</a><br>
 <a href='#ischeckedelementid'>isChecked(elementId)</a><br>
 <a href='#ischrome'>isChrome()</a><br>
 <a href='#isdomobj'>isDOM(obj)</a><br>
 <a href='#isedge'>isEdge()</a><br>
 <a href='#iselemento'>isElement(o)</a><br>
 <a href='#iselement2element'>isElement2(element)</a><br>
 <a href='#isevenn'>isEven(n)</a><br>
 <a href='#isfirefox'>isFireFox()</a><br>
 <a href='#isie'>isIE()</a><br>
 <a href='#isinstringfindsource'>isInString(find,source)</a><br>
 <a href='#ismobile'>isMobile()</a><br>
 <a href='#isnumberkeyevent'>isNumberKey(event)</a><br>
 <a href='#isnumericn'>isNumeric(n)</a><br>
 <a href='#isoddn'>isOdd(n)</a><br>
 <a href='#isopera'>isOpera()</a><br>
 <a href='#issafari'>isSafari()</a><br>
 <a href='#isstringinarrayneedlehaystack'>isStringInArray(needle,haystack)</a><br>
 <a href='#lefttrimstrby'>leftTrim(str, by)</a><br>
 <a href='#limitlengthinwordsstrmaxwords'>limitLengthInWords(str, maxWords)</a><br>
 <a href='#logdisable'>logDisable()</a><br>
 <a href='#logenable'>logEnable()</a><br>
 <a href='#logtoelement'>logTo(element)</a><br>
 <a href='#onreadyfn'>onReady(fn)</a><br>
 <a href='#opendebugwindowhtml'>openDebugWindow(html)</a><br>
 <a href='#parsearraytofloatarr'>parseArrayToFloat(arr)</a><br>
 <a href='#parsearraytointarr'>parseArrayToInt(arr)</a><br>
 <a href='#parsejsontoselectjselectelementidorelementlabelvalue'>parseJSONToSelect(j, selectElementIdOrElement, label, value)</a><br>
 <a href='#queryselectorquery'>querySelector(query)</a><br>
 <a href='#radtodeginput'>radToDeg(input)</a><br>
 <a href='#randomstringlength'>randomString(length)</a><br>
 <a href='#redirecturl'>redirect(url)</a><br>
 <a href='#removeallselectoptionselementorid'>removeAllSelectOptions(elementOrId)</a><br>
 <a href='#removefilefrompathpath'>removeFileFromPath(path)</a><br>
 <a href='#rgb2hexrgb'>rgb2Hex(r,g,b)</a><br>
 <a href='#rgbtohexrgb'>rgbToHex(r,g,b)</a><br>
 <a href='#scrolltoelementelementidargdurationoffset'>scrollToElement(elementId, arg_duration, offset)</a><br>
 <a href='#setcookienamevalue'>setCookie(name, value)</a><br>
 <a href='#sethtmlelementoridhtml'>setHTML(elementOrId,html);</a><br>
 <a href='#setstringlengthinputlen'>setStringLength(input, len)</a><br>
 <a href='#stringprototypeendswithstr'>String.prototype.endsWith(str)</a><br>
 <a href='#stringprototypestartswithstr'>String.prototype.startsWith(str)</a><br>
 <a href='#stringtoboolstr'>stringToBool(str)</a><br>
 <a href='#toarrayv'>toArray(v)</a><br>
 <a href='#tohexnum'>toHex(num)</a><br>
 <a href='#trimstringbyinputtrimby'>trimStringBy(input, trimBy)</a><br>
 <a href='#validateemailemail'>validateEmail(email)</a><br>

### <b></b>
shortcut to remove a class from a html element<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>elementORstring</td>
		<td>elementOrId</td>
		<td>The elemnt or id of the html element to add a css class to</td>
	</tr>
	<tr>
		<td>string</td>
		<td>className</td>
		<td>the class name to remove</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - log
 - trace

</details>



<hr><br><br><br>
    
### <b></b>


<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>canvasId</td>
		<td>Canvas element id to work with</td>
	</tr>
	<tr>
		<td>number</td>
		<td>opacity</td>
		<td>opacity of noise</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - log
 - trace

</details>



<hr><br><br><br>
    
### <b>AFTC.Animate(elementId, onComplete)</b>
Quick and easy css animation for nearly every css element style<br>
````
var anim1 = new AFTC.Animate("box1", onCompleteFunction);
anim1.wait(2); // wait in 2 seconds
anim1.set("backgroundColor","RGBA(255,255,255,0.5)"); // sets background color to white 50% opacity
anim1.anim("fontColor","RGBA(255,0,0,1)",1.5); // animates the font color to red over 1.5 seconds
anim1.set(["html","paddingLeft",left"],["hello","10px","100px"],[1,2,3]); // sets innerHTML, padding-left and left position over 1, 2 and 3 seconds
````

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>canvasId</td>
		<td>Canvas element id to work with</td>
	</tr>
	<tr>
		<td>number</td>
		<td>opacity</td>
		<td>opacity of noise</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - log
 - trace

</details>

#### Usage examples:
 - <a href='see usage example in test/animation.htm' target='_blank'>see usage example in test/animation.htm</a>


<hr><br><br><br>
    
### <b>AFTC.Canvas({id||canvas})</b>
<br>
````
````

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>canvasId</td>
		<td>Canvas element id to work with</td>
	</tr>
	<tr>
		<td>number</td>
		<td>opacity</td>
		<td>opacity of noise</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - log
 - trace

</details>



<hr><br><br><br>
    
### <b>AFTC.Color({params})</b>
Color allows you to create, convert, lighten or darken colours and more.<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>object</td>
		<td>params</td>
		<td>parameters object</td>
	</tr>
</table>

<b>Returns:</b> [AFTC.Color]
#### Alias's:
 - log
 - trace

</details>

#### Usage examples:
 - <a href='https://codepen.io/AllForTheCode/pen/mLZRge' target='_blank'>https://codepen.io/AllForTheCode/pen/mLZRge</a>


<hr><br><br><br>
    
### <b>AFTC.Log</b>
Shortcut for console.log with some formatting capabilities<br>
````
log("Hello World");
log("a = " + a);
log("myVar1 = " + myVar1 + "  myVar2 = " + myVar2);
log(MyObject);
log(MyClass);
````

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>*</td>
		<td>input</td>
		<td>what you want to console.log</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - log
 - trace

</details>

#### Usage examples:
 - <a href='https://codepen.io/AllForTheCode/pen/pVOOZV' target='_blank'>https://codepen.io/AllForTheCode/pen/pVOOZV</a>
 - <a href='https://codepen.io/AllForTheCode/pen/NMLLJX' target='_blank'>https://codepen.io/AllForTheCode/pen/NMLLJX</a>


<hr><br><br><br>
    
### <b>AFTC.XHR(args)</b>
Quick and easy xhr/ajax<br>
````
````

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>url</td>
		<td>url or file you wish to load</td>
	</tr>
	<tr>
		<td>*</td>
		<td>data</td>
		<td>array, object, formdata, string or json data you wish to send to the url</td>
	</tr>
	<tr>
		<td>string</td>
		<td>dataType</td>
		<td>data type of data object array, object, formdata, form and json</td>
	</tr>
	<tr>
		<td>function</td>
		<td>onComplete</td>
		<td>on a successfull xhr request this is the function that will be called</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - argsTo

</details>

#### Usage examples:
 - <a href='see usage example in tests/xhr/xhr.htm' target='_blank'>see usage example in tests/xhr/xhr.htm</a>


<hr><br><br><br>
    
### <b>String.prototype.endsWith(str)</b>
ES6 supports endsWith(), this is for pre ES6 support<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>str</td>
		<td>string to check</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - argsTo

</details>



<hr><br><br><br>
    
### <b>String.prototype.startsWith(str)</b>
ES6 supports the startsWith(), this is for pre ES6 support<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>str</td>
		<td>string to check</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - argsTo

</details>



<hr><br><br><br>
    
### <b>addClass(elementOrId,classname)</b>
shortcut to add a css class to a html element<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>elementORstring</td>
		<td>elementOrId</td>
		<td>The elemnt or id of the html element to add a css class to</td>
	</tr>
	<tr>
		<td>string</td>
		<td>className</td>
		<td>the class name to add</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - argsTo

</details>



<hr><br><br><br>
    
### <b>addEvent(obj,type,fn,useCapture)</b>
Shortcut for adding events with old browser compatibility<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>object</td>
		<td>obj</td>
		<td>The object you wish to attach the event listener to</td>
	</tr>
	<tr>
		<td>string</td>
		<td>type</td>
		<td>The event type (e.type) mousedown, mouseup, click etc</td>
	</tr>
	<tr>
		<td>function</td>
		<td>fn</td>
		<td>The function to call when the event is triggered</td>
	</tr>
	<tr>
		<td>boolean</td>
		<td>optional</td>
		<td>Whether the event should be executed in the capturing or in the bubbling phase</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - argsTo

</details>



<hr><br><br><br>
    
### <b>argsToObject(fArgs, obj, strict)</b>
Quick and easy args to object<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>args</td>
		<td>object</td>
		<td>arguments (from the function structure, typically code will always be 'arguments'</td>
	</tr>
	<tr>
		<td>obj</td>
		<td>object</td>
		<td>object to parse into</td>
	</tr>
	<tr>
		<td>strict</td>
		<td>boolean</td>
		<td>console.warn any args that have been supplied that don't exist in args</td>
	</tr>
</table>

<b>Returns:</b> null
#### Alias's:
 - argsTo

</details>

#### Usage examples:
 - <a href='https://codepen.io/AllForTheCode/pen/PaqbKN' target='_blank'>https://codepen.io/AllForTheCode/pen/PaqbKN</a>


<hr><br><br><br>
    
### <b>arrayContains(needle,haystack)</b>
Check to see if your array contains something you want to find<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>array</td>
		<td>arr</td>
		<td>the array you wish to search</td>
	</tr>
	<tr>
		<td>string</td>
		<td>needle</td>
		<td>what you want to find</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - arrayClear

</details>



<hr><br><br><br>
    
### <b>arrayEmpty(arr)</b>
clears/empties an array for garbage collection<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>array</td>
		<td>arr</td>
		<td>the array to clear / empty</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - arrayClear

</details>



<hr><br><br><br>
    
### <b>arrayGetMin</b>
returns the minimum value in an array<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>array</td>
		<td>arr</td>
		<td>the array you wish to find the minimum value in</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getMinFromArray
 - arrayMin

</details>



<hr><br><br><br>
    
### <b>arrayRemoveIndex(arr,index)</b>
remove a specified index from an array<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>array</td>
		<td>arr</td>
		<td>the array you wish to remove an index on</td>
	</tr>
	<tr>
		<td>number</td>
		<td>index</td>
		<td>the array index you wish to remove</td>
	</tr>
</table>

<b>Returns:</b> array
#### Alias's:
 - shuffle
 - arrayShuffle

</details>



<hr><br><br><br>
    
### <b>arrayShuffle(arr)</b>
shuffles an array (method 1)<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>array</td>
		<td>arr</td>
		<td>the array to shuffle</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - shuffle
 - arrayShuffle

</details>



<hr><br><br><br>
    
### <b>arrayShuffle2(arr)</b>
shuffles an array (method 2)<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>array</td>
		<td>arr</td>
		<td>the array to shuffle</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - shuffle2
 - arrayShuffle2

</details>



<hr><br><br><br>
    
### <b>boolToString(bool)</b>
converts boolean to a string of true or false<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>boolean</td>
		<td>bool</td>
		<td>the boolean you wish to convert</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - valueToArray

</details>



<hr><br><br><br>
    
### <b>boolToYesNo(bool)</b>
converts a boolean to yes or no<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>boolean</td>
		<td>bool</td>
		<td>the boolean you wish to convert</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - valueToArray

</details>



<hr><br><br><br>
    
### <b>centerAbsoluteElement(eleOrEleId)</b>
Center element that is absolute positioned<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>element</td>
		<td>||</td>
		<td>element or id of element to center</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - valueToArray

</details>



<hr><br><br><br>
    
### <b>cleanJSONString(s)</b>
Attempts to clean a json string<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>s</td>
		<td>input string</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - valueToArray

</details>



<hr><br><br><br>
    
### <b>convertToArray(v)</b>
takes an input and returns it as index[0] of an array<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>&</td>
		<td>v</td>
		<td>value to insert into array</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - valueToArray

</details>



<hr><br><br><br>
    
### <b>cycle(pos, max)</b>
cycles from 0 to max based on pos, will cycle back to 0 if over max<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>number</td>
		<td>pos</td>
		<td>position of max</td>
	</tr>
	<tr>
		<td>number</td>
		<td>max</td>
		<td>max number to cycle to</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - deg2rad

</details>



<hr><br><br><br>
    
### <b>degToRad(input)</b>
converts degrees to radians<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>number</td>
		<td>input</td>
		<td>the value you wish converted to radians</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - deg2rad

</details>



<hr><br><br><br>
    
### <b>escapeHTML(input)</b>
Attempts to escape a html string<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>xxxx</td>
		<td>xxxxxxxxxxxxxxxxxxxx</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getNoOfDaysBetween
 - getDaysBetweenDates

</details>



<hr><br><br><br>
    
### <b>fadeIn(elementId, duration)</b>
fades in an element over a specified duration<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>elementId</td>
		<td>the id of the html element you wish to fade</td>
	</tr>
	<tr>
		<td>number</td>
		<td>duration</td>
		<td>how long you want the fade to run over in seconds</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getNoOfDaysBetween
 - getDaysBetweenDates

</details>



<hr><br><br><br>
    
### <b>fadeOut(elementId, duration)</b>
fades out an element over a specified duration<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>elementId</td>
		<td>the id of the html element you wish to fade</td>
	</tr>
	<tr>
		<td>number</td>
		<td>duration</td>
		<td>how long you want the fade to run over in seconds</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getNoOfDaysBetween
 - getDaysBetweenDates

</details>



<hr><br><br><br>
    
### <b>getAllStringsBetween(str,start,end)</b>
Gets all strings between two other strings (multi match)<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>str</td>
		<td>input string to check</td>
	</tr>
	<tr>
		<td>string</td>
		<td>start</td>
		<td>start string marker</td>
	</tr>
	<tr>
		<td>string</td>
		<td>end</td>
		<td>end string marker</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getNoOfDaysBetween
 - getDaysBetweenDates

</details>



<hr><br><br><br>
    
### <b>getAnchor(url)</b>
Get anchor from url<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>url</td>
		<td>The url to get the anchor from</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getNoOfDaysBetween
 - getDaysBetweenDates

</details>



<hr><br><br><br>
    
### <b>getArrayOfRandomNumbers(arraySize,min,max)</b>
generate an array of random number between your max and min values<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>number</td>
		<td>arraySize</td>
		<td>the number of random numbers to generate also the array size that will be returned</td>
	</tr>
	<tr>
		<td>number</td>
		<td>min</td>
		<td>the minimum your random number is allowed to be</td>
	</tr>
	<tr>
		<td>number</td>
		<td>max</td>
		<td>the maximum your random number is allowed to be</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getNoOfDaysBetween
 - getDaysBetweenDates

</details>



<hr><br><br><br>
    
### <b>getArrayOfRandomStrings(arraySize,strLength)</b>
generate an array of random string of a specified length<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>number</td>
		<td>arraySize</td>
		<td>the number of random strings to generate also the array size that will be returned</td>
	</tr>
	<tr>
		<td>number</td>
		<td>strLength</td>
		<td>the length of the strings to be generated</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getNoOfDaysBetween
 - getDaysBetweenDates

</details>



<hr><br><br><br>
    
### <b>getBooleanFrom(input)</b>
converts an input to a boolean<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>*</td>
		<td>input</td>
		<td>the variable you wish to convert to a boolean</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getNoOfDaysBetween
 - getDaysBetweenDates

</details>



<hr><br><br><br>
    
### <b>getBrowser()</b>
Detects browser<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>name</td>
		<td>name of the cookie</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getNoOfDaysBetween
 - getDaysBetweenDates

</details>



<hr><br><br><br>
    
### <b>getCookie(name)</b>
Gets the value of a cookie by name<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>name</td>
		<td>name of the cookie</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getNoOfDaysBetween
 - getDaysBetweenDates

</details>



<hr><br><br><br>
    
### <b>getDateTime(local)</b>
gets the date time at a specified local<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>optional</td>
		<td>options are us or do not supply for en-gb</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getNoOfDaysBetween
 - getDaysBetweenDates

</details>



<hr><br><br><br>
    
### <b>getDaysBetween(startDateTime, endDateTime)</b>
Gets the number of whole days between a start and end date<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>DateTime</td>
		<td>startDateTime</td>
		<td>start date</td>
	</tr>
	<tr>
		<td>DateTime</td>
		<td>endDateTime</td>
		<td>end date</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getNoOfDaysBetween
 - getDaysBetweenDates

</details>



<hr><br><br><br>
    
### <b>getElementByClassName(xxxx)</b>
Gets the first html element from the DOM that has a specific class name. NOTE<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>className</td>
		<td>string</td>
		<td>The class name the DOM element uses you wish to find</td>
	</tr>
</table>

<b>Returns:</b> html elements
#### Alias's:
 - getId
 - byId

</details>

#### Usage examples:
 - <a href='https://codepen.io/AllForTheCode/pen/odPQxE' target='_blank'>https://codepen.io/AllForTheCode/pen/odPQxE</a>


<hr><br><br><br>
    
### <b>getElementById(id)</b>
Gets an element from the DOM by ID. NOTE<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>id</td>
		<td>string</td>
		<td>The ID of the DOM element you wish to find</td>
	</tr>
</table>

<b>Returns:</b> html element
#### Alias's:
 - getId
 - byId

</details>

#### Usage examples:
 - <a href='https://codepen.io/AllForTheCode/pen/PedyNO' target='_blank'>https://codepen.io/AllForTheCode/pen/PedyNO</a>


<hr><br><br><br>
    
### <b>getElementByName(name)</b>
Gets the first element from the DOM that has a specific name. NOTE<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>name</td>
		<td>string</td>
		<td>The name of the DOM element you wish to find</td>
	</tr>
</table>

<b>Returns:</b> html elements
#### Alias's:
 - arrayGetMax
 - arrayMax

</details>

#### Usage examples:
 - <a href='https://codepen.io/AllForTheCode/pen/gzdBdz' target='_blank'>https://codepen.io/AllForTheCode/pen/gzdBdz</a>


<hr><br><br><br>
    
### <b>getElementByTagName(tagName)</b>
Gets the first html element from the DOM that has a specific tag name. NOTE<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>tagName</td>
		<td>string</td>
		<td>the tag name you wish to find</td>
	</tr>
</table>

<b>Returns:</b> html element
#### Alias's:
 - arrayGetMax
 - arrayMax

</details>



<hr><br><br><br>
    
### <b>getElementOffsetTop(elementId)</b>
Gets an elements top offset<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>elementId</td>
		<td>the element ID you wish to get the top offset of</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - arrayGetMax
 - arrayMax

</details>



<hr><br><br><br>
    
### <b>getElementsByClassName(className)</b>
Gets an array of html elements from the DOM that have a specific class name. NOTE<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>className</td>
		<td>string</td>
		<td>The class the DOM element(s) use you wish to find</td>
	</tr>
</table>

<b>Returns:</b> array of html elements
#### Alias's:
 - arrayGetMax
 - arrayMax

</details>

#### Usage examples:
 - <a href='https://codepen.io/AllForTheCode/pen/odPQxE' target='_blank'>https://codepen.io/AllForTheCode/pen/odPQxE</a>


<hr><br><br><br>
    
### <b>getElementsByName(name)</b>
Gets an array of element from the DOM that have a specific name. NOTE<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>name</td>
		<td>string</td>
		<td>The name of the DOM element you wish to find</td>
	</tr>
</table>

<b>Returns:</b> array of html elements
#### Alias's:
 - arrayGetMax
 - arrayMax

</details>

#### Usage examples:
 - <a href='https://codepen.io/AllForTheCode/pen/gzdBdz' target='_blank'>https://codepen.io/AllForTheCode/pen/gzdBdz</a>


<hr><br><br><br>
    
### <b>getElementsByTagName(tagName)</b>
Gets an array of html elements from the DOM that has a specific tag name. NOTE<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>tagName</td>
		<td>string</td>
		<td>the tag name you wish to find</td>
	</tr>
</table>

<b>Returns:</b> array of html elements
#### Alias's:
 - arrayGetMax
 - arrayMax

</details>



<hr><br><br><br>
    
### <b>getFileExtension(input)</b>
Attempts to get the file extension from a file path string<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>str</td>
		<td>the file path string</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - arrayGetMax
 - arrayMax

</details>



<hr><br><br><br>
    
### <b>getFileExtension2(input)</b>
Attempts to get the file extension from a file path string<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>str</td>
		<td>the file path string</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - arrayGetMax
 - arrayMax

</details>



<hr><br><br><br>
    
### <b>getFunctionName(fn)</b>
tries to get the function name of a suppled function<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>function</td>
		<td>fn</td>
		<td>the function wish to get the name of</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - arrayGetMax
 - arrayMax

</details>



<hr><br><br><br>
    
### <b>getIEVersion()</b>
Gets version of IE<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>url</td>
		<td>url to process</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - arrayGetMax
 - arrayMax

</details>



<hr><br><br><br>
    
### <b>getLastPartOfUrl(url)</b>
Gets the last part of a URL<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>url</td>
		<td>url to process</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - arrayGetMax
 - arrayMax

</details>



<hr><br><br><br>
    
### <b>getMaxFromArray(arr)</b>
returns the maximum value in an array<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>array</td>
		<td>arr</td>
		<td>the array you wish to find the maximum value in</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - arrayGetMax
 - arrayMax

</details>



<hr><br><br><br>
    
### <b>getOS(testUserAgent)</b>
Attempts to get the os from the user agent or the test user agent<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>testUserAgent</td>
		<td>test user agent string</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getRandom

</details>



<hr><br><br><br>
    
### <b>getRandomColor()</b>
returns a random RGB object o.r, o.g, o.g<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>number</td>
		<td>min</td>
		<td>min value</td>
	</tr>
	<tr>
		<td>number</td>
		<td>max</td>
		<td>max value</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getRandom

</details>



<hr><br><br><br>
    
### <b>getRandomFloat(min,max)</b>
returns a random floating point number betwen your specified min and max values<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>number</td>
		<td>min</td>
		<td>min value</td>
	</tr>
	<tr>
		<td>number</td>
		<td>max</td>
		<td>max value</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getRandom

</details>



<hr><br><br><br>
    
### <b>getRandomInt(min,max)</b>
returns a random number / int betwen your specified min and max values<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>number</td>
		<td>min</td>
		<td>the minimum your random number is allowed to go</td>
	</tr>
	<tr>
		<td>number</td>
		<td>max</td>
		<td>the maximum your random number is allowed to go</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getRandom

</details>



<hr><br><br><br>
    
### <b>getRandomThatsNot(min,max,not)</b>
returns a random int betwen your specified min and max values but never the not value<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>number</td>
		<td>min</td>
		<td>the minimum your random number is allowed to go</td>
	</tr>
	<tr>
		<td>number</td>
		<td>max</td>
		<td>the maximum your random number is allowed to go</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getRandom

</details>



<hr><br><br><br>
    
### <b>getSQLDateTime()</b>
gets the date time now for sql insert<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>input</td>
		<td>input string to check</td>
	</tr>
	<tr>
		<td>string</td>
		<td>start</td>
		<td>start string marker</td>
	</tr>
	<tr>
		<td>string</td>
		<td>end</td>
		<td>end string marker</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getUID
 - generateUID

</details>



<hr><br><br><br>
    
### <b>getStringBetween(input,start,end)</b>
Gets a string between two other strings<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>input</td>
		<td>input string to check</td>
	</tr>
	<tr>
		<td>string</td>
		<td>start</td>
		<td>start string marker</td>
	</tr>
	<tr>
		<td>string</td>
		<td>end</td>
		<td>end string marker</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getUID
 - generateUID

</details>



<hr><br><br><br>
    
### <b>getUID(length)</b>
Generates a random id<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>number</td>
		<td>length</td>
		<td>length of the unique id to generate</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getUID
 - generateUID

</details>



<hr><br><br><br>
    
### <b>getUKDateFromDate(date)</b>
Formats a date in the UK format<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Date</td>
		<td>date</td>
		<td></td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getGUID

</details>



<hr><br><br><br>
    
### <b>getUSDateFromDate(date)</b>
Formats a date in the US format<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Date</td>
		<td>date</td>
		<td></td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getGUID

</details>



<hr><br><br><br>
    
### <b>getUkDateFromDbDateTime(input)</b>
get a uk date from a mysql db date value<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>MySQLDateTimeString</td>
		<td>input</td>
		<td>MySQL DB DateTime</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getGUID

</details>



<hr><br><br><br>
    
### <b>getUkDateTimeFromDbDateTime(input)</b>
get a uk date from a mysql db date time value<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>MySQLDateTimeString</td>
		<td>input</td>
		<td>MySQL DB DateTime</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getGUID

</details>



<hr><br><br><br>
    
### <b>getWeightedRandom(odds, iterations)</b>
Get a weighted random based on odds and iterations<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>odds</td>
		<td>xxxxxxxxxxxxxxxxxxxx</td>
	</tr>
	<tr>
		<td>string</td>
		<td>iterations</td>
		<td>xxxxxxxxxxxxxxxxxxxx</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getGUID

</details>



<hr><br><br><br>
    
### <b>guid()</b>
generates a guid<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>elementOrId</td>
		<td>The elemnt or id of the html element</td>
	</tr>
	<tr>
		<td>string</td>
		<td>cls</td>
		<td>class to look for</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getGUID

</details>



<hr><br><br><br>
    
### <b>hasClass(elementOrId, cls)</b>
Check to see if an element has a class attached to it<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>elementOrId</td>
		<td>The elemnt or id of the html element</td>
	</tr>
	<tr>
		<td>string</td>
		<td>cls</td>
		<td>class to look for</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isBool

</details>



<hr><br><br><br>
    
### <b>hexToRgb(hex)</b>
hexToRgb<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>hex</td>
		<td>hex color</td>
	</tr>
</table>

<b>Returns:</b> rgb color
#### Alias's:
 - isBool

</details>



<hr><br><br><br>
    
### <b>isAlphaNumeric(input)</b>
check if an input is an alpha numerical value ([a-z],[A-Z],[0-9] only)<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string||number</td>
		<td>input</td>
		<td>variable / value you wish to check</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isBool

</details>



<hr><br><br><br>
    
### <b>isArray(input)</b>
check if variable is an array<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>*</td>
		<td>arr</td>
		<td>variable to check</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isBool

</details>



<hr><br><br><br>
    
### <b>isBoolean(input)</b>
checks if a variable is a boolean<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>*</td>
		<td>input</td>
		<td>variable to check</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isBool

</details>



<hr><br><br><br>
    
### <b>isChecked(elementId)</b>
Checks to if checkbox is checked or not<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>elementId</td>
		<td>element id of the form element to check</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isNumber

</details>



<hr><br><br><br>
    
### <b>isChrome()</b>
Detects Chrome<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>object</td>
		<td>obj</td>
		<td>variable to check</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isNumber

</details>



<hr><br><br><br>
    
### <b>isDOM(obj)</b>
checks to see if your variable is a DOM object<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>object</td>
		<td>obj</td>
		<td>variable to check</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isNumber

</details>



<hr><br><br><br>
    
### <b>isEdge()</b>
Detects Edge<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>*</td>
		<td>o</td>
		<td>variable you wish to check</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isNumber

</details>



<hr><br><br><br>
    
### <b>isElement(o)</b>
checks if your variable is an element or not<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>*</td>
		<td>o</td>
		<td>variable you wish to check</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isNumber

</details>



<hr><br><br><br>
    
### <b>isElement2(element)</b>
checks to see if your vairable is an element or not<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>*</td>
		<td>element</td>
		<td>the variable you wish to check</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isNumber

</details>



<hr><br><br><br>
    
### <b>isEven(n)</b>
check if input is even<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>number</td>
		<td>n</td>
		<td>variable / value you wish to test</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isNumber

</details>



<hr><br><br><br>
    
### <b>isFireFox()</b>
Detects FireFox<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>find</td>
		<td>The string to look for</td>
	</tr>
	<tr>
		<td>string</td>
		<td>source</td>
		<td>The string to look in</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isNumber

</details>



<hr><br><br><br>
    
### <b>isIE()</b>
Detects IE<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>find</td>
		<td>The string to look for</td>
	</tr>
	<tr>
		<td>string</td>
		<td>source</td>
		<td>The string to look in</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isNumber

</details>



<hr><br><br><br>
    
### <b>isInString(find,source)</b>
check for string in string<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>find</td>
		<td>The string to look for</td>
	</tr>
	<tr>
		<td>string</td>
		<td>source</td>
		<td>The string to look in</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isNumber

</details>



<hr><br><br><br>
    
### <b>isMobile()</b>
isMobile<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>event</td>
		<td>evt</td>
		<td>html onkeyup(event) or onkeydown(event)</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isNumber

</details>



<hr><br><br><br>
    
### <b>isNumberKey(event)</b>
Checks if evt supplied (use on form input events via onkeyup or onkeydown)<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>event</td>
		<td>evt</td>
		<td>html onkeyup(event) or onkeydown(event)</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isNumber

</details>



<hr><br><br><br>
    
### <b>isNumeric(n)</b>
check if variable is numeric<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>*</td>
		<td>n</td>
		<td>variable to check</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - isNumber

</details>



<hr><br><br><br>
    
### <b>isOdd(n)</b>
check if input is odd<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>number</td>
		<td>n</td>
		<td>variable / value you wish to test</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - window.log.disable();

</details>



<hr><br><br><br>
    
### <b>isOpera()</b>
Detects Opera<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>needle</td>
		<td>the string your looking for</td>
	</tr>
	<tr>
		<td>array</td>
		<td>haystack</td>
		<td>the array you wish to search</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - window.log.disable();

</details>



<hr><br><br><br>
    
### <b>isSafari()</b>
Detects Safari<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>needle</td>
		<td>the string your looking for</td>
	</tr>
	<tr>
		<td>array</td>
		<td>haystack</td>
		<td>the array you wish to search</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - window.log.disable();

</details>



<hr><br><br><br>
    
### <b>isStringInArray(needle,haystack)</b>
Check to see if a string is in an array<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>needle</td>
		<td>the string your looking for</td>
	</tr>
	<tr>
		<td>array</td>
		<td>haystack</td>
		<td>the array you wish to search</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - window.log.disable();

</details>



<hr><br><br><br>
    
### <b>leftTrim(str, by)</b>
Trims the left of a string by a specified amount<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>str</td>
		<td>The string you want to trim</td>
	</tr>
	<tr>
		<td>number</td>
		<td>by</td>
		<td>How many characters do you want to trim off the end</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - window.log.disable();

</details>



<hr><br><br><br>
    
### <b>limitLengthInWords(str, maxWords)</b>
Limit a string in length of words<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>str</td>
		<td>the original string to limit</td>
	</tr>
	<tr>
		<td>number</td>
		<td>maxWords</td>
		<td>the number of words you wish to limit to</td>
	</tr>
</table>

<b>Returns:</b> {output
#### Alias's:
 - window.log.disable();

</details>



<hr><br><br><br>
    
### <b>logDisable()</b>
Enables log and trace<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>element</td>
		<td>string</td>
		<td>The id of html element you wish to console.log to</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - window.log.disable();

</details>

#### Usage examples:
 - <a href='https://codepen.io/AllForTheCode/pen/pVOOZV' target='_blank'>https://codepen.io/AllForTheCode/pen/pVOOZV</a>
 - <a href='https://codepen.io/AllForTheCode/pen/NMLLJX' target='_blank'>https://codepen.io/AllForTheCode/pen/NMLLJX</a>


<hr><br><br><br>
    
### <b>logEnable()</b>
Enables log and trace<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>element</td>
		<td>string</td>
		<td>The id of html element you wish to console.log to</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - window.log.enable();

</details>

#### Usage examples:
 - <a href='https://codepen.io/AllForTheCode/pen/pVOOZV' target='_blank'>https://codepen.io/AllForTheCode/pen/pVOOZV</a>
 - <a href='https://codepen.io/AllForTheCode/pen/NMLLJX' target='_blank'>https://codepen.io/AllForTheCode/pen/NMLLJX</a>


<hr><br><br><br>
    
### <b>logTo(element)</b>
Enabled AFTC.Log and log to output to a html element of choice also, some things like arrays will be formatted<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>element</td>
		<td>string</td>
		<td>The id of html element you wish to console.log to</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - ready

</details>

#### Usage examples:
 - <a href='https://codepen.io/AllForTheCode/pen/NMLLJX' target='_blank'>https://codepen.io/AllForTheCode/pen/NMLLJX</a>


<hr><br><br><br>
    
### <b>onReady(fn)</b>
Replacement for jQuerys $(document).ready<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>function</td>
		<td>fn</td>
		<td>inline function or pass it a function for when your page is loaded and ready to be used</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - ready

</details>



<hr><br><br><br>
    
### <b>openDebugWindow(html)</b>
open a popup window with the html you wish to display in it<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>dataType</td>
		<td>html</td>
		<td>the html you wish to display in the popup window</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - stringToWindow

</details>



<hr><br><br><br>
    
### <b>parseArrayToFloat(arr)</b>
parses all values in array to float<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>array</td>
		<td>arr</td>
		<td>array to process</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - arrayToFloat

</details>



<hr><br><br><br>
    
### <b>parseArrayToInt(arr)</b>
parses all values in array to float<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>array</td>
		<td>arr</td>
		<td>array to process</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - arrayToInt

</details>



<hr><br><br><br>
    
### <b>parseJSONToSelect(j, selectElementIdOrElement, label, value)</b>
parses a json object of key value pairs to a form select element<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>j</td>
		<td>the json data</td>
	</tr>
	<tr>
		<td>multi</td>
		<td>selectElementIdOrElement</td>
		<td>the json data</td>
	</tr>
	<tr>
		<td>string</td>
		<td>label</td>
		<td>of key value pair this is the key</td>
	</tr>
	<tr>
		<td>string</td>
		<td>value</td>
		<td>of key value pair this is the value</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - query

</details>



<hr><br><br><br>
    
### <b>querySelector(query)</b>
Gets an element from the DOM via DOM Query. NOTE<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>query</td>
		<td>string</td>
		<td>The DOM Query / css element path you wish to find</td>
	</tr>
</table>

<b>Returns:</b> html element
#### Alias's:
 - query

</details>

#### Usage examples:
 - <a href='https://codepen.io/AllForTheCode/pen/MGqPrN' target='_blank'>https://codepen.io/AllForTheCode/pen/MGqPrN</a>


<hr><br><br><br>
    
### <b>radToDeg(input)</b>
converts radians to degrees<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>number</td>
		<td>input</td>
		<td>the radians you wish converted to degrees</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - rad2deg

</details>



<hr><br><br><br>
    
### <b>randomString(length)</b>
get a random string of a specified length<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>number</td>
		<td>length</td>
		<td>the length of the string you wish to generate</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - getRandomString

</details>



<hr><br><br><br>
    
### <b>redirect(url)</b>
no more typing self.location.href, just use redirect(url)<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>url</td>
		<td>the url you wish to redirect to</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - html

</details>



<hr><br><br><br>
    
### <b>removeAllSelectOptions(elementOrId)</b>
Removes all the options in a select<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>element</td>
		<td>||</td>
		<td>element or id string</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - html

</details>



<hr><br><br><br>
    
### <b>removeFileFromPath(path)</b>
Attempts to remove the file from a file path string<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>path</td>
		<td>path</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - html

</details>



<hr><br><br><br>
    
### <b>rgb2Hex(r,g,b)</b>
rgb to hex<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>number</td>
		<td>r</td>
		<td>red</td>
	</tr>
	<tr>
		<td>number</td>
		<td>g</td>
		<td>green</td>
	</tr>
	<tr>
		<td>number</td>
		<td>b</td>
		<td>blue</td>
	</tr>
</table>

<b>Returns:</b> hex color
#### Alias's:
 - html

</details>



<hr><br><br><br>
    
### <b>rgbToHex(r,g,b)</b>
rgb to hex<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>number</td>
		<td>r</td>
		<td>red</td>
	</tr>
	<tr>
		<td>number</td>
		<td>g</td>
		<td>green</td>
	</tr>
	<tr>
		<td>number</td>
		<td>b</td>
		<td>blue</td>
	</tr>
</table>

<b>Returns:</b> hex color
#### Alias's:
 - html

</details>



<hr><br><br><br>
    
### <b>scrollToElement(elementId, arg_duration, offset)</b>
Scroll to element on page<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>elementId</td>
		<td>ID of element you wish to scroll to</td>
	</tr>
	<tr>
		<td>string</td>
		<td>arg_duration</td>
		<td>Duration in seconds</td>
	</tr>
	<tr>
		<td>number</td>
		<td>offset</td>
		<td>How much to offset scroll by</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - html

</details>



<hr><br><br><br>
    
### <b>setCookie(name, value)</b>
Sets a cookie by name with a value<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>name</td>
		<td>name of the cookie</td>
	</tr>
	<tr>
		<td>*</td>
		<td>value</td>
		<td>value of the cookie</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - html

</details>



<hr><br><br><br>
    
### <b>setHTML(elementOrId,html);</b>
quick shortcut for outputting html to an element<br>
````
setHTML("header","Welcome");
// or
var myElement = getElementById("header");
setHTML(myElement,"Welcome!");
````

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>dataType</td>
		<td>elementOrId</td>
		<td>the element or the element id you wish to set the html of</td>
	</tr>
	<tr>
		<td>dataType</td>
		<td>html</td>
		<td>the html string to insert into your element</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - html

</details>



<hr><br><br><br>
    
### <b>setStringLength(input, len)</b>
sets the length of a string from left to right<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>input</td>
		<td>what string do you want to set the length of?</td>
	</tr>
	<tr>
		<td>number</td>
		<td>length</td>
		<td>the length you want the string to be</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - 
 - 
 - 
 - 

</details>



<hr><br><br><br>
    
### <b>stringToBool(str)</b>
Converts a string to a boolean (y,yes,"1",no etc)<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>str</td>
		<td>the string you wish to convert</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - convertToArray
 - valueToArray

</details>



<hr><br><br><br>
    
### <b>toArray(v)</b>
takes an input and returns it as index[0] of an array<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>*</td>
		<td>arg</td>
		<td>value to insert into array</td>
	</tr>
</table>

<b>Returns:</b> 
#### Alias's:
 - convertToArray
 - valueToArray

</details>



<hr><br><br><br>
    
### <b>toHex(num)</b>
Converts a number to hex<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>number</td>
		<td>num</td>
		<td>decimal base 10</td>
	</tr>
</table>

<b>Returns:</b> hexidecimal value
[alias]
</details>



<hr><br><br><br>
    
### <b>trimStringBy(input, trimBy)</b>
Trims the length of a string by a value<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>input</td>
		<td>The string you want to trim</td>
	</tr>
	<tr>
		<td>number</td>
		<td>trimBy</td>
		<td>How many characters do you want to trim off the end</td>
	</tr>
</table>

<b>Returns:</b> 
[alias]
</details>



<hr><br><br><br>
    
### <b>validateEmail(email)</b>
Validats an email address<br>

<details>
    <summary><b>More information</b></summary>

 #### Parameters: 
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>email</td>
		<td>email address</td>
	</tr>
</table>

<b>Returns:</b> 
[alias]
</details>



<hr><br><br><br>
    <br><br><br>


<br><br><br>




## <b>Found this useful? Please Donate...</b>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<br><br><br><br>


<a href="http://pph.me/Darcey" target="_blank" title="I am available for hire, click here!">![Hire](https://www.allforthecode.com/images/pph_widget.jpg)</a>