
let a;

function setup() {
  createCanvas(720, 400);
  stroke(155,50,50);
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
