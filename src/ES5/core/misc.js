/**
 * @function: cycle(pos, max)
 * @desc: cycles from 0 to max based on pos, will cycle back to 0 if over max
 * @param pos number: position of max
 * @param max number: max number to cycle to
 * @link: https://codepen.io/AllForTheCode/pen/BxMZBZ
 */
function cycle(pos, max) {
    return (pos % max + max) % max;
}