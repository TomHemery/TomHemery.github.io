class ParticleSystem{
    constructor(numParticles){
        this.particles = [];

        for(let i = 0; i < numParticles; i++){
            this.particles.push(new Particle(random(width), random(height), 1));
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