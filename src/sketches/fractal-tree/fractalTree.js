var a = 0;

var slider;

let p5;

export function main(_p5) {
  p5 = _p5;

  p5.setup = (_) => {
    p5.createCanvas(500, 500);
    slider = p5.createSlider(0, p5.TWO_PI, p5.PI / 4);
  };

  p5.draw = (_) => {
    p5.background(51);
    p5.angle = slider.value();
    p5.stroke(255);
    p5.translate(200, p5.height);
    branch(100);
  };

  function branch(len) {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(p5.angle);
      branch(len * 0.67);
      p5.pop();
      p5.push();
      p5.rotate(-p5.angle);
      branch(len * 0.67);
      p5.pop();
    }
    // line(0, 0, 0, -len * 0.67);
  }
}
