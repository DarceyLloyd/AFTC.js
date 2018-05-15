/*
 * Author: Darcey.Lloyd@gmail.com
 */

// window.playSound = function(url,onComplete) {
//     if (!url){ url = "https://dev.aftc.io/assets/sounds/shall_we_play_a_game.mp3"; }
//     var snd = new Audio(url);
//     if (onComplete){
//         snd.addEventListener("ended",onComplete);
//     }
//     snd.play();
// }



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
        snd.addEventListener("ended",onComplete,false);
    }
    sound.play();
    return sound;
}