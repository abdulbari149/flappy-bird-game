import Bird from "./bird.js";
import Obstacle from "./obstacles.js";

const canvas = document.getElementById("flappyBird");
const ctx = canvas.getContext("2d");
let frames = 0;
let score = 0;
let bird = new Bird(100, 150, 15, "#ffff00");

let pipes = [];
let fill = "#add8e6"
function draw() {
  ctx.fillStyle = fill;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // showing the score........
  ctx.fillStyle = "black"
  ctx.font = '20px serif';
  ctx.fillText(`Your Score is: ${score}` , 10, 20);
  // creating a bird for the game...............
  bird.createBird(ctx);
  bird.motion(canvas);
  // creating obstacles for the game.................
  
  if (frames % 70 == 0) {
    pipes.push(
      new Obstacle(canvas.width, canvas.height, 21, canvas.height)
    );
  
  }
  for (let i = 0; i < pipes.length ;i++) {
    pipes[i].createObstacles(ctx);
    pipes[i].motion(ctx);
    if (pipes[i].offScreen()) {
      pipes.shift()
    }
    if (pipes[i].hit(bird)) {
     gameOver()
    }
  }
  


}
function gameOver() {
  fill = "red";
  console.log("game is Over");
}
function loop() {
  draw();
  requestAnimationFrame(loop);
  frames++;
}

loop();

document.addEventListener("keydown", (e) => {
  //38 top key
  //40 down key
  if (e.keyCode === 38) {
    bird.keyPress();
    console.log(bird.yposition);
  }
});



