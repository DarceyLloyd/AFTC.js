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