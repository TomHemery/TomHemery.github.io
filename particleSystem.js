class ParticleSystem{
    constructor(){
        this.particles = [];
        this.particleRadius = width / 16;

        let offsetX = this.particleRadius;
        let offsetY = this.particleRadius;

        for(let x = 0; x <= width ; x += offsetX){
            for(let y = 0; y <= height ; y+= offsetY ){
                this.particles.push(new Particle(x, y, this.particleRadius));
            }
        }

        console.log("created: " + this.particles.length + " particles");
    }

    update(){
        for(let particle of this.particles){
            particle.update();
        }
    }

    display(){
        for(let particle of this.particles){
            particle.display();
        }
    }
}

ParticleSystem.G = 1;