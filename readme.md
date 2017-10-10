# AFTC.js

A collection of utilities / functions I find make life easier when working with JavaScript.

# Requirements:
jQuery 1.12 and above.

#  Instructions
```
npm install
npm run build // dist (minified)
npm run dev // dev (non-minified)
npm run watch // dev (auto rebuild on file change)
```

# My setup
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


# Configuration / Adding what you need
1. Either download the lib you want yourself and add it to source or use npm install eg
```
npm i lodash -S
```
2. Edit aftc.js, adding your require or include (note you may need to resolve certain libs paths eg see webpack.config.js as I've done it for jQuery )

3. npm run build


# Configuration
Edit aftc.js, comment out the features you don't require.



# So what's inside?
Here is the list of functions in each of the files, pick and choose what you want to pack into aftc.js

## File: animation.js

## scrollToElementID = function($id, $speed, $delay)
<p>Requiements: jQuery >1.9<br>
Simply a function which takes the ID(string), speed:Number/Float, delay:Int/Float of Seconds, to auto scroll the web browser to an element.</p>




# This is not a full list of functions but is most of them (Needs an update)

#log
Replacement for console.log, now you can just type log, so much quicker.
```
log($str)
```

#trace
Replacement for console.log, now you can type trace or log, quicker but this one was made for when I have those days when I for some reason turn back into an AS3 programmer.
```
trace($str)
```

#logTo
A JavaScript function which makes quick work of writing some text or a html element via ID.
```
logTo($id, $msg)
```


#debugWindow
This will open a debug window with contents you specify, helps with debugging sometimes, I sometimes use it for AJAX heavy application debugging or when console is getting too much debug code.
```
debugWindow($input)
```

#generateNoise
Generates a canvas perlin noise, great for tv static, terrain maps, random, height maps, clouds etc.
```
generateNoise(canvasId,width,height,opacity)
```

#radToDeg
A JavaScript function to convert radians to degrees.
```
radToDeg(input)
```

#degToRad
A JavaScript function to convert degrees to radians.
```
degToRad(input)
```

#rgbToHex
A JavaScript function to convert RGB to HEX.
```
rgbToHex(r, g, b)
```

#arrayRemoveIndex
Not sure why I included this, but removes an array item at the index you specify.
A JavaScript function to remove a specified index of an array.
```
arrayRemoveIndex(array, index)
```

#getFunctionName
A JavaScript function to get return a functions name as a string.
I sometimes want to debug the name of a function supplied to some code, and if you log it, it dumps out the whole function, so this will just get the function name for you.
```
getFunctionName(fn)
```

#getUkDateFromDbDateTime
A JavaScript function to get UK Date from MySQL standard date time
```
getUkDateFromDbDateTime($input)
```

#getUkDateTimeFromDbDateTime
A JavaScript function to get UK Date and Time from MySQL standard date time
```
getUkDateTimeFromDbDateTime($input)
```

#isArrayInString
JavaScript check if a string is in an array
```
isArrayInString($string, $array)
```

#getRandomHexColor
A JavaScript function to get a random HEX Color value
```
getRandomHexColor()
```

#scrollToElementID
A JavaScript function to a html element ID.
```
scrollToElementID($id, $speed, $delay)
```

#scrollToElementID
A JavaScript function to a html element ID.
```
scrollToElementID($id, $speed, $delay)
```

#isValidEmail
A JavaScript function to validate email.
```
isValidEmail(email)
```

#validateEmail
Another JavaScript function to validate email.
```
validateEmail(email)
```

#randomString
A JavaScript function to generate a random string of a specified length.
```
randomString($length)
```

#guid
A JavaScript function to generate a GUID.
```
guid()
```

#trimStringLength
A JavaScript function to trim a string to a specified length.
```
trimStringLength($input, $length)
```

#getHSLColor
A JavaScript function to get a HSL Color value from an input of 0.0 to 1.0
```
getHSLColor(value)
```

#getRandomRGBString
A JavaScript function to generate a random RGB string.
```
getRandomRGBString()
```

#parseJSONFileToSelect
A JavaScript function to load and parse a json file into a html select input. You can specify selected label or index.
```
parseJSONFileToSelect($file, $element_id, $label_index, $value_index)
```

#hideShow
A JavaScript function to hide one element and show another by class name.
```
hideShow($ShowClassName, $HideClassName)
```

#isArray
A JavaScript function to return a boolean on whether a variable is an array or not (An interesting way of doing it).
```
isArray(obj)
```

#isFireFox
A JavaScript function to detect Firefox.
```
isFireFox()
```

#isChrome
A JavaScript function to detect Chrome.
```
isChrome() 
```

#isSafari
A JavaScript function to deted Safari.
```
isSafari()
```

#isIE
A JavaScript function to detect Internet Explorer (IE).
```
isIE()
```

#getIEVersion
A JavaScript function to get the version of IE.
```
getIEVersion()
```

#getBrowser
A JavaScript function to get what browser is being used.
```
getBrowser()
```

#redirect
A JavaScript function to redirect.
```
redirect($url)
```

#boolToString
A JavaScript function to convert booleans to string.
```
boolToString($bool)
```

#stringToBool
A JavaScript function to convert strings to boolean values.
```
stringToBool($bool)
```

#isNumberKey
A JavaScript function to detect if a keyboard event (evt) is a number, boolean response.
```
isNumberKey(evt)
```

#setFormFieldById
A JavaScript function to set the value of a form field by it's ID.
```
setFormFieldById($id, $value)
```

#limitLengthInWords
A JavaScript function to limit the number of words in a string.
```
limitLengthInWords(field, maxWords) 
```

#isChecked
A JavaScript function to quickly check if a form checkbox is checked.
```
isChecked($id)
```

#checkboxReveal
A JavaScript function to hide and show for checkbox ticking and unticking.
```
checkboxReveal($checkbox, $elementForStateChange, $showOnChecked)
```

#loadJSONFile
A JavaScript function to load a json file.
```
loadJSONFile($url, $callback)
```

#AJAXLoadPage
A JavaScript function to load a url into a html element by ID, it can also send data and fire a callback function once load has completed.
```
AJAXLoadPage($url, $id, $method, $data, $callback)
```

#AJAXLoad
A JavaScript function for generic AJAX loading, quick and simple, I use this often.
```
AJAXLoad($url, $method, $data, $callback)
```

#convertOnlyZeroToNull
A JavaScript function to convert zero's to null.
```
convertOnlyZeroToNull($input)
```

#convertNullToZero
A JavaScript function to convert null to zero.
```
convertNullToZero($input)
```

#setCookie
A JavaScript function to set a cookie value by cookie name.
```
setCookie($name, $value)
```

#getCookie
A JavaScript function to get a cookie value by cookie name.
```
getCookie($name)
```

#getFileExtension
A JavaScript function to get the file extension from a file name (string).
```
getFileExtensions($input)
```

#getLastPartOfUrl
A JavaScript function to return the last part of a url (parts are based on slashes).
```
getLastPartOfUrl()
```

#DebugPosition
A JavaScript function to debug / log the position of a html element (needs revisiting).
```
DebugPosition($arg)
```