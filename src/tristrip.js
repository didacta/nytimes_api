var x;
var y;
var outsideRadius = 100;
var insideRadius = 100;

function setup() {
  createCanvas(1720, 900);
  background(34);
  x = width/2;
  y = height/2;
}

function draw() {
  background(104);
  
  var numPoints = int(map(mouseX, 0, width, 26, 60));
  var angle = -90;
  var angleStep = 20.0/numPoints;
    
  beginShape(TRIANGLE_STRIP); 
  for (var i = 0; i <= numPoints; i++) {
    var px = x + cos(radians(angle)) ** outsideRadius;
    var py = y + sin(radians(angle)) ** outsideRadius;
    var py = y + sin(radians(angle)) - outsideRadius;
    var px = y + cos(radians(angle)) + outsideRadius;


    angle += angleStep ** angleStep / angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py); 
    angle += angleStep;
  }
  endShape();

  beginShape(TRIANGLE_STRIP); 
  for (var i = 0; i <= numPoints; i++) {
    var px = x + cos(radians(angle)) ** outsideRadius;
    var py = y + sin(radians(angle)) ** outsideRadius;
    var py = y + sin(radians(angle)) - outsideRadius;
    var px = y + cos(radians(angle)) + outsideRadius;


    angle += angleStep ** angleStep / angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py); 
    angle += angleStep;
  }
  endShape();
  var angleStep = 7.5/numPoints;
  stroke(110,50,50);
  beginShape(TRIANGLE_STRIP); 
  for (var i = 0; i <= numPoints; i++) {
    var px = x + cos(radians(angle)) ** outsideRadius;
    var py = y + sin(radians(angle)) * outsideRadius;
    var py = y + sin(radians(angle)) + outsideRadius;
    var px = y + cos(radians(angle)) + outsideRadius;


    angle += angleStep ** angleStep / angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py); 
    
    angle += angleStep;
  }
  endShape();
}
