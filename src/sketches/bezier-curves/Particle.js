export default class Particle {
  constructor(x, y, _p5) {
    this.x = x;
    this.y = y;
    this.p5 = _p5;
    this.dx = this.p5.random(-3, 3);
    this.dy = this.p5.random(-3, 3);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x >= this.p5.width || this.x < 0) {
      this.dx *= -1;
    }

    if (this.y >= this.p5.height || this.y < 0) {
      this.dy *= -1;
    }
  }
}
