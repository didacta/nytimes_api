var modelSize, numPoints, wavePhase, waveVertices;

function setup() {
  createCanvas(600, 520, WEBGL);
  modelSize = 100;
  numPoints = 10;
  wavePhase = 0;
  waveVertices = [];
  for (let i = 0; i < numPoints; i++) {
    waveVertices[i] = createVector(random(-5, 5), 0, random(-5, 5));
  }
}

function draw() {
  background(20);
  ambientLight(300, 200, 255);

  for (var i = 0; i < numPoints; i++) {
    // var index = floor(map(i, 0, numPoints, 0, pumpkin.vertices.length));
    // var vert = pumpkin.vertices[index];
    var vert = waveVertices[i];
    vert.y = sin(vert.x + wavePhase) * cos(vert.y + wavePhase) * 0.4;

    push();
    translate(vert.x * modelSize, vert.y * modelSize, vert.z * modelSize);
    sphere(60, 10);
    fill(155, 127);
    noFill();
    stroke(255, 102, 0);
    line(85, 20, 10, 10);
    line(90, 90, 15, 80);
    stroke(0, 0, 0);
    bezier(85, 20, 10, 10, 90, 90, 15, 80);
    noFill();
    stroke(155);
    bezier(250, -250, 20, 100, -200, 0, 100, 0, 0, 0, 100, 0);
    pop();
  }

  // change 0.02 to other numbers to speed up or slow down the wave
  wavePhase = frameCount * 0.02;
}
