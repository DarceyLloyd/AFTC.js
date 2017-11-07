# <b>AFTC.js</b>
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<b>A collection of utilities / functions I find useful when working with BROWSER based JavaScript.</b>

<br>

#### <b>Want the NodeJS version? https://github.com/DarceyLloyd/AFTC.Node.Libs</b>

<br>


## <b>Requirements:</b>
Some modules/builds require jQuery @1.12 or above, if they do it will be listed the gulpfile.js code comments and here in this readme.

### <b>Installation</b>
```
npm i aftc.js
gulp build
```

### <b>Build</b>
You can use webpack or gulp, I pref' gulp at the moment, I am also getting better file sizes minified with gulp than webpack.

```
gulp build
gulp watch
```



### <b>BUILD NOTES</b>:
The dist files in this version of AFTC.js do not come with jquery packaged into them and any modules of the AFTC.js tools / utilities suite that requires jQuery have been commented out in the gulp buildfile.

If you want io.js and jquery back in, just uncomment their lines in gulpfile.js and re-build via "gulp build". I have placed notes on which includes require jquery or GSAP.

- <b>Without jQuery - aftc.min.js is less than 25KB!</b>
- With jQuery - aftc.min.js is around 115KB
- WIthout jQuery, with TweenMax - aftc.min.js is around 125KB
- Without jQuery, with TweenLite & ScrollToPlugin - aftc.min.js is around 45KB!

I would recommend using TweenLite and the ScrollToPlugin unless your working with a lot of animation then I would go all out for TweenMax.

<b>If you have jQuery as part of your projects build, then no need to have it as part of the aftc.js build!</b>

<b>NOTE: It is recommended that essentials.js and then debug.js be added first and second or anywhere but in that order.</b>



<br>

## <b>Gulp Build Guide</b>

- Open aftc.js directory in VSCode
- Open "gulpfile.js"
- Comment out or uncomment any of the imports that you want or don't want
- Open terminal in VSCode by pressing CTRL + '
- Type into terminal
```
gulp build
```
- Now you can either copy aftc.min.js to your project or add it to your gulp/webpack concatination and mangle scripts or just add it as a script tag in your HTML.

<b>NOTE: It is recommended that debug.js and essentials.js be the first.</b>


<br>

## <b>What's new?</b>
- Bit of a re-structure on the files and some new ones created eg essentials.js and styling.js
- getElementById(str) - No more typing document.getElementById, now its just getElementById
- querySelector(str) - No more typing document.querySelector, now its just querySelector
- getElementById(id) - now caches element queries, is a lot lot faster than the normal document.getElementById but you wouldn't notice unless you were running massive queries all the time
- querySelector(str) - now caches element queries same as getElementById
- logTo(elementId,message) - reverted back to old version, I over engineered the last version and was no longer happy with it, broke my own rule, "keep it simple!"



<br><br><br><br><br><br>


# <b>So what's inside?</b>
#### Here is the list of functions in each of the files, pick and choose what you want to pack into aftc.js
<br>
<br>




# <b>debug.js</b>
## isNode(arg)
returns true if arg is a DOM node

## isElement(arg)
returns true if arg is a DOM element

## <b>log(arg)</b>
No more typing console.log, now you can just type log!

## <b>logEnable()</b> & <b>logDisable()</b>
Disable or Enable log, good for switching debug log outputs on and off quick and easy, can also be done per a file.

## <b>trace(arg)</b>
Still living in the actionscript days? Still sometimes type trace? trace is back! It's just log in disguse!

## <b>logTo(elementId,message)</b>
Want to see your log outputs on the page? logTo will dump them to a HTML element of choice for you, as well as logging them out to the console.

## <b>openDebugWindow(str)</b>
Aliases: stringToWindow(str) & stringToPopup(str)

Want to output a string to a popup window, just call openDebugWindow("hello world") and it will be done (note: most browsers will block this javascript function thse days, so you may want to click allow on any warnings that appear when you want to use this function)

## <b>dumpArgs()</b>
Will dump arguments[0] to the console for you in key value pairs, key = value.


<br><br><br>

# <b>essentials.js</b>

## <b>addEvent(obj,type,callback,eventReturn)</b>
Detects addEventListener availability and switches to attachEvent if it's not available.

## <b>isArray(arg)</b>
returns true if you supply it with an array, false if not.

## <b>getFunctionName(fn)</b>
Attempts to returns the name of a function.

## <b>getElementById(str)</b>
No more typing document.getElementById(str)! It's shorter and runs much quicker as it also caches element id queries.

## <b>querySelector(str)</b>
No more typing document.querySelector(str)! It's shorter and runs much quicker as it also caches dom element searches.




<br><br><br>

# <b>misc.js</b>

## <b>benchmark(benchMarkName)</b>
A quick and easy benchmarking function.
```
var bench = Benchmark();
// Do your stuff
var benchTime = bench.stop();
log("Your benchmark was completed in " + benchTime + "ms");
```

## <b>redirect(url)</b>
Redirct to a url of your choice.



<br><br><br>


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





<br><br><br>





# <b>random.js</b>
## <b>getRandomString(length:number)</b>
<b>Aliases:</b> randomString()

Returns a string of random characters between AZ and az to the length you specify.

## <b>guid()</b>
Returns a GUID.

## <b>getRandom(min,max)</b>
Aliases: getRandomInt(min,max);

Returns a random number between the min and max you specify.

## <b>getArrayOfRandomNumbers(arraySize,min,max)</b>
Returns an array of random numbers.

