# <b>AFTC.js</b>
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<b>A collection of utilities / functions I find useful when working with JavaScript.</b>

<br>

### <b>What's new</b>

 - Version 1.6.x is now available with codepen examples for nearly every function / feature that the AFTC.JS has to offer!<br>
 You can view all pens at <a href="https://codepen.io/AllForTheCode/pens/public/?grid_type=list" target="_blank">https://codepen.io/AllForTheCode/pens/public/?grid_type=list</a><br>
 1.6.x is quite the clean up and documentation refresh

 <br>
 <hr>
 <br>


### <b>Installation</b>
```
npm i aftc.js
gulp build
```

Then include the version you wish to use, your options are:

 - <b>aftc.min.js</b> - this is the full aftc.js package compressed, with all the extras (42KB);
 - aftc.js - this is the full aftc.js package uncompressed with all the extras

 - aftc.core.min.js - this is the aftc.js core compressed (23KB)
 - aftc.core.js - this is the aftc.js core uncompressed (none of the extras like color, animation, canvas, hide show, fade etc)
 
 

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

<h3><b>Quick links:</b></h3>
 <a href='#addclasselementoridclassname'>addClass(elementOrId,classname)</a><br>
 <a href='#addeventobjtypefnusecapture'>addEvent(obj,type,fn,useCapture)</a><br>
 <a href='#aftcanimate'>AFTC.Animate()</a><br>
 <a href='#aftcanimateelementidoncomplete'>AFTC.Animate(elementId, onComplete)</a><br>
 <a href='#aftcaudiooptions'>AFTC.Audio({options})</a><br>
 <a href='#aftccolorparams'>AFTC.Color({params})</a><br>
 <a href='#aftcpointxy'>AFTC.Point(x,y)</a><br>
 <a href='#aftcrectanglexywh'>AFTC.Rectangle(x, y, w, h)</a><br>
 <a href='#aftcvelocityvxvy'>AFTC.Velocity(vx,vy)</a><br>
 <a href='#aftcxhroptions'>AFTC.XHR({options})</a><br>
 <a href='#argstoobjectfargsobjstrict'>argsToObject(fArgs, obj, strict)</a><br>
 <a href='#arraycontainsneedlehaystack'>arrayContains(needle,haystack)</a><br>
 <a href='#arrayemptyarr'>arrayEmpty(arr)</a><br>
 <a href='#arraygetminarr'>arrayGetMin(arr)</a><br>
 <a href='#arrayremoveindexarrindex'>arrayRemoveIndex(arr,index)</a><br>
 <a href='#arrayshufflearr'>arrayShuffle(arr)</a><br>
 <a href='#arrayshuffle2arr'>arrayShuffle2(arr)</a><br>
 <a href='#arraytosinglelinestringarr'>arrayToSingleLineString(arr)</a><br>
 <a href='#booltostringbool'>boolToString(bool)</a><br>
 <a href='#booltoyesnobool'>boolToYesNo(bool)</a><br>
 <a href='#centerabsoluteelementelementid'>centerAbsoluteElement(elementId)</a><br>
 <a href='#cleanjsonstrings'>cleanJSONString(s)</a><br>
 <a href='#cls'>cls()</a><br>
 <a href='#converttoarrayval'>convertToArray(val)</a><br>
 <a href='#cutstringtoinputlen'>cutStringTo(input, len)</a><br>
 <a href='#cycleposmax'>cycle(pos, max)</a><br>
 <a href='#degtoradinput'>degToRad(input)</a><br>
 <a href='#escapehtmlinput'>escapeHTML(input)</a><br>
 <a href='#exitfullscreen'>exitFullScreen()</a><br>
 <a href='#getallstringsbetweenstrstartend'>getAllStringsBetween(str,start,end)</a><br>
 <a href='#getanchorurl'>getAnchor(url)</a><br>
 <a href='#getarrayofrandomnumbersarraysizeminmax'>getArrayOfRandomNumbers(arraySize,min,max)</a><br>
 <a href='#getarrayofrandomstringsarraysizestrlength'>getArrayOfRandomStrings(arraySize,strLength)</a><br>
 <a href='#getbooleanfrominput'>getBooleanFrom(input)</a><br>
 <a href='#getbrowser'>getBrowser()</a><br>
 <a href='#getcookiename'>getCookie(name)</a><br>
 <a href='#getdatetimelocal'>getDateTime(local)</a><br>
 <a href='#getdaysbetweenstartdatetimeenddatetime'>getDaysBetween(startDateTime, endDateTime)</a><br>
 <a href='#getelementbyclassnameclassname'>getElementByClassName(className)</a><br>
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
 <a href='#getukdatefromdatedte'>getUKDateFromDate(dte)</a><br>
 <a href='#getukdatefromdbdatetimeinput'>getUkDateFromDbDateTime(input)</a><br>
 <a href='#getukdatetimefromdbdatetimeinput'>getUkDateTimeFromDbDateTime(input)</a><br>
 <a href='#getusdatefromdatedte'>getUSDateFromDate(dte)</a><br>
 <a href='#getweightedrandomoddsiterations'>getWeightedRandom(odds, iterations)</a><br>
 <a href='#gofullscreenelement'>goFullScreen(element)</a><br>
 <a href='#guid'>guid()</a><br>
 <a href='#hasclasselementoridcls'>hasClass(elementOrId, cls)</a><br>
 <a href='#hextorgbhex'>hexToRgb(hex)</a><br>
 <a href='#ios'>iOS()</a><br>
 <a href='#isalphanumericinput'>isAlphaNumeric(input)</a><br>
 <a href='#isandroid'>isAndroid()</a><br>
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
 <a href='#isnumberkeyevt'>isNumberKey(evt)</a><br>
 <a href='#isnumericn'>isNumeric(n)</a><br>
 <a href='#isoddn'>isOdd(n)</a><br>
 <a href='#isopera'>isOpera()</a><br>
 <a href='#issafari'>isSafari()</a><br>
 <a href='#isstringinarrayneedlehaystack'>isStringInArray(needle,haystack)</a><br>
 <a href='#lefttrimstrby'>leftTrim(str, by)</a><br>
 <a href='#limitlengthinwordsstrmaxwords'>limitLengthInWords(str, maxWords)</a><br>
 <a href='#log'>log(*)</a><br>
 <a href='#logdisable'>logDisable()</a><br>
 <a href='#logenable'>logEnable()</a><br>
 <a href='#logtoelement'>logTo(element)</a><br>
 <a href='#logtodisable'>logToDisable()</a><br>
 <a href='#onreadyfn'>onReady(fn)</a><br>
 <a href='#opendebugwindowhtml'>openDebugWindow(html)</a><br>
 <a href='#parsearraytofloatarr'>parseArrayToFloat(arr)</a><br>
 <a href='#parsearraytointarr'>parseArrayToInt(arr)</a><br>
 <a href='#parsejsontoselectjselectelementidorelementlabelvalue'>parseJSONToSelect(j, selectElementIdOrElement, label, value)</a><br>
 <a href='#queryselectorquery'>querySelector(query)</a><br>
 <a href='#radtodeginput'>radToDeg(input)</a><br>
 <a href='#randomstringlength'>randomString(length)</a><br>
 <a href='#redirecturl'>redirect(url)</a><br>
 <a href='#removeallselectoptionselementid'>removeAllSelectOptions(elementId)</a><br>
 <a href='#removeclasselementoridclassname'>removeClass(elementOrId,className)</a><br>
 <a href='#removefilefrompathpath'>removeFileFromPath(path)</a><br>
 <a href='#rgb2hexrgb'>rgb2Hex(r,g,b)</a><br>
 <a href='#rgbtohexrgb'>rgbToHex(r,g,b)</a><br>
 <a href='#scrolltoelementelementiddurationoffset'>scrollToElement(elementId, duration, offset)</a><br>
 <a href='#setcookienamevalue'>setCookie(name, value)</a><br>
 <a href='#sethtmlelementoridhtml'>setHTML(elementOrId,html);</a><br>
 <a href='#stringprototypeendswithstr'>String.prototype.endsWith(str)</a><br>
 <a href='#stringprototypestartswithstr'>String.prototype.startsWith(str)</a><br>
 <a href='#stringtoboolstr'>stringToBool(str)</a><br>
 <a href='#toarrayv'>toArray(v)</a><br>
 <a href='#tohexnum'>toHex(num)</a><br>
 <a href='#trimstringbyinputtrimby'>trimStringBy(input, trimBy)</a><br>
 <a href='#validateemailemail'>validateEmail(email)</a><br>
<br><br>
<h4>Browse on codepen</h4>
<a href='https://codepen.io/AllForTheCode/pens/public/?grid_type=list' target='_blank'>https://codepen.io/AllForTheCode/pens/public/?grid_type=list</a>
<br><br><hr><br><br>



<h2><b><b>FILE: AFTC.JS</b><hr></b></h2>




<h3><b>argsToObject(fArgs, obj, strict)</b></h3>
Quick and easy args to object<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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
<h4>Alias's:</h4>
 - argsTo

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/PaqbKN' target='_blank'>https://codepen.io/AllForTheCode/pen/PaqbKN</a>


<hr><br><br><br>
    


<h3><b>argsToObject(fArgs, obj, strict)</b></h3>
Quick and easy args to object<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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
<h4>Alias's:</h4>
 - argsTo

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/PaqbKN' target='_blank'>https://codepen.io/AllForTheCode/pen/PaqbKN</a>


<hr><br><br><br>
    


