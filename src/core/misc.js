/**
 * @function: cycle(pos, max)
 * @desc: cycles from 0 to max based on pos, will cycle back to 0 if over max
 * @param number pos: position of max
 * @param number max: max number to cycle to
 */
function cycle(pos, max) {
    return (pos % max + max) % max;
}