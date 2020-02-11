
let a;
function setup() {
  createCanvas(920, 600);
  stroke(255,50,50,150);
  a = height / 2;
}

function draw() {
  background(51);
  line(10, a, width, a);
  a = a - 0.5;
  if (a < 0) {
    a = height++;
  }
}