<h3><b>getElementById(id)</b></h3>
Gets an element from the DOM by ID. NOTE<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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
<h4>Alias's:</h4>
 - getId
 - byId

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/PedyNO' target='_blank'>https://codepen.io/AllForTheCode/pen/PedyNO</a>


<hr><br><br><br>
    


<h3><b>querySelector(query)</b></h3>
Gets an element from the DOM via DOM Query. NOTE<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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
<h4>Alias's:</h4>
 - query

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/MGqPrN' target='_blank'>https://codepen.io/AllForTheCode/pen/MGqPrN</a>


<hr><br><br><br>
    


<h3><b>getElementsByName(name)</b></h3>
Gets an array of element from the DOM that have a specific name. NOTE<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/gzdBdz' target='_blank'>https://codepen.io/AllForTheCode/pen/gzdBdz</a>


<hr><br><br><br>
    


<h3><b>getElementByName(name)</b></h3>
Gets the first element from the DOM that has a specific name. NOTE<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/gzdBdz' target='_blank'>https://codepen.io/AllForTheCode/pen/gzdBdz</a>


<hr><br><br><br>
    


<h3><b>getElementsByClassName(className)</b></h3>
Gets an array of html elements from the DOM that have a specific class name. NOTE<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/odPQxE' target='_blank'>https://codepen.io/AllForTheCode/pen/odPQxE</a>


<hr><br><br><br>
    


<h3><b>getElementByClassName(className)</b></h3>
Gets the first html element from the DOM that has a specific class name. NOTE<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/odPQxE' target='_blank'>https://codepen.io/AllForTheCode/pen/odPQxE</a>


<hr><br><br><br>
    


<h3><b>getElementsByTagName(tagName)</b></h3>
Gets an array of html elements from the DOM that has a specific tag name. NOTE<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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

</details>



<hr><br><br><br>
    


<h3><b>getElementByTagName(tagName)</b></h3>
Gets the first html element from the DOM that has a specific tag name. NOTE<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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

</details>



<hr><br><br><br>
    


<h3><b>log(*)</b></h3>
Shortcut for console.log with some formatting capabilities, you can also log to html elements see logTo()<br>```<br>log("Hello World");<br>log("a = " + a);<br>log("myVar1 = " + myVar1 + "  myVar2 = " + myVar2);<br>log(MyObject);<br>log(MyClass);<br>```<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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



<h4>Alias's:</h4>
 - log
 - trace

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/pVOOZV' target='_blank'>https://codepen.io/AllForTheCode/pen/pVOOZV</a>
 - <a href='https://codepen.io/AllForTheCode/pen/NMLLJX' target='_blank'>https://codepen.io/AllForTheCode/pen/NMLLJX</a>


<hr><br><br><br>
    


<h3><b>logTo(element)</b></h3>
Enabled AFTC.Log and log to output to a html element of choice also, some things like arrays will be formatted<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/NMLLJX' target='_blank'>https://codepen.io/AllForTheCode/pen/NMLLJX</a>


<hr><br><br><br>
    


<h3><b>logEnable()</b></h3>
Enables log and trace<br>

<details>
    <summary><b>More information</b></summary>



<h4>Alias's:</h4>
 - window.log.enable();

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/pVOOZV' target='_blank'>https://codepen.io/AllForTheCode/pen/pVOOZV</a>
 - <a href='https://codepen.io/AllForTheCode/pen/NMLLJX' target='_blank'>https://codepen.io/AllForTheCode/pen/NMLLJX</a>


<hr><br><br><br>
    


<h3><b>logDisable()</b></h3>
Disables log and trace<br>

<details>
    <summary><b>More information</b></summary>



<h4>Alias's:</h4>
 - window.log.disable();

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/pVOOZV' target='_blank'>https://codepen.io/AllForTheCode/pen/pVOOZV</a>
 - <a href='https://codepen.io/AllForTheCode/pen/NMLLJX' target='_blank'>https://codepen.io/AllForTheCode/pen/NMLLJX</a>


<hr><br><br><br>
    


<h3><b>logToDisable()</b></h3>
Disables log and trace to a html element<br>

<details>
    <summary><b>More information</b></summary>



<h4>Alias's:</h4>
 - disableLogTo();

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/pVOOZV' target='_blank'>https://codepen.io/AllForTheCode/pen/pVOOZV</a>
 - <a href='https://codepen.io/AllForTheCode/pen/NMLLJX' target='_blank'>https://codepen.io/AllForTheCode/pen/NMLLJX</a>


<hr><br><br><br>
    


<h3><b>cls()</b></h3>
Clears the console if supported<br>

<details>
    <summary><b>More information</b></summary>



<h4>Alias's:</h4>
 - clearLog();

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/pVOOZV' target='_blank'>https://codepen.io/AllForTheCode/pen/pVOOZV</a>
 - <a href='https://codepen.io/AllForTheCode/pen/NMLLJX' target='_blank'>https://codepen.io/AllForTheCode/pen/NMLLJX</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: ARRAY.JS</b><hr></b></h2>




<h3><b>arrayRemoveIndex(arr,index)</b></h3>
remove a specified index from an array<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>arr</td>
		<td>array</td>
		<td>the array you wish to remove an index on</td>
	</tr>
	<tr>
		<td>index</td>
		<td>number</td>
		<td>the array index you wish to remove</td>
	</tr>
</table>


<b>Returns:</b> array

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/mLzyGP' target='_blank'>https://codepen.io/AllForTheCode/pen/mLzyGP</a>


<hr><br><br><br>
    


<h3><b>arrayRemoveIndex(arr,index)</b></h3>
remove a specified index from an array<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>arr</td>
		<td>array</td>
		<td>the array you wish to remove an index on</td>
	</tr>
	<tr>
		<td>index</td>
		<td>number</td>
		<td>the array index you wish to remove</td>
	</tr>
</table>


<b>Returns:</b> array

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/mLzyGP' target='_blank'>https://codepen.io/AllForTheCode/pen/mLzyGP</a>


<hr><br><br><br>
    


<h3><b>isStringInArray(needle,haystack)</b></h3>
Check to see if a string is in an array<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>needle</td>
		<td>string</td>
		<td>what you want to search for in each array index</td>
	</tr>
	<tr>
		<td>haystack</td>
		<td>string</td>
		<td>the array you want to search</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/QrZrBM' target='_blank'>https://codepen.io/AllForTheCode/pen/QrZrBM</a>


<hr><br><br><br>
    


<h3><b>arrayContains(needle,haystack)</b></h3>
Check to see if your array contains something you want to find<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>needle</td>
		<td>string</td>
		<td>what you want to search for in each array index</td>
	</tr>
	<tr>
		<td>haystack</td>
		<td>string</td>
		<td>the array you want to search</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - isInArray

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/VxExVw' target='_blank'>https://codepen.io/AllForTheCode/pen/VxExVw</a>


<hr><br><br><br>
    


<h3><b>arrayEmpty(arr)</b></h3>
clears/empties an array for garbage collection<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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



<h4>Alias's:</h4>
 - arrayClear

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/ELdRYJ' target='_blank'>https://codepen.io/AllForTheCode/pen/ELdRYJ</a>


<hr><br><br><br>
    


<h3><b>getMaxFromArray(arr)</b></h3>
returns the maximum value in an array<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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



<h4>Alias's:</h4>
 - arrayGetMax
 - arrayMax

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/GdYGjW' target='_blank'>https://codepen.io/AllForTheCode/pen/GdYGjW</a>


<hr><br><br><br>
    


<h3><b>arrayGetMin(arr)</b></h3>
returns the minimum value in an array<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>arr</td>
		<td>array</td>
		<td>the array you wish to find the minimum value in</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - getMinFromArray
 - arrayMin

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/bMmKBa' target='_blank'>https://codepen.io/AllForTheCode/pen/bMmKBa</a>


<hr><br><br><br>
    


<h3><b>arrayShuffle(arr)</b></h3>
shuffles an array (method 1)<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>arr</td>
		<td>array</td>
		<td>the array to shuffle</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - shuffle
 - arrayShuffle

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/wjYjmo' target='_blank'>https://codepen.io/AllForTheCode/pen/wjYjmo</a>


<hr><br><br><br>
    


<h3><b>arrayShuffle2(arr)</b></h3>
shuffles an array (method 2)<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>arr</td>
		<td>array</td>
		<td>the array to shuffle</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - shuffle2
 - arrayShuffle2

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/wjYjmo' target='_blank'>https://codepen.io/AllForTheCode/pen/wjYjmo</a>


<hr><br><br><br>
    


<h3><b>arrayToSingleLineString(arr)</b></h3>
Converts an array to a single line string (usefull for debug)<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>arr</td>
		<td>array</td>
		<td>the convert</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - arrayToString

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/XqoVEe' target='_blank'>https://codepen.io/AllForTheCode/pen/XqoVEe</a>


<hr><br><br><br>
    


<h3><b>convertToArray(val)</b></h3>
takes an input and returns it as index[0] of an array<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>val</td>
		<td>*</td>
		<td>value to make into array an array</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - valueToArray

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/QrzazK' target='_blank'>https://codepen.io/AllForTheCode/pen/QrzazK</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: BROWSER.JS</b><hr></b></h2>




<h3><b>redirect(url)</b></h3>
no more typing self.location.href, just use redirect(url)<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>url</td>
		<td>string</td>
		<td>the url you wish to redirect to</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/RyEpPY' target='_blank'>https://codepen.io/AllForTheCode/pen/RyEpPY</a>


<hr><br><br><br>
    


<h3><b>redirect(url)</b></h3>
no more typing self.location.href, just use redirect(url)<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>url</td>
		<td>string</td>
		<td>the url you wish to redirect to</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/RyEpPY' target='_blank'>https://codepen.io/AllForTheCode/pen/RyEpPY</a>


