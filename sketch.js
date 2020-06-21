let start = 0;
let inc = 0.005;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("f1f1f1");
}

function draw() {
  let xoff = start;
  // stroke(random(200), random(200), random(200));
  noFill();
  // fill(random(200), random(200), random(200));
  stroke(0, (start * 5) % 255, (start * 10) % 255);
  // fill((start * 10) % 100, (start * 20) % 100, (start * 30) % 100);
  beginShape();
  for (let x = 0; x < width; x++) {
    let y = noise(xoff) * height;
    point(x, y);
    xoff += inc;
  }
  endShape();
  start += inc;
  // noLoop();
}
