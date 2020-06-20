let canvas;
let counter = 0;

let maxDiameter = 100;
let minDiameter = 20;

let gravity;
let particles = [];

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup(){
  delete canvas;
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  background(0);

  if (window.DeviceOrientationEvent) { window.addEventListener('orientationchange', function() { location.reload(); }, false); }

  gravity = createVector(0, 0.1);
}

function draw(){
    if(frameCount % 20 == 0){
        particles.push(new Particle(random(width), height, random(minDiameter, maxDiameter)));
    }

    for(let i = particles.length - 1; i >= 0; i--){
        particles[i].update();
        if(particles[i].timeAlive > particles[i].lifetime){            
            particles.splice(i, 1);
        }
    }

    for(particle of particles){
        particle.display();
    }
}

class Particle{
    constructor(x, y, d){
        this.diameter = d;
        this.startDiameter = d;
        this.r = random(0, 50);
        this.g = random(150, 255);
        this.b = random(0, 50);

        this.lifetime = map(this.diameter, minDiameter, maxDiameter, 60, 180);
        this.timeAlive = 0;

        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, random(-2, -6));
    }

    update(){
        this.timeAlive++;

        fill(0);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.diameter + 1, this.diameter + 1);

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.acc.add(gravity);
    }

    display(){
        let a = map(this.timeAlive, 0, this.lifetime, 255, 0);
        this.diameter = map(this.timeAlive, 0, this.lifetime, this.startDiameter, 0);
        fill(this.r, this.g, this.b, a);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
    }

}