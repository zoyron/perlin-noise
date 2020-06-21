let x0 = 0,
  y0 = 100000;
let xoff1 = 0;
let xoff2 = 100000;
function setup() {
  createCanvas(600, 600);
  background(51);
}

function draw() {
  let x = map(noise(xoff1), 0, 1, 0, width);
  let y = map(noise(xoff2), 0, 1, 0, height);
  stroke(random(100), 120 + xoff1 * 10, 120 + xoff1 * 10);
  line(x0, y0, x, y);
  x0 = x;
  y0 = y;
  xoff1 += 0.01;
  xoff2 += 0.01;
}
