function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}
let x = 0;
let y = 0;
function draw() {
  translate(width / 2, height / 2);
  rotate(x);
  stroke(200, 75);
  line(-x * 8, x, x * 5, x);
  x += 0.125;
}
