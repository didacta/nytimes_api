let img;

function setup() {
  createCanvas(720, 400);
  img = createImage(230, 230,50);
  img.loadPixels();
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let a = map(y,50, img.height, 125, 40);
      img.set(x, y, [230, 123, 104, a]);
    }
  }
  img.updatePixels();
}

function draw() {
  background(240);
  image(img, 290,180);
  image(img, mouseX - img.width / 2, mouseY - img.height / 2);
}
