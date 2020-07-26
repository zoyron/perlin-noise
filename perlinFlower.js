function setup() {
  createCanvas(windowWidth, windowHeight);
  // background("#f7c5cc");
  background("#0f0f0f");
}
let xoff = 0;
let len = 0;
function draw() {
  translate(width / 2, height / 2);
  stroke(204, 49, 61, 50);
  noFill();
  rotate(radians(noise(xoff) * 360));
  // rect(-50-len,-25-len, 100+2*len, 50+2*len);
  // rect(-100-len,-50-len, 200+2*len, 100+2*len);
  // rect(-25-len,-50-len, 50+2*len,100+2*len);
  // line(-50-len,-25-len,-50-len,25+len);
  // line(50+len,-25-len,50+len,25+len);
  // line(-25-len,50+len,25+len,50+len);
  // line(-25-len,-50-len,25+len,-50-len);
  line(-10 - len / 2, -5 - len / 2, -10 - len / 2, 5 + len / 2);
  line(10 + len / 2, -5 - len / 2, 10 + len / 2, 5 + len / 2);
  line(-5 - len / 2, 10 + len / 2, 5 + len / 2, 10 + len / 2);
  line(-5 - len / 2, -10 - len / 2, 5 + len / 2, -10 - len / 2);
  // for(let i = 1;i<=3;i++)
  xoff += 0.005;
  len += 0.275;
}
