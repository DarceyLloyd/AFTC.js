

// REF: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
// REF: https://www.w3schools.com/tags/ref_av_dom.asp
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
AFTC.Audio = function () {
    if (!(this instanceof arguments.callee)) {
        var msg = "\nAFTC.Audio: USAGE ERROR: Constructor called as a function.\n";
        msg += "Please use new AFTC.Audio({params})";
        throw new Error(msg);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    var me = this;
    var args = {
        url: false,
        volume: 1,
        repeat: 0,
        preload: true,
        onComplete: false,
        offsetLoopBy: 0
    };
    var params = {
        audio: false,
        loaded: false,
        playCount: 0,
        endTimeWithOffset: 0,
        manualLooping: false,
        manualLoopingComplete: false,
        timer: false,
        timerInterval: 50,
        ready: false,
        isIE: false,
        isEdge: false,
        isFireFox: false,
        isChrome: false,
        isOpera: false,
        isSafari: false
    };

    new AFTC.ArgsToObject(arguments[0], args);
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // Constructor
    function init() {
        if (!args.url) {
            throw new Error("\nAFTC.Audio: USAGE ERROR: A url to a sound file is required!");
        }

        // DETECT THE BROWSERS
        params.isChrome = isChrome();
        params.isFirefox = isFireFox();
        params.isOpera = isOpera();
        params.isSafari = isSafari();
        params.isEdge = isEdge();
        params.isIE = isIE();
        // log("isChrome = " + params.isChrome);
        // log("isFirefox = " + params.isFirefox);
        // log("isOpera = " + params.isOpera);
        // log("isSafari = " + params.isSafari);
        // log("isEdge = " + params.isEdge);
        // log("isIE = " + params.isIE);

        //params.audio = new Audio();
        // params.audio.src = args.url; // DONT WORK

        params.audio = document.createElement('audio');
        // params.audio.volume = args.volume;
        params.audio.preload = "auto"; // auto || metadata || none

        params.audio.addEventListener('timeupdate', onTimeUpdate, false);
        params.audio.addEventListener("ended", playCompleteViaEvent, false);

        // params.audio.addEventListener("onloadeddata",function(){ log("LOADED"); }); // DOESNT WORK BUT SHOULD!
        params.audio.onloadeddata = function () {
            params.loaded = true;
            onLoadedInitAudio();
        };

        if (isArray(args.url)) {
            var html = "";
            var isOGG, isMP3, isWAV;
            for (var i = 0; i < args.url.length; i++) {
                // log("file " + i + " = " + args.url[i]);
                isOGG = isInString("ogg", args.url[i].toLowerCase());
                isMP3 = isInString("mp3", args.url[i].toLowerCase());
                isWAV = isInString("wav", args.url[i].toLowerCase());
                if (isOGG && !isMP3 && !isWAV) {
                    html += '<source src="' + args.url[i] + '" type="audio/ogg" />'
                } else if (!isOGG && isMP3 && !isWAV) {
                    html += '<source src="' + args.url[i] + '" type="audio/mpeg" />'
                } else if (!isOGG && !isMP3 && isWAV) {
                    html += '<source src="' + args.url[i] + '" type="audio/wave" />'
                } else {
                    throw new Error("\nAFTC.Audio: USAGE ERROR: Only MP3, OGG and WAV formats are supported!");
                }
            }
            params.audio.innerHTML = html;
            //audioElement.innerHTML = '<source src="' + '/audio/sound.mp3'+ '" type="audio/mpeg" />'
        } else {

            var msg = "\nAFTC.JS > AUDIO.JS > WARNING\n";
            msg += "You are using an obsolete or incapable web browser, audio may not function correctly!\n";

            if (params.isIE) {
                msg += "If you have to use a microsoft web browser please use MS Edge, however this may still not function correctly\n.";
                msg += "It is recommended that you use Chrome, Firefox or Opera web browsers.";
                console.warn(msg);
            } else if (params.isEdge) {
                msg += "It is recommended that you use Chrome, Firefox or Opera web browsers.";
                console.warn(msg);
            }

            // Compatibility issue alerts/warnings
            var isOGG = isInString("ogg", args.url.toLowerCase());
            var isMP3 = isInString("mp3", args.url.toLowerCase());
            var isWAV = isInString("wav", args.url.toLowerCase());
            // log("isOGG = " + isOGG);
            // log("isMP3 = " + isMP3);
            // log("isWAV = " + isWAV);
            // log("args.url = " + args.url);

            if (params.isIE && isWAV || params.isEdge && isWAV || params.isFirefox && isWAV) {
                throw new Error("\nAFTC.Audio: USAGE ERROR: FireFox, EDGE & IE don't support WAV playback!\nPlease use MP3!");
            }
            if (params.isIE && isOGG) {
                throw new Error("\nAFTC.Audio: USAGE ERROR: IE doesn't support OGG playback!\nPlease use MP3!");
            }

            params.audio.setAttribute('src', args.url);
        }

    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    function onLoadedInitAudio() {
        // log("onLoadedInitAudio()");
        // This will force execution of the timeupdate event, which will init params.audio.duration
        params.audio.volume = 0;
        setTimeout(function () {
            // WARNING: Putting params.audio.play here will ignore volume and other settings
            playIt();
        }, 250);
    }
    function playIt() {
        params.audio.play();
        params.timer = setInterval(checkForDuration, params.timerInterval);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    function checkForDuration() {
        if (params.audio.duration > 0) {
            params.isReady = true;
            //log(params.audio.duration + " seconds of audio is ready for use!");
            // setHTML("debug3", "duration = " + params.audio.duration.toFixed(3));
            clearInterval(params.timer);
            params.timer = null;
            params.ready = true;
            params.audio.pause();
            params.audio.volume = args.volume;
            params.audio.currentTime = 0;

            // SET REPEAT HERE AFTER DURATION INIT HAS BEEN DONE
            // NOTE: Edge wont loop unless src is an array of sources (BUG)
            if (params.isEdge && !isArray(args.src)) {
                if (args.offsetLoopBy == 0) {
                    args.offsetLoopBy = 0.01;
                }
            } else {
                if (args.repeat == -1) {
                    params.audio.loop = true;
                }
            }
        } else {
            // setHTML("debug3", "duration = ??");
        }

        // log(args);
        // log(params);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    function onTimeUpdate(e) {
        // Doesn't need to do anything, but "ontimeupdate" event needs to be initialised
        // log("onTimeUpdate()");
        // params.currentTime = this.currentTime;
        // params.audio.duration = this.duration;
        // setHTML("debug2","duration = " + params.audio.duration.toFixed(3));
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    function playCompleteViaEvent() {
        if (params.audio.loop) {
            // log("AUDIO is in loop mode");
            return;
        }

        if (params.manualLooping) { return; }

        params.playCount++;
        // log("playCompleteViaEvent(): playCount = " + params.playCount + " : args.repeat = " + args.repeat);

        params.audio.currentTime = 0;

        if (args.repeat == -1) {
            // repeat forever
            params.audio.currentTime = 0;
            params.audio.play();
        } else {
            if (params.playCount <= args.repeat) {
                // repeat
                params.audio.currentTime = 0;
                params.audio.play();
            } else {
                // complete
                params.audio.pause();
                params.audio.currentTime = 0;

                if (args.onComplete) {
                    args.onComplete();
                }
            }
        }

    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    function checkPlayPos() {
        if (!params.manualLooping) { return; }

        // setHTML("debug1", "time = " + params.audio.currentTime.toFixed(3) + "/" + params.audio.duration.toFixed(3));

        if (params.manualLoopingComplete) {
            // log("checkPlayPos(): manualLoopingComplete!");
            return;
        }
        params.endTimeWithOffset = params.audio.duration - args.offsetLoopBy;
        if (params.audio.currentTime >= params.endTimeWithOffset) {
            params.playCount++;

            if (args.repeat == -1) {
                // repeat forever
                params.audio.currentTime = 0;
            } else if (args.repeat > 0) {
                if (params.playCount <= args.repeat) {
                    // repeat
                    params.audio.currentTime = 0;
                } else {
                    // COMPELTE
                    params.manualLoopingComplete = true;
                    // log("COMPLETE!");
                    clearInterval(params.timer);
                    params.timer = null;
                    if (args.onComplete) {
                        args.onComplete();
                    }
                }
            }
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





    function play() {
        if (params.audio) {
            if (!params.isReady) {
                console.warn("AFTC.Audio(): WARNING: Audio is not ready! [load has not completed, will try to play anyway!]");
            }
            params.playCount = 0;
            params.manualLoopingComplete = false;
            params.audio.currentTime = 0;

            if (args.offsetLoopBy != 0) {
                params.manualLooping = true;
                params.timer = setInterval(checkPlayPos, params.timerInterval);
                params.audio.play();
            } else {
                params.manualLooping = false;
                params.audio.play();
            }
        } else {
            console.warn("AFTC.Audio(): WARNING: Audio is not ready!");
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    function pause() {
        if (params.audio) {
            params.audio.pause();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    function resume() {
        if (params.audio) {
            params.audio.play();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    function dispose() {
        params.audio.removeEventListener('timeupdate', onTimeUpdate, false);
        params.audio.removeEventListener('ended', playCompleteViaEvent, false);
        params.audio = undefined;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    // public
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    this.play = function () { play(); }
    this.pause = function () { pause(); }
    this.stop = function () { pause(); }
    this.resume = function () { resume(); }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    this.dispose = function () { dispose(); }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    this.getAudio = function () { return params.audio; }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    this.isReady = function () { return params.ready; }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    // Constructor simulation (run construct or init in this case)
    init();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





window.playSound = function(url, vol, loop, onComplete) {
    // var sound = new Audio(url);
    // vol ? sound.volume = vol : sound.volume = 1;
    // if (loop) {
    //     sound.loop = true;
    //     // sound.addEventListener('ended', function () {
    //     //     log("ENDED!");
    //     //     this.currentTime = 0;
    //     //     this.play();
    //     // }, false);
    // }

    // if (onComplete) {
    //     try {
    //         sound.removeEventListener("ended",onComplete,false);
    //     } catch (e) {}
    // }
    // sound.play();
    // return sound;
}