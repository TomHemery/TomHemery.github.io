class ParticleSystem{
    constructor(particleSpacing){
        this.particles = [];
        this.particleRadius = width / particleSpacing;

        for(let x = this.particleRadius * 2; x < width - this.particleRadius; x+= particleSpacing){
            for(let y = this.particleRadius * 2; y < height - this.particleRadius; y+= particleSpacing){
                this.particles.push(new Particle(x, y, random(this.particleRadius - 5, this.particleRadius + 80)));
            }
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