<hr><br><br><br>
    


<h3><b>goFullScreen(element)</b></h3>
Go full screen, on an element if specified or whole browser if left out<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>element</td>
		<td>element</td>
		<td>optional - html element that you want to go full screen on, leave out for whole browser</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/ELGWpE' target='_blank'>https://codepen.io/AllForTheCode/pen/ELGWpE</a>


<hr><br><br><br>
    


<h3><b>exitFullScreen()</b></h3>
Exits full screen mode<br>

<details>
    <summary><b>More information</b></summary>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/ELGWpE' target='_blank'>https://codepen.io/AllForTheCode/pen/ELGWpE</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: CONVERSION.JS</b><hr></b></h2>




<h3><b>radToDeg(input)</b></h3>
converts radians to degrees<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>input</td>
		<td>number</td>
		<td>the radians you wish converted to degrees</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - rad2deg

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/wjRpBZ' target='_blank'>https://codepen.io/AllForTheCode/pen/wjRpBZ</a>


<hr><br><br><br>
    


<h3><b>radToDeg(input)</b></h3>
converts radians to degrees<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>input</td>
		<td>number</td>
		<td>the radians you wish converted to degrees</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - rad2deg

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/wjRpBZ' target='_blank'>https://codepen.io/AllForTheCode/pen/wjRpBZ</a>


<hr><br><br><br>
    


<h3><b>degToRad(input)</b></h3>
converts degrees to radians<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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



<h4>Alias's:</h4>
 - deg2rad

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/jxXYbE' target='_blank'>https://codepen.io/AllForTheCode/pen/jxXYbE</a>


<hr><br><br><br>
    


<h3><b>toHex(num)</b></h3>
Converts a number to hex<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>num</td>
		<td>number</td>
		<td>decimal base 10</td>
	</tr>
</table>


<b>Returns:</b> hexidecimal value

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/ELGoKX' target='_blank'>https://codepen.io/AllForTheCode/pen/ELGoKX</a>


<hr><br><br><br>
    


<h3><b>boolToString(bool)</b></h3>
converts boolean to a string of true or false<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>bool</td>
		<td>boolean</td>
		<td>the boolean you wish to convert</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/PeXEbg' target='_blank'>https://codepen.io/AllForTheCode/pen/PeXEbg</a>


<hr><br><br><br>
    


<h3><b>boolToYesNo(bool)</b></h3>
converts a boolean to yes or no<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>bool</td>
		<td>boolean</td>
		<td>the boolean you wish to convert</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/zjypZz' target='_blank'>https://codepen.io/AllForTheCode/pen/zjypZz</a>


<hr><br><br><br>
    


<h3><b>stringToBool(str)</b></h3>
Converts a string to a boolean (y,yes,"1",no etc)<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>str</td>
		<td>string</td>
		<td>the string you wish to convert</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/vjvpmQ' target='_blank'>https://codepen.io/AllForTheCode/pen/vjvpmQ</a>


<hr><br><br><br>
    


<h3><b>getBooleanFrom(input)</b></h3>
converts an input to a boolean<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/XqoVea' target='_blank'>https://codepen.io/AllForTheCode/pen/XqoVea</a>


<hr><br><br><br>
    


<h3><b>parseArrayToFloat(arr)</b></h3>
parses all values in array to float<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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



<h4>Alias's:</h4>
 - arrayToFloat

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/erbyVR' target='_blank'>https://codepen.io/AllForTheCode/pen/erbyVR</a>


<hr><br><br><br>
    


<h3><b>parseArrayToInt(arr)</b></h3>
parses all values in array to float<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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



<h4>Alias's:</h4>
 - arrayToInt

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/yjGpqM' target='_blank'>https://codepen.io/AllForTheCode/pen/yjGpqM</a>


<hr><br><br><br>
    


<h3><b>toArray(v)</b></h3>
takes an input and returns it as index[0] of an array<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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



<h4>Alias's:</h4>
 - convertToArray
 - valueToArray

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/QrzazK' target='_blank'>https://codepen.io/AllForTheCode/pen/QrzazK</a>


<hr><br><br><br>
    


<h3><b>rgb2Hex(r,g,b)</b></h3>
rgb to hex<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>



<hr><br><br><br>
    


<h3><b>rgbToHex(r,g,b)</b></h3>
rgb to hex<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>



<hr><br><br><br>
    


<h3><b>hexToRgb(hex)</b></h3>
hexToRgb<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>



<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: COOKIES.JS</b><hr></b></h2>




<h3><b>setCookie(name, value)</b></h3>
Sets a cookie by name with a value<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>name</td>
		<td>string</td>
		<td>name of the cookie</td>
	</tr>
	<tr>
		<td>value</td>
		<td>string</td>
		<td>value of the cookie</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/RyBMwq' target='_blank'>https://codepen.io/AllForTheCode/pen/RyBMwq</a>


<hr><br><br><br>
    


<h3><b>setCookie(name, value)</b></h3>
Sets a cookie by name with a value<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>name</td>
		<td>string</td>
		<td>name of the cookie</td>
	</tr>
	<tr>
		<td>value</td>
		<td>string</td>
		<td>value of the cookie</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/RyBMwq' target='_blank'>https://codepen.io/AllForTheCode/pen/RyBMwq</a>


<hr><br><br><br>
    


<h3><b>getCookie(name)</b></h3>
Gets the value of a cookie by name<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>name</td>
		<td>string</td>
		<td>name of the cookie to get</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/RyBMwq' target='_blank'>https://codepen.io/AllForTheCode/pen/RyBMwq</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: CSS.JS</b><hr></b></h2>




<h3><b>addClass(elementOrId,classname)</b></h3>
Add a css class to a html element<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>elementOrId</td>
		<td>elementORstring</td>
		<td>The elemnt or id of the html element to add a css class to</td>
	</tr>
	<tr>
		<td>className</td>
		<td>string</td>
		<td>the class name to add</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - 

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/BxvYmW' target='_blank'>https://codepen.io/AllForTheCode/pen/BxvYmW</a>


<hr><br><br><br>
    


<h3><b>addClass(elementOrId,classname)</b></h3>
Add a css class to a html element<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>elementOrId</td>
		<td>elementORstring</td>
		<td>The elemnt or id of the html element to add a css class to</td>
	</tr>
	<tr>
		<td>className</td>
		<td>string</td>
		<td>the class name to add</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - 

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/BxvYmW' target='_blank'>https://codepen.io/AllForTheCode/pen/BxvYmW</a>


<hr><br><br><br>
    


<h3><b>removeClass(elementOrId,className)</b></h3>
shortcut to remove a class from a html element<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>elementOrId</td>
		<td>elementORstring</td>
		<td>The elemnt or id of the html element to add a css class to</td>
	</tr>
	<tr>
		<td>className</td>
		<td>string</td>
		<td>the class name to remove</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - 

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/gzZvKL' target='_blank'>https://codepen.io/AllForTheCode/pen/gzZvKL</a>


<hr><br><br><br>
    


<h3><b>hasClass(elementOrId, cls)</b></h3>
Check to see if an element has a class attached to it<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>elementOrId</td>
		<td>string</td>
		<td>The elemnt or id of the html element</td>
	</tr>
	<tr>
		<td>cls</td>
		<td>string</td>
		<td>class to look for</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/dewdwY' target='_blank'>https://codepen.io/AllForTheCode/pen/dewdwY</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: DATETIME.JS</b><hr></b></h2>




<h3><b>getDaysBetween(startDateTime, endDateTime)</b></h3>
Gets the number of whole days between a start and end date<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>startDateTime</td>
		<td>DateTime</td>
		<td>start date</td>
	</tr>
	<tr>
		<td>endDateTime</td>
		<td>DateTime</td>
		<td>end date</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - getNoOfDaysBetween
 - getDaysBetweenDates

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/pVqaGZ' target='_blank'>https://codepen.io/AllForTheCode/pen/pVqaGZ</a>


<hr><br><br><br>
    


<h3><b>getDaysBetween(startDateTime, endDateTime)</b></h3>
Gets the number of whole days between a start and end date<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>startDateTime</td>
		<td>DateTime</td>
		<td>start date</td>
	</tr>
	<tr>
		<td>endDateTime</td>
		<td>DateTime</td>
		<td>end date</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - getNoOfDaysBetween
 - getDaysBetweenDates

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/pVqaGZ' target='_blank'>https://codepen.io/AllForTheCode/pen/pVqaGZ</a>


<hr><br><br><br>
    


<h3><b>getUKDateFromDate(dte)</b></h3>
Formats a date in the UK format<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>dte</td>
		<td>Date</td>
		<td></td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/RyEMwp' target='_blank'>https://codepen.io/AllForTheCode/pen/RyEMwp</a>


<hr><br><br><br>
    


<h3><b>getUSDateFromDate(dte)</b></h3>
Formats a date in the US format<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>dte</td>
		<td>Date</td>
		<td>date</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/XqoEWL' target='_blank'>https://codepen.io/AllForTheCode/pen/XqoEWL</a>


<hr><br><br><br>
    


<h3><b>getUkDateFromDbDateTime(input)</b></h3>
get a uk date from a mysql db date value<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>input</td>
		<td>MySQLDateTimeString</td>
		<td>MySQL DB DateTime</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/BxvePW' target='_blank'>https://codepen.io/AllForTheCode/pen/BxvePW</a>


<hr><br><br><br>
    


