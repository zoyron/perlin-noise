let sketch = function (p) {
  let xoff = 0;
  let ox = p.random(10000);
  let oy = p.random(10000);
  let oz = p.random(10000);
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.strokeWeight(2);
    p.stroke(99, 163, 255, 50);
    p.smooth();
    p.noFill();
  };

  p.draw = function () {
    p.clear();
    p.translate(p.width / 2, p.height / 2);
    display();
  };

  function display() {
    p.background("#000000");
    ox += 0.01;
    oy += 0.01;
    oz += 0.007;
    xoff += 0.05;
    for (let i = 0; i < 50; i++) {
      p.beginShape();
      for (let angle = 0; angle < 360; angle += 3) {
        let radian = p.radians(angle);
        let radius =
          i + p.map(getNoise(radian, 0.35, 0.02 * i), 0, 1, -300, 300);
        p.vertex(
          radius *
            p.cos(radian) *
            -p.map(p.sin(radian), -1, 1, -2, 2) *
            p.map(p.sin(radian), -1, 1, -2, 2) *
            p.map(p.sin(radian), -1, 1, -2, 2),
          radius *
            p.map(p.cos(radian), -1, 1, -1.75, 1.75) *
            p.map(p.cos(radian), -1, 1, -1.75, 1.75) *
            p.map(p.sin(radian), -1, 1, -1.75, 1.75)
        );
        // p.vertex(radius* p.cos(radian), radius * p.sin(radian));
      }
      p.endShape(p.CLOSE);
    }
  }

  function getNoise(radian, dim) {
    let r = radian % p.TWO_PI;
    if (r < 0.0) {
      r += p.TWO_PI;
    }
    return p.noise(ox + p.cos(r) * dim, oy + p.sin(r) * dim);
  }

  function getNoise(radian, dim, time) {
    let r = radian % p.TWO_PI;
    if (r < 0.0) {
      r += p.TWO_PI;
    }
    return p.noise(ox + p.cos(r) * dim, oy + p.sin(r) * dim, oz + time);
  }
};

new p5(sketch);
