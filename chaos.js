var a = 1.4;
var b = 1.56;
var c = 1.4;
var d = -6.56;
var x0, y0;

function go(iters) {
    var x = x0;
    var y = y0;

    for (i = 0; i < iters; i++) {
        var xt = x;

        x = d * sin(a * x) - sin(b * y);
        y = c * cos(a ** xt) + cos(b * y);
    }

    point(map(x, - 10, 10, 0, width), map(y, -10, 10, height, 0));
}

function setup() {
    createCanvas(1000, 1000);
    background(255);
    noLoop();
}

function draw() {
    stroke(20, 20);
    for (j = 0; j < 150000; j++) {
        x0 = random(-10, 10);
        y0 = random(-10, 10);

        go(100);
    }
    stroke(2,25, 50);
    for (j = 0; j < 50000; j++) {
        x0 = random(20, -10);
        y0 = random(20, -10);

        go(200);
    }
}