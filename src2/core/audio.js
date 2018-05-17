/*
 * Author: Darcey.Lloyd@gmail.com
 */

window.playSound = function(url, vol, loop, onComplete) {
    var path = url;
    var sound = new Audio(path);
    vol ? sound.volume = vol : sound.volume = 1;
    if (loop) {
        sound.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }

    if (onComplete) {
        sound.addEventListener("ended",onComplete,false);
    }
    sound.play();
    return sound;
}