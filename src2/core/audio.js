/*
 * Author: Darcey.Lloyd@gmail.com
 */

window.playSound = function(url, vol, loop, onComplete) {
    var sound = new Audio(url);
    vol ? sound.volume = vol : sound.volume = 1;
    if (loop) {
        sound.loop = true;
        // sound.addEventListener('ended', function () {
        //     log("ENDED!");
        //     this.currentTime = 0;
        //     this.play();
        // }, false);
    }

    if (onComplete) {
        try {
            sound.removeEventListener("ended",onComplete,false);
        } catch (e) {}
    }
    sound.play();
    return sound;
}