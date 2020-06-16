class ParticleEmitter{

    constructor(x,y,particleSize){
        this.x = x;
        this.y = y;
        this.particleSize = particleSize;
        this.toSpawn = 0;
        this.r = 255;
        this.g = 0;
        this.b = 255;
        this.particles = [];
        this.wind = createVector(0.05, 0);
    }
    
    show(){
        noStroke();

        let p;
        for(let i = this.particles.length-1; i >= 0; i--){
            p = this.particles[i];
            p.show(this.wind);
            if(p.finished()){
                this.particles.splice(i, 1);
            }
        }

        this.addParticles();
        this.update();
    }
    
    addParticles(){
        if(++this.toSpawn > 4){
            this.particles.push(new Particle(this.x, this.y, this.particleSize, this.r, this.g, this.b));
            this.toSpawn = 0;
        }
    }
    
    update(){
        this.r = round(map(mouseY, 0, windowHeight, 150, 255));
        this.b = round(map(mouseY, 0, windowHeight, 150, 80));
        this.g = round(map(mouseX, 0, windowWidth, 0, 120));
        this.wind.x = map(mouseX, 0, windowWidth, -0.05, 0.05);

        this.wind.set(mouseX - this.x, mouseY - this.y);
        this.wind.mult(0.00005);

        this.x = width - mouseX;
        this.y = height - mouseY;
    }

    setPos(x, y){
        this.x = x;
        this.y = y;
    }
  
  }