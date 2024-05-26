let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellSize = 50;
let boardWidth = 1000;
let boardHeight = 600;

// let snakeCells = [[0,0],[50,0],[100,0]]; // initial length of snake
let snakeCells = [[0,0]]; // initial length of snake
let direction = 'right';
let gameOver = false;

document.addEventListener('keydown',(event)=>{
    if(event.key == 'ArrowUp'){direction = 'up'}
    else if(event.key == 'ArrowDown'){direction = 'down'}
    else if(event.key == 'ArrowLeft'){direction = 'left'}
    else if(event.key == 'ArrowRight'){direction = 'right'}
})




function update(){ //
    let headx = snakeCells[snakeCells.length-1][0]; // 100 aa jayega
    let heady = snakeCells[snakeCells.length-1][1]; // 0 aa jayega (initial position of snake)

    let newHead;
    let newHeady;
    if(direction === 'up'){
        newHeadx = headx;
        newHeady = heady - cellSize;
        if(newHeady < 0){
            gameOver = true;
        }
    }else if(direction === 'down'){
        newHeadx = headx;
        newHeady = heady + cellSize;
        if(newHeady >= 600){
            gameOver = true;
        }
    }else if(direction === 'left'){
        newHeadx = headx-cellSize;
        newHeady = heady;
        if(newHeady < 0){
            gameOver = true;
        }
    }else{// right
        newHeadx = headx+cellSize;
        newHeady = heady;
        if(newHeady >= 1000){
            gameOver = true;
        }
    }

    snakeCells.push([newHeadx,newHeady]);
    snakeCells.shift(); // removing element of array from start
}

function draw(){
    if(gameOver === true){
        clearInterval(id);
        return;
    }
    ctx.clearRect(0,0,1000,600);// deleting previous part as snake moves forward

    // draw
    for(let cell of snakeCells){
        ctx.fillStyle = "brown";
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize);
    }
}

let id = setInterval(function(){
    update();
    draw();
},100); // time in milliseconds