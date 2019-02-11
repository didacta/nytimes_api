function setup() {
    createCanvas(800, 400);
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
        line(middle, i - middle + d*10, width - d*143, i - middle + d*21);
        line(middle, i - middle + d*10, width - d*13, i - middle + d*21);
        line(middle, i - middle + d*50, width - d*13, i - middle + d*21);
        line(middle, i + middle - d*50, width - d*13, i - middle + d*21);
      }
    }
  }
  