let canvas;

let counter = 0;

let startPoint;
let endPoint;

let endVel;
let startVel;

let maxAccel = 0.8;
let minAccel = 0;

let frameCounter = 0;
let refreshFrames = 5;

let maxVel = 10.0;

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  
  startPoint = createVector(width/8, height/2);
  endPoint = createVector(7 * width/8, height/2);

  startVel = createVector();
  endVel = createVector();

  background(0);
}

function draw(){
  frameCounter++;
  
  if(frameCounter >= refreshFrames){
    fill(0, 25);
    noStroke();
    rect(0, 0, width, height);
    
    strokeWeight(2);
    stroke(random(100, 255), random(0, 100), random(100, 255));
    line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
    frameCounter = 0;
  }
  
  
  
  endVel.add(p5.Vector.random2D().mult(random(minAccel, maxAccel)));
  startVel.add(p5.Vector.random2D().mult(random(minAccel, maxAccel)));
  
  if(endVel.mag() > maxVel) endVel.setMag(maxVel);
  if(startVel.mag() > maxVel) startVel.setMag(maxVel);
  
  endPoint.add(endVel);
  startPoint.add(startVel);
  
  constrainToScreen(endPoint, endVel);
  constrainToScreen(startPoint, startVel);
}

function constrainToScreen(vec, vel){
  if(vec.x > width){
    vec.x = width; vel.x = -vel.x;
  }
  else if(vec.x < 0){
    vec.x = 0; vel.x = -vel.x;
  }
  
  if(vec.y > height){
    vec.y = height; vel.y = -vel.y;
  }
  else if(vec.y < 0){
    vec.y = 0; vel.y = -vel.y;
  }
}