<h3><b>getUkDateTimeFromDbDateTime(input)</b></h3>
get a uk date from a mysql db date time value<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>input</td>
		<td>MySQLDateTimeString</td>
		<td>MySQL DB DateTime</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/MGZdBB' target='_blank'>https://codepen.io/AllForTheCode/pen/MGZdBB</a>


<hr><br><br><br>
    


<h3><b>getSQLDateTime()</b></h3>
gets the date time now for sql insert<br>

<details>
    <summary><b>More information</b></summary>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/wjRbEe' target='_blank'>https://codepen.io/AllForTheCode/pen/wjRbEe</a>


<hr><br><br><br>
    


<h3><b>getDateTime(local)</b></h3>
gets the date time at a specified local<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>local</td>
		<td>string</td>
		<td>options are us or do not supply for en-gb</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/GdPaYj' target='_blank'>https://codepen.io/AllForTheCode/pen/GdPaYj</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: DEBUG.JS</b><hr></b></h2>




<h3><b>openDebugWindow(html)</b></h3>
open a popup window with the html you wish to display in it<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>html</td>
		<td>string</td>
		<td>the html you wish to display in the popup window</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - stringToWindow
 - htmlToWindow

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/ELGWpE' target='_blank'>https://codepen.io/AllForTheCode/pen/ELGWpE</a>


<hr><br><br><br>
    


<h3><b>openDebugWindow(html)</b></h3>
open a popup window with the html you wish to display in it<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>html</td>
		<td>string</td>
		<td>the html you wish to display in the popup window</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - stringToWindow
 - htmlToWindow

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/ELGWpE' target='_blank'>https://codepen.io/AllForTheCode/pen/ELGWpE</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: DETECTION.JS</b><hr></b></h2>




<h3><b>isMobile()</b></h3>
Detects if the device you are using is a mobile or not<br>

<details>
    <summary><b>More information</b></summary>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/KRbLdm' target='_blank'>https://codepen.io/AllForTheCode/pen/KRbLdm</a>


<hr><br><br><br>
    


<h3><b>isMobile()</b></h3>
Detects if the device you are using is a mobile or not<br>

<details>
    <summary><b>More information</b></summary>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/KRbLdm' target='_blank'>https://codepen.io/AllForTheCode/pen/KRbLdm</a>


<hr><br><br><br>
    


<h3><b>isAndroid()</b></h3>
Detects if the device you are using is android or not<br>

<details>
    <summary><b>More information</b></summary>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/RyEmgN' target='_blank'>https://codepen.io/AllForTheCode/pen/RyEmgN</a>


<hr><br><br><br>
    


<h3><b>iOS()</b></h3>
Detects if the device you are using is iOS or not<br>

<details>
    <summary><b>More information</b></summary>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/ELGzXO' target='_blank'>https://codepen.io/AllForTheCode/pen/ELGzXO</a>


<hr><br><br><br>
    


<h3><b>isFireFox()</b></h3>
Detects FireFox<br>

<details>
    <summary><b>More information</b></summary>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/mLaYMe' target='_blank'>https://codepen.io/AllForTheCode/pen/mLaYMe</a>


<hr><br><br><br>
    


<h3><b>isChrome()</b></h3>
Detects Chrome<br>

<details>
    <summary><b>More information</b></summary>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/xjmNLM' target='_blank'>https://codepen.io/AllForTheCode/pen/xjmNLM</a>


<hr><br><br><br>
    


<h3><b>isEdge()</b></h3>
Detects Edge<br>

<details>
    <summary><b>More information</b></summary>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/aGPrLP' target='_blank'>https://codepen.io/AllForTheCode/pen/aGPrLP</a>


<hr><br><br><br>
    


<h3><b>isSafari()</b></h3>
Detects Safari<br>

<details>
    <summary><b>More information</b></summary>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/gzZJXr' target='_blank'>https://codepen.io/AllForTheCode/pen/gzZJXr</a>


<hr><br><br><br>
    


<h3><b>isIE()</b></h3>
Detects IE<br>

<details>
    <summary><b>More information</b></summary>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/MGZdOG' target='_blank'>https://codepen.io/AllForTheCode/pen/MGZdOG</a>


<hr><br><br><br>
    


<h3><b>isOpera()</b></h3>
Detects Opera<br>

<details>
    <summary><b>More information</b></summary>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/dewEJb' target='_blank'>https://codepen.io/AllForTheCode/pen/dewEJb</a>


<hr><br><br><br>
    


<h3><b>getIEVersion()</b></h3>
Gets version of IE<br>

<details>
    <summary><b>More information</b></summary>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/BxveJp' target='_blank'>https://codepen.io/AllForTheCode/pen/BxveJp</a>


<hr><br><br><br>
    


<h3><b>getBrowser()</b></h3>
Detects browser<br>

<details>
    <summary><b>More information</b></summary>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/GdPaQZ' target='_blank'>https://codepen.io/AllForTheCode/pen/GdPaQZ</a>


<hr><br><br><br>
    


<h3><b>getOS(testUserAgent)</b></h3>
Attempts to get the os from the user agent or the test user agent<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/erbaVj' target='_blank'>https://codepen.io/AllForTheCode/pen/erbaVj</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: DOM.JS</b><hr></b></h2>




<h3><b>setHTML(elementOrId,html);</b></h3>
Quick shortcut for outputting html to an element<br>```<br>setHTML("header","Welcome");<br>```<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>elementOrId</td>
		<td>stringIdOrHtmlElement</td>
		<td>the element or the element id you wish to set the html of</td>
	</tr>
	<tr>
		<td>html</td>
		<td>string</td>
		<td>the html string to insert into your element</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - html

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/KRbLER' target='_blank'>https://codepen.io/AllForTheCode/pen/KRbLER</a>


<hr><br><br><br>
    


<h3><b>setHTML(elementOrId,html);</b></h3>
Quick shortcut for outputting html to an element<br>```<br>setHTML("header","Welcome");<br>```<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>elementOrId</td>
		<td>stringIdOrHtmlElement</td>
		<td>the element or the element id you wish to set the html of</td>
	</tr>
	<tr>
		<td>html</td>
		<td>string</td>
		<td>the html string to insert into your element</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - html

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/KRbLER' target='_blank'>https://codepen.io/AllForTheCode/pen/KRbLER</a>


<hr><br><br><br>
    


<h3><b>getElementOffsetTop(elementId)</b></h3>
Gets an elements top offset<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>elementId</td>
		<td>string</td>
		<td>the element ID you wish to get the top offset of</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/GdPaLr' target='_blank'>https://codepen.io/AllForTheCode/pen/GdPaLr</a>


<hr><br><br><br>
    


<h3><b>centerAbsoluteElement(elementId)</b></h3>
Center element that is absolute positioned<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>elementId</td>
		<td>string</td>
		<td>element or id of element to center</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/ZRGabV' target='_blank'>https://codepen.io/AllForTheCode/pen/ZRGabV</a>


<hr><br><br><br>
    


<h3><b>scrollToElement(elementId, duration, offset)</b></h3>
Scroll to element on page<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>elementId</td>
		<td>string</td>
		<td>ID of element you wish to scroll to</td>
	</tr>
	<tr>
		<td>duration</td>
		<td>float</td>
		<td>Duration in seconds</td>
	</tr>
	<tr>
		<td>offset</td>
		<td>number</td>
		<td>How much to offset scroll by</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/eKNeVq' target='_blank'>https://codepen.io/AllForTheCode/pen/eKNeVq</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: EASING.JS</b><hr></b></h2>




<h3><b>[title]</b></h3>
[desc]

<details>
    <summary><b>More information</b></summary>
[table]
[methods]
[return]
[alias]
</details>

[links]

<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: EVENTS.JS</b><hr></b></h2>




<h3><b>addEvent(obj,type,fn,useCapture)</b></h3>
Shortcut for adding events with old browser compatibility<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>obj</td>
		<td>object</td>
		<td>The object you wish to attach the event listener to</td>
	</tr>
	<tr>
		<td>type</td>
		<td>string</td>
		<td>The event type (e.type) mousedown, mouseup, click etc</td>
	</tr>
	<tr>
		<td>fn</td>
		<td>function</td>
		<td>The function to call when the event is triggered</td>
	</tr>
	<tr>
		<td>useCapture</td>
		<td>boolean</td>
		<td>Whether the event should be executed in the capturing or in the bubbling phase</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/VxExLg' target='_blank'>https://codepen.io/AllForTheCode/pen/VxExLg</a>


<hr><br><br><br>
    


<h3><b>addEvent(obj,type,fn,useCapture)</b></h3>
Shortcut for adding events with old browser compatibility<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>obj</td>
		<td>object</td>
		<td>The object you wish to attach the event listener to</td>
	</tr>
	<tr>
		<td>type</td>
		<td>string</td>
		<td>The event type (e.type) mousedown, mouseup, click etc</td>
	</tr>
	<tr>
		<td>fn</td>
		<td>function</td>
		<td>The function to call when the event is triggered</td>
	</tr>
	<tr>
		<td>useCapture</td>
		<td>boolean</td>
		<td>Whether the event should be executed in the capturing or in the bubbling phase</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/VxExLg' target='_blank'>https://codepen.io/AllForTheCode/pen/VxExLg</a>


<hr><br><br><br>
    


<h3><b>onReady(fn)</b></h3>
A replacement for using body onload and no need for jQuery's $(document).ready<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>fn</td>
		<td>function</td>
		<td>inline function or pass it a function for when your page is loaded and ready to be used</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - ready

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/GdYxVa' target='_blank'>https://codepen.io/AllForTheCode/pen/GdYxVa</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: FORM.JS</b><hr></b></h2>




