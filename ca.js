
var w = 10;
// An array of 0s and 1s 
var cells;

// We arbitrarily start with just the middle cell having a state of "1"
var generation = 0;
let backgroundColor;
// An array to store the ruleset, for example {0,1,1,0,1,1,0,1}
var ruleset = [2, 0, 1, 1, 0, 0, 1, 0];

function setup() {
    createCanvas(4160, 2000);
    backgroundColor = color(100, 50, 150);
    cells = Array(floor(width / w));
    for (var i = 0; i < cells.length; i++) {
        cells[i] = 0;
    }
    cells[cells.length / 4] = 1;

}

function draw() {

    for (var i = 0; i < cells.length; i++) {
        if (cells[i] === 1) {
            let d = color(155, 34, 0) // Create a color for 'c'
            fill(d); // Use color variable 'c' as fill color

        } else {

            noStroke();
            // HSL color is also supported and can be specified
            // by value
            let c;
            noStroke(); // Don't draw a stroke around shapes
            c = color('hsl(160, 100%, 50%)');
            fill(c); // Use 'c' as fill color
           

            c = color('hsla(50, 100%, 50%, 0.5)');
            fill(c); // Use updated 'c' as fill color
           
            rect(i * w / 1.45, generation *w, w+5, w+2);
        }
    }
    if (generation <= height / w) {
        generate();
    }
}

// The process of creating the new generation
function generate() {
    // First we create an empty array for the new values
    var nextgen = Array(cells.length);
    // For every spot, determine new state by examing current state, and neighbor states
    // Ignore edges that only have one neighor
    for (var i = 1; i < cells.length - 1; i++) {
        var left = cells[i - 1];   // Left neighbor state
        var me = cells[i];     // Current state
        var right = cells[i + 1];   // Right neighbor state
        nextgen[i] = rules(left, me, right); // Compute next generation state based on ruleset
    }
    // The current generation is the new generation
    cells = nextgen;
    generation++;
}


// Implementing the Wolfram rules
// Could be improved and made more concise, but here we can explicitly see what is going on for each case
function rules(a, b, c) {
    if (a == 1 && b == 1 && c == 1) return ruleset[0];
    if (a == 1 && b == 1 && c == 0) return ruleset[1];
    if (a == 1 && b == 0 && c == 1) return ruleset[2];
    if (a == 1 && b == 0 && c == 0) return ruleset[3];
    if (a == 0 && b == 1 && c == 1) return ruleset[4];
    if (a == 0 && b == 1 && c == 0) return ruleset[5];
    if (a == 0 && b == 0 && c == 1) return ruleset[6];
    if (a == 0 && b == 0 && c == 0) return ruleset[7];
    return 0;
}

