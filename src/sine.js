let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 25.0; // Height of wave
let period = 30.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

function setup() {
  createCanvas(710, 800);
  w = width + 26;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(80);
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.034;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
    Math.random(x);

  }
}

function renderWave() {
  noStroke();
  fill(140, 20, 310);
  fill(140, 20, 310);

  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 26, 16);
  }
  fill(40, 10, 30);
  for (let x = 20; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 4 + yvalues[x], -6, 16);
  }
  fill(40, 20, 310);
  for (let x = 10; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], -6, 16);
  }
  fill(420,220,310);
  for (let x = -5; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 20 + yvalues[x], -62, 16);
  }
  fill(122,120,210);
  for (let x = -2; x < yvalues.length; x++) {
  ellipse(x * xspacing, height / 20 + yvalues[x], -22, 12);

    
  }
}
