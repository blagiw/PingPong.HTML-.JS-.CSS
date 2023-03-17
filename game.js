var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Set the starting position of the ball
var x = canvas.width/6;
var y = canvas.height/6;

// Set the speed of the ball
var dx = 0.5;
var dy = -0.5;

// Draw the ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// Move the ball and redraw it
function moveBall() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the ball
  drawBall();

  // Move the ball
  x += dx;
  y += dy;

  // Reverse the direction of the ball if it hits a wall
  if(x + dx > canvas.width-10 || x + dx < 20) {
    dx = -dx;
  }
  if(y + dy > canvas.height-10 || y + dy < 20) {
    dy = -dy;
  }
}

// Handle the arrow key events
document.addEventListener("keydown", function(event) {
  switch(event.keyCode) {
    case 37: // left arrow
      dx = -2;
      break;
    case 38: // up arrow
      dy = -2;
      break;
    case 39: // right arrow
      dx = 2;
      break;
    case 40: // down arrow
      dy = 2;
      break;
  }
});

// Move the ball every 2 milliseconds
setInterval(moveBall, 2);

// Arrow Keys Showcase
const arrows = document.querySelectorAll(".arrow");

arrows.forEach(function(arrow) {
	arrow.addEventListener("mousedown", function() {
		arrow.classList.add("active");
	});

	arrow.addEventListener("mouseup", function() {
		arrow.classList.remove("active");
	});

	arrow.addEventListener("mouseleave", function() {
		arrow.classList.remove("active");
	});
});