let y;
let num = 200;

function setup() {
  createCanvas(800, 860);
  background(10,32,50);
  noStroke();

  // Draw white bars
  fill(55,30,90);
  y = 60;
  for (let i = 0; i < num / 3; i++) {
    rect(50, y, 475, 10);
    y += 20;
  }

  // Gray bars
  fill(51,50,150);
  y = 40;
  for (let i = 0; i < num; i++) {
    rect(405, y, 30, 10);
    y += 20;
  }
  y = 50;
  for (let i = 0; i < num; i++) {
    rect(425, y, 30, 10);
    y += 50;
  }

  // Thin lines
  y = 145;
  fill(120,50,10);
  for (let i = 0; i < num - 1; i++) {
    rect(220, y, 240, 2);
    y += 20;
  }
}
