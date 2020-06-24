let img;
let myColor = [];
function preload() {
  img = loadImage("./leonardo.jpg");
}

function setup() {
  createCanvas(900, 675);
  background(51);
  for (let i = 0; i < width; i++) myColor[i] = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      img.loadPixels();
      myColor[i][j] = img.get(i, j);
    }
  }
}
let i = 0;
let j = 0;
function draw() {
  fill(200);
  circle(i, j, 1);
  i++;
  j++;
}
