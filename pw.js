const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.2,
    velocityX: (Math.random() - 0.5) * 0.5,
    velocityY: (Math.random() - 0.5) * 0.5,
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.fillStyle = "white";
  for (let star of stars) {
    ctx.moveTo(star.x, star.y);
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
  }
  ctx.fill();
  moveStars();
}

function moveStars() {
  for (let star of stars) {
    star.x += star.velocityX;
    star.y += star.velocityY;

    // Wrap around the screen edges
    if (star.x < 0) star.x = canvas.width;
    if (star.x > canvas.width) star.x = 0;
    if (star.y < 0) star.y = canvas.height;
    if (star.y > canvas.height) star.y = 0;
  }
}

function animate() {
  drawStars();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});



const img = document.getElementById('graduationImage');

img.addEventListener('mouseenter', () => {
  img.classList.add('hover-effect');
  // No code to remove the class on mouseleave, so it stays
});
