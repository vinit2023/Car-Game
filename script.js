let speed = 5;
let score = 0;
let startTime = Date.now();

function gameLoop() {
  let currentTime = Date.now();
  let elapsedTime = currentTime - startTime;

  // Check if 5 seconds have passed
  if (elapsedTime >= 5000) {
    speed += 1;
    startTime = currentTime;
  }

  // Update the positions of myCarRearEnd and enemyCarRearEnd
  myCarRearEnd.x += speed;
  enemyCarRearEnd.x -= enemySpeed;

  // Collision detection logic
  if (myCarRearEnd.x > enemyCarRearEnd.x) {
    score += 10;
  }

  // Render the updated game state
  render();

  // Repeat the game loop
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);