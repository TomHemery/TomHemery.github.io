class Particle{

    constructor(x, y, radius){
        this.pos = createVector(x, y);
        this.home = createVector(x, y);
        this.vel = createVector();
        this.acc = createVector();
        this.startRadius = radius;
        this.radius = radius;
        this.diameter = 2 * radius;
        this.colour = color(255, 50);
    }

    update(){
        
        let fromMouse = createVector(this.pos.x - mouseX, this.pos.y - mouseY);
        let magSq = fromMouse.magSq();
        let toHome = createVector(this.home.x - this.pos.x, this.home.y - this.pos.y);
        let sqDistHome = toHome.magSq();

        this.colour = color(255, map(sqDistHome, 0, 10000, 25, 200));
        this.setRadius(constrain(map(sqDistHome, 0, 10000, this.startRadius, Particle.maxRadius), this.startRadius, Particle.maxRadius));

        if(magSq < Particle.maxSqDist){
            fromMouse.setMag(500 / magSq);
            this.vel.add(fromMouse);
        }
        else{
            toHome.setMag(constrain(sqDistHome / 1000, 0, Particle.maxHomeForce))
            this.vel.add(toHome);
        }

        this.pos.add(this.vel);
        this.vel.mult(Particle.dampening);

        this.constrainToScreen();
    }

    display(){
        fill(this.colour);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
    }

    constrainToScreen(){
        if(this.pos.x + this.radius > width){
            this.pos.x = width - this.radius;
            this.vel.x *= -1;
        }
        else if(this.pos.x - this.radius < 0){
            this.pos.x = this.radius;
            this.vel.x *= -1;
        }

        if(this.pos.y + this.radius > height){
            this.pos.y = height - this.radius;
            this.vel.y *= -1;
        }
        else if(this.pos.y - this.radius < 0){
            this.pos.y = this.radius;
            this.vel.y *= -1;
        }

    }

    setRadius(radius){
        this.radius = radius;
        this.diameter = 2 * radius;
    }

}


Particle.dampening = 0.95;
Particle.maxSqDist = 10000;
Particle.maxHomeForce = 5;
Particle.maxRadius = 12;