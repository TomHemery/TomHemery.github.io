let canvas;
let emitter;

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    emitter.setPos(width - mouseX, height - mouseY);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    ellipseMode(CENTER);

    emitter = new ParticleEmitter(width - mouseX, height - mouseY, 80);
}
  
function draw() {
    background(0);
    fill(255);
    emitter.show();
}