<h3><b>isChecked(elementId)</b></h3>
Checks to if checkbox is checked or not<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>elementId</td>
		<td>string</td>
		<td>element id of the form element to check</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/KRbjpx' target='_blank'>https://codepen.io/AllForTheCode/pen/KRbjpx</a>


<hr><br><br><br>
    


<h3><b>isChecked(elementId)</b></h3>
Checks to if checkbox is checked or not<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>elementId</td>
		<td>string</td>
		<td>element id of the form element to check</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/KRbjpx' target='_blank'>https://codepen.io/AllForTheCode/pen/KRbjpx</a>


<hr><br><br><br>
    


<h3><b>isNumberKey(evt)</b></h3>
Checks if evt supplied (use on form input events via onkeyup or onkeydown)<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>evt</td>
		<td>event</td>
		<td>html onkeyup(event) or onkeydown(event)</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/vjvqLg' target='_blank'>https://codepen.io/AllForTheCode/pen/vjvqLg</a>


<hr><br><br><br>
    


<h3><b>removeAllSelectOptions(elementId)</b></h3>
Removes all the options in a select<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>elementId</td>
		<td>string</td>
		<td>id of select element</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/mLaZEm' target='_blank'>https://codepen.io/AllForTheCode/pen/mLaZEm</a>
 - <a href='https://codepen.io/AllForTheCode/pen/rvoEME' target='_blank'>https://codepen.io/AllForTheCode/pen/rvoEME</a>


<hr><br><br><br>
    


<h3><b>parseJSONToSelect(j, selectElementIdOrElement, label, value)</b></h3>
parses a json object of key value pairs to a form select element<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>j</td>
		<td>string</td>
		<td>the json data</td>
	</tr>
	<tr>
		<td>selectElementIdOrElement</td>
		<td>elementOrIdString</td>
		<td>the json data</td>
	</tr>
	<tr>
		<td>label</td>
		<td>string</td>
		<td>of key value pair this is the key</td>
	</tr>
	<tr>
		<td>value</td>
		<td>string</td>
		<td>of key value pair this is the value</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/rvoEME' target='_blank'>https://codepen.io/AllForTheCode/pen/rvoEME</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: GEOMETRY.JS</b><hr></b></h2>




<h3><b>AFTC.Point(x,y)</b></h3>
2D Point<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>x</td>
		<td>number</td>
		<td>x coordinate</td>
	</tr>
	<tr>
		<td>y</td>
		<td>number</td>
		<td>y coordinate</td>
	</tr>
</table>


<h4> Methods:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td></td>
		<td>position</td>
	</tr>
	<tr>
		<td></td>
		<td>clone</td>
	</tr>
	<tr>
		<td></td>
		<td>delta</td>
	</tr>
	<tr>
		<td></td>
		<td>distance</td>
	</tr>
	<tr>
		<td></td>
		<td>moveTo</td>
	</tr>
	<tr>
		<td></td>
		<td>moveAtAngle</td>
	</tr>
	<tr>
		<td></td>
		<td>applyVelocity</td>
	</tr>
	<tr>
		<td></td>
		<td>angleRadians</td>
	</tr>
	<tr>
		<td></td>
		<td>angleDeg</td>
	</tr>
	<tr>
		<td></td>
		<td>rotate</td>
	</tr>
</table>



</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/qYLzzm' target='_blank'>https://codepen.io/AllForTheCode/pen/qYLzzm</a>


<hr><br><br><br>
    


<h3><b>AFTC.Point(x,y)</b></h3>
2D Point<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>x</td>
		<td>number</td>
		<td>x coordinate</td>
	</tr>
	<tr>
		<td>y</td>
		<td>number</td>
		<td>y coordinate</td>
	</tr>
</table>


<h4> Methods:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td></td>
		<td>position</td>
	</tr>
	<tr>
		<td></td>
		<td>clone</td>
	</tr>
	<tr>
		<td></td>
		<td>delta</td>
	</tr>
	<tr>
		<td></td>
		<td>distance</td>
	</tr>
	<tr>
		<td></td>
		<td>moveTo</td>
	</tr>
	<tr>
		<td></td>
		<td>moveAtAngle</td>
	</tr>
	<tr>
		<td></td>
		<td>applyVelocity</td>
	</tr>
	<tr>
		<td></td>
		<td>angleRadians</td>
	</tr>
	<tr>
		<td></td>
		<td>angleDeg</td>
	</tr>
	<tr>
		<td></td>
		<td>rotate</td>
	</tr>
</table>



</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/qYLzzm' target='_blank'>https://codepen.io/AllForTheCode/pen/qYLzzm</a>


<hr><br><br><br>
    


<h3><b>AFTC.Rectangle(x, y, w, h)</b></h3>
Rectangle class, allos you to set x, y, width and height or a rectangle<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>x</td>
		<td>number</td>
		<td>x coordinate</td>
	</tr>
	<tr>
		<td>y</td>
		<td>number</td>
		<td>y coordinate</td>
	</tr>
	<tr>
		<td>w</td>
		<td>number</td>
		<td>w width</td>
	</tr>
	<tr>
		<td>h</td>
		<td>number</td>
		<td>h height</td>
	</tr>
</table>


<h4> Methods:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td></td>
		<td>offsetOuter</td>
	</tr>
	<tr>
		<td></td>
		<td>offsetInner</td>
	</tr>
	<tr>
		<td></td>
		<td>setX</td>
	</tr>
	<tr>
		<td></td>
		<td>setY</td>
	</tr>
	<tr>
		<td></td>
		<td>setW</td>
	</tr>
	<tr>
		<td></td>
		<td>setH</td>
	</tr>
</table>

<b>Returns:</b> AFTC.Rectangle

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/JvQRKg' target='_blank'>https://codepen.io/AllForTheCode/pen/JvQRKg</a>


<hr><br><br><br>
    


<h3><b>AFTC.Velocity(vx,vy)</b></h3>
AFTC.Velocity class helper<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>vx</td>
		<td>number</td>
		<td>velocity vector x</td>
	</tr>
	<tr>
		<td>vy</td>
		<td>number</td>
		<td>velocity vector y</td>
	</tr>
</table>


<h4> Methods:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>flip</td>
		<td>flip</td>
	</tr>
	<tr>
		<td>flipX</td>
		<td>flipX</td>
	</tr>
	<tr>
		<td>flipY</td>
		<td>flipY</td>
	</tr>
	<tr>
		<td>multiply</td>
		<td>multiply</td>
	</tr>
	<tr>
		<td>divide</td>
		<td>divide</td>
	</tr>
</table>



</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/erxRBo' target='_blank'>https://codepen.io/AllForTheCode/pen/erxRBo</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: GET.JS</b><hr></b></h2>




<h3><b>getFunctionName(fn)</b></h3>
tries to get the function name of a suppled function<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>fn</td>
		<td>function</td>
		<td>the function wish to get the name of</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/YLBKRy' target='_blank'>https://codepen.io/AllForTheCode/pen/YLBKRy</a>


<hr><br><br><br>
    


<h3><b>getFunctionName(fn)</b></h3>
tries to get the function name of a suppled function<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>fn</td>
		<td>function</td>
		<td>the function wish to get the name of</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/YLBKRy' target='_blank'>https://codepen.io/AllForTheCode/pen/YLBKRy</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: IS.JS</b><hr></b></h2>




<h3><b>isInString(find,source)</b></h3>
check for string in string<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/jxdONK' target='_blank'>https://codepen.io/AllForTheCode/pen/jxdONK</a>


<hr><br><br><br>
    


<h3><b>isInString(find,source)</b></h3>
check for string in string<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/jxdONK' target='_blank'>https://codepen.io/AllForTheCode/pen/jxdONK</a>


<hr><br><br><br>
    


<h3><b>isEven(n)</b></h3>
check if input is even<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>n</td>
		<td>number</td>
		<td>variable / value you wish to test</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/rvPNBR' target='_blank'>https://codepen.io/AllForTheCode/pen/rvPNBR</a>


<hr><br><br><br>
    


<h3><b>isOdd(n)</b></h3>
check if input is odd<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>n</td>
		<td>number</td>
		<td>variable value you wish to test</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/gzqOOW' target='_blank'>https://codepen.io/AllForTheCode/pen/gzqOOW</a>


<hr><br><br><br>
    


<h3><b>isAlphaNumeric(input)</b></h3>
check if an input is an alpha numerical value ([a-z],[A-Z],[0-9] only)<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/pVGooO' target='_blank'>https://codepen.io/AllForTheCode/pen/pVGooO</a>


<hr><br><br><br>
    


<h3><b>isElement(o)</b></h3>
checks if your variable is an element or not<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>o</td>
		<td>*</td>
		<td>variable you wish to check</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/RyvwPK' target='_blank'>https://codepen.io/AllForTheCode/pen/RyvwPK</a>


<hr><br><br><br>
    


<h3><b>isElement2(element)</b></h3>
checks to see if your vairable is an element or not<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>element</td>
		<td>*</td>
		<td>the variable you wish to check</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/RyvwPK' target='_blank'>https://codepen.io/AllForTheCode/pen/RyvwPK</a>


<hr><br><br><br>
    


<h3><b>isDOM(obj)</b></h3>
checks to see if your variable is a DOM object<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>obj</td>
		<td>object</td>
		<td>variable to check</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/JvxjYo' target='_blank'>https://codepen.io/AllForTheCode/pen/JvxjYo</a>


<hr><br><br><br>
    


<h3><b>isBoolean(input)</b></h3>
checks if a variable is a boolean<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>input</td>
		<td>*</td>
		<td>variable to check</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - isBool

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/JvxjGo' target='_blank'>https://codepen.io/AllForTheCode/pen/JvxjGo</a>


