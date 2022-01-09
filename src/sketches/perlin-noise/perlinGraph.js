// Graphing 1D Perlin Noise (1D Noise Graph)
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/noise/0.4-graphing-1d.html
// https://youtu.be/y7sgcFhk6ZM

// Adding Y-Axis: https://editor.p5js.org/codingtrain/sketches/nCYG2SCNq
// Noise Graph: https://editor.p5js.org/codingtrain/sketches/EZeHXBhei
// Noisy Sin: https://editor.p5js.org/codingtrain/sketches/M_kuAXwV2

// This example has been updated to use es6 syntax. To learn more about es6 visit: https://thecodingtrain.com/Tutorials/16-javascript-es6

let p5;
let delegate;

let inc = 0.01;
let start = 0;

export function main(_p5) {
  p5 = _p5;
  p5.setup = (_) => {
    const canvas = p5.createCanvas(400, 400);
  };

  p5.draw = (_) => {
    p5.background(51);

    p5.stroke(255);
    p5.noFill();
    p5.beginShape();
    let xoff = start;
    for (let x = 0; x < p5.width; x++) {
      p5.stroke(255);
      // let y = random(height);
      let y = p5.noise(xoff) * p5.height;
      p5.vertex(x, y);

      xoff += inc;
    }
    p5.endShape();

    start += inc;

    //noLoop();
  };
}

function draw() {}
