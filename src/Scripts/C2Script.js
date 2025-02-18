const C2Script = (c2, renderer) => {
    // Initialize the renderer
    renderer.background('#dbd9c8');
  
    let random = new c2.Random();


class Agent extends c2.Point {
    constructor() {
        let x = random.next(renderer.width);
        let y = random.next(renderer.height);
        super(x, y);

        this.vx = random.next(-2, 2);
        this.vy = random.next(-2, 2);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) {
            this.x = 0;
            this.vx *= -1;
        } else if (this.x > renderer.width) {
            this.x = renderer.width;
            this.vx *= -1;
        }
        if (this.y < 0) {
            this.y = 0;
            this.vy *= -1;
        } else if (this.y > renderer.height) {
            this.y = renderer.height;
            this.vy *= -1;
        }
    }

    display() {
        renderer.stroke('#333333');
        renderer.lineWidth(5);
    }
}

let agents = new Array(10);
for (let i = 0; i < agents.length; i++) agents[i] = new Agent();


renderer.draw(() => {
    renderer.clear();

    let voronoi = new c2.Voronoi();
    voronoi.compute(agents);
    let regions = voronoi.regions;

    let rect = new c2.Rect(0, 0, renderer.width, renderer.height);

    let maxArea = 0;
    let minArea = Number.POSITIVE_INFINITY;
    for (let i = 0; i < regions.length; i++) {
        let clip = rect.clip(regions[i]);
        if(clip != null) regions[i] = clip;

        let area = regions[i].area();
        if(area < minArea) minArea = area;
        if(area > maxArea) maxArea = area;
    }

    renderer.stroke('#333333');
    renderer.lineWidth(1);
    for (let i = 0; i < regions.length; i++) {
        let t = c2.norm(regions[i].area(), minArea, maxArea);
        let color = c2.Color.hsl(30*t, 30+50*t, 20+60*t);
        renderer.fill(color);
        renderer.polygon(regions[i]);
    }

    for (let i = 0; i < agents.length; i++) {
        agents[i].display();
        agents[i].update();
    }
});
  
    function resize() {
      let parent = renderer.canvas.parentElement;
      renderer.size(parent.clientWidth, parent.clientWidth / 16 * 9);
    }
  
    window.addEventListener('resize', resize);
    resize(); // Initial resize
  
    return () => {
      window.removeEventListener('resize', resize);
    };
  };
  
  export default C2Script;
  