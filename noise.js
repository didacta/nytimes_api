function setup() {
    createCanvas(900, 900);
    background(312, 156, 99);
    smooth();
    
    

    var xstart = random(-140),
        xnoise = xstart,
        ynoise = random(210);

    for (var y = 0; y <= height; y += 5) {
        ynoise += 2.4;
        xnoise = xstart;
        for (var x = 0; x <= width; x += 2) {
            xnoise += 1.51;
            drawPoint(x, y, noise(xnoise, ynoise));
        }
    }
}

function drawPoint(x, y, noiseFactor) {
    push();
    translate(x*y^10+y*.45, y+y);
   
    line(1, 64, 137, 62);
    line(82, -164, 137, -62);
    let c = color(5, 224, 140)
    fill(c)
    circle(1,-20,8,90);
    rotate(noiseFactor * radians(260));
    colorMode(HSB);
    stroke(x * 3.5 + 10, 250, 238)
    ;

    pop();
}
