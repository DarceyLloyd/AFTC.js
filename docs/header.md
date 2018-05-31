# <b>AFTC.js</b>
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<b>A collection of utilities / functions I find useful when working with JavaScript.</b>


#### <b>Installation</b>
```
npm i aftc.js
gulp build
```

 ---

<br><br>


<details>
    <summary><b>Build Guide</b>:</summary>

I pref' gulp at the moment.

```
gulp build
```

 ---

#### <b>Step by step</b>

- Open aftc.js directory in VSCode
- Open "gulpfile.js" and edit / comment out or uncomment any of the imports that you want or don't want

```
var jsFiles = [

    // The base, the essentials, the foundations
    "./src/base.js", // Dependencies: none

    // Dev assist utility functions / tools
    "./src/string.js", // Dependencies: none
    "./src/random.js", // Dependencies: none
    "./src/conversion.js", // Dependencies: none
    "./src/datetime.js", // Dependencies: none
    "./src/cookies.js", // Dependencies: none
    "./src/validation.js", // Dependencies: none
    "./src/graphics.js", // Dependencies: none

    // Utilities / tools which focus on a specific area / task(s)
    "./src/animation.js", // Dependencies: none
    './src/color.js', // Dependencies: none
    "./src/detection.js", // Dependencies: none
    "./src/dom.js", // Dependencies: none
    "./src/styling.js", // Dependencies: none
    "./src/form.js", // Dependencies: none
    "./src/io.js", // Dependencies: none
    "./src/misc.js", // Dependencies: none (very good chance you wont need to include this, so comment out if you dont)
];

```

- Open terminal in VSCode by pressing CTRL + '
- Type into terminal
```
gulp build
```

</details>

 ---
 
<br><br>

