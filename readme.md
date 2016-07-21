# AFTC.js

A collection of functions I find make life a lot easier when working in JavaScript.

# Requirements:
jQuery 1.8 and above.

#debugWindow
This will open a debug window with contents you specify, helps with debugging sometimes, I sometimes use it for AJAX heavy application debugging or when console is getting too much debug code.
```function debugWindow($input)```

#generateNoise
Generates a canvas perlin noise, great for tv static, terrain maps, random, height maps, clouds etc.

#radToDeg
Converts radians to degrees.

#degToRad
Converts degrees to radians.

#rgbToHex
Convers RGB to HEX.

#arrayRemoveIndex
Not sure why I included this, but removes an array item at the index you specify.

#getFunctionName
I sometimes want to debug the name of a function supplied to some code, and if you log it, it dumps out the whole function, so this will just get the function name for you.

#getUkDateFromDbDateTime
JavaScript get UK Date from MySQL standard date time

#getUkDateTimeFromDbDateTime
JavaScript get UK Date and Time from MySQL standard date time

#isArrayInString
JavaScript check if a string is in an array

#getRandomHexColor
JavaScript function to get a random HEX Color value

#scrollToElementID
Simply scrolls to a html element ID.
```function scrollToElementID($id, $speed, $delay)```