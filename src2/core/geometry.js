// AFTC.Point = function (x, y) {
//     !x ? this.x = 0 : this.x = x;
//     !y ? this.y = 0 : this.y = y;
// }

AFTC.Point = function (x, y) {

    !x ? this.x = 0 : this.x = x;
    !y ? this.y = 0 : this.y = y;

    this.position = function () {
        return [this.x, this.y];
    }

    this.clone = function () {
        return new AFTC.Point(this.x, this.y);
    }

    this.delta = function (point) {
        return [this.x - point.x, this.y - point.y];
    }

    this.distance = function (point) {
        var dx = point.x - this.x;
        var dy = point.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    this.moveTo = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    this.moveAtAngle = function (angle, distance) {
        this.x += Math.cos(angle) * distance;
        this.y += Math.sin(angle) * distance;
        return this;
    }

    this.applyVelocity = function (velocity) {
        this.x += velocity.vx;
        this.y += velocity.vy;
        return this;
    }

    this.angleRadians = function (point) {
        // radians = atan2(deltaY, deltaX)
        var y = point.y - this.y;
        var x = point.x - this.x;
        return Math.atan2(y, x);
    }

    this.angleDeg = function (point) {
        // degrees = atan2(deltaY, deltaX) * (180 / PI)
        var y = point.y - this.y;
        var x = point.x - this.x;
        return Math.atan2(y, x) * (180 / Math.PI);
    }

    this.rotate = function (origin, radians) {
        // rotate the point around a given origin point
        var cos = Math.cos(radians);
        var sin = Math.sin(radians);
        this.x =
            cos * (this.x - origin.x) + sin * (this.y - origin.y) + origin.x;
        this.y =
            cos * (this.y - origin.y) - sin * (this.x - origin.x) + origin.y;
        return this;
    }
}


AFTC.Rectangle = function (x, y, w, h) {
    !x ? this.x = 0 : this.x = x;
    !y ? this.y = 0 : this.y = y;
    !w ? this.w = 0 : this.w = w;
    !h ? this.h = 0 : this.h = h;
    this.center = new AFTC.Point();

    function init() {
        this.center = setCenterPoint();
    }

    function setCenterPoint() {
        this.center = new AFTC.Point();
        this.center.x = Math.abs(this.w - this.x) / 2;
        this.center.y = Math.abs(this.h - this.y) / 2;
    }

    this.offsetOuter = function (offset) {
        var rect = new AFTC.Rectangle();
        rect.x = this.x - offset;
        rect.y = this.y - offset;
        rect.w = this.w + offset * 2;
        rect.h = this.h + offset * 2;
    }

    this.offsetInner = function (offset) {
        var rect = new AFTC.Rectangle();
        rect.x = this.x + offset;
        rect.y = this.y + offset;
        rect.w = this.w - offset * 2;
        rect.h = this.h - offset * 2;
    }

    this.setX = function (v) { this.x = v; init(); }
    this.setY = function (v) { this.y = v; init(); }
    this.setW = function (v) { this.w = v; init(); }
    this.setH = function (v) { this.h = v; init(); }

    init();
}
AFTC.Rect = AFTC.Rectangle;




AFTC.Velocity = function (vx, vy) {

    !vx ? this.vx = 0 : this.vx = vx;
    !vy ? this.vy = 0 : this.vy = vy;

    this.flip = function () {
        // reflection on both axis
        this.vx *= -1;
        this.vy *= -1;
        return this;
    }

    this.flipX = function () {
        // reflection on x axis
        this.vx *= -1;
        return this;
    }

    this.flipY = function () {
        // reflection on y axis
        this.vy *= -1;
        return this;
    }

    this.multiply = function (scalar) {
        this.vx *= scalar;
        this.vy *= scalar;
        return this;
    }

    this.divide = function (scalar) {
        this.vx /= scalar;
        this.vy /= scalar;
        return this;
    }
}