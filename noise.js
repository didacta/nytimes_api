function setup() {
    createCanvas(900, 900);
  
    smooth();
    
    

    var xstart = random(-140),
        xnoise = xstart,
        ynoise = random(210);

    for (var y = 0; y <= height; y += 35) {
        ynoise += 2.4;
        xnoise = xstart;
        for (var x = 0; x <= width; x += 1.4) {
            xnoise += 4.51;
            drawPoint(x, y, noise(xnoise, ynoise));
        }
    }
}

function drawPoint(x, y, noiseFactor) {
    push();
    translate(x*y^10+y*.45, y+y);
   
    line(1, 64, 137, 62);
    line(82, -164, 137, -62);
    let c = color(45, 134, 140)
    let d = color(52,74, 220)
    fill(c)
    
    circle(10,-220,8,90);
    fill(d)
    circle(210,-220,18,240);
    rotate(noiseFactor * radians(260));
    colorMode(HSB);
    stroke(x * 5.5 + 10, 250, 238)
    ;

    pop();
}

function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
  
    if (axis === Y_AXIS) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else if (axis === X_AXIS) {
      // Left to right gradient
      for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
      }
    }
  }