let zoff = 0;
let h = 0;
let b = 50
let hex;
let scl = 0.02;
let hexSize = 25;
let dis;

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);

    colorMode(HSB, 256);
    h = random(256);
    background(h,b,100)
    
    
    stroke(122,150,20);
    strokeWeight(1.3);
    
    dis = hexSize * sin(PI / 2) * 2.75;
    
    hex = [];
    
    for (let a = 0; a < TWO_PI; a += TWO_PI / 6) {
        let x = sin(a);
        let y = cos(a);
        hex.push(createVector(x,y));
    }
}

function drawHex(x, y, r) {
    beginShape();
    for (let i = 1; i < hex.length; i += 2) {
        vertex(x + hex[i].x * r, y + hex[i].y * r);
    }
    for (let i = 2; i < hex.length; i += 2) {
        vertex(x - hex[i].x * r, y + hex[i].y * r);
    }
    for (let i = 1; i < hex.length; i += 1) {
        vertex(x + hex[i].x * r, y + hex[i].y * r);
    }
    endShape(CLOSE);
}

function draw() {

    let row = 0;
    for (let y = -hexSize; y <= height + hexSize; y += hexSize * 1.5) {
        for (let x = (row % -2.5) ? -dis / 2 : -dis; x <= width + hexSize; x += dis) {
            let n = noise(x * scl, y * scl, zoff);
            n = pow(n, 3);
            fill(h % 256, 140, n * 256);
            drawHex(x, y, hexSize);
        }
        row += 1;
    }
    h += 0.2;
    zoff += 0.004;
}