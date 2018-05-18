

// REF: https://www.w3schools.com/tags/ref_av_dom.asp
AFTC.Audio = function () {
    if (!(this instanceof arguments.callee)) {
        throw new Error("\nAFTC.Audio: USAGE ERROR: Constructor called as a function.\nPlease use new AFTC.Audio({})");
    }

    var me = this;
    var args = {
        url: false,
        volume: 1,
        repeat: false,
        preload: true,
        onComplete: false,
        offsetLoopBy:0
    };
    var params = {
        audio: false,
        playCount: 0,
        currentTime: 0,
        duration: 0,
        endTimeWithOffset: 0
    };

    new AFTC.ArgsToObject(arguments[0], args);

    function init() {
        if (!args.url) {
            throw new Error("\nAFTC.Audio: USAGE ERROR: A url to a sound file is required!");
        }


        //params.audio = new Audio();
        // params.audio.src = args.url; // DONT WORK

        params.audio = document.createElement('audio');
        params.audio.volume = args.volume;
        params.audio.preload = "auto"; // auto || metadata || none
        
        // DOESNT WORK
        // params.audio.addEventListener("onloadeddata",function(){ log("LOADED"); });
        params.audio.onloadeddata = function () { log("LOADED"); };
        params.audio.setAttribute('src', args.url);


        if (args.repeat != -1 && args.repeat > 0) {
            log("MANUAL LOOPING ENABLED!");
            params.audio.addEventListener('timeupdate', onTimeUpdate,false);
        } else {
            log("ENDED ADDED");
            params.audio.addEventListener("ended", playComplete, false);
        }

        setInterval(checkTime,50);

    }

    function onTimeUpdate(e){
        // var buffer = .44
        // if(this.currentTime > this.duration - buffer){
        //   this.currentTime = 0
        //   this.play()
        // }}, false);
        // log(this.currentTime + " : " + this.duration);
        params.currentTime = this.currentTime;
        params.duration = this.duration;
        checkPlayPos();
    }

    function checkTime(){
        setHTML("debug","time = " + params.audio.currentTime);
    }

    params.manualLooping = true;
    params.manualLoopingComplete = false;
    function checkPlayPos(){
        if (!params.manualLoopingComplete){ return; }
        params.endTimeWithOffset = params.duration - args.offsetLoopBy;
        if (params.currentTime >= params.endTimeWithOffset){
            params.playCount++;
            params.audio.currentTime = 0;
            if (args.repeat > 0 && params.playCount < args.repeat){

            } else {
                // COMPELTE
                params.manualLoopingComplete = true;
                params.audio.removeEventListener('timeupdate',onTimeUpdate,false);
                log("COMPLETE!");
                if (args.onComplete){
                    args.onComplete();
                }
            }
        }
    }


    function playComplete(e) {
        params.playCount++;
        if (args.repeat == 0) {
            if (args.onComplete) {
                args.onComplete();
            }
        } else if (args.repeat == -1) {
            play();
        } else if (args.repeat > 0) {
            if (params.playCount < args.repeat) {
                play();
            } else {
                if (args.onComplete) {
                    args.onComplete();
                }
            }
        }
    }

    function play() {
        if (params.audio) {
            params.audio.play();
        }
    }

    function stop() {
        if (params.audio) {
            params.audio.pause();
        }
    }

    function dispose() {
        params.audio = undefined;
    }

    // public
    this.play = function () {
        params.playCount = 0;
        play();
    }
    this.dispose = function () {
        dispose();
    }
    this.getAudio = function () { return params.sound; }

    init();
}
