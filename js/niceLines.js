let x1, y1, x2, y2, wobble, move, you, me, canvas;

const main = (p) => {
  p.setup = () => {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);

    canvas.position(0, 0);

    canvas.style("z-index", "-2");

    p.background(255, 255, 255, 0);

    move = 5;
    x = 0;
    y = 0;
    me = 0;
    you = 0;
  };
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    me += 0.001;
    you += 0.01;

    x += move;

    let c = p.sin(you);
    let cMap = p.map(c, -1, 1, 100, 200);

    x1 =
      p.noise(p.sin(p.cos(x))) + p.noise(-me, me, p.tan(p.sin(me))) * p.width;
    y1 = p.noise(p.sin(y)) + p.noise(-me, me, p.cos(-me)) * p.height;

    p.stroke(0, cMap, cMap, 10);

    p.strokeWeight(2);

    p.line(x1, y1, x1 / 2, y1 / 2, x1, -x1);

    if (x >= p.width) {
      x = 0;
      y += 400;
    }
    if (y > p.height) {
      y = 0;
    }
  };
};

const mySketch = new p5(main, "body");
