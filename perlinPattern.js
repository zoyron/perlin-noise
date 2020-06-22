let col = 0;
let start = 0;
let inc = 0.01;
let dir = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#f1f1f1");
}

function draw() {
  if (col <= 0) dir = 1;
  else if (col >= 5) dir = -1;
  if (dir == 1) col += inc;
  else col -= inc;
  let xoff = start;
  // stroke(0,random(150),random(100), 25);
  noFill();
  // fill(random(200), random(200), random(200));
  stroke(0, col * 5, col * 10, 25);
  // fill((start * 10) % 100, (start * 20) % 100, (start * 30) % 100);
  beginShape();
  for (let x = 0; x < width; x++) {
    let y =
      (noise(xoff) * height) / 4 +
      map(-cos(xoff) + sin(xoff), -2, 2, height, 0);
    circle(x, y, 1);
    // point(x,y);
    stroke(0, col * 10, col * 15, 25);
    circle(y, x, 1);

    xoff += inc;
  }
  endShape();
  start += inc;
  // noLoop();
}
