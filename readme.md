# AFTC.js
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

A collection of utilities / functions I find make life easier when working with JavaScript.

### Requirements:
Some modules/files require jQuery 1.12 and above.

###  Instructions
```
npm install
npm run build // dist (minified)
npm run dev // dev (non-minified)
npm run watch // dev (auto rebuild on file change)
```

### My setup
1. Open directory in VSCode
2. Open terminal in VSCode by pressing
```
CTRL + ' 
```
3. Configure aftc.js
4. Type into terminal
```
npm run build
```
5. Copy the "aftc.min.js" to my project


### Configuration / Adding what you need
1. Either download the lib you want yourself and add it to source or use npm install eg
```
npm i lodash -S
```
2. Edit aftc.js, adding your require or include (note you may need to resolve certain libs paths eg see webpack.config.js as I've done it for jQuery )

3. npm run build


### Configuration
Edit aftc.js, comment out the features you don't require.



<br>
<br>
<br>
<br>

# <b>So what's inside?</b>
#### Here is the list of functions in each of the files, pick and choose what you want to pack into aftc.js
<br>
<br>



# <b>debug.js</b>
#### <b>Dependencies:</b> jQuery >= 1.6<br>

## <b>isElement(obj)</b>
Checks if your var is an element or not.

## <b>log(arg)</b>
Tired of typing console.log all the time? From now on just type log!

## <b>logDisable()</b>
Found your app to be full of log statements? Turn them all off with logEnable()

## <b>logEnable()</b>
Log not working? Why cant I see any of my console.log short cut output anymore? Turn them back on with this commoand

## <b>trace(arg)</b>
Do you still live in a ActionScript world? trace is back, same as log.

## <b>logTo($id, $msg)</b>
Want to see your debug on the page / app, logTo(elementId:String,value:String/Number) and it will appear in the element with the corresponding ID (if it exists)

## <b>debugWindow(arg)</b>
<b>Aliases:</b> stringToDebugWindow(arg); stringToPopup(arg); stringToWindow(arg);<br>
This will open a debugWindow to which you can specify its contents via arg:string.






<br>
<br>
<hr>

# <b>misc.js</b>
#### <b>Dependencies:</b> none<br>

## <b>redirect(url)</b>
Redirects to a specified page

## <b>getArgs</b>
Debug to console the Arguments a function has recieved.

## <b>getRandomInt(min,max)</b>
Returns a random number/int between two numbers.

## <b>getFunctionName(fn)</b>
Returns the name of function fn.

## <b>getWeightedRandom(odds,itterations)</b>
Want a random number set which will give you more of a certain set of number than the anothers? This will help. Specify an array of odds 0=0%, 1 = 100% chance and the number of iterations it will do to run those odds.






<br>
<br>
<hr>

# <b>string.js</b>

## <b>randomString(length:number)</b>
Returns a string of random characters between AZ and az to the length you specify.

## <b>guid()</b>
Returns a GUID.

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





<br>
<br>
<hr>

# <b>validation.js</b>
#### <b>Dependencies:</b> none<br>

## <b>validateEmail(email)</b>
<b>Aliases:</b> isValidEmail(email)<br>
Validates an email adddress (string) via regex.





<br>
<br>
<hr>

# <b>animation.js</b>
#### <b>Dependencies:</b> jQuery >= 1.10<br>

## <b>scrollToElementID($id, $speed, $delay)</b>
Scroll to an element specified by ID on the page, with speed and delay options.

## <b>scrollToElementClass($class, $speed, $delay)</b>
Scroll to an element specified by CLASS NAME on the page, width speed and delay options.

## <b>scrollToElement($obj, $speed, $delay)</b>
Scroll to a specified jQUERY ELEMENT on the page ($obj), width speed and delay options.


<br>
<br>
<hr>

# <b>array.js</b>

## <b>arrayRemoveIndex(array,index)</b>
Removed an index from an array.

## <b>isArrayInString(string,array)</b>
Checks to see if any array items match or are in a string.

## <b>isArray(array)</b>
Checks to see if input is an array or not.



<br>
<br>
<hr>

# <b>conversion.js</b>

## <b>radToDeg(radians)</b>
<b>Aliases:</b> rad2deg(radians)<br>
Converts radians to degrees.

## <b>degToRad(degrees)</b>
<b>Aliases:</b> deg2rad(degrees)<br>
Converts degrees to radians.

## <b>boolToString(boolean)</b>
Converts a boolean to a string.

## <b>stringToBool(str)</b>
Converts strings such as yes, y, 1, true, n, false etc to a boolean true or false.




<br>
<br>
<hr>

# <b>cookies.js</b>

## <b>setCookie(name,value)</b>
Sets a javascript cookie.

## <b>getCookie(name)</b>
Reads a javascript cookie.




<br>
<br>
<hr>

# <b>datetime.js</b>

## <b>getUkDateFromDbDateTime(arg)</b>
Gets a UK date from a MySQL datetime (2016-04-08 21:11:59).

## <b>getUkDateTimeFromDbDateTime(arg)</b>
Gets the UK date and time from a MySQL datetime (2016-04-08 21:11:59).

## <b>getSQLDateTime()</b>
Gets a MySQL compatible datetime from the javascript Date().

## <b>getDateTime(local)</b>
Gets a formatted datetime from the javascript Date() object arg:local:string can be db, us or it will defaults to en-GB.




<br>
<br>
<hr>

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

## <b>getMobileOperatingSystem()</b>
Attempts to returns the name of the Operating System (OS) of the device/tablet/mobile you are using.







<br>
<br>
<hr>

# <b>dom.js</b>
#### <b>Dependencies:</b> jQuery >= 1.10<br>

## <b>getElementById(id:string)</b>
You no longer need to type document each time you want to use getElementById.

## <b>hideShow(classNameToShow:String||Array,classNameToHide::String||Array)</b>
You can hide and show as many elements on the page as you want, just give the function an array of class names to hide or a single string of class names to hide and show.

## <b>centerAbsoluteItem(element:string||jQueryElementObject)</b>
Attempts to center an css absolute positioned element within your browsers current dimensions.






<br>
<br>
<hr>

# <b>form.js</b>
#### <b>Dependencies:</b> jQuery >= 1.10<br>

## <b>checkBoxReveal(checkboxID,elementIdForHideShow)</b>
Put in the html onclick or any function for a checkbox click to hide or show any element on the page synchronised with state of checkbox.

## <b>isChecked(id:string)</b>
Returns true or false if id of the checkbox / radio is checked.

## <b>isNumberKey(evt)</b>
Place on form text inputs to ensure numbers are only entered into it. eg onKeyUp="isNumberKey(event)"

## <b>parseJSONFileToSelect(file, $element_id, $label_index, $value_index)</b>
Will attempt to load and parse a json file into a form select element.








<br>
<br>
<hr>

# <b>graphics.js</b>
#### <b>Dependencies:</b> jQuery >= 1.10<br>

## <b>toggleVisibilityOnClass(class:string)</b>
Quick access to jQuery's toggle

## <b>slideToggleOnClass(class:string)</b>

Quick access to jQuery's slideToggle

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





<br>
<br>
<hr>

# <b>io.js</b>
#### <b>Dependencies:</b> jQuery >= 1.12<br>

## <b>AJAXLoad($url, $method, $data, $callback)</b>
Sends data to a specified url, with a specified method (post||get) with a callback on success which will return the response.

## <b>loadJSONFile($url, $callback)</b>
Loads a json file and sends it to a callback function (onSuccess).



<br>
<br>


## <b>Found this useful? Please Donate...</b>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)