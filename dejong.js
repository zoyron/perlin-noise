let x = 0;
let y = 0;
let xoff = 0;
let xoff1 = 1000;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#000");
}
let a = -2,
  b = -2,
  c = -1.2,
  d = 2;
let x1;
let y1;
function draw() {
  beginShape(POINTS);
  for (let i = 1; i <= 4000; i++) {
    x1 = sin(a * y) - cos(b * x);
    y1 = sin(c * x) - cos(d * y);
    x = x1;
    y = y1;
    let al = map(x1 + y1, -2, 2, 20, 70);
    x1 = map(x1, -2, 2, 0, width) - noise(xoff);
    y1 = map(y1, -2, 2, 0, height) + noise(xoff1);
    noFill();
    stroke(
      map(x1, 0, width, 0, 255),
      map(y1, 0, height, 0, 255),
      map(noise(xoff1), 0, 1, 0, 255),
      100
    );
    vertex(x1, y1);
    xoff += 0.1;
    xoff1 += 0.1;
  }
  endShape();
}
