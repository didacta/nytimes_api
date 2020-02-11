// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

function setup() {
  createCanvas(710, 550);

  // Define colors
  b1 = color(35,20,10);
  b2 = color(300,150,140);
  c1 = color(254, 102,90);
  c2 = color(10, 102, 153);

  noLoop();
}

function draw() {
  // Background
  setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
  setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);

  // Foreground
  setGradient(250, 90, 240, 80, c1, c2, Y_AXIS);
  setGradient(-50, 20, 90, 80, c1, c2, Y_AXIS);
  setGradient(-150, 190, 540, 80, c2, c1, X_AXIS);
  setGradient(-50, 190, 540, 80, c2, c1, X_AXIS);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0.16, 2.1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x**2, i, x + w, i*3);
    }
    for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0.16, 2.1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x**-2, i, x + w, i*3);
      }
    for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0.1255, 6);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
        
      }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0.25, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
      
    }
    
  }
}
