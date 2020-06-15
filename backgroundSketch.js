let canvas;
let cellSize = 20;
let grid = [];

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    resetCells();
}
  
function draw() {
    background(0);
    setCell(mouseX, mouseY);
    showCells();
}

function resetCells(){
    grid = [];
    for(let i = 0; i < width/cellSize; i++){
        grid.push([]);
        for(let j = 0; j < height/cellSize; j++){
            grid[i].push(new SmokeCell(i,j,cellSize));
        }
    }
}

function showCells(){
    for(row of grid){
        for(cell of row){
            if(cell.isFilled()){cell.show(); cell.spread();}
        }
    }
    for(row of grid){
        for(cell of row){
         cell.update();
        }
    }
}
  
function setCell(x, y){
    grid
        [Math.floor(constrain(x, 0, width - 1)/cellSize)]
        [Math.floor(constrain(y, 0, height - 1)/cellSize)]
            .fillIn();
}