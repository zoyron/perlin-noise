let slider;
let x = 0;
let angle = 0;
function setup() {
  createCanvas(windowWidth / 2, windowHeight);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background("#f7c5cc");
  angle = slider.value() + x;
  translate(width / 2, height - 75);
  branch(200);
  x += 0.02;
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 6) {
    stroke("#f7c5cc");
    strokeWeight(noise(x) * 6.75);
    push();
    stroke(
      map(noise(x), 0, 1, 0, 204),
      map(noise(x), 0, 1, 0, 50),
      map(noise(x), 0, 1, 0, 61)
    );
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    stroke(
      map(noise(x), 0, 1, 50, 0),
      map(noise(x), 0, 1, 175, 0),
      map(noise(x), 0, 1, 175, 0)
    );
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
