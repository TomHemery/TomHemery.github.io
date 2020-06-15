class Particle{

    constructor(x, y, radius){
        this.pos = createVector(x, y);
        this.home = createVector(x, y);
        this.vel = createVector();
        this.acc = createVector();
        this.radius = radius;
        this.diameter = 2 * radius;
        this.colour = color(255, 50);
    }

    update(){
        
        let fromMouse = createVector(this.pos.x - mouseX, this.pos.y - mouseY);
        let magSq = fromMouse.magSq();
        let toHome = createVector(this.home.x - this.pos.x, this.home.y - this.pos.y);
        let sqDistHome = toHome.magSq();

        if(magSq < Particle.maxSqDist || sqDistHome > 1 || this.vel.magSq() > 0.1){
            this.colour = color(255, map(sqDistHome, 0, 10000, 50, 255));

            if(magSq < Particle.maxSqDist){
                fromMouse.setMag(100 / magSq);
                this.vel.add(fromMouse);
            }
            else{
                toHome.setMag(constrain(sqDistHome / 10000, 0, Particle.maxHomeForce))
                this.vel.add(toHome);
            }

            this.pos.add(this.vel);
            this.vel.mult(Particle.dampening);
        }
    }

    display(){
        fill(this.colour);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
    }

    setRadius(radius){
        this.radius = radius;
        this.diameter = 2 * radius;
    }

}


Particle.dampening = 0.95;
Particle.maxSqDist = 10000;
Particle.maxHomeForce = 1;