let sketch = function (p) {
  let rot = 0;
  let xoff = 0;
  let ox = p.random(10000);
  let oy = p.random(10000);
  let oz = p.random(10000);
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.strokeWeight(2);
    p.stroke(0, 255, 255, 30);
    // p.stroke(p.lerpColor(p.color("#000000"),p.color("#5ab9ea"),0.33));
    p.smooth();
    p.noFill();
  };

  p.draw = function () {
    p.clear();
    p.translate(p.width / 2, p.height / 2);
    p.rotate(rot);
    rot += 0.02;
    display();
  };

  function display() {
    p.background("#000");
    ox += 0.01;
    oy += 0.01;
    oz += 0.01;
    xoff += 0.05;
    for (let i = 0; i < 50; i++) {
      p.beginShape();
      for (let angle = 0; angle < 360; angle += 3) {
        let radian = p.radians(angle);
        let radius =
          i +
          p.map(p.noise(getNoise(radian, 0.369, 0.02 * i)), 0, 1, -100, 100);
        // p.vertex(radius * p.cos(radian)* -p.map(p.sin(radian),-1,1,-1.5,1.5)*p.map(p.sin(radian),-1,1,-1.5,1.5)*p.map(p.sin(radian),-1,1,-1.5,1.5), radius * p.map(p.cos(radian),-1,1,-1.5,1.5)* p.map(p.cos(radian),-1,1,-1.5,1.5)* p.map(p.sin(radian),-1,1,-1.5,1.5));
        // p.vertex(radius* p.tan(radian), radius * p.cos(radian));
        p.vertex(
          radius * (6 * p.sin(radian)),
          radius * (2.25 * p.cos(3 * radian))
        );
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
    return p.noise(ox + p.sin(r) * dim, oy + p.sin(r) * dim, oz + time);
  }
};

new p5(sketch);
