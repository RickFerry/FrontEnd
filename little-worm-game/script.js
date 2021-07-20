let canvas = document.getElementById("worm");
let context = canvas.getContext("2d"); //....
let box = 32;
let worm = [];
worm[0] = {
  x: 8 * box,
  y: 8 * box,
};
let direction = "right";
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};

function iniciarJogo() {
  if (worm[0].x > 15 * box && direction == "right") worm[0].x = 0;
  if (worm[0].x < 0 && direction == "left") worm[0].x = 16 * box;
  if (worm[0].y > 15 * box && direction == "down") worm[0].y = 0;
  if (worm[0].y < 0 && direction == "up") worm[0].y = 16 * box;

  for (i = 1; i < worm.length; i++) {
    if (worm[0].x == worm[i].x && worm[0].y == worm[i].y) {
      clearInterval(jogo);
      alert("Game Over :(");
    }
  }

  criarBG();
  criaMinhoca();
  drawFood();

  let wormX = worm[0].x;
  let wormY = worm[0].y;

  if (direction == "right") wormX += box;
  if (direction == "left") wormX -= box;
  if (direction == "up") wormY -= box;
  if (direction == "down") wormY += box;

  if (wormX != food.x || wormY != food.y) {
    worm.pop();
  } else {
    food.x = Math.floor(Math.random() * 15 + 1) * box;
    food.y = Math.floor(Math.random() * 15 + 1) * box;
  }

  let newHead = {
    x: wormX,
    y: wormY,
  };
  worm.unshift(newHead);
}

function criarBG() {
  context.fillStyle = "black";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criaMinhoca() {
  for (i = 0; i < worm.length; i++) {
    context.fillStyle = "white";
    context.fillRect(worm[i].x, worm[i].y, box, box);
  }
}

function drawFood() {
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, box, box);
}

document.addEventListener("keydown", update);

function update(event) {
  if (event.keyCode == 37 && direction != "right") direction = "left";
  if (event.keyCode == 38 && direction != "down") direction = "up";
  if (event.keyCode == 39 && direction != "left") direction = "right";
  if (event.keyCode == 40 && direction != "up") direction = "down";
}

let jogo = setInterval(iniciarJogo, 100);
