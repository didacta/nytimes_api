function setup() {
    createCanvas(710, 400);
    noStroke();
    background(41, 210, 230);
  
    let inside = color(135, 202, 260);
    let middle = color(24, 153, 250);
    let outside = color(123, 151, 220);

    push();
    translate(80, 80);
    fill(outside);
    rect(0, 0, 200, 200);
    fill(middle);
    rect(40, 60, 120, 120);
    fill(inside);
    rect(60, 90, 80, 80);
    pop();
  
    push();
    translate(360, 80);
    fill(inside);
    rect(0, 0, 200, 200);
    fill(outside);
    rect(40, 60, 120, 120);
    fill(middle);
    rect(60, 90, 80, 80);
    pop();
  }
  