var p5;

// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/024-perlinnoiseflowfield.html

var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield;

export function main(_p5) {
  p5 = _p5;
  p5.setup = (_) => {
    p5.createCanvas(500, 500);
    cols = p5.floor(p5.width / scl);
    rows = p5.floor(p5.height / scl);
    fr = p5.createP("");

    flowfield = new Array(cols * rows);

    for (var i = 0; i < 300; i++) {
      particles[i] = new Particle();
    }
    p5.background(51);
  };

  p5.draw = (_) => {
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        var index = x + y * cols;
        var angle = p5.noise(xoff, yoff, zoff) * p5.TWO_PI * 4;
        // https://stackoverflow.com/a/67832458
        var v = p5.constructor.Vector.fromAngle(angle);
        v.setMag(1);
        flowfield[index] = v;
        xoff += inc;
        p5.stroke(0, 50);
        // push();
        // translate(x * scl, y * scl);
        // rotate(v.heading());
        // strokeWeight(1);
        // line(0, 0, scl, 0);
        // pop();
      }
      yoff += inc;

      zoff += 0.0003;
    }

    for (var i = 0; i < particles.length; i++) {
      particles[i].follow(flowfield);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }

    // fr.html(floor(frameRate()));
  };
}

export default class Particle {
  constructor() {
    this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
    this.vel = p5.createVector(0, 0);
    this.acc = p5.createVector(0, 0);
    this.maxspeed = 4;
    this.prevPos = this.pos.copy();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  follow(vectors) {
    var x = p5.floor(this.pos.x / scl);
    var y = p5.floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show() {
    p5.stroke(255, 10);
    p5.strokeWeight(1);
    p5.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges() {
    if (this.pos.x > p5.width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = p5.width;
      this.updatePrev();
    }
    if (this.pos.y > p5.height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = p5.height;
      this.updatePrev();
    }
  }
}
