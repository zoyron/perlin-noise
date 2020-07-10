let angleNoise, radiusNoise;
let xNoise, yNoise;
let angle = -PI / 2;
let radius;
let strokeCol = 254;
let strokeChange = -1;

function setup() {
  createCanvas(500, 500);
  frameRate(30);
  background(255);
  noFill();
  angleNoise = random(10);
  radiusNoise = random(10);
  xNoise = random(10);
  yNoise = random(10);
}

function draw() {
  translate(width / 2, height / 2);
  radiusNoise += 0.05;
  radius = noise(radiusNoise) * 550 + 1;
  angleNoise += 0.05;
  if (angle > 360) angle -= 360;
  if (angle < 0) angle += 360;
  xNoise += 0.01;
  yNoise += 0.01;
  let centreX = noise(xNoise) * 100 - 50;
  let centreY = noise(yNoise) * 100 - 50;
  let rad = radians(angle);
  let x1 = centreX + radius * cos(rad);
  let y1 = centreY + radius * sin(rad);
  let opprad = rad + PI;
  let x2 = centreX + radius * cos(oprad);
  let y2 = centreY + radius * sin(oprad);
  strokeCol += strokeChange;
  if (strokeCol > 254) strokeChange = -1;
  if (strokeCol < 0) strokeChange = 1;
  stroke(strokeCol, 60);
  line(x1, y1, x2, y2);
}
