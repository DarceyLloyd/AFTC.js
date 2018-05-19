AFTC.Point = function (x, y) {
    !x ? this.x = 0 : this.x = x;
    !y ? this.y = 0 : this.y = y;
}

AFTC.Rectangle = function (x1, y1, x2, y2) {
    !x1 ? this.x1 = 0 : this.x1 = x1;
    !y1 ? this.y1 = 0 : this.y1 = y1;
    !x2 ? this.x2 = 0 : this.x2 = x2;
    !y2 ? this.y2 = 0 : this.y2 = y2;
}
AFTC.Rect = AFTC.Rectangle;