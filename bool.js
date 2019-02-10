function setup() {
    createCanvas(700, 400);
    background(128,139,203);
    stroke(252,200,20);
  
    let b = false;
    let d = 13;
    let middle = width / 3;
  
    for (let i = d; i <= width; i += d) {
      b = i < middle;
  
      if (b === true) {
        // Vertical line
        line(i, d, i, height - d);
      }
  
      if (b === false) {
        // Horizontal line
        line(middle, i - middle + d, width - d, i - middle + d);
      }
    }
  }
  