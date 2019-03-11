function setup() {
    // Create the canvas
    createCanvas(920, 600,WEBGL);
    
    background(200);
    normalMaterial();
    // Set colors
    fill(204, 101, 192, 127);
    stroke(127, 63, 120);
  
    // A rectangle
    rect(40, 120, 120, 40);
    // An ellipse
    ellipse(240, 240, 80, 80);
    // A triangle
    triangle(300, 100, 320, 100, 310, 80);
  
    // A design for a simple flower
    translate(580, 200);
    noStroke();
    for (let i = 0; i < 15; i ++) {
      ellipse(0, 30, 20, 80);
      rotate(PI/5);
      
    }
    
  }
  function draw() {
    orbitControl();
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    // to set the light position,
    // think of the world's coordinate as:
    // -width/2,-height/2 -------- width/2,-height/2
    //                |            |
    //                |     0,0    |
    //                |            |
    // -width/2,height/2--------width/2,height/2
    pointLight(250, 250, 250, locX, locY, 50);
    ambientMaterial(250);
    rotateY(0.5);
    box(30, 50);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.015);
    box(150,150,20,4,8);
    background(20);
    fill(204, 101, 192, 127);
    box(325,110,30,14,82);
    fill(104, 101, 192, 127);
    plane(50,20,30,2,8)
    fill(154, 101, 192, 127);
    translate(0, 10, 0);
    ellipsoid(50, 80, 90);
    translate(-10, 10, 200);
    rotateX(frameCount * 0.015);
    rotateY(frameCount * 0.015);
    fill(44, 101, 192, 127);
    ellipsoid(50, 80, 90);
    fill(4, 01, 192, 127);
    translate(0, 10, 0);
    box(-325,10,30,14,82);
    translate(0, 100, 0);
    
  }
  