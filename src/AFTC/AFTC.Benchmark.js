
/**
 * @function: AFTC.Benchmark()
 * @desc: Quick and easy benchmarking, see examples benchmark.htm for usage
 * ```
 * AFTC.Benchmark().start();
 * // do you stuff
 * AFTC.Benchmark().end();
 * log( AFTC.Benchmark().getTime() );
 * ```
 * @function start: start benchmark
 * @function stop: stop benchmark
 * @function getTime: return benchmark result
 */
AFTC.Benchmark = function () {
    var params = {
        start: 0,
        end: 0,
        time: 0
    }

    return {
        start: function () {
            params.start = new Date();
        },
        stop: function () {
            params.end = new Date();
            params.time = params.end.getTime() - params.start.getTime();
            return params.time;
        },
        getTime: function () {
            return params.time;
        }
    }
}
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

