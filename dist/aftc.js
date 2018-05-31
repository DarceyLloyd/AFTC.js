/**
 * @function: AFTC.Audio({options})
 * @desc: An audio player with preloading capabilities, looping abilities and loop offset capabilities
 * @params src stringOrArray: String or Array of urls/paths to sound files
 * @params cache boolean: To cache or not to cache
 * @params volume float: 0 to 1
 * @params repeat number: -1 forever, 0 play once only, or the number of times to repeat
 * @params preload boolean: true or false
 * @params offsetLoopBy float: the sample offset from the end that you wish to loop by can help remove loop gaps
 * @params onUpdate function: the function you wish to run when your sound is playing provides and info object
 * @params onReady function: the function you wish to run when your sound is ready and can play
 * @params onComplete function: the function you wish to run when your sound has finished playing
 * @params hideWarnings boolean: hides notices in console for compatibility issues when not using mp3 etc
 * @link: https://codepen.io/AllForTheCode/pen/NzWrvm
 */

// Resource:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
// https://www.w3schools.com/jsref/dom_obj_audio.asp
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
AFTC.Audio = function () {
    if (!(this instanceof arguments.callee)) {
        var msg = "\nAFTC.Audio: USAGE ERROR: Constructor called as a function.\n";
        msg += "Please use new AFTC.Audio({params})";
        throw new Error(msg);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // Accessor
    var me = this;

    // Vo's
    var preloaderFileVo = function () {
        var me = this;
        this.src = false;
        this.ext = false;
        this.content_type = false;
        this.base64 = false;
        this.loaded = false;
        this.xhr = new XMLHttpRequest();

        this.load = function () {
            this.ext = getFileExtension(this.src);
            this.xhr.addEventListener("load", loaded);

            // this.xhr.onreadystatechange = function () {
            // log(this.readyState);
            // if (this.readyState == 4 && this.status == 200) {}
            // };

            this.xhr.open("GET", this.src, true);
            this.xhr.send();
        }

        function loaded(e) {
            // log("LOADED");
            me.loaded = true;
            try { me.xhr.removeEventListener("load", loaded); } catch (e) { }
            me.content_type = me.xhr.getResponseHeader("content-type");
            // log("me.content_type = " + me.content_type);
            // log("me.ext = " + me.ext);
            if (isInString("text/html", me.content_type)) {
                me.base64 = true;
            }
            checkAllLoaded();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    // Args
    var args = {
        src: false,
        cache: true,
        volume: 1,
        repeat: 0,
        preload: true,
        offsetLoopBy: 0,
        loopByOffset: false,
        onUpdate: false,
        onReady: false,
        onComplete: false,
        hideWarnings: false,
    };
    argsToObject(arguments, args);
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    // Params
    var params = {
        t: 0,
        preloader: {
            files: [], // array of preloaderFileVo's
            fileCount: 0
        },
        browser: {
            detected: false,
            isChrome: false,
            isFirefox: false,
            isOpera: false,
            isSafari: false,
            isEdge: false,
            isIE: false
        },
        compatibility: {
            ie: ["mp3"],
            edge: ["mp3", "ogg", "flac", "wav"],
            chrome: ["mp3", "ogg", "flac", "wav"],
            firefox: ["mp3", "ogg", "flac", "wav"],
            opera: ["mp3", "ogg", "flac", "wav"],
            safari: ["mp3", "wav"]
        },
        suppliedExtensions: [],
        audio: false,
        playing: false,
        playCount: 0,
        totalPlayCount: 0,
        offsetLoopDuration: 0,
        onPlayTimer: false
    };
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    function init() {
        // Browser flags
        params.browser.detected = true;
        params.isChrome = isChrome();
        params.isFirefox = isFireFox();
        params.isOpera = isOpera();
        params.isSafari = isSafari();
        params.isEdge = isEdge();
        params.isIE = isIE();

        // Var ini
        isArray(args.src) ? params.preloader.fileCount = args.src.length : params.preloader.fileCount = 1;
        // log("params.preloader.fileCount = " + params.preloader.fileCount);

        params.offsetLoopDuration = params.audio.duration - args.offsetLoopBy;

        // Preloader
        setupPreloader();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    function setupPreloader() {
        // Preloading
        var i;
        if (typeof (args.src) != "string") {
            // log("MUTLI FILE");
            for (i = 0; i < args.src.length; i++) {
                var vo = new preloaderFileVo();
                vo.src = args.src[i];
                if (!args.cache) {
                    vo.src = vo.src + "?r=" + getRandomInt(1, 99999999);
                }
                params.preloader.files.push(vo);
            }
        } else {
            // log("SINGLE FILE");
            var vo = new preloaderFileVo();
            vo.src = args.src;
            if (!args.cache) {
                vo.src = vo.src + "?r=" + getRandomInt(1, 99999999);
            }
            params.preloader.files.push(vo);
        }

        // Start xhr preloaders on each file path / url supplied
        for (i = 0; i < params.preloader.fileCount; i++) {
            var vo = params.preloader.files[i];
            vo.load();
            params.suppliedExtensions.push(vo.ext);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    function checkAllLoaded() {
        // log("checkAllLoaded()");
        var loaded = true;
        for (i = 0; i < params.preloader.fileCount; i++) {
            var vo = params.preloader.files[i];
            // log(vo.ext + " = " + vo.loaded);
            if (!vo.loaded) { loaded = false; }
        }
        // log("checkAllLoaded(): loaded = " + loaded);

        if (loaded) {
            advise();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    function advise(vo) {

        var msg = false;

        if (args.repeat > 0) {
            msg = "\nAFTC.Audio() > Loop Warning\n";
            msg += "When looping or repeating it is recommended that you set the offsetLoop parameter unique for each device and browser and file format as it can vary between them (if in doubt leave it at zero), it will use the classic html5 audio end event and loop timing, which doesn't always have perfect results.\n";
            msg += "\n";
        }

        msg += "AFTC.Audio() > Browser audio format compatibility checks can be found at:\n";
        msg += "FLAC: https://caniuse.com/#search=flac\n";
        msg += "WAV: https://caniuse.com/#search=wav\n";
        msg += "OGG: https://caniuse.com/#search=ogg\n";
        msg += "MP3: https://caniuse.com/#search=mp3\n";
        msg += "\n";

        msg += "TO TURN OFF THESE MESSAGES USE: hideWarnings:true\n";
        msg += "eg. new AFTC.Audio({hideWarnings:true});\n";
        msg += "\n";

        if (msg && !args.hideWarnings) {
            console.warn(msg);
        }

        setupSound();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    function setupSound() {
        // log("setupSound()");
        params.audio = document.createElement('audio');
        params.audio.volume = args.volume;
        params.audio.preload = "auto"; // auto || metadata || none

        // params.audio.addEventListener('timeupdate', onTimeUpdate, false);
        // params.audio.addEventListener("ended", playCompleteViaEvent, false);
        // params.audio.addEventListener("canplay", function (e) {
        //     log("UNABLE TO PLAY: ");
        // });

        // params.audio.addEventListener("onloadeddata",function(){ log("LOADED"); }); // DOESNT WORK BUT SHOULD!
        // params.audio.onloadeddata = function () {
        //     params.loaded = true;
        //     log("onloadeddata()");
        // };

        // Sounds can have multiple formats attached to them, just like video
        if (params.preloader.fileCount > 1) {
            var html = "";
            for (var i = 0; i < params.preloader.fileCount; i++) {
                var vo = params.preloader.files[i];
                html += '<source src="' + vo.src + '" type="' + vo.content_type + '" />'
            }
            params.audio.innerHTML = html;
        } else {
            var vo = params.preloader.files[0];
            if (vo.base64) {
                params.audio.src = vo.xhr.responseText;
            } else {
                params.audio.setAttribute('src', vo.src);
            }
        }

        if (args.onReady){
            args.onReady();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





    // Play monitor loop
    function playBackMonitor() {
        if (!params.playing) { return false; }

        // https://www.w3schools.com/jsref/dom_obj_audio.asp
        if (args.onUpdate) {
            var info = {
                audio: params.audio,
                currentSrc: params.audio.currentSrc,
                currentTime: params.audio.currentTime,
                duration: params.audio.duration,
                offsetLoopDuration: params.offsetLoopDuration,
                ended: params.audio.ended,
                playbackRate: params.audio.playbackRate,
                volume: params.audio.volume,
                playCount: params.playCount,
                totalPlayCount: params.totalPlayCount
            };
            args.onUpdate(info);
        }

        if (params.audio.currentTime >= params.offsetLoopDuration) {
            params.playCount++;

            if (params.playCount >= params.totalPlayCount) {
                clearInterval(params.onPlayTimer);
                //params.audio.pause();
                params.onPlayTimer = false;
                params.playing = false;
                if (args.onComplete){
                    var info = {
                        audio: params.audio,
                        currentSrc: params.audio.currentSrc,
                        currentTime: params.audio.currentTime,
                        duration: params.audio.duration,
                        offsetLoopDuration: params.offsetLoopDuration,
                        ended: params.audio.ended,
                        playbackRate: params.audio.playbackRate,
                        volume: params.audio.volume,
                        playCount: params.playCount,
                        totalPlayCount: params.totalPlayCount
                    };
                    args.onComplete(info);
                }
            } else {
                params.audio.currentTime = 0;
                params.audio.play();
                params.checkInProgress = false;
            }
        }

        // if (!params.audio.ended){
        //     requestAnimationFrame(playBackMonitor);
        // }
    }




    // Utility
    function startPlaybackMonitor() {
        params.playing = true;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




    // Public
    this.play = function (time) {
        if (!params.audio) { return false; } // Prevent params.audio usage when not available

        params.offsetLoopDuration = params.audio.duration - args.offsetLoopBy;
        params.totalPlayCount = (args.repeat + 1);
        if (args.repeat == -1){ params.totalPlayCount = 999999999999999; }
        params.playCount = 0;
        time ? time : time = 0; // true || false
        params.audio.currentTime = time;
        params.playing = true;
        params.audio.play();
        params.onPlayTimer = setInterval(playBackMonitor, 10);
    }

    this.stop = function () {
        clearInterval(params.onPlayTimer);
        params.audio.pause();
        params.onPlayTimer = false;
        if (!params.audio) { return false; } // Prevent params.audio usage when not available
        params.audio.currentTime = 0;
        params.playing = false;
    }

    this.pause = function () {
        params.audio.pause();
        clearInterval(params.onPlayTimer);
        params.onPlayTimer = false;
        params.playing = false;
        if (!params.audio) { return false; } // Prevent params.audio usage when not available
    }

    this.resume = function () {
        if (!params.audio) { return false; } // Prevent params.audio usage when not available
        params.playing = true;
        params.audio.play();
        params.onPlayTimer = setInterval(playBackMonitor, 10);
    }

    // Constructor simulation
    init();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -








// // REF: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
// // REF: https://www.w3schools.com/tags/ref_av_dom.asp
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// AFTC.Audio = function () {
//     if (!(this instanceof arguments.callee)) {
//         var msg = "\nAFTC.Audio: USAGE ERROR: Constructor called as a function.\n";
//         msg += "Please use new AFTC.Audio({params})";
//         throw new Error(msg);
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//     var me = this;
//     var args = {
//         url: false,
//         base64: false,
//         volume: 1,
//         repeat: 0,
//         preload: true,
//         onComplete: false,
//         offsetLoopBy: 0,
//     };
//     var params = {
//         audio: false,
//         loaded: false,
//         playCount: 0,
//         endTimeWithOffset: 0,
//         manualLooping: false,
//         manualLoopingComplete: false,
//         timer: false,
//         timerInterval: 50,
//         ready: false,
//         isIE: false,
//         isEdge: false,
//         isFireFox: false,
//         isChrome: false,
//         isOpera: false,
//         isSafari: false
//     };

//     new AFTC.ArgsToObject(arguments[0], args);
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//     // Constructor
//     function init() {
//         if (!args.url) {
//             throw new Error("\nAFTC.Audio: USAGE ERROR: A url to a sound file is required!");
//         }

//         // DETECT THE BROWSERS
//         params.isChrome = isChrome();
//         params.isFirefox = isFireFox();
//         params.isOpera = isOpera();
//         params.isSafari = isSafari();
//         params.isEdge = isEdge();
//         params.isIE = isIE();
//         // log("isChrome = " + params.isChrome);
//         // log("isFirefox = " + params.isFirefox);
//         // log("isOpera = " + params.isOpera);
//         // log("isSafari = " + params.isSafari);
//         // log("isEdge = " + params.isEdge);
//         // log("isIE = " + params.isIE);

//         //params.audio = new Audio();
//         // params.audio.src = args.url; // DONT WORK

//         params.audio = document.createElement('audio');
//         // params.audio.volume = args.volume;
//         params.audio.preload = "auto"; // auto || metadata || none

//         params.audio.addEventListener('timeupdate', onTimeUpdate, false);
//         params.audio.addEventListener("ended", playCompleteViaEvent, false);

//         // params.audio.addEventListener("onloadeddata",function(){ log("LOADED"); }); // DOESNT WORK BUT SHOULD!
//         params.audio.onloadeddata = function () {
//             params.loaded = true;
//             onLoadedInitAudio();
//         };

//         if (isArray(args.url)) {
//             var html = "";
//             var isOGG, isMP3, isWAV;
//             for (var i = 0; i < args.url.length; i++) {
//                 // log("file " + i + " = " + args.url[i]);
//                 isOGG = isInString("ogg", args.url[i].toLowerCase());
//                 isMP3 = isInString("mp3", args.url[i].toLowerCase());
//                 isWAV = isInString("wav", args.url[i].toLowerCase());
//                 if (isOGG && !isMP3 && !isWAV) {
//                     html += '<source src="' + args.url[i] + '" type="audio/ogg" />'
//                 } else if (!isOGG && isMP3 && !isWAV) {
//                     html += '<source src="' + args.url[i] + '" type="audio/mpeg" />'
//                 } else if (!isOGG && !isMP3 && isWAV) {
//                     html += '<source src="' + args.url[i] + '" type="audio/wave" />'
//                 } else {
//                     throw new Error("\nAFTC.Audio: USAGE ERROR: Only MP3, OGG and WAV formats are supported!");
//                 }
//             }
//             params.audio.innerHTML = html;
//             //audioElement.innerHTML = '<source src="' + '/audio/sound.mp3'+ '" type="audio/mpeg" />'
//         } else {

//             var msg = "\nAFTC.JS > AUDIO.JS > WARNING\n";
//             msg += "You are using an obsolete or incapable web browser, audio may not function correctly!\n";

//             if (params.isIE) {
//                 msg += "If you have to use a microsoft web browser please use MS Edge, however this may still not function correctly.\n";
//                 msg += "It is recommended that you use Chrome, Firefox or Opera web browsers.";
//                 console.warn(msg);
//             } else if (params.isEdge) {
//                 msg += "It is recommended that you use Chrome, Firefox or Opera web browsers.";
//                 console.warn(msg);
//             }

//             // Compatibility issue alerts/warnings
//             var isOGG = isInString("ogg", args.url.toLowerCase());
//             var isMP3 = isInString("mp3", args.url.toLowerCase());
//             var isWAV = isInString("wav", args.url.toLowerCase());
//             // log("isOGG = " + isOGG);
//             // log("isMP3 = " + isMP3);
//             // log("isWAV = " + isWAV);
//             // log("args.url = " + args.url);

//             if (params.isIE && isWAV || params.isEdge && isWAV || params.isFirefox && isWAV) {
//                 throw new Error("\nAFTC.Audio: USAGE ERROR: FireFox, EDGE & IE don't support WAV playback!\nPlease use MP3!");
//             }
//             if (params.isIE && isOGG) {
//                 throw new Error("\nAFTC.Audio: USAGE ERROR: IE doesn't support OGG playback!\nPlease use MP3!");
//             }


//             if (args.base64) {
//                 params.audio.src = args.url;
//             } else {
//                 params.audio.setAttribute('src', args.url);
//             }
//         }

//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     function onLoadedInitAudio() {
//         // log("onLoadedInitAudio()");
//         // This will force execution of the timeupdate event, which will init params.audio.duration
//         params.audio.volume = 0;
//         setTimeout(function () {
//             // WARNING: Putting params.audio.play here will ignore volume and other settings
//             playIt();
//         }, 250);
//     }
//     function playIt() {
//         params.audio.play();
//         params.timer = setInterval(checkForDuration, params.timerInterval);
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     function checkForDuration() {
//         if (params.audio.duration > 0) {
//             params.isReady = true;
//             //log(params.audio.duration + " seconds of audio is ready for use!");
//             // setHTML("debug3", "duration = " + params.audio.duration.toFixed(3));
//             clearInterval(params.timer);
//             params.timer = null;
//             params.ready = true;
//             params.audio.pause();
//             params.audio.volume = args.volume;
//             params.audio.currentTime = 0;

//             // SET REPEAT HERE AFTER DURATION INIT HAS BEEN DONE
//             // NOTE: Edge wont loop unless src is an array of sources (BUG)
//             if (params.isEdge && !isArray(args.src)) {
//                 if (args.offsetLoopBy == 0) {
//                     args.offsetLoopBy = 0.01;
//                 }
//             } else {
//                 if (args.repeat == -1) {
//                     params.audio.loop = true;
//                 }
//             }
//         } else {
//             // setHTML("debug3", "duration = ??");
//         }

//         // log(args);
//         // log(params);
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     function onTimeUpdate(e) {
//         // Doesn't need to do anything, but "ontimeupdate" event needs to be initialised
//         // log("onTimeUpdate()");
//         // params.currentTime = this.currentTime;
//         // params.audio.duration = this.duration;
//         // setHTML("debug2","duration = " + params.audio.duration.toFixed(3));
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     function playCompleteViaEvent() {
//         if (params.audio.loop) {
//             // log("AUDIO is in loop mode");
//             return;
//         }

//         if (params.manualLooping) { return; }

//         params.playCount++;
//         // log("playCompleteViaEvent(): playCount = " + params.playCount + " : args.repeat = " + args.repeat);

//         params.audio.currentTime = 0;

//         if (args.repeat == -1) {
//             // repeat forever
//             params.audio.currentTime = 0;
//             params.audio.play();
//         } else {
//             if (params.playCount <= args.repeat) {
//                 // repeat
//                 params.audio.currentTime = 0;
//                 params.audio.play();
//             } else {
//                 // complete
//                 params.audio.pause();
//                 params.audio.currentTime = 0;

//                 if (args.onComplete) {
//                     args.onComplete();
//                 }
//             }
//         }

//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     function checkPlayPos() {
//         if (!params.manualLooping) { return; }

//         // setHTML("debug1", "time = " + params.audio.currentTime.toFixed(3) + "/" + params.audio.duration.toFixed(3));

//         if (params.manualLoopingComplete) {
//             // log("checkPlayPos(): manualLoopingComplete!");
//             return;
//         }
//         params.endTimeWithOffset = params.audio.duration - args.offsetLoopBy;
//         if (params.audio.currentTime >= params.endTimeWithOffset) {
//             params.playCount++;

//             if (args.repeat == -1) {
//                 // repeat forever
//                 params.audio.currentTime = 0;
//             } else if (args.repeat > 0) {
//                 if (params.playCount <= args.repeat) {
//                     // repeat
//                     params.audio.currentTime = 0;
//                 } else {
//                     // COMPELTE
//                     params.manualLoopingComplete = true;
//                     // log("COMPLETE!");
//                     clearInterval(params.timer);
//                     params.timer = null;
//                     if (args.onComplete) {
//                         args.onComplete();
//                     }
//                 }
//             }
//         }
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





//     function play() {
//         if (params.audio) {
//             if (!params.isReady) {
//                 console.warn("AFTC.Audio(): WARNING: Audio is not ready! [load has not completed, will try to play anyway!]");
//             }
//             params.playCount = 0;
//             params.manualLoopingComplete = false;
//             params.audio.currentTime = 0;

//             if (args.offsetLoopBy != 0) {
//                 params.manualLooping = true;
//                 params.timer = setInterval(checkPlayPos, params.timerInterval);
//                 params.audio.play();
//             } else {
//                 params.manualLooping = false;
//                 params.audio.play();
//             }
//         } else {
//             console.warn("AFTC.Audio(): WARNING: Audio is not ready!");
//         }
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     function pause() {
//         if (params.audio) {
//             params.audio.pause();
//         }
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


//     function resume() {
//         if (params.audio) {
//             params.audio.play();
//         }
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     function dispose() {
//         params.audio.removeEventListener('timeupdate', onTimeUpdate, false);
//         params.audio.removeEventListener('ended', playCompleteViaEvent, false);
//         params.audio = undefined;
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     // public
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//     this.play = function () { play(); }
//     this.pause = function () { pause(); }
//     this.stop = function () { pause(); }
//     this.resume = function () { resume(); }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//     this.dispose = function () { dispose(); }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//     this.getAudio = function () { return params.audio; }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//     this.isReady = function () { return params.ready; }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     // Constructor simulation (run construct or init in this case)
//     init();
// }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





    // window.playSound = function (url, vol, loop, onComplete) {
    //     var sound = new Audio(url);
    //     vol ? sound.volume = vol : sound.volume = 1;
    //     if (loop) {
    //         sound.loop = true;
    //         // sound.addEventListener('ended', function () {
    //         //     log("ENDED!");
    //         //     this.currentTime = 0;
    //         //     this.play();
    //         // }, false);
    //     }

    //     if (onComplete) {
    //         try {
    //             sound.removeEventListener("ended", onComplete, false);
    //         } catch (e) { }
    //     }
    //     sound.play();
    //     return sound;
    // }
/*
 * Author: Darcey.Lloyd@gmail.com
 */



/**
 * @type: class
 * @name: AFTC.Animate()
 * @version: 2.3.14
 * @requires: base.js
 * @function: AFTC.Animate(elementId, onComplete)
 * @desc: Quick and easy css animation for nearly every css element style
 * ````
 * var anim1 = new AFTC.Animate("box1", onCompleteFunction);
 * anim1.wait(2); // wait in 2 seconds
 * anim1.set("backgroundColor","RGBA(255,255,255,0.5)"); // sets background color to white 50% opacity
 * anim1.anim("fontColor","RGBA(255,0,0,1)",1.5); // animates the font color to red over 1.5 seconds
 * anim1.set(["html","paddingLeft",left"],["hello","10px","100px"],[1,2,3]); // sets innerHTML, padding-left and left position over 1, 2 and 3 seconds
 * ````
 * @link: see usage example in test/animation.htm
 * @link: https://codepen.io/AllForTheCode/pen/MXYGob
 * @link: https://codepen.io/AllForTheCode/pen/MXYPqq
 * @link: https://codepen.io/AllForTheCode/pen/xzbymv
 */
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
AFTC.Animate = function (elementId, onComplete) {
    // log("AFTC.Animate()");

    // Var defs
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    var params = {
        error: {
            error: false,
            msg: ""
        },
        elementId: false,
        element: false,
        onComplete: false,
        stack: [],
        stackCount: 0,
        active: {
            stackIndex: false,
            defIndex: false,
            definition: false,
        },
        state: {
            started: false,
            stopped: false
        },
        onComplete: false
    };

    var StackVo = function () {
        this.type = ""; // set || anim || delay
        this.definitions = []; // Array of DefinitionVo's
        this.uid = 0;
    }

    var DelayVo = function () {
        this.duration = false;
        this.start = false;
        this.end = false;
    }

    var DefinitionVo = function () {
        this.style = "";
        this.valid = true;
        this.start = {
            v: false,
            rgba: false,
            r: false,
            g: false,
            b: false,
            a: false,
            suffix: false
        };
        this.end = {
            v: false,
            rgba: false,
            r: false,
            g: false,
            b: false,
            a: false,
            suffix: false
        };
        this.range = {
            v: false,
            r: false,
            g: false,
            b: false,
            a: false
        };
        this.step = {
            v: false,
            r: false,
            g: false,
            b: false,
            a: false
        };
        this.time = {
            start: false,
            end: false,
            duration: false
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    // Constructor
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function init() {
        // log("AFTC.Animate.init()");

        // var ini
        params.elementId = elementId;
        params.onComplete = onComplete;

        // Get element and check exists
        params.element = getElementById(elementId);
        if (!isElement(params.element)) {
            params.error.msg = "AFTC.js > AFTC.Animate(): Usage error, unable to locate an element with id [" + params.elementId + "] on the DOM!";
            throw (params.error.msg);
            return;
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function addStackItem(type, style, value, duration) {
        // log("- - - - - - - - - - - - - - - - - - - - - - - - -");
        // log("AFTC.Animate.addStackItem(type:" + type + ", style, value, duration)");
        type = String(type).toLowerCase();
        if (type != "set" && type != "anim" && type != "delay") {
            params.error.flag = true;
            params.error.msg = "AFTC.js > AFTC.Animate.addStackItem(): Error - unhandled type of [" + type + "]";
            throw (params.error.msg);
            return;
        }

        var isStyleArray = isArray(style);
        var isValueArray = isArray(value);
        var isDurationArray = isArray(duration);
        if (isStyleArray != isValueArray && isStyleArray != isDurationArray) {
            params.error.flag = true;
            params.error.msg = "AFTC.js > AFTC.Animate.addStackItem(): Error - please ensure all your params are either arrays or single values";
            throw (params.error.msg);
            return;
        }
        if (isStyleArray && isValueArray && isDurationArray) {
            if (style.length != value.length && style.length != duration.length) {
                params.error.flag = true;
                params.error.msg = "AFTC.js > AFTC.Animate.addStackItem(): Error - please ensure all your params are arrays are the same size";
                throw (params.error.msg);
                return;
            }
        }

        // If params are single value then push them into arrays for array processing
        if (!isStyleArray && !isValueArray && !isDurationArray) {
            style = [style];
            value = [value];
            duration = [duration];
        }

        // Create new StackVo() for strack of set||anim|delay configurations
        var svo = new StackVo();
        svo.type = type;
        //svo.uid = "aftcAnimId" + Math.random().toString(36).substr(2, 9);
        //svo.uid = "stk" + Math.round( Math.random()*9999999 );
        params.stackCount++;
        svo.uid = "stk" + params.stackCount;

        if (type == "anim" || type == "set") {
            // log("ADD: " + type + "  STYLE: " + style);
            for (var i = 0; i < style.length; i++) {
                var dvo = new DefinitionVo();
                dvo.style = style[i];
                dvo.time.duration = parseFloat(duration) * 1000;
                // NOTE: Can't set start value here as it might change, work it out before run
                // Process endValue
                var endValue = value[i];
                if (isRGB(endValue)) {
                    var rgba = getRGBAArray(endValue);
                    dvo.end.r = rgba[0];
                    dvo.end.g = rgba[1];
                    dvo.end.b = rgba[2];
                    dvo.end.a = rgba[3];
                    dvo.end.rgba = true;
                    dvo.end.suffix = getSuffix(endValue);
                } else {
                    if (dvo.style.toLowerCase() == "html") {
                        dvo.end.v = endValue;
                    } else {
                        dvo.end.v = parseFloat(endValue);
                        if (isNaN(dvo.end.v)) {
                            dvo.end.v = endValue;
                        }
                    }
                    dvo.end.rgba = false;
                    dvo.end.suffix = getSuffix(endValue);
                }
                // log(dvo);
                // log("--");
                svo.definitions.push(dvo);
            }
            params.stack.push(svo);
        } else if (type == "delay") {
            // log("ADD Delay");
            // Set times
            var dvo = new DelayVo();
            dvo.duration = parseFloat(duration) * 1000;
            svo.definitions.push(dvo);
            params.stack.push(svo);
        }
        // log(svo);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -







    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function start() {
        // log("AFTC.Animate.start()");
        params.state.started = true;
        params.state.stopped = false;
        params.active.stackIndex = 0;
        params.active.defIndex = 0;
        selectStackRunCount = 0;
        selectStack();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    var selectStackRunLimit = 2000;
    var selectStackRunCount = 0;


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function selectStack() {
        // log("- - - - - - - - - - - - - - - - - - - - - - - - -");
        if (params.active.stackIndex >= (params.stack.length)) {
            // log("AFTC.Animate.selectStack(): Stack complete!");
            stackCompletehandler();
            return;
        } else {
            if (selectStackRunCount >= selectStackRunLimit) {
                console.error("AFTC.Animate.selectStack(): ERROR: Run count limit triggered");
                return;
            } else {
                selectStackRunCount++;
                // log("AFTC.Animate.selectStack(): Processing [" + params.active.stackIndex + "] of [" + (params.stack.length - 1) + "]");
                params.active.defIndex = 0; // reset

                var svo = params.stack[params.active.stackIndex];
                var definitions = svo.definitions;
                params.active.defIndex = 0;
                // log(svo);

                if (svo.type == "delay") {
                    var dvo = svo.definitions[0]; // DelayVo
                    if (!dvo.start) {
                        dvo.start = new Date().getTime();
                        dvo.end = dvo.start + (dvo.duration);
                    }
                    processDelay();
                } else if (svo.type == "set") {
                    processSet();
                } else if (svo.type == "anim") {
                    for (var i = 0; i < definitions.length; i++) {
                        setDefinitionValues(i);
                    }
                    processAnimRunCount = 0;
                    processAnim();
                } else {
                    log("PROCESS: ERROR - UNKNOWN type [" + svo.type + "]");
                }

            }
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    var processAnimLimit = 2000;
    var processAnimRunCount = 0;

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function processAnim() {
        if (processAnimRunCount > processAnimLimit) {
            console.error("processAnim(): RUN LIMIT REACHED!");
            return;
        }
        processAnimRunCount++;
        // log("-----");
        // log("AFTC.Animate.processAnim()")

        var svo = params.stack[params.active.stackIndex];
        var definitions = svo.definitions;
        var complete = true;

        for (var i = 0; i < definitions.length; i++) {
            var dvo = definitions[i];
            //log(dvo);
            var ct = new Date().getTime() - dvo.time.start;
            var v = 0, r = 0, g = 0, b = 0, a = 0, msg = "";
            
            // //setHTML("debug","c = " + c);
            if (ct < dvo.time.duration) {
                if (dvo.start.rgba && dvo.end.rgba) {
                    r = Math.round(dvo.start.r + (dvo.step.r * ct));
                    g = Math.round(dvo.start.g + (dvo.step.g * ct));
                    b = Math.round(dvo.start.b + (dvo.step.b * ct));
                    a = dvo.start.a + (dvo.step.a * ct);
                    v = "RGBA(" + r + "," + g + "," + b + "," + a.toFixed(2) + ")";
                    var t = "RGBA(" + dvo.end.r + "," + dvo.end.g + "," + dvo.end.b + "," + dvo.end.a.toFixed(2) + ")";
                    var c = "RGBA(" + dvo.start.r + "," + dvo.start.g + "," + dvo.start.b + "," + dvo.start.a.toFixed(2) + ")";
                    msg += "ct:" + ct + "  v:" + v + "   target:" + t + "  ";
                    msg += "  current:" + c + "  rs:" + dvo.step.r + "  ra:" + dvo.step.a;
                    // log(msg);
                    params.element.style[dvo.style] = v;
                } else {
                    v = dvo.start.v + (dvo.step.v * ct);
                    msg += "ct:" + ct + "  v:" + v + "  range:" + dvo.range.v + "  ";
                    msg += "current:" + dvo.start.v + "  target:" + dvo.end.v + "  step:" + dvo.step.v;
                    // log(msg);
                    params.element.style[dvo.style] = v + dvo.end.suffix;
                }
                complete = false;
            } else {
                if (dvo.start.rgba && dvo.end.rgba) {
                    v = "RGBA(" + dvo.end.r + "," + dvo.end.g + "," + dvo.end.b + "," + dvo.end.a.toFixed(2) + ")";
                    params.element.style[dvo.style] = v;
                } else {
                    v = dvo.end.v;
                    msg += "ct:" + ct + "  v:" + v + "  range:" + dvo.range.v + "  ";
                    msg += "current:" + dvo.start.v + "  target:" + dvo.end.v + "  step:" + dvo.step.v;
                    // log(msg);
                    params.element.style[dvo.style] = v + dvo.end.suffix;
                }
                
            }
        }

        if (!complete){
            requestAnimationFrame(processAnim);
        } else {
            params.active.stackIndex++;
            selectStack();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -








    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function processSet() {
        // log("-----");
        // log("AFTC.Animate.processSet()");
        var svo = params.stack[params.active.stackIndex];
        var definitions = svo.definitions;

        for (var i = 0; i < definitions.length; i++) {
            var dvo = definitions[i];
            var v;
            if (dvo.style.toLowerCase() == "html") {
                params.element.innerHTML = dvo.end.v;
            } else {
                if (dvo.end.rgba) {
                    v = "RGBA(" + dvo.end.r + "," + dvo.end.g + "," + dvo.end.b + "," + dvo.end.a + ")";
                    params.element.style[dvo.style] = v;
                } else {
                    var v = (dvo.end.v + dvo.end.suffix);
                    params.element.style[dvo.style] = v;
                }
            }
            // log("Setting style: [" + dvo.style + "] to [" + v + "]");
        }

        params.active.stackIndex++;
        params.active.defIndex = 0;
        selectStack();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function processDelay() {
        // log("processDelay()");

        var svo = params.stack[params.active.stackIndex];
        var definitions = svo.definitions;
        var delayVo = svo.definitions[0];

        var c = new Date().getTime() - delayVo.start;
        // log(c);
        //setHTML("debug","c = " + c);
        if (c < delayVo.duration) {
            requestAnimationFrame(processDelay);
        } else {
            // log("processDelay(): COMPLETE");
            params.active.stackIndex++;
            params.active.defIndex = 0;
            selectStack();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -








    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function stackCompletehandler() {
        // log("AFTC.Animate.stackCompletehandler()");
        if (typeof(params.onComplete) == "function") {
            params.onComplete();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -













    // Utility functions
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function setDefinitionValues(definitionsIndex) {
        // log("AFTC.Animate.setDefinitionValues(definitionsIndex:"+definitionsIndex+")");
        var svo = params.stack[params.active.stackIndex];
        var dvo = svo.definitions[definitionsIndex];


        // Process startValue
        var startValue = getComputedStyle(params.element)[dvo.style];
        if (isRGB(startValue)) {
            var rgba = getRGBAArray(startValue);
            dvo.start.r = rgba[0];
            dvo.start.g = rgba[1];
            dvo.start.b = rgba[2];
            dvo.start.a = rgba[3];
            dvo.start.rgba = true;
            dvo.start.suffix = getSuffix(startValue);
        } else {
            dvo.start.v = parseFloat(startValue);
            dvo.start.rgba = false;
            dvo.start.suffix = getSuffix(startValue);
        }

        // Calculate ranges, times and steps
        if (svo.type == "anim") {
            if (dvo.start.rgba && dvo.end.rgba) {
                // dvo.range.r = dvo.end.r > dvo.start.r ? dvo.end.r - dvo.start.r : dvo.start.r - dvo.end.r;
                // dvo.range.g = dvo.end.g > dvo.start.g ? dvo.end.g - dvo.start.g : dvo.start.g - dvo.end.g;
                // dvo.range.b = dvo.end.b > dvo.start.b ? dvo.end.b - dvo.start.b : dvo.start.b - dvo.end.b;
                // dvo.range.a = dvo.end.a > dvo.start.a ? dvo.end.a - dvo.start.a : dvo.start.a - dvo.end.a;

                dvo.range.r = dvo.end.r - dvo.start.r;
                dvo.range.g = dvo.end.g - dvo.start.g;
                dvo.range.b = dvo.end.b - dvo.start.b;
                dvo.range.a = dvo.end.a - dvo.start.a;

                dvo.step.r = (dvo.range.r / dvo.time.duration);
                dvo.step.g = (dvo.range.g / dvo.time.duration);
                dvo.step.b = (dvo.range.b / dvo.time.duration);
                dvo.step.a = (dvo.range.a / dvo.time.duration);
            } else {
                //dvo.range.v = dvo.end.v > dvo.start.v ? dvo.end.v - dvo.start.v : dvo.start.v - dvo.end.v;
                dvo.range.v = dvo.end.v - dvo.start.v;
                dvo.step.v = (dvo.range.v / dvo.time.duration);
            }

            dvo.time.start = new Date().getTime() + 0;
            dvo.time.end = dvo.time.start + dvo.time.duration;

            // log(dvo.start);
            // log(dvo.end);
            // log(dvo.range);

            // Check start and end are valid
            if (dvo.start.rgba !== dvo.end.rgba && dvo.start.suffix !== dvo.end.suffix && set != "set") {
                params.error.flag = true;
                params.error.msg = "AFTC.js > AFTC.Animate(): Error - Unable to process set or animate for style [" + dvo.style + "] due to start and end value datatypes not being the same!\n";
                params.error.msg += "startValueIsRGB:[" + dvo.start.rgba + "]  endValueIsRGB:[" + dvo.end.rgba + "]  ";
                params.error.msg += "startSuffix:[" + dvo.start.suffix + "]  endSuffix:[" + dvo.end.suffix + "]";
                console.error(params.error.msg);
                dvo.valid = false;
                return;
            }
        }
    }


    function getRGBAArray(input) {
        var input = String(input).toLowerCase();
        input = input.replace(" ", "");
        input = input.replace("rgba", "");
        input = input.replace("rgb", "");
        input = input.replace("(", "");
        input = input.replace(")", "");
        parts = input.split(",");
        for (var i = 0; i < parts.length; i++) {
            parts[i] = parseFloat(parts[i]);
        }
        if (parts.length == 3) {
            parts.push(1);
        }
        return parts;
    }

    function setStyleDuration(duration) {
        // log("setStyleDuration()");
        // params.element.style.transition = "all " + duration + "s";
        params.element.style.transitionDuration = duration + "s";
        params.element.style.webkitTransitionDuration = duration + "s";
        params.element.style.mozTransitionDuration = duration + "s";
        params.element.style.oTransitionDuration = duration + "s";
        params.element.style.msTransitionDuration = duration + "s";
    }

    function removeStyleDuration() {
        // log("removeStyleDuration()");
        // params.element.style.removeProperty("transition");
        setStyleDuration(0);
        params.element.style.removeProperty("transitionDuration");
        params.element.style.removeProperty("webkitTransitionDuration");
        params.element.style.removeProperty("mozTransitionDuration");
        params.element.style.removeProperty("oTransitionDuration");
        params.element.style.removeProperty("msTransitionDuration");
    }

    function validateDuration(duration) {
        if (typeof (duration) == "undefined") {
            return duration = 0.01;
        } else {
            return parseFloat(duration);
        }
    }

    function isRGB(input) {
        input = String(input).toLowerCase();
        if (input.indexOf("rgb") > -1) {
            return true;
        } else {
            return false;
        }
    }

    function getSuffix(input) {
        input = String(input).toLowerCase();
        if (input.indexOf("px") > -1) {
            return "px";
        } else if (input.indexOf("%") > -1) {
            return "%";
        } else if (input.indexOf("rem") > -1) {
            return "rem";
        } else if (input.indexOf("em") > -1) {
            return "em";
        } else if (input.indexOf("rem") > -1) {
            return "rem";
        } else {
            return "";
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





    // Public functions
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    this.animate = function (style, value, duration) {
        addStackItem("anim", style, value, duration);
        return this;
    };
    this.anim = function (style, value, duration) {
        addStackItem("anim", style, value, duration);
        return this;
    };
    this.setProp = function (style, value) {
        addStackItem("set", style, value, 0);
        return this;
    };
    this.set = function (style, value) {
        addStackItem("set", style, value, 0);
        return this;
    };
    this.delay = function (duration) {
        addStackItem("delay", "", 0, duration);
        return this;
    };
    this.wait = function (duration) {
        addStackItem("delay", "", 0, duration);
        return this;
    };
    this.pause = function (duration) {
        addStackItem("delay", "", 0, duration);
        return this;
    };
    this.repeat = function (count) {
        start();
    };
    this.start = function () {
        start();
    };
    this.stop = function () {
        stop();
    };
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




    // Simulate constructor auto execution
    init();
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





// /**
//  * @function: fadeIn(elementId, duration)
//  * @desc: fades in an element over a specified duration
//  * @param string elementId: the id of the html element you wish to fade
//  * @param number duration: how long you want the fade to run over in seconds
//  */
// window.fadeIn = function (elementId, duration) {
//     var cleanUp = function(){
//         animation = null;
//         delete(animation);
//     }
//     var animation = new AFTC.Animate(elementId,cleanUp);
//     animation.anim(["opacity"],[1],[duration]);
//     animation.start();
// }


// /**
//  * @function: fadeOut(elementId, duration)
//  * @desc: fades out an element over a specified duration
//  * @param string elementId: the id of the html element you wish to fade
//  * @param number duration: how long you want the fade to run over in seconds
//  */
// window.fadeOut = function (elementId, duration) {
//     var cleanUp = function(){
//         animation = null;
//         delete(animation);
//     }
//     var animation = new AFTC.Animate(elementId,cleanUp);
//     animation.anim(["opacity"],[0],[duration]);
//     animation.start();
// }
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// /**
//  * @function: getHSLColor(xxx)
//  * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//  * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
//  */
// window.getHSLColor = function (value) {
//   //value from 0 to 1
//   var hue = ((1 - value) * 120).toString(10);
//   return ["hsl(", hue, ",100%,50%)"].join("");
// }
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/**
 * @function: rgb2Hex(r,g,b)
 * @desc: rgb to hex
 * @param number r: red
 * @param number g: green
 * @param number b: blue
 * @return string: hex color
 */
window.rgb2Hex = function (r, g, b) {
  return ((r << 16) | (g << 8) | b).toString(16);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * @function: rgbToHex(r,g,b)
 * @desc: rgb to hex
 * @param number r: red
 * @param number g: green
 * @param number b: blue
 * @return string: hex color
 */
window.rgbToHex = function (r, g, b) {
  function getHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  var hex = "#" + getHex(r) + getHex(g) + getHex(b);
  hex = hex.toUpperCase();
  return hex;
}



/**
 * @function: hexToRgb(hex)
 * @desc: hexToRgb
 * @param string hex: hex color
 * @return string: rgb color
 */
window.hexToRgb = function (hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
window.hex2Rgb = function (hex) { return window.hexToRgb(hex); }
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





/**
 * @class: AFTC.Color({params})
 * @desc: Color allows you to create, convert, lighten or darken colours and more.
 * @param object params: parameters object
 * @return object: [AFTC.Color]
 * @link: https://codepen.io/AllForTheCode/pen/mLZRge
 */
AFTC.Color = function () {
  var me = this;
  var args = {
    r: false, g: false, b: false, a: false,
    hex: false
  };
  var params = {
    r: false,
    g: false,
    b: false,
    a: false,
  };

  argsToObject(arguments, args);


  function init() {
    // log(args);

    if (args.hex) {
      // log("HEX");
      params.hex = args.hex;
      initHex();
    } else if (!args.hex && !isBool(args.r) && !isBool(args.g) && !isBool(args.b) && !args.a) {
      // log("RGB");
      !args.r ? params.r = 0 : params.r = args.r;
      !args.g ? params.g = 0 : params.g = args.g;
      !args.b ? params.b = 0 : params.b = args.b;
      params.a = 1;
    } else if (!args.hex && !isBool(args.r) && !isBool(args.g) && !isBool(args.b) && !isBool(args.a)) {
      // log("RGBA");
      !args.r ? params.r = 0 : params.r = args.r;
      !args.g ? params.g = 0 : params.g = args.g;
      !args.b ? params.b = 0 : params.b = args.b;
      !args.a ? params.a = 0 : params.a = args.a;
    } else {
      // log("RANDOM");
      randomizeColor();
    }
  }


  function initHex() {
    args.hex = args.hex.replace("#", "");
    var HexBits = args.hex.match(/.{1,2}/g)
    params.r = hexToDec(HexBits[0]);
    params.g = hexToDec(HexBits[1]);
    params.b = hexToDec(HexBits[2]);
    params.a = 1;
  }


  function randomizeColor() {
    params.r = Math.round(Math.random() * 255);
    params.g = Math.round(Math.random() * 255);
    params.b = Math.round(Math.random() * 255);
    params.a = 1;
  }


  function alterByPercent(percent, r, g, b) {
    var step = 255 / 100; // step for 255 as a %

    function getValue(color, percent) {
      var currentP = parseInt((100 / 255) * color);
      var targetP = parseInt(currentP + percent);
      if (targetP > 100) { targetP = 100; }
      if (targetP < -100) { targetP = -100; }

      var newColor = Math.ceil(step * targetP);
      if (newColor > 255) { newColor = 255; }
      if (targetP < 0) { newColor = 0; }

      // log(percent + ": " + color + " = " + currentP + " > " + targetP + " = " + newColor);
      return newColor;
    }
    if (r) { params.r = getValue(params.r, percent); }
    if (g) { params.g = getValue(params.g, percent); }
    if (b) { params.b = getValue(params.b, percent); }
  }


  this.lighten = function (percent, spectrum) {
    if (!spectrum) {
      alterByPercent(percent, true, true, true);
    } else {
      var enableR = true,
        enableG = true,
        enableB = true;
      if (spectrum.r) { enableR = spectrum.r; }
      if (spectrum.g) { enableG = spectrum.g; }
      if (spectrum.b) { enableB = spectrum.b; }
      alterByPercent(percent, spectrum.r, spectrum.g, spectrum.b);
    }

  }

  this.darken = function (percent, spectrum) {
    if (!spectrum) {
      alterByPercent(-percent, true, true, true);
    } else {
      var enableR = true,
        enableG = true,
        enableB = true;
      if (spectrum.r) { enableR = spectrum.r; }
      if (spectrum.g) { enableG = spectrum.g; }
      if (spectrum.b) { enableB = spectrum.b; }
      alterByPercent(-percent, spectrum.r, spectrum.g, spectrum.b);
    }
  }



  // Utility functions
  function hexToDec(v) {
    return parseInt(v, 16);
  }

  function decToHex(v) {
    var hex = v.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  // Public function
  this.randomizeColor = function () {
    randomizeColor();
  }

  this.getRGBSstring = function () {
    var c = "RGB(" + params.r + "," + params.g + "," + params.b + ")";
    return c;
  }
  this.getRGBASstring = function () {
    var c = "RGBA(" + params.r + "," + params.g + "," + params.b + "," + params.a + ")";
    return c;
  }
  this.getHexString = function () {
    var c = "#" + decToHex(params.r) + decToHex(params.g) + decToHex(params.b);
    c = c.toUpperCase();
    return c;
  }
  this.getHex = function () { return this.getHexString(); }
  this.hex = function () { return this.getHex(); }
  this.getRGB = function () { return this.getRGBSstring(); }
  this.rgb = function () { return this.getRGB(); }
  this.getRGBA = function () { return this.getRGBASstring(); }
  this.rgba = function () { return this.getRGBA(); }
  this.setRGB = function (r, g, b) { params.r = r; params.g = g; params.b = b; }
  this.setHex = function (hex) { args.hex = hex; initHex(); }

  init();
}




/**
 * @function: getRandomColor()
 * @desc: returns a random RGB object o.r, o.g, o.g
 */
window.getRandomColor = function () {
  var c = new AFTC.Color();
  return c;
}
window.getRandomHexColor = function () {
  var c = new AFTC.Color();
  return c.getHex();
}
window.getRandomRGBString = function () {
  var c = new AFTC.Color();
  return c.getRGB();
}
window.getRandomRGBAString = function () {
  var c = new AFTC.Color();
  return c.getRGBA();
}
window.getRandomRGBColor = function () {
  var c = new AFTC.Color();
  return c.getRGB();
}

/*
 * Author: Darcey.Lloyd@gmail.com
 */

var AFTC = AFTC || {}



AFTC.Visibility = function () {
    // if (!(this instanceof arguments.callee)) {
    //     throw new Error("\nAFTC.Visibility: USAGE ERROR: Constructor called as a function.\nPlease use new AFTC.DOM.HideHsow({})");
    // }
    // if (!(this instanceof AFTC.Visibility)) {
    //     throw new Error("AFTC.Visibility needs to be called with the new keyword");
    // }

    var me = this;
    var vars = {
        element: false,
        id: false,
        delay: false,
        duration: false,
        display: "block",
        animateHeight: false,
        onStartAddClassList: false,
        onStartRemoveClassList: false,
        onCompleteAddClassList: false,
        onCompleteRemoveClassList: false,
        onComplete: false
    }

    argsToObject(arguments, vars);

    function getElement() {
        if (!vars.element && vars.id) {
            vars.element = getElementById(vars.id);
        }
    }

    function removeClassList(classList) {
        if (isArray(classList)) {
            for (var key in classList) {
                var className = classList[key];
                try {
                    vars.element.classList.remove(className);
                } catch (e){ }
            }
        } else if (typeof (classList) == "string") {
            try {
                vars.element.classList.remove(classList);
            } catch (e){ }
        }
    }

    function addClassList(classList) {
        if (isArray(classList)) {
            for (var key in classList) {
                var className = classList[key];
                try {
                    vars.element.classList.add(className);
                } catch (e){ }
            }
        } else if (typeof (classList) == "string") {
            try {
                vars.element.classList.add(classList);
            } catch (e){ }
        }
    }

    function processOnStartClassLists() {
        if (vars.onStartAddClassList) {
            addClassList(vars.onStartAddClassList);
        }
        if (vars.onStartRemoveClassList) {
            removeClassList(vars.onStartRemoveClassList);
        }
    }

    function processOnCompleteClassLists() {
        if (vars.onCompleteAddClassList) {
            addClassList(vars.onCompleteAddClassList);
        }
        if (vars.onCompleteRemoveClassList) {
            removeClassList(vars.onCompleteRemoveClassList);
        }
    }

    function _hide() {
        getElement();
        if (!vars.element || !isElement(vars.element)) { return; }

        processOnStartClassLists();

        function setOnCompleteState() {
            vars.element.style.transitionDuration = "0s";
            vars.element.style.display = "none";
            processOnCompleteClassLists();
            if (vars.onComplete) {
                vars.onComplete();
            }
        }

        if (vars.duration) {
            vars.element.style.transitionDuration = vars.duration + "s";
            vars.element.style.opacity = 0;
            vars.element.style.overflow = "hidden";
            if (vars.animateHeight){
                vars.element.style.height = getComputedStyle(vars.element).height;
                setTimeout(function () {
                    vars.element.style.height = "0px";
                    vars.element.style.marginTop = "0px";
                    vars.element.style.marginBottom = "0px";
                }, 25);
            }
            vars.element.addEventListener("transitionend", function (event) {
                setOnCompleteState();
            }, false);
        } else {
            vars.element.style.display = "none";
            setOnCompleteState();
        }
    }


    function hide() {
        if (vars.delay) {
            setTimeout(function () {
                _hide();
            }, (vars.delay*1000));
        } else {
            _hide();
        }
    }

    

    function _show() {
        getElement();
        if (!vars.element || !isElement(vars.element)) { return; }

        processOnStartClassLists();

        function setOnCompleteState() {
            vars.element.style.transitionDuration = "0s";
            vars.element.style.opacity = 1;
            vars.element.style.display = vars.display;
            processOnCompleteClassLists();
            if (vars.onComplete) {
                vars.onComplete();
            }
        }

        if (vars.duration) {
            vars.element.style.opacity = 0;
            vars.element.style.transitionDuration = vars.duration + "s";
            vars.element.style.display = vars.display;
            setTimeout(function () {
                vars.element.style.opacity = 1;
            }, 25);

            vars.element.addEventListener("transitionend", function (event) {
                setOnCompleteState();
            }, false);
        } else {
            setOnCompleteState();
        }
    }

    return {
        hide: function () {
            hide();
        },
        show: function () {
            show();
        }
    }

    function show() {
        if (vars.delay) {
            setTimeout(function () {
                _show();
            }, (vars.delay*1000));
        } else {
            _show();
        }
    }
}

window.show = function () {
    if (typeof(arguments[0]) == "string"){
        var args = { id :arguments[0] }
        AFTC.Visibility(args).show();
    } else if (isElement(arguments[0])){
        var args = { element :arguments[0] }
        AFTC.Visibility(args).show();
    } else {
        AFTC.Visibility(arguments[0]).show();
    }
}
window.fadeIn = function(){ window.show(arguments[0]); }

window.hide = function () {
    if (typeof(arguments[0]) == "string"){
        var args = { id :arguments[0] }
        AFTC.Visibility(args).hide();
    } else if (isElement(arguments[0])){
        var args = { element :arguments[0] }
        AFTC.Visibility(args).hide();
    } else {
        AFTC.Visibility(arguments[0]).hide();
    }
}
window.fadeOut = function(){ window.hide(arguments[0]); }



// AFTC init
var AFTC = AFTC || {}

/* Some reading / ref material
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
*/


/**
 * @type: class
 * @name: AFTC.XHR()
 * @version: 1.0.0
 * @requires: base.js
 * @function: AFTC.XHR(args)
 * @desc: Quick and easy xhr/ajax
 * ````
	var data = "mode=json2";
	xhr1 = AFTC.XHR({
		url: "./request.php",
		method: "post",
		data: data,
		dataType: "form",
		onComplete: function (response) {
			logTo("debug", response);
			response = JSON.parse(response);
			// Iterate
			// for (var index in response) {
			//     var jObject = response[index];
			//     logTo("debug", jObject);
			//     for (var key in jObject) {
			//         log(key + " = " + response[index][key]);
			//     }
			// }
		}
	});
 * ````
 * @param string url: url or file you wish to load
 * @param string method: post, get, put, delete etc
 * @param * data: array, object, formdata, string or json data you wish to send to the url
 * @param string dataType: data type of data object array, object, formdata, form and json
 * @param function onComplete: on a successfull xhr request this is the function that will be called
 * @return object data;
 * @link: see usage example in tests/xhr/xhr.htm
 */
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
AFTC.XHR = function () {
	var args = {
		url: false,
		method: false,
		data: false,
		dataType: false,
		responseType: false,
		onComplete: false,
		onError: false,
		onProgress: false,
		onCancel: false
	};

	// Process arguments
	if (arguments[0] && typeof (arguments[0]) == "object") {
		for (var key in arguments[0]) {
			if (args.hasOwnProperty(key)) {
				args[key] = arguments[0][key];
			}
		}
	}

	var params = {
		url: false,
		requestHeader: false,
		xhr: false,
		readyState: false,
		status: false,
		responseType: false,
		response: null,
		percentComplete: 0,
		isImage: false,
		imageType: ""
	};
	// - - - - - - - - - - - - - - - - - - -




	// - - - - - - - - - - - - - - - - - - -
	function init() {
		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			params.xhr = new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			params.xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}

		params.xhr.addEventListener("progress", updateProgress);
		params.xhr.addEventListener("load", transferComplete);
		params.xhr.addEventListener("error", transferFailed);
		params.xhr.addEventListener("abort", transferCanceled);


		// format and check args
		if (!args.method) {
			args.method = "GET";
		} else {
			args.method = String(args.method).toUpperCase();
		}

		if (!args.dataType) {
			args.dataType = "form";
		} else {
			args.dataType = String(args.dataType).toLowerCase();
		}

		if (args.method == "GET" && args.dataType != "form") {
			msg = "AFTC.XHR: ERROR: GET only supports the 'form' data type (key value pairs eg a=1&b=2)";
			console.error(msg);
			if (args.onError) {
				args.onError(msg);
			}
			return false;
		} else if (args.dataType != "form" && args.dataType != "formdata" && args.dataType != "json" && args.dataType != "array" && args.dataType != "object") {
			msg = "AFTC.XHR: ERROR: The dataType option only supports 'form', 'formdata', 'json', 'array' or 'object'";
			console.error(msg);
			if (args.onError) {
				args.onError(msg);
			}
			return false;
		}


		if (!args.url) {
			msg = "AFTC.XHR: ERROR: Please specify a URL!";
			console.error(msg);
			if (args.onError) {
				args.onError(msg);
			}
			return false;
		}
		// - - - -

		// Set response headers
		if (args.responseType) {
			args.responseType = String(args.responseType).toLowerCase();
			if (args.responseType.indexOf("json") != -1) {
				params.xhr.responseType = 'json';
			}
		}
		// - - - -

		// Open, setRequestHeader, Send
		if (!args.data) {
			params.xhr.open(args.method, args.url, true);
			params.xhr.send();
		} else {
			processData();

			if (args.dataType == "form") {
				params.requestHeader = "application/x-www-form-urlencoded; charset=utf-8";
			} else if (args.dataType == "formdata") {
				//params.requestHeader = "multipart/form-data";
			} else if (args.dataType == "json") {
				params.requestHeader = "application/json; charset=utf-8";
			} else {

			}


			params.xhr.open(args.method, args.url, true);
			if (params.requestHeader) {
				params.xhr.setRequestHeader("Content-Type", params.requestHeader);
			}


			switch (args.method) {
				case "GET":
					params.xhr.send();
					break;
				default:
					params.xhr.send(args.data);
					break;
			}

			// log("getResponseHeader = " + params.xhr.getResponseHeader("Content-Type"));

		}
		// - - - -

	}
	// - - - - - - - - - - - - - - - - - - -



	// - - - - - - - - - - - - - - - - - - -
	function responseError(msg, e) {
		console.error(msg);
		if (args.onError) {
			if (!e) {
				args.onError(params.xhr);
			} else {
				args.onError(e);
			}
		}
		return false;
	}
	// - - - - - - - - - - - - - - - - - - -


	// - - - - - - - - - - - - - - - - - - -
	function updateProgress(e) {
		params.percentComplete = 0;
		if (e.lengthComputable) {
			params.percentComplete = (100 / e.total) * e.loaded;
			params.percentComplete = parseFloat(params.percentComplete.toFixed(2));
		} else {
			params.percentComplete = 0;
		}
		if (args.onProgress) {
			args.onProgress(params.percentComplete);
		} else {
			return params.percentComplete;
		}
	}
	// - - - - - - - - - - - - - - - - - - -



	// - - - - - - - - - - - - - - - - - - -
	function transferComplete(e) {
		// log("AFTC.XHR.transferComplete()");
		if (params.xhr.readyState == 4) {
			if (params.xhr.status == "404") {
				responseError("AFTC.XHR: ERROR: Please check your URL [" + args.url + "] NOT FOUND.", params.xhr);
			} else {
				if (args.onComplete) {
					args.onComplete(params.xhr.responseText);
				}
			}
		} else {
			responseError("AFTC.XHR: ERROR: Please review event details!", e);
		}
	}
	// - - - - - - - - - - - - - - - - - - -
	// - - - - - - - - - - - - - - - - - - -
	function transferFailed(e) {
		log("AFTC.XHR.transferFailed()");
		if (args.onError) {
			args.onError(e);
		}
	}
	// - - - - - - - - - - - - - - - - - - -
	// - - - - - - - - - - - - - - - - - - -
	function transferCanceled(e) {
		log("AFTC.XHR.transferCanceled()");
		if (args.onCancel) {
			args.onCancel(e);
		}
	}
	// - - - - - - - - - - - - - - - - - - -




	// - - - - - - - - - - - - - - - - - - -
	function cleanUpEventListeners() {
		try {
			params.xhr.removeEventListener("progress", updateProgress);
		} catch (e) { }
		try {
			params.xhr.removeEventListener("load", transferComplete);
		} catch (e) { }
		try {
			params.xhr.removeEventListener("error", transferFailed);
		} catch (e) { }
		try {
			params.xhr.removeEventListener("abort", transferCanceled);
		} catch (e) { }
	}
	// - - - - - - - - - - - - - - - - - - -




	// - - - - - - - - - - - - - - - - - - -
	function processData() {
		if (args.method == "GET" && args.data != false) {
			args.url = args.url + "?" + args.data;
			return true;
		}

		if (args.method == "POST") {
			if (args.data.append) {
				args.dataType = "formdata";
			} else {
				if (isArray(args.data) || typeof (args.data) == "object") {
					// Array || Object
					var data = "";
					var formData = new FormData();
					for (var key in args.data) {
						log(key + " = " + args.data[key]);
						formData.append(key, args.data[key]);
						data += "&" + key + "=" + args.data[key];
					}
					args.dataType = "form";
					args.data = data;
					return true;
				}
			}

		}


		// default
		return true;
	}
	// - - - - - - - - - - - - - - - - - - -






	// Constructor simulation
	init();
	// - - - - - - - - - - - - - - - - - - -


	// utils
	function isImage() {
		var sfx = ["jpg","jpeg","png","gif"];
		for (var i=0; i < sfx.length; i++){
			if (args.url.indexOf(sfx[i]) > -1){
				params.imageType = sfx[i];
				params.isImage = true;
				break;
			}
		}
	}
	// - - - - - - - - - - - - - - - - - - -


	// Return
	return {
		url: args.url,
		method: args.method,
		data: args.data,
		dataType: args.dataType,
		xhr: params.xhr,
		readyState: params.readyState,
		status: params.status,
		response: params.response,
		responseType: params.responseType
	}
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




