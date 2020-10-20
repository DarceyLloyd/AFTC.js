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













/**
 * @function: AnimationFrameStack()
 * @desc: Gives easy access to a single requestAnimationFrame loop which you can add functions to process in each loop, note the function stack is stored on global window scope
 * @method add: add a function to the stack to be executed on animationFrameLoop
 * @method remove: remove a function from the stack
 * @method start: start the requestAnimationFrame loop
 * @method stop: stop the requestAnimationFrame loop
 * @method dispose: dispose of all functions in the function stack
 * @link:
 */
function AnimationFrameStack() {
    var me = this;

    this.init = function(){
        if (!window){
            console.error("AnimationFrameStack(): ERROR - Unable to access window!");
        } else {
            if (!window.aftcAnimStack){
                window.aftcAnimStack = {
                    firstRun: true,
                    running: true,
                    stack: [],
                    uid: Math.floor(Math.random()*99999)
                }
            }
        }

        if (window.aftcAnimStack.firstRun){
            window.aftcAnimStack.firstRun = false;
            this.processFnStack();
        }
    }

    this.start = function(){
        window.aftcAnimStack.running = true;
        this.processFnStack();
    }

    this.stop = function(){
        window.aftcAnimStack.running = false;
    }

    this.dispose = function(){
        if (window.aftcAnimStack){
            window.aftcAnimStack.running = false;
            delete window.aftcAnimStack.stack;
            window.aftcAnimStack.stack = [];
        }
    }

    this.processFnStack = function(){
        if (!window.aftcAnimStack.running){ return; }

        if (window.aftcAnimStack.stack){
            // log(window.aftcAnimStack.stack.length);
            for(var i=0; i < window.aftcAnimStack.stack.length; i++){
                window.aftcAnimStack.stack[i]();
            }
        }

        window.requestAnimationFrame(me.processFnStack);
    }

    this.add = function(fn){
        window.aftcAnimStack.stack.push(fn);
    }

    this.remove = function(fn){
        for(var i=0; i < window.aftcAnimStack.stack.length; i++){
            if (window.aftcAnimStack.stack[i] === fn){
                window.aftcAnimStack.stack = arrayRemoveIndex(window.aftcAnimStack.stack,i);
            }
        }
    }

    this.init();
}




