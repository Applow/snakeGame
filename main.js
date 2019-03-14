const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");


const box = 32;

// load img

const ground = new Image();
const foodImg = new Image();

ground.src = "img/ground.png";
foodImg.src = "img/food.png";

//load audio
let dead = new Audio();
let eat = new Audio();
let down = new Audio();
let up = new Audio();
let left = new Audio();
let right = new Audio();

//create the snake

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

//create the food

let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}
//create score
let score = 0;

// draw everything
function draw() {
    ctx.drawImage(ground, 0, 0);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "red";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }
    ctx.drawImage(foodImg, food.x, food.y);
    ctx.fillStyle = "White";
    ctx.font = "45px Changa one";
    ctx.fillText(score, 2 * box, 1.6 * box);
}

//call draw function every 100ms

let game = setInterval(draw, 100);