## <b>getArrayOfRandomStrings(arraySize,strLength)</b>
Returns an array of random strings.

## <b>getWeightedRandom(odds,iterations)</b>
Will return a weighted random. If you ever wanted to balance your random numbers to favor a more specific output use this.





<br><br><br>



# <b>string.js</b>

## escapeHTML
Escapes a HTML string (eg < turns into &amp;lt; etc)

## <b>trimStringLength(input,length)</b>
Trims a string to a number (length) of characters.

## <b>getFileExtension(file)</b>
Returns the file extension from a supplied file path if available

## <b>getFileExtension2(file)</b>
Returns the file extension from a supplied file path if available (method2)

## <b>getLastPartofUrl()</b>
Returns the last part of the URL

## <b>removeFileFromPath</b>
Attempts to remove the file from a full file path, eg a/b/c/text.txt would return a/b/c/

## <b>cleanJSONString(string)</b>
Will remove special characters from a json string and return it for you to JSON.parse




<br><br><br>




# <b>validation.js</b>

## <b>validateEmail(email)</b>
<b>Aliases:</b> isValidEmail(email)<br>
Validates an email adddress (string) via regex.






<br><br><br>





# <b>array.js</b>

## <b>arrayRemoveIndex(array,index)</b>
Removed an index from an array.

## <b>isArrayInString(string,array)</b>
Checks to see if any array items match or are in a string.

## <b>getMaxFromArray(array)</b>
Returns the maximum value from an array.

## <b>getMinFromArray(array)</b>
Returns the minimum value from an array.

## <b>shuffleArray(array)</b>
Will shuffle an array and return it to you. There are multiple shuffle functions, if you use this one it will pick one at random. To use them directly use arrayShuffle1(arr) or arrayShuffle2(arr).

## <b>arrayShuffle1(array)</b>
Returns a shuffled array based on random index picking (classic).

## <b>arrayShuffle2(array)</b>
Returns a shuffled array based on crypto.getRandomValues (supposed to be the crypto devs method of choice).






<br><br><br>







# <b>conversion.js</b>

## <b>radToDeg(radians)</b>
<b>Aliases:</b> rad2deg(radians)<br>
Converts radians to degrees.

## <b>degToRad(degrees)</b>
<b>Aliases:</b> deg2rad(degrees)<br>
Converts degrees to radians.

## <b>getBooleanFrom(arg)</b>
Converts strings such as yes, y, 1, true, n, false etc as well as numbers and a few other data types.

## <b>boolToString(boolean)</b>
Converts a boolean to a string.







<br><br><br>





# <b>cookies.js</b>

## <b>setCookie(name,value)</b>
Sets a javascript cookie.

## <b>getCookie(name)</b>
Reads a javascript cookie.





<br><br><br>





# <b>datetime.js</b>

## <b>getUkDateFromDbDateTime(arg)</b>
Gets a UK date from a MySQL datetime (2016-04-08 21:11:59).

## <b>getUkDateTimeFromDbDateTime(arg)</b>
Gets the UK date and time from a MySQL datetime (2016-04-08 21:11:59).

## <b>getSQLDateTime()</b>
Gets a MySQL compatible datetime from the javascript Date().

## <b>getDateTime(local)</b>
Gets a formatted datetime from the javascript Date() object. local:string can be "db", "us" or "gb". It will default to en-GB if local is not supplied.





<br><br><br>






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




<br><br><br>






# <b>dom.js</b>
#### <b>Dependencies:</b> aftc.js/src/essentials.js<br>

## <b>centerAbsoluteElement(element || elementId)</b>
Attempts to center an absolute positioned element within your browsers current dimensions.

## <b>lockBody({elementId:string})</b>
## <b>unlockBody()</b>
These functions can be used to lock and unlock the body element scroll capabilities (overflow). If you are programming overlays / insite popups then you will notice that some mobiles and browsers don't all lock the body scroll behind correctly, this will fix this issue.






<br><br><br>





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









<br><br><br>







# <b>io.js</b>
#### <b>Dependencies:</b> jQuery >= 1.12<br>

## <b>AJAXLoad($url, $method, $data, $callback)</b>
Sends data to a specified url, with a specified method (post||get) with a callback on success which will return the response.

## <b>loadJSONFile($url, $callback)</b>
Loads a json file and sends it to a callback function (onSuccess).







<br><br><br>




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






<br><br><br>










# <b>animation.jquery.js</b>
#### <b>Dependencies:</b> jQuery >= 1.12<br>

## <b>scrollToElementID(id, speed, delay)</b>
Scroll to an element specified by ID on the page, with speed and delay options.

## <b>scrollToElementClass(class, speed, delay)</b>
Scroll to an element specified by CLASS NAME on the page, width speed and delay options.

<br>
<br>

# <b>animation.gsap.js</b>
## <b>If file size matters and jQuery is too big then use this version, make sure you have TweenLite.min.js and ScrollToPlugin.min.js in your gulp build file list.</b>
#### <b>Dependencies:</b> gsap TweenLite & ScrollToPlugin<br>

## <b>scrollToElementID(id, speed, delay)</b>
Scroll to an element specified by ID on the page, with speed and delay options.

## <b>scrollToElementClass(class, speed, delay)</b>
Scroll to an element specified by CLASS NAME on the page, width speed and delay options.













<br>
<br><br><br><br><br><br>


## <b>Found this useful? Please Donate...</b>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<br><br><br><br><br><br>

[![Hire](https://www.allforthecode.co.uk/images/pph_widget.jpg)](http://pph.me/Darcey)

