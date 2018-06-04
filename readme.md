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
 <a href='https://github.com/DarceyLloyd/AFTC.js#addclasselementoridclassname'>addClass(elementOrId,classname)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#addeventobjtypefnusecapture'>addEvent(obj,type,fn,useCapture)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#aftcanimate'>AFTC.Animate()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#aftcanimateelementidoncomplete'>AFTC.Animate(elementId, onComplete)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#aftcaudiooptions'>AFTC.Audio({options})</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#aftccolorparams'>AFTC.Color({params})</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#aftcpointxy'>AFTC.Point(x,y)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#aftcrectanglexywh'>AFTC.Rectangle(x, y, w, h)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#aftcvelocityvxvy'>AFTC.Velocity(vx,vy)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#aftcxhroptions'>AFTC.XHR({options})</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#argstoobjectfargsobjstrict'>argsToObject(fArgs, obj, strict)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#arraycontainsneedlehaystack'>arrayContains(needle,haystack)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#arrayemptyarr'>arrayEmpty(arr)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#arraygetminarr'>arrayGetMin(arr)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#arrayremoveindexarrindex'>arrayRemoveIndex(arr,index)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#arrayshufflearr'>arrayShuffle(arr)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#arrayshuffle2arr'>arrayShuffle2(arr)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#arraytosinglelinestringarr'>arrayToSingleLineString(arr)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#booltostringbool'>boolToString(bool)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#booltoyesnobool'>boolToYesNo(bool)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#centerabsoluteelementelementid'>centerAbsoluteElement(elementId)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#cleanjsonstrings'>cleanJSONString(s)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#cls'>cls()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#converttoarrayval'>convertToArray(val)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#cutstringtoinputlen'>cutStringTo(input, len)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#cycleposmax'>cycle(pos, max)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#degtoradinput'>degToRad(input)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#escapehtmlinput'>escapeHTML(input)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#exitfullscreen'>exitFullScreen()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getallstringsbetweenstrstartend'>getAllStringsBetween(str,start,end)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getanchorurl'>getAnchor(url)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getarrayofrandomnumbersarraysizeminmax'>getArrayOfRandomNumbers(arraySize,min,max)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getarrayofrandomstringsarraysizestrlength'>getArrayOfRandomStrings(arraySize,strLength)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getbooleanfrominput'>getBooleanFrom(input)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getbrowser'>getBrowser()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getcookiename'>getCookie(name)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getdatetimelocal'>getDateTime(local)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getdaysbetweenstartdatetimeenddatetime'>getDaysBetween(startDateTime, endDateTime)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getelementbyclassnameclassname'>getElementByClassName(className)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getelementbyidid'>getElementById(id)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getelementbynamename'>getElementByName(name)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getelementbytagnametagname'>getElementByTagName(tagName)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getelementoffsettopelementid'>getElementOffsetTop(elementId)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getelementsbyclassnameclassname'>getElementsByClassName(className)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getelementsbynamename'>getElementsByName(name)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getelementsbytagnametagname'>getElementsByTagName(tagName)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getfileextensioninput'>getFileExtension(input)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getfileextension2input'>getFileExtension2(input)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getfunctionnamefn'>getFunctionName(fn)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getieversion'>getIEVersion()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getlastpartofurlurl'>getLastPartOfUrl(url)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getmaxfromarrayarr'>getMaxFromArray(arr)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getostestuseragent'>getOS(testUserAgent)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getrandomcolor'>getRandomColor()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getrandomfloatminmax'>getRandomFloat(min,max)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getrandomintminmax'>getRandomInt(min,max)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getrandomthatsnotminmaxnot'>getRandomThatsNot(min,max,not)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getsqldatetime'>getSQLDateTime()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getstringbetweeninputstartend'>getStringBetween(input,start,end)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getuidlength'>getUID(length)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getukdatefromdatedte'>getUKDateFromDate(dte)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getukdatefromdbdatetimeinput'>getUkDateFromDbDateTime(input)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getukdatetimefromdbdatetimeinput'>getUkDateTimeFromDbDateTime(input)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getusdatefromdatedte'>getUSDateFromDate(dte)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#getweightedrandomoddsiterations'>getWeightedRandom(odds, iterations)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#gofullscreenelement'>goFullScreen(element)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#guid'>guid()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#hasclasselementoridcls'>hasClass(elementOrId, cls)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#hextorgbhex'>hexToRgb(hex)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#ios'>iOS()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#isalphanumericinput'>isAlphaNumeric(input)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#isandroid'>isAndroid()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#isarrayinput'>isArray(input)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#isbooleaninput'>isBoolean(input)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#ischeckedelementid'>isChecked(elementId)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#ischrome'>isChrome()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#isdomobj'>isDOM(obj)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#isedge'>isEdge()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#iselemento'>isElement(o)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#iselement2element'>isElement2(element)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#isevenn'>isEven(n)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#isfirefox'>isFireFox()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#isie'>isIE()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#isinstringfindsource'>isInString(find,source)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#ismobile'>isMobile()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#isnumberkeyevt'>isNumberKey(evt)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#isnumericn'>isNumeric(n)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#isoddn'>isOdd(n)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#isopera'>isOpera()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#issafari'>isSafari()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#isstringinarrayneedlehaystack'>isStringInArray(needle,haystack)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#lefttrimstrby'>leftTrim(str, by)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#limitlengthinwordsstrmaxwords'>limitLengthInWords(str, maxWords)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#log'>log(*)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#logdisable'>logDisable()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#logenable'>logEnable()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#logtoelement'>logTo(element)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#logtodisable'>logToDisable()</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#onreadyfn'>onReady(fn)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#opendebugwindowhtml'>openDebugWindow(html)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#parsearraytofloatarr'>parseArrayToFloat(arr)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#parsearraytointarr'>parseArrayToInt(arr)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#parsejsontoselectjselectelementidorelementlabelvalue'>parseJSONToSelect(j, selectElementIdOrElement, label, value)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#queryselectorquery'>querySelector(query)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#radtodeginput'>radToDeg(input)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#randomstringlength'>randomString(length)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#redirecturl'>redirect(url)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#removeallselectoptionselementid'>removeAllSelectOptions(elementId)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#removeclasselementoridclassname'>removeClass(elementOrId,className)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#removefilefrompathpath'>removeFileFromPath(path)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#rgb2hexrgb'>rgb2Hex(r,g,b)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#rgbtohexrgb'>rgbToHex(r,g,b)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#scrolltoelementelementiddurationoffset'>scrollToElement(elementId, duration, offset)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#setcookienamevalue'>setCookie(name, value)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#sethtmlelementoridhtml'>setHTML(elementOrId,html);</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#stringprototypeendswithstr'>String.prototype.endsWith(str)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#stringprototypestartswithstr'>String.prototype.startsWith(str)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#stringtoboolstr'>stringToBool(str)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#toarrayv'>toArray(v)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#tohexnum'>toHex(num)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#trimstringbyinputtrimby'>trimStringBy(input, trimBy)</a><br>
 <a href='https://github.com/DarceyLloyd/AFTC.js#validateemailemail'>validateEmail(email)</a><br>
<br><br>
<h4>Browse on codepen</h4>
<a href='https://codepen.io/AllForTheCode/pens/public/?grid_type=list' target='_blank'>https://codepen.io/AllForTheCode/pens/public/?grid_type=list</a>
<br><br><hr><br><br>



<h1><b>For some reason NPM is having trouble with the README.MD from github, please view documentation there...</b></h2>

<a href="https://github.com/DarceyLloyd/AFTC.js" target="_blank">https://github.com/DarceyLloyd/AFTC.js</a>



<br><br><br><br><br>

<br><br><br>


<br><br><br>




## <b>Found this useful? Please Donate...</b>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<br><br><br><br>


<a href="http://pph.me/Darcey" target="_blank" title="I am available for hire, click here!">![Hire](http://www.allforthecode.com/images/pph_widget.jpg)</a>