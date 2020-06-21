let inc = 0.005;
let start = 0;
function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {
  let yoff = start;
  loadPixels();
  noiseDetail(24, 0.5);
  for (let y = 0; y < height; y++) {
    let xoff = start;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();
  start += inc;
  noLoop();
}
