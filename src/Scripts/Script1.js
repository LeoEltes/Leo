const sketch = (p) => {
  let glyphs = [];

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.noFill();
    p.stroke(255);

    // Generate random glyphs
    for (let i = 0; i < 10; i++) {
      glyphs.push(new Glyph(p.random(p.width), p.random(p.height), p));
    }

    p.background("#dbd9c8");  // Slight fade effect to make it dynamic

    // Draw each glyph
    for (let glyph of glyphs) {
      glyph.display();
    }
    
    p.frameRate(24);  // Adjust frame rate if needed
  };

  p.draw = () => {

    // Optional: Handle the frame rate display in the console
    // console.log(`Frame Rate: ${p.frameRate().toFixed(2)} FPS`);
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  // Define a custom Glyph class
  class Glyph {
    constructor(x, y, p) {
      this.p = p;
      this.x = x;
      this.y = y;
      this.size = p.random(50, 150);
      this.rotation = p.random(p.TWO_PI);
      this.lines = Math.floor(p.random(3, 6));
      this.circleCount = Math.floor(p.random(1, 4));
    }

    display() {
      this.p.push();
      this.p.translate(this.x, this.y);
      this.p.rotate(this.rotation);

      // Draw concentric circles
      for (let i = 0; i < this.circleCount; i++) {
        this.p.ellipse(0, 0, this.size * (i + 1) / this.circleCount);
      }

      // Draw lines radiating from the center
      for (let i = 0; i < this.lines; i++) {
        let angle = this.p.TWO_PI / this.lines * i;
        let x1 = this.p.cos(angle) * this.size / 2;
        let y1 = this.p.sin(angle) * this.size / 2;
        let x2 = this.p.cos(angle) * this.size;
        let y2 = this.p.sin(angle) * this.size;
        this.p.line(x1, y1, x2, y2);
      }

      // Draw an inner triangle
      let triangleSize = this.size / 3;
      this.p.triangle(
        -triangleSize, triangleSize,
        triangleSize, triangleSize,
        0, -triangleSize
      );

      this.p.pop();
    }
  }
};

export default sketch;
