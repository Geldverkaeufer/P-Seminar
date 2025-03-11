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

// Load Images (ensure filenames match exactly)
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

// Button Class (similar to your Pygame Button)
class Button {
  constructor(x, y, img, targetRoom, defaultScale = 1.0, hoverScale = 1.5) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.targetRoom = targetRoom;
    this.defaultScale = defaultScale;
    this.hoverScale = hoverScale;
    this.currentScale = defaultScale;
    this.width = img.width * defaultScale || 100;
    this.height = img.height * defaultScale || 50;

    img.onload = () => {
      this.width = img.width * this.defaultScale;
      this.height = img.height * this.defaultScale;
    };
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.currentScale, this.currentScale);
    ctx.drawImage(this.img, -this.img.width / 2, -this.img.height / 2);
    ctx.restore();
  }

  isHovered(touchX, touchY) {
    const w = this.img.width * this.currentScale;
    const h = this.img.height * this.currentScale;
    return (
      touchX >= this.x - w / 2 &&
      touchX <= this.x + w / 2 &&
      touchY >= this.y - h / 2 &&
      touchY <= this.y + h / 2
    );
  }

  update(touchX, touchY, touched) {
    if (this.isHovered(touchX, touchY)) {
      this.currentScale = this.hoverScale;
      if (touched) {
        gameRoom = this.targetRoom;
      }
    } else {
      this.currentScale = this.defaultScale;
    }
  }
}


// Buttons
let buttonWeiter, buttonZurueck, miniPw;

function initButtons() {
  buttonWeiter = new Button(canvas.width - 200, canvas.height - 130, images.weiter, "chemie_raum", 1.2, 1.8);
  buttonZurueck = new Button(200, canvas.height - 130, images.zurueck, "slideshow", 1.2, 1.8);
  miniPw = new Button(canvas.width - 200, canvas.height - 330, images.polizei_raum, "polizei_wand", 0.23, 0.3);
}

// Touch Event Handlers
let touchX = 0;
let touchY = 0;
let touched = false;

canvas.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  touchX = touch.clientX - rect.left;
  touchY = touch.clientY - rect.top;
  touched = true;
});

canvas.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  touchX = touch.clientX - rect.left;
  touchY = touch.clientY - rect.top;
});

canvas.addEventListener("touchend", () => {
  touched = false;
});

// Main Draw Function
function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (gameRoom === "polizei_wand") {
    ctx.drawImage(images.polizei_raum, 0, 0, canvas.width, canvas.height);
    buttonWeiter.update(touchX, touchY, touched);
    buttonWeiter.draw();
    buttonZurueck.targetRoom = "slideshow";
    buttonZurueck.update(touchX, touchY, touched);
    buttonZurueck.draw();
  } 
  else if (gameRoom === "chemie_raum") {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images.chemie_raum, canvas.width * 0.1, 0, canvas.width * 0.8, canvas.height);
    buttonZurueck.targetRoom = "polizei_wand";
    buttonZurueck.update(touchX, touchY, touched);
    buttonZurueck.draw();
    miniPw.update(touchX, touchY, touched);
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
