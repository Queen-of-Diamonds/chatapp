var minval = -0.5;
var maxval = 0.5;

var minSlider;
var maxSlider;

let p5;

export function main(_p5) {
  p5 = _p5;

  p5.setup = (_) => {
    p5.createCanvas(500, 500);
    p5.pixelDensity(1);

    minSlider = p5.createSlider(-2.5, 0, -2.5, 0.01);
    maxSlider = p5.createSlider(0, 2.5, 2.5, 0.01);
  };

  p5.draw = (_) => {
    var maxiterations = 100;

    p5.loadPixels();
    for (var x = 0; x < p5.width; x++) {
      for (var y = 0; y < p5.height; y++) {
        var a = p5.map(x, 0, p5.width, minSlider.value(), maxSlider.value());
        var b = p5.map(y, 0, p5.height, minSlider.value(), maxSlider.value());

        var ca = a;
        var cb = b;
        var n = 0;

        while (n < maxiterations) {
          var aa = a * a - b * b;
          var bb = 2 * a * b;
          a = aa + ca;
          b = bb + cb;
          if (p5.abs(a + b) > 16) {
            break;
          }
          n++;
        }

        var bright = p5.map(n, 0, maxiterations, 0, 1);
        bright = p5.map(p5.sqrt(bright), 0, 1, 0, 255);

        if (n === maxiterations) {
          bright = 0;
        }

        var pix = (x + y * p5.width) * 4;
        p5.pixels[pix + 0] = bright;
        p5.pixels[pix + 1] = bright;
        p5.pixels[pix + 2] = bright;
        p5.pixels[pix + 3] = 255;
      }
    }
    p5.updatePixels();
  };
}