<hr><br><br><br>
    


<h3><b>isNumeric(n)</b></h3>
check if variable is numeric<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>n</td>
		<td>*</td>
		<td>variable to check</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - isNumber

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/bMzGEL' target='_blank'>https://codepen.io/AllForTheCode/pen/bMzGEL</a>


<hr><br><br><br>
    


<h3><b>isArray(input)</b></h3>
check if variable is an array<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>input</td>
		<td>*</td>
		<td>variable to check</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/rvPNeg' target='_blank'>https://codepen.io/AllForTheCode/pen/rvPNeg</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: MISC.JS</b><hr></b></h2>




<h3><b>cycle(pos, max)</b></h3>
cycles from 0 to max based on pos, will cycle back to 0 if over max<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>pos</td>
		<td>number</td>
		<td>position of max</td>
	</tr>
	<tr>
		<td>max</td>
		<td>number</td>
		<td>max number to cycle to</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/BxMZBZ' target='_blank'>https://codepen.io/AllForTheCode/pen/BxMZBZ</a>


<hr><br><br><br>
    


<h3><b>cycle(pos, max)</b></h3>
cycles from 0 to max based on pos, will cycle back to 0 if over max<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>pos</td>
		<td>number</td>
		<td>position of max</td>
	</tr>
	<tr>
		<td>max</td>
		<td>number</td>
		<td>max number to cycle to</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/BxMZBZ' target='_blank'>https://codepen.io/AllForTheCode/pen/BxMZBZ</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: RANDOM.JS</b><hr></b></h2>




<h3><b>getRandomInt(min,max)</b></h3>
returns a random number / int betwen your specified min and max values<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>min</td>
		<td>number</td>
		<td>the minimum your random number is allowed to go</td>
	</tr>
	<tr>
		<td>max</td>
		<td>number</td>
		<td>the maximum your random number is allowed to go</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - getRandom

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/PeVqLp' target='_blank'>https://codepen.io/AllForTheCode/pen/PeVqLp</a>


<hr><br><br><br>
    


<h3><b>getRandomInt(min,max)</b></h3>
returns a random number / int betwen your specified min and max values<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>min</td>
		<td>number</td>
		<td>the minimum your random number is allowed to go</td>
	</tr>
	<tr>
		<td>max</td>
		<td>number</td>
		<td>the maximum your random number is allowed to go</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - getRandom

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/PeVqLp' target='_blank'>https://codepen.io/AllForTheCode/pen/PeVqLp</a>


<hr><br><br><br>
    


<h3><b>getRandomThatsNot(min,max,not)</b></h3>
returns a random int betwen your specified min and max values but never the not value<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>min</td>
		<td>number</td>
		<td>the minimum your random number is allowed to go</td>
	</tr>
	<tr>
		<td>max</td>
		<td>number</td>
		<td>the maximum your random number is allowed to go</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - getRandom

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/yEBZNq' target='_blank'>https://codepen.io/AllForTheCode/pen/yEBZNq</a>


<hr><br><br><br>
    


<h3><b>getRandomFloat(min,max)</b></h3>
returns a random floating point number betwen your specified min and max values<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>min</td>
		<td>number</td>
		<td>min value</td>
	</tr>
	<tr>
		<td>max</td>
		<td>number</td>
		<td>max value</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/gzqaYm' target='_blank'>https://codepen.io/AllForTheCode/pen/gzqaYm</a>


<hr><br><br><br>
    


<h3><b>randomString(length)</b></h3>
get a random string of a specified length<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>length</td>
		<td>number</td>
		<td>the length of the string you wish to generate</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - getRandomString

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/QrYjwr' target='_blank'>https://codepen.io/AllForTheCode/pen/QrYjwr</a>


<hr><br><br><br>
    


<h3><b>getUID(length)</b></h3>
Generates a random id<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>length</td>
		<td>number</td>
		<td>length of the unique id to generate</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - getUID
 - generateUID

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/NMoGGY' target='_blank'>https://codepen.io/AllForTheCode/pen/NMoGGY</a>


<hr><br><br><br>
    


<h3><b>getArrayOfRandomNumbers(arraySize,min,max)</b></h3>
generate an array of random number between your max and min values<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>arraySize</td>
		<td>number</td>
		<td>the number of random numbers to generate also the array size that will be returned</td>
	</tr>
	<tr>
		<td>min</td>
		<td>number</td>
		<td>the minimum your random number is allowed to be</td>
	</tr>
	<tr>
		<td>max</td>
		<td>number</td>
		<td>the maximum your random number is allowed to be</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/NMoGdz' target='_blank'>https://codepen.io/AllForTheCode/pen/NMoGdz</a>


<hr><br><br><br>
    


<h3><b>getArrayOfRandomStrings(arraySize,strLength)</b></h3>
generate an array of random string of a specified length<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>arraySize</td>
		<td>number</td>
		<td>the number of random strings to generate also the array size that will be returned</td>
	</tr>
	<tr>
		<td>strLength</td>
		<td>number</td>
		<td>the length of the strings to be generated</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/BVNJvB' target='_blank'>https://codepen.io/AllForTheCode/pen/BVNJvB</a>


<hr><br><br><br>
    


<h3><b>guid()</b></h3>
generates a guid<br>

<details>
    <summary><b>More information</b></summary>



<h4>Alias's:</h4>
 - getGUID

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/MGLayZ' target='_blank'>https://codepen.io/AllForTheCode/pen/MGLayZ</a>


<hr><br><br><br>
    


<h3><b>getWeightedRandom(odds, iterations)</b></h3>
Get a weighted random based on odds and iterations<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>odds</td>
		<td>array</td>
		<td>array of odds</td>
	</tr>
	<tr>
		<td>iterations</td>
		<td>number</td>
		<td>number of iterations to run on each number test</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/RyvWjZ' target='_blank'>https://codepen.io/AllForTheCode/pen/RyvWjZ</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: STRING.JS</b><hr></b></h2>




<h3><b>limitLengthInWords(str, maxWords)</b></h3>
Limit a string in length of words<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>str</td>
		<td>string</td>
		<td>the original string to limit</td>
	</tr>
	<tr>
		<td>maxWords</td>
		<td>number</td>
		<td>the number of words you wish to limit to</td>
	</tr>
</table>


