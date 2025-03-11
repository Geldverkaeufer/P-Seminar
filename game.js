// Get canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Resize canvas to fit the screen
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas(); // Call once to set initial size

// Global game state
let gameRoom = "polizei_wand";

// Load Images
const images = {
  polizei_raum: new Image(),
  chemie_raum: new Image(),
  weiter: new Image(),
  zurueck: new Image(),
  sprechblase: new Image()
};

images.polizei_raum.src = "images/polizei_raum.jpg";
images.chemie_raum.src = "images/chemie_raum1.jpg";
images.weiter.src = "images/weiter.png";
images.zurueck.src = "images/zurueck.png";
images.sprechblase.src = "images/Sprechblase.png";

// Button Class
class Button {
  constructor(x, y, img, targetRoom, scale = 1.0) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.targetRoom = targetRoom;
    this.scale = scale;
    this.width = img.width * scale || 100;
    this.height = img.height * scale || 50;

    img.onload = () => {
      this.width = img.width * this.scale;
      this.height = img.height * this.scale;
    };
  }

  draw() {
    ctx.drawImage(this.img, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
  }

  isClicked(clickX, clickY) {
    return (
      clickX >= this.x - this.width / 2 &&
      clickX <= this.x + this.width / 2 &&
      clickY >= this.y - this.height / 2 &&
      clickY <= this.y + this.height / 2
    );
  }
}

// Buttons
let buttonWeiter, buttonZurueck, miniPw;

function initButtons() {
  buttonWeiter = new Button(canvas.width - 200, canvas.height - 130, images.weiter, "chemie_raum", 1.2);
  buttonZurueck = new Button(200, canvas.height - 130, images.zurueck, "slideshow", 1.2);
  miniPw = new Button(canvas.width - 200, canvas.height - 330, images.polizei_raum, "polizei_wand", 0.23);
}

// Handle Clicks (Mouse + Touch)
function handleClick(x, y) {
  if (buttonWeiter.isClicked(x, y)) {
    gameRoom = buttonWeiter.targetRoom;
  } else if (buttonZurueck.isClicked(x, y)) {
    gameRoom = buttonZurueck.targetRoom;
  } else if (miniPw.isClicked(x, y)) {
    gameRoom = miniPw.targetRoom;
  }
}

canvas.addEventListener("mousedown", (e) => {
  const rect = canvas.getBoundingClientRect();
  handleClick(e.clientX - rect.left, e.clientY - rect.top);
});

canvas.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  handleClick(touch.clientX - rect.left, touch.clientY - rect.top);
  e.preventDefault(); // Prevents unwanted scrolling
});

// Main Draw Function
function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (gameRoom === "polizei_wand") {
    ctx.drawImage(images.polizei_raum, 0, 0, canvas.width, canvas.height);
    buttonWeiter.draw();
    buttonZurueck.draw();
  } 
  else if (gameRoom === "chemie_raum") {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images.chemie_raum, canvas.width * 0.1, 0, canvas.width * 0.8, canvas.height);
    buttonZurueck.draw();
    miniPw.draw();
    ctx.drawImage(images.sprechblase, canvas.width / 2 - 50, canvas.height - 130, 100, 50);
  }
}

// Game Loop
function gameLoop() {
  drawScene();
  requestAnimationFrame(gameLoop);
}

initButtons();
gameLoop();
