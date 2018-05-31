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

### <b>Quick links:</b>
 <a href='#aftcanimateelementidoncomplete'>AFTC.Animate(elementId, onComplete)</a><br>
 <a href='#aftcaudiooptions'>AFTC.Audio({options})</a><br>
 <a href='#aftcxhrargs'>AFTC.XHR(args)</a><br>
 <a href='#getrandomcolor'>getRandomColor()</a><br>
 <a href='#hextorgbhex'>hexToRgb(hex)</a><br>
 <a href='#rgb2hexrgb'>rgb2Hex(r,g,b)</a><br>
 <a href='#rgbtohexrgb'>rgbToHex(r,g,b)</a><br>
<br><br>
#### Browse on codepen
<a href='https://codepen.io/AllForTheCode/pens/public/?grid_type=list' target='_blank'>https://codepen.io/AllForTheCode/pens/public/?grid_type=list</a>
<br><br><hr><br><br>
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

<b>Returns:</b> 
[alias]
</details>

#### Usage examples:
 - <a href='see usage example in test/animation.htm' target='_blank'>see usage example in test/animation.htm</a>
 - <a href='https://codepen.io/AllForTheCode/pen/MXYGob' target='_blank'>https://codepen.io/AllForTheCode/pen/MXYGob</a>
 - <a href='https://codepen.io/AllForTheCode/pen/MXYPqq' target='_blank'>https://codepen.io/AllForTheCode/pen/MXYPqq</a>
 - <a href='https://codepen.io/AllForTheCode/pen/xzbymv' target='_blank'>https://codepen.io/AllForTheCode/pen/xzbymv</a>


<hr><br><br><br>
    
### <b>AFTC.Audio({options})</b>
An audio player with preloading capabilities, looping abilities and loop offset capabilities<br>

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

<b>Returns:</b> 
[alias]
</details>

#### Usage examples:
 - <a href='https://codepen.io/AllForTheCode/pen/NzWrvm' target='_blank'>https://codepen.io/AllForTheCode/pen/NzWrvm</a>


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
[alias]
</details>

#### Usage examples:
 - <a href='https://codepen.io/AllForTheCode/pen/mLZRge' target='_blank'>https://codepen.io/AllForTheCode/pen/mLZRge</a>


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
[alias]
</details>

#### Usage examples:
 - <a href='see usage example in tests/xhr/xhr.htm' target='_blank'>see usage example in tests/xhr/xhr.htm</a>


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
		<td>string</td>
		<td>hex</td>
		<td>hex color</td>
	</tr>
</table>

<b>Returns:</b> 
[alias]
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
[alias]
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
[alias]
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
[alias]
</details>



<hr><br><br><br>
    <br><br><br>


<br><br><br>




## <b>Found this useful? Please Donate...</b>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<br><br><br><br>


<a href="http://pph.me/Darcey" target="_blank" title="I am available for hire, click here!">![Hire](http://www.allforthecode.com/images/pph_widget.jpg)</a>