<b>Returns:</b> {output

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/xjMdye' target='_blank'>https://codepen.io/AllForTheCode/pen/xjMdye</a>


<hr><br><br><br>
    


<h3><b>limitLengthInWords(str, maxWords)</b></h3>
Limit a string in length of words<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>str</td>
		<td>string</td>
		<td>the original string to limit</td>
	</tr>
	<tr>
		<td>maxWords</td>
		<td>number</td>
		<td>the number of words you wish to limit to</td>
	</tr>
</table>


<b>Returns:</b> {output

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/xjMdye' target='_blank'>https://codepen.io/AllForTheCode/pen/xjMdye</a>


<hr><br><br><br>
    


<h3><b>cleanJSONString(s)</b></h3>
Attempts to clean a json string<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>s</td>
		<td>string</td>
		<td>input string</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/BxMRER' target='_blank'>https://codepen.io/AllForTheCode/pen/BxMRER</a>


<hr><br><br><br>
    


<h3><b>escapeHTML(input)</b></h3>
Attempts to escape a html string<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>input</td>
		<td>string</td>
		<td>the string you wish to escape</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/PerGRJ' target='_blank'>https://codepen.io/AllForTheCode/pen/PerGRJ</a>


<hr><br><br><br>
    


<h3><b>cutStringTo(input, len)</b></h3>
sets the length of a string from left to right<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>input</td>
		<td>string</td>
		<td>what string do you want to set the length of?</td>
	</tr>
	<tr>
		<td>length</td>
		<td>number</td>
		<td>the length you want the string to be</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - cutStringTo
 - cutString
 - cutStringLength
 - setStrLen
 - trimStringLength

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/VxJKEm' target='_blank'>https://codepen.io/AllForTheCode/pen/VxJKEm</a>


<hr><br><br><br>
    


<h3><b>trimStringBy(input, trimBy)</b></h3>
Trims the length of a string by a value<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>input</td>
		<td>string</td>
		<td>The string you want to trim</td>
	</tr>
	<tr>
		<td>trimBy</td>
		<td>number</td>
		<td>How many characters do you want to trim off the end</td>
	</tr>
</table>



<h4>Alias's:</h4>
 - tTrim

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/BxgLvr' target='_blank'>https://codepen.io/AllForTheCode/pen/BxgLvr</a>


<hr><br><br><br>
    


<h3><b>leftTrim(str, by)</b></h3>
Trims the left of a string by a specified amount<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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



<h4>Alias's:</h4>
 - lTrim

</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/wXayva' target='_blank'>https://codepen.io/AllForTheCode/pen/wXayva</a>


<hr><br><br><br>
    


<h3><b>getFileExtension(input)</b></h3>
Attempts to get the file extension from a file path string<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/OZeRqv' target='_blank'>https://codepen.io/AllForTheCode/pen/OZeRqv</a>


<hr><br><br><br>
    


<h3><b>getFileExtension2(input)</b></h3>
Attempts to get the file extension from a file path string<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/OZeRqv' target='_blank'>https://codepen.io/AllForTheCode/pen/OZeRqv</a>


<hr><br><br><br>
    


<h3><b>getLastPartOfUrl(url)</b></h3>
Gets the last part of a URL<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/gzNwNv' target='_blank'>https://codepen.io/AllForTheCode/pen/gzNwNv</a>


<hr><br><br><br>
    


<h3><b>removeFileFromPath(path)</b></h3>
Attempts to remove the file from a file path string<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/QrXGWY' target='_blank'>https://codepen.io/AllForTheCode/pen/QrXGWY</a>


<hr><br><br><br>
    


<h3><b>getAnchor(url)</b></h3>
Get anchor from url<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/xxxxxxx' target='_blank'>https://codepen.io/AllForTheCode/pen/xxxxxxx</a>


<hr><br><br><br>
    


<h3><b>String.prototype.startsWith(str)</b></h3>
ES6 supports the startsWith(), this is for pre ES6 support<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/xxxxxxx' target='_blank'>https://codepen.io/AllForTheCode/pen/xxxxxxx</a>


<hr><br><br><br>
    


<h3><b>String.prototype.endsWith(str)</b></h3>
ES6 supports endsWith(), this is for pre ES6 support<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/xxxxxxx' target='_blank'>https://codepen.io/AllForTheCode/pen/xxxxxxx</a>


<hr><br><br><br>
    


<h3><b>getStringBetween(input,start,end)</b></h3>
Gets a string between two other strings<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/xxxxxxx' target='_blank'>https://codepen.io/AllForTheCode/pen/xxxxxxx</a>


<hr><br><br><br>
    


<h3><b>getAllStringsBetween(str,start,end)</b></h3>
Gets all strings between two other strings (multi match)<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/xxxxxxx' target='_blank'>https://codepen.io/AllForTheCode/pen/xxxxxxx</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: TABLES.JS</b><hr></b></h2>




<h3><b>[title]</b></h3>
[desc]

<details>
    <summary><b>More information</b></summary>
[table]
[methods]
[return]
[alias]
</details>

[links]

<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: VALIDATION.JS</b><hr></b></h2>




<h3><b>validateEmail(email)</b></h3>
Validats an email address<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/xjogjy' target='_blank'>https://codepen.io/AllForTheCode/pen/xjogjy</a>


<hr><br><br><br>
    


<h3><b>validateEmail(email)</b></h3>
Validats an email address<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/xjogjy' target='_blank'>https://codepen.io/AllForTheCode/pen/xjogjy</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: VIDEO.JS</b><hr></b></h2>




<h3><b>[title]</b></h3>
[desc]

<details>
    <summary><b>More information</b></summary>
[table]
[methods]
[return]
[alias]
</details>

[links]

<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: AFTC.COLOR.JS</b><hr></b></h2>




<h3><b>AFTC.Color({params})</b></h3>
Color allows you to create, convert, lighten or darken colours and more.<br>```<br>var color1 = new AFTC.Color(); // creates a random color<br>var color2 = new AFTC.Color({r<br>var color3 = new AFTC.Color({r<br>log( color3.getHex() ); // Outputs the hex code of color 3<br>```<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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


<h4> Methods:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>lighten(percent,spectrum)</td>
		<td>lighten the color by precent and optional spectrum {r</td>
	</tr>
	<tr>
		<td>darken(percent,spectrum)</td>
		<td>darken the color by precent and optional spectrum {r</td>
	</tr>
	<tr>
		<td>randomizeColor</td>
		<td>randomises the colour</td>
	</tr>
	<tr>
		<td>getRGBSstring</td>
		<td>returns the RGB value of the color</td>
	</tr>
	<tr>
		<td>getRGBASstring</td>
		<td>returns the RGBA value of the color</td>
	</tr>
	<tr>
		<td>getHexString</td>
		<td>returns the HEX value of the color</td>
	</tr>
	<tr>
		<td>getHex</td>
		<td>returns the HEX value of the color</td>
	</tr>
	<tr>
		<td>hex</td>
		<td>returns the HEX value of the color</td>
	</tr>
	<tr>
		<td>getRGB</td>
		<td>returns the RGB value of the color</td>
	</tr>
	<tr>
		<td>rgb</td>
		<td>returns the RGB value of the color</td>
	</tr>
	<tr>
		<td>getRGBA</td>
		<td>returns the RGBA value of the color</td>
	</tr>
	<tr>
		<td>rgba</td>
		<td>returns the RGBA value of the color</td>
	</tr>
	<tr>
		<td>setRGB</td>
		<td>returns the RGB value of the color</td>
	</tr>
	<tr>
		<td>setHex</td>
		<td>returns the HEX value of the color</td>
	</tr>
</table>



</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/mLZRge' target='_blank'>https://codepen.io/AllForTheCode/pen/mLZRge</a>


<hr><br><br><br>
    


<h3><b>AFTC.Color({params})</b></h3>
Color allows you to create, convert, lighten or darken colours and more.<br>```<br>var color1 = new AFTC.Color(); // creates a random color<br>var color2 = new AFTC.Color({r<br>var color3 = new AFTC.Color({r<br>log( color3.getHex() ); // Outputs the hex code of color 3<br>```<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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


<h4> Methods:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>lighten(percent,spectrum)</td>
		<td>lighten the color by precent and optional spectrum {r</td>
	</tr>
	<tr>
		<td>darken(percent,spectrum)</td>
		<td>darken the color by precent and optional spectrum {r</td>
	</tr>
	<tr>
		<td>randomizeColor</td>
		<td>randomises the colour</td>
	</tr>
	<tr>
		<td>getRGBSstring</td>
		<td>returns the RGB value of the color</td>
	</tr>
	<tr>
		<td>getRGBASstring</td>
		<td>returns the RGBA value of the color</td>
	</tr>
	<tr>
		<td>getHexString</td>
		<td>returns the HEX value of the color</td>
	</tr>
	<tr>
		<td>getHex</td>
		<td>returns the HEX value of the color</td>
	</tr>
	<tr>
		<td>hex</td>
		<td>returns the HEX value of the color</td>
	</tr>
	<tr>
		<td>getRGB</td>
		<td>returns the RGB value of the color</td>
	</tr>
	<tr>
		<td>rgb</td>
		<td>returns the RGB value of the color</td>
	</tr>
	<tr>
		<td>getRGBA</td>
		<td>returns the RGBA value of the color</td>
	</tr>
	<tr>
		<td>rgba</td>
		<td>returns the RGBA value of the color</td>
	</tr>
	<tr>
		<td>setRGB</td>
		<td>returns the RGB value of the color</td>
	</tr>
	<tr>
		<td>setHex</td>
		<td>returns the HEX value of the color</td>
	</tr>
</table>



</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/mLZRge' target='_blank'>https://codepen.io/AllForTheCode/pen/mLZRge</a>


<hr><br><br><br>
    


<h3><b>getRandomColor()</b></h3>
returns a random RGB object o.r, o.g, o.g<br>

<details>
    <summary><b>More information</b></summary>




</details>



<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: AFTC.ANIMATE.JS</b><hr></b></h2>




<h3><b>AFTC.Animate(elementId, onComplete)</b></h3>
Quick and easy css animation for nearly every css element style<br>```<br>var anim1 = new AFTC.Animate("box1", onCompleteFunction);<br>anim1.wait(2); // wait in 2 seconds<br>anim1.set("backgroundColor","RGBA(255,255,255,0.5)"); // sets background color to white 50% opacity<br>anim1.anim("fontColor","RGBA(255,0,0,1)",1.5); // animates the font color to red over 1.5 seconds<br>anim1.set(["html","paddingLeft",left"],["hello","10px","100px"],[1,2,3]); // sets innerHTML, padding-left and left position over 1, 2 and 3 seconds<br>```<br>

<details>
    <summary><b>More information</b></summary>




</details>

<h4> Usage examples:</h4>
 - <a href='see usage example in test/animation.htm' target='_blank'>see usage example in test/animation.htm</a>
 - <a href='https://codepen.io/AllForTheCode/pen/MXYGob' target='_blank'>https://codepen.io/AllForTheCode/pen/MXYGob</a>
 - <a href='https://codepen.io/AllForTheCode/pen/MXYPqq' target='_blank'>https://codepen.io/AllForTheCode/pen/MXYPqq</a>
 - <a href='https://codepen.io/AllForTheCode/pen/xzbymv' target='_blank'>https://codepen.io/AllForTheCode/pen/xzbymv</a>


<hr><br><br><br>
    


<h3><b>AFTC.Animate(elementId, onComplete)</b></h3>
Quick and easy css animation for nearly every css element style<br>```<br>var anim1 = new AFTC.Animate("box1", onCompleteFunction);<br>anim1.wait(2); // wait in 2 seconds<br>anim1.set("backgroundColor","RGBA(255,255,255,0.5)"); // sets background color to white 50% opacity<br>anim1.anim("fontColor","RGBA(255,0,0,1)",1.5); // animates the font color to red over 1.5 seconds<br>anim1.set(["html","paddingLeft",left"],["hello","10px","100px"],[1,2,3]); // sets innerHTML, padding-left and left position over 1, 2 and 3 seconds<br>```<br>

<details>
    <summary><b>More information</b></summary>




</details>

<h4> Usage examples:</h4>
 - <a href='see usage example in test/animation.htm' target='_blank'>see usage example in test/animation.htm</a>
 - <a href='https://codepen.io/AllForTheCode/pen/MXYGob' target='_blank'>https://codepen.io/AllForTheCode/pen/MXYGob</a>
 - <a href='https://codepen.io/AllForTheCode/pen/MXYPqq' target='_blank'>https://codepen.io/AllForTheCode/pen/MXYPqq</a>
 - <a href='https://codepen.io/AllForTheCode/pen/xzbymv' target='_blank'>https://codepen.io/AllForTheCode/pen/xzbymv</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: AFTC.AUDIO.JS</b><hr></b></h2>




<h3><b>AFTC.Audio({options})</b></h3>
An audio player with preloading capabilities, looping abilities and loop offset capabilities<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>s</td>
		<td>src</td>
		<td>String or Array of urls/paths to sound files</td>
	</tr>
	<tr>
		<td>s</td>
		<td>cache</td>
		<td>To cache or not to cache</td>
	</tr>
	<tr>
		<td>s</td>
		<td>volume</td>
		<td>0 to 1</td>
	</tr>
	<tr>
		<td>s</td>
		<td>repeat</td>
		<td>-1 forever, 0 play once only, or the number of times to repeat</td>
	</tr>
	<tr>
		<td>s</td>
		<td>preload</td>
		<td>true or false</td>
	</tr>
	<tr>
		<td>s</td>
		<td>offsetLoopBy</td>
		<td>the sample offset from the end that you wish to loop by can help remove loop gaps</td>
	</tr>
	<tr>
		<td>s</td>
		<td>onUpdate</td>
		<td>the function you wish to run when your sound is playing provides and info object</td>
	</tr>
	<tr>
		<td>s</td>
		<td>onReady</td>
		<td>the function you wish to run when your sound is ready and can play</td>
	</tr>
	<tr>
		<td>s</td>
		<td>onComplete</td>
		<td>the function you wish to run when your sound has finished playing</td>
	</tr>
	<tr>
		<td>s</td>
		<td>hideWarnings</td>
		<td>hides notices in console for compatibility issues when not using mp3 etc</td>
	</tr>
</table>


<h4> Methods:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>play</td>
		<td>Play audio</td>
	</tr>
	<tr>
		<td>stop</td>
		<td>Stop audio</td>
	</tr>
	<tr>
		<td>pause</td>
		<td>Pause audio</td>
	</tr>
	<tr>
		<td>resume</td>
		<td>Resume ausio</td>
	</tr>
</table>



</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/NzWrvm' target='_blank'>https://codepen.io/AllForTheCode/pen/NzWrvm</a>


<hr><br><br><br>
    


<h3><b>AFTC.Audio({options})</b></h3>
An audio player with preloading capabilities, looping abilities and loop offset capabilities<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>s</td>
		<td>src</td>
		<td>String or Array of urls/paths to sound files</td>
	</tr>
	<tr>
		<td>s</td>
		<td>cache</td>
		<td>To cache or not to cache</td>
	</tr>
	<tr>
		<td>s</td>
		<td>volume</td>
		<td>0 to 1</td>
	</tr>
	<tr>
		<td>s</td>
		<td>repeat</td>
		<td>-1 forever, 0 play once only, or the number of times to repeat</td>
	</tr>
	<tr>
		<td>s</td>
		<td>preload</td>
		<td>true or false</td>
	</tr>
	<tr>
		<td>s</td>
		<td>offsetLoopBy</td>
		<td>the sample offset from the end that you wish to loop by can help remove loop gaps</td>
	</tr>
	<tr>
		<td>s</td>
		<td>onUpdate</td>
		<td>the function you wish to run when your sound is playing provides and info object</td>
	</tr>
	<tr>
		<td>s</td>
		<td>onReady</td>
		<td>the function you wish to run when your sound is ready and can play</td>
	</tr>
	<tr>
		<td>s</td>
		<td>onComplete</td>
		<td>the function you wish to run when your sound has finished playing</td>
	</tr>
	<tr>
		<td>s</td>
		<td>hideWarnings</td>
		<td>hides notices in console for compatibility issues when not using mp3 etc</td>
	</tr>
</table>


<h4> Methods:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>play</td>
		<td>Play audio</td>
	</tr>
	<tr>
		<td>stop</td>
		<td>Stop audio</td>
	</tr>
	<tr>
		<td>pause</td>
		<td>Pause audio</td>
	</tr>
	<tr>
		<td>resume</td>
		<td>Resume ausio</td>
	</tr>
</table>



</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/NzWrvm' target='_blank'>https://codepen.io/AllForTheCode/pen/NzWrvm</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: AFTC.COLOR.JS</b><hr></b></h2>




<h3><b>AFTC.Color({params})</b></h3>
Color allows you to create, convert, lighten or darken colours and more.<br>```<br>var color1 = new AFTC.Color(); // creates a random color<br>var color2 = new AFTC.Color({r<br>var color3 = new AFTC.Color({r<br>log( color3.getHex() ); // Outputs the hex code of color 3<br>```<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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


<h4> Methods:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>lighten(percent,spectrum)</td>
		<td>lighten the color by precent and optional spectrum {r</td>
	</tr>
	<tr>
		<td>darken(percent,spectrum)</td>
		<td>darken the color by precent and optional spectrum {r</td>
	</tr>
	<tr>
		<td>randomizeColor</td>
		<td>randomises the colour</td>
	</tr>
	<tr>
		<td>getRGBSstring</td>
		<td>returns the RGB value of the color</td>
	</tr>
	<tr>
		<td>getRGBASstring</td>
		<td>returns the RGBA value of the color</td>
	</tr>
	<tr>
		<td>getHexString</td>
		<td>returns the HEX value of the color</td>
	</tr>
	<tr>
		<td>getHex</td>
		<td>returns the HEX value of the color</td>
	</tr>
	<tr>
		<td>hex</td>
		<td>returns the HEX value of the color</td>
	</tr>
	<tr>
		<td>getRGB</td>
		<td>returns the RGB value of the color</td>
	</tr>
	<tr>
		<td>rgb</td>
		<td>returns the RGB value of the color</td>
	</tr>
	<tr>
		<td>getRGBA</td>
		<td>returns the RGBA value of the color</td>
	</tr>
	<tr>
		<td>rgba</td>
		<td>returns the RGBA value of the color</td>
	</tr>
	<tr>
		<td>setRGB</td>
		<td>returns the RGB value of the color</td>
	</tr>
	<tr>
		<td>setHex</td>
		<td>returns the HEX value of the color</td>
	</tr>
</table>



</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/mLZRge' target='_blank'>https://codepen.io/AllForTheCode/pen/mLZRge</a>


<hr><br><br><br>
    


<h3><b>AFTC.Color({params})</b></h3>
Color allows you to create, convert, lighten or darken colours and more.<br>```<br>var color1 = new AFTC.Color(); // creates a random color<br>var color2 = new AFTC.Color({r<br>var color3 = new AFTC.Color({r<br>log( color3.getHex() ); // Outputs the hex code of color 3<br>```<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
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


<h4> Methods:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>lighten(percent,spectrum)</td>
		<td>lighten the color by precent and optional spectrum {r</td>
	</tr>
	<tr>
		<td>darken(percent,spectrum)</td>
		<td>darken the color by precent and optional spectrum {r</td>
	</tr>
	<tr>
		<td>randomizeColor</td>
		<td>randomises the colour</td>
	</tr>
	<tr>
		<td>getRGBSstring</td>
		<td>returns the RGB value of the color</td>
	</tr>
	<tr>
		<td>getRGBASstring</td>
		<td>returns the RGBA value of the color</td>
	</tr>
	<tr>
		<td>getHexString</td>
		<td>returns the HEX value of the color</td>
	</tr>
	<tr>
		<td>getHex</td>
		<td>returns the HEX value of the color</td>
	</tr>
	<tr>
		<td>hex</td>
		<td>returns the HEX value of the color</td>
	</tr>
	<tr>
		<td>getRGB</td>
		<td>returns the RGB value of the color</td>
	</tr>
	<tr>
		<td>rgb</td>
		<td>returns the RGB value of the color</td>
	</tr>
	<tr>
		<td>getRGBA</td>
		<td>returns the RGBA value of the color</td>
	</tr>
	<tr>
		<td>rgba</td>
		<td>returns the RGBA value of the color</td>
	</tr>
	<tr>
		<td>setRGB</td>
		<td>returns the RGB value of the color</td>
	</tr>
	<tr>
		<td>setHex</td>
		<td>returns the HEX value of the color</td>
	</tr>
</table>



</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/mLZRge' target='_blank'>https://codepen.io/AllForTheCode/pen/mLZRge</a>


<hr><br><br><br>
    


<h3><b>getRandomColor()</b></h3>
returns a random RGB object o.r, o.g, o.g<br>

<details>
    <summary><b>More information</b></summary>




</details>



<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: AFTC.VISIBILITY.JS</b><hr></b></h2>




<h3><b>[title]</b></h3>
[desc]

<details>
    <summary><b>More information</b></summary>
[table]
[methods]
[return]
[alias]
</details>

[links]

<hr><br><br><br>
    

<hr><hr><br><br><br>





<h2><b><b>FILE: AFTC.XHR.JS</b><hr></b></h2>




<h3><b>AFTC.XHR({options})</b></h3>
Quick and easy xhr/ajax<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>s</td>
		<td>seelink</td>
		<td>please review link</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/dKodKx' target='_blank'>https://codepen.io/AllForTheCode/pen/dKodKx</a>


<hr><br><br><br>
    


<h3><b>AFTC.XHR({options})</b></h3>
Quick and easy xhr/ajax<br>

<details>
    <summary><b>More information</b></summary>

<h4>Parameters:</h4>
<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>s</td>
		<td>seelink</td>
		<td>please review link</td>
	</tr>
</table>




</details>

<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/dKodKx' target='_blank'>https://codepen.io/AllForTheCode/pen/dKodKx</a>


<hr><br><br><br>
    

<hr><hr><br><br><br>

<br><br><br>


<br><br><br>




## <b>Found this useful? Please Donate...</b>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<br><br><br><br>


<a href="http://pph.me/Darcey" target="_blank" title="I am available for hire, click here!">![Hire](http://www.allforthecode.com/images/pph_widget.jpg)</a>