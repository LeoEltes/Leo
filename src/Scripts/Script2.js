// File: src/Scripts/Script1.js
const sketch = (p) => {
    let artifacts = [];
  
    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight);
      p.frameRate(24);
  
      let artifactSize = p.random(10, 30);
      let artifactX = p.random(p.width);
      let artifactY = p.random(p.height);
      let x2 = p.random(p.width);
      let y2 = p.random(p.height);
      let x3 = p.random(p.width);
      let y3 = p.random(p.height);
      let x4 = p.random(p.width);
      let y4 = p.random(p.height);
  
      artifacts.push({
        x: artifactX,
        y: artifactY,
        x2: x2,
        y2: y2,
        x3: x3,
        y3: y3,
        x4: x4,
        y4: y4,
        alpha: 255,
      });
      p.noLoop();
    };
  
    p.draw = () => {
      p.background("#dbd9c8");
  
      for (let i = artifacts.length - 1; i >= 0; i--) {
        let artifact = artifacts[i];
  
        p.fill("#ABA67E");
        p.noStroke();
        p.beginShape();
        p.vertex(artifact.x, artifact.y);
        p.bezierVertex(artifact.x2, artifact.y2, artifact.x3, artifact.y3, artifact.x4, artifact.y4);
        p.endShape();
      }
    };
  
    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    };
  };
  
  export default sketch;
  