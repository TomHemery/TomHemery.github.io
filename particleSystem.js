class ParticleSystem{



    constructor(numParticles){
        this.particles = [];
        this.minParticleRadius = 2;
        this.maxParticleRadius = 8;

        for(let i = 0; i < numParticles; i++){
            this.particles.push(new Particle(random(width), random(height), random(this.minParticleRadius, this.maxParticleRadius)));
        }
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