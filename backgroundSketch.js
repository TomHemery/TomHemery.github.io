let canvas;
let particleSystem;

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    ellipseMode(CENTER);

    particleSystem = new ParticleSystem(500);
}
  
function draw() {
    particleSystem.update();

    background(0, 200);
    particleSystem.display();
}