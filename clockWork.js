function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#dadada");
}
let xoff = 0;
let x = 0;
let y = 0;
function draw() {
  translate(width / 2, height / 2);
  rotate(x);
  // stroke(map(noise(xoff), 0, 1, 0, 55), 75);
  stroke(5, 75);
  line(-x * 8, x, x * 5, x);
  x += 0.175;
  xoff += 0.01;
}

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(0);
// }
// let x = 0;
// let y = 0;
// function draw() {
//   translate(width / 2, height / 2);
//   rotate(x);
//   stroke(200, 75);
//   line(-x * 8, x, x * 5, x);
//   x += 0.125;
// }
