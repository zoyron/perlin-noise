let angleNoise, radiusNoise;
let xNoise, yNoise;
let angle = -90;
let radius = 0;
let strokeCol = 255;
let strokeChange = -1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(30);
  background("#f7c5cc");
  noFill();
  // angleMode(DEGREES);
  angleNoise = random(10);
  radiusNoise = random(10);
  xNoise = random(10);
  yNoise = random(10);
}

function draw() {
  translate(width / 2, height / 2);
  for (let i = 1; i <= 4; i++) {
    radiusNoise += 0.005;
    radius = noise(radiusNoise) * 450 + 1;
    angleNoise += 0.005;
    angle += noise(angleNoise) * 6 - 3;
    if (angle > 360) angle -= 360;
    if (angle < 0) angle += 360;
    xNoise += 0.01;
    yNoise += 0.01;
    let centreX = noise(xNoise) * 100 - 50;
    let centreY = noise(yNoise) * 100 - 50;
    let rad = radians(angle);
    let x1 = centreX + radius * cos(rad);
    let y1 = centreY + radius * sin(rad);
    let opprad = rad + radians(180);
    let x2 = centreX + radius * cos(opprad);
    let y2 = centreY + radius * sin(opprad);
    strokeCol += strokeChange;
    if (strokeCol > 255) strokeChange = -1;
    if (strokeCol < 150) strokeChange = 1;
    stroke(strokeCol - 41, strokeCol - 206, strokeCol - 194, 30);
    strokeWeight(4);
    line(x1, y1, x2, y2);
  }
}
