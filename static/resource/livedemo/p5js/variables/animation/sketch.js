let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  x += 0.2;

  background(220);
  noStroke();
  fill(0, 205, 129);
  circle(x, y, 100);
}