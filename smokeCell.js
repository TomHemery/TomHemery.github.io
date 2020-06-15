class SmokeCell{
    constructor(x, y, size){
        this.r = 200;
        this.g = 200;
        this.b = 255;
        this.alpha = 0;
        this.nextAlpha = 0;
        this.maxDecay = 60;
        this.spreadDiameter = 1;
    
        this.x = x; 
        this.y = y;
        this.size = size;
    }
    
    fillIn(){
        this.alpha = 255;
    }
    
    show(){
        fill(this.r, this.g, this.b, this.alpha);
        noStroke();
        rect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
    
    isFilled(){
        return this.alpha > 0;
    }
    
    setNext(next){
        if(next > this.nextAlpha){
            this.nextAlpha = next;
        }
    }
    
    update(){
        this.alpha = this.nextAlpha;
        this.nextAlpha = 0;
    }
    
    spread(){
        for(let i = -this.spreadDiameter; i <= this.spreadDiameter; i++){
            for(let j = -this.spreadDiameter; j <= this.spreadDiameter; j++){
                if(this.x + i >= 0 && this.x + i < grid.length && this.y + j >= 0 && this.y + j < grid[0].length){
                    if(!(i == j && j == 0)){
                        grid[this.x + i][this.y + j].setNext(this.alpha - floor(random(this.maxDecay / 4, this.maxDecay + 1)));
                    }
                }
            }
        }
    }

}