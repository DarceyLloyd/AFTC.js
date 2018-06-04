# <b>AFTC.js</b>
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<b>A collection of utilities / functions I find useful when working with JavaScript.</b>

<br>

<h3><b>Find AFTC.JS useful? Please Donate...</b></h3>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<br>
 <hr>
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
    































<br><br><br><br><br>





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
    





















<br><br><br><br><br>





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
    







<br><br><br><br><br>





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
    



























<br><br><br><br><br>





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
    





<br><br><br><br><br>





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
    







<br><br><br><br><br>





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
    















<br><br><br><br><br>





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
    



<br><br><br><br><br>





<h2><b><b>FILE: DETECTION.JS</b><hr></b></h2>




<h3><b>isMobile()</b></h3>

Detects if the device you are using is a mobile or not<br>

<details>

<summary><b>More information</b></summary>














</details>


<h4> Usage examples:</h4>
 - <a href='https://codepen.io/AllForTheCode/pen/KRbLdm' target='_blank'>https://codepen.io/AllForTheCode/pen/KRbLdm</a>



<hr><br><br><br>
    

























<br><br><br><br><br>





<h2><b><b>FILE: DOM.JS</b><hr></b></h2>




<h3><b>setHTML(elementOrId,html);</b></h3>

Quick shortcut for outputting html to an element<br>

```
setHTML("header","Welcome");

```


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
    









<br><br><br><br><br>





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
    

<br><br><br><br><br>





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
    





<br><br><br><br><br>





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
    









<br><br><br><br><br>





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
    







<br><br><br><br><br>





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
    



<br><br><br><br><br>





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
    





















<br><br><br><br><br>





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
    



<br><br><br><br><br>





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
    



















<br><br><br><br><br>





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
    































<br><br><br><br><br>





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
    

<br><br><br><br><br>





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
    



<br><br><br><br><br>





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
    

<br><br><br><br><br>





<h2><b><b>FILE: AFTC.COLOR.JS</b><hr></b></h2>




<h3><b>AFTC.Color({params})</b></h3>

Color allows you to create, convert, lighten or darken colours and more.<br>

```
var color1 = new AFTC.Color(); // creates a random color
var color2 = new AFTC.Color({r
var color3 = new AFTC.Color({r
log( color3.getHex() ); // Outputs the hex code of color 3

```


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
    





<br><br><br><br><br>





<h2><b><b>FILE: AFTC.ANIMATE.JS</b><hr></b></h2>




<h3><b>AFTC.Animate(elementId, onComplete)</b></h3>

Quick and easy css animation for nearly every css element style<br>

```
var anim1 = new AFTC.Animate("box1", onCompleteFunction);
anim1.wait(2); // wait in 2 seconds
anim1.set("backgroundColor","RGBA(255,255,255,0.5)"); // sets background color to white 50% opacity
anim1.anim("fontColor","RGBA(255,0,0,1)",1.5); // animates the font color to red over 1.5 seconds
anim1.set(["html","paddingLeft",left"],["hello","10px","100px"],[1,2,3]); // sets innerHTML, padding-left and left position over 1, 2 and 3 seconds

```


<details>

<summary><b>More information</b></summary>














</details>


<h4> Usage examples:</h4>
 - <a href='see usage example in test/animation.htm' target='_blank'>see usage example in test/animation.htm</a>
 - <a href='https://codepen.io/AllForTheCode/pen/MXYGob' target='_blank'>https://codepen.io/AllForTheCode/pen/MXYGob</a>
 - <a href='https://codepen.io/AllForTheCode/pen/MXYPqq' target='_blank'>https://codepen.io/AllForTheCode/pen/MXYPqq</a>
 - <a href='https://codepen.io/AllForTheCode/pen/xzbymv' target='_blank'>https://codepen.io/AllForTheCode/pen/xzbymv</a>



<hr><br><br><br>
    



<br><br><br><br><br>





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
    



<br><br><br><br><br>





<h2><b><b>FILE: AFTC.COLOR.JS</b><hr></b></h2>




<h3><b>AFTC.Color({params})</b></h3>

Color allows you to create, convert, lighten or darken colours and more.<br>

```
var color1 = new AFTC.Color(); // creates a random color
var color2 = new AFTC.Color({r
var color3 = new AFTC.Color({r
log( color3.getHex() ); // Outputs the hex code of color 3

```


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
    





<br><br><br><br><br>





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
    

<br><br><br><br><br>





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
    



<br><br><br><br><br>

<br><br><br>


<br><br><br>




## <b>Found this useful? Please Donate...</b>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<br><br><br><br>


<a href="http://pph.me/Darcey" target="_blank" title="I am available for hire, click here!">![Hire](http://www.allforthecode.com/images/pph_widget.jpg)</a>