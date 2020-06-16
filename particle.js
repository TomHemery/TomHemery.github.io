class Particle{
    
    constructor(x, y, size, r, g, b){
        this.maxAlpha = 200;
        this.maxDuration = random(20, 60);
        this.remainingDuration = this.maxDuration;
        this.maxDecay = 1;
        this.minVel = 1;
        this.maxVel = 3;
        this.maxVelDampening = 0.99;

        this.pos = createVector(x, y);  
        this.size = size;
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(this.minVel, this.maxVel));
        this.acc = p5.Vector.random2D();
        this.acc.mult(0.1);
        this.r = r;
        this.g = g;
        this.b = b;
    }
    
    show(wind){
        fill(this.r, this.g, this.b, map(this.remainingDuration, 0, this.maxDuration, 0, this.maxAlpha));
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
        this.update(wind);
    }
    
    update(wind){
        this.remainingDuration -= random(this.maxDecay);
        this.calculateForces(wind);
        this.vel.mult(random(this.maxVelDampening, 1));
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    
     calculateForces(wind){
        this.acc = p5.Vector.random2D();
        this.acc.mult(0.1);
        this.acc.add(wind);
    }
   
    
    finished(){
        return this.remainingDuration <= 0;
    }
    
}