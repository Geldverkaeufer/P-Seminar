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
    // Set width and height based on image once loaded (use default if not loaded yet)
    this.width = 100;
    this.height = 50;
    img.onload = () => {
      this.width = img.width * this.defaultScale;
      this.height = img.height * this.defaultScale;
    };
  }
  
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.currentScale, this.currentScale);
    // Draw the image centered
    ctx.drawImage(this.img, -this.img.width/2, -this.img.height/2);
    ctx.restore();
  }
  
  // Check if mouse is over the button
  isHovered(mouseX, mouseY) {
    // Calculate scaled width and height
    const w = this.img.width * this.currentScale;
    const h = this.img.height * this.currentScale;
    return (
      mouseX >= this.x - w/2 &&
      mouseX <= this.x + w/2 &&
      mouseY >= this.y - h/2 &&
      mouseY <= this.y + h/2
    );
  }
  
  update(mouseX, mouseY, clicked) {
    if (this.isHovered(mouseX, mouseY)) {
      this.currentScale = this.hoverScale;
      if (clicked) {
        gameRoom = this.targetRoom;
      }
    } else {
      this.currentScale = this.defaultScale;
    }
  }
}

// Other Sprite Classes can be implemented similarly if needed.
// For simplicity, we’ll use buttons to switch rooms and draw static backgrounds/text.

let buttonWeiter, buttonZurueck, miniPw;
// We'll initialize these once images are loaded.

function initButtons() {
  // For "polizei_wand" room: one button to go to "chemie_raum" and one to "slideshow"
  buttonWeiter = new Button(canvas.width - 200, canvas.height - 130, images.weiter, "chemie_raum", 1.2, 1.8);
  buttonZurueck = new Button(200, canvas.height - 130, images.zurueck, "slideshow", 1.2, 1.8);
  
  // For "chemie_raum": a mini button (using polizei_raum image) that sends you back to "polizei_wand"
  miniPw = new Button(canvas.width - 200, canvas.height - 330, images.polizei_raum, "polizei_wand", 0.23, 0.3);
}

// Track mouse state
let mouseX = 0;
let mouseY = 0;
let mouseClicked = false;

canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

canvas.addEventListener("mousedown", (e) => {
  mouseClicked = true;
});

canvas.addEventListener("mouseup", (e) => {
  mouseClicked = false;
});

// Keyboard event for room changes
document.addEventListener("keydown", (e) => {
  const keyRoomMap = {
    "0": "polizei_wand",
    "z": "zeitung",
    "s": "slideshow",
    "c": "chemie_raum",
    "1": "aufgabe_1"
  };
  if (keyRoomMap[e.key]) {
    gameRoom = keyRoomMap[e.key];
  }
});

// Main draw function
function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  if (gameRoom === "polizei_wand") {
    // Draw background
    ctx.drawImage(images.polizei_raum, 0, 0, canvas.width, canvas.height);
    // Update and draw buttons
    buttonWeiter.update(mouseX, mouseY, mouseClicked);
    buttonWeiter.draw();
    buttonZurueck.targetRoom = "slideshow"; // Set target for zurück in this room
    buttonZurueck.update(mouseX, mouseY, mouseClicked);
    buttonZurueck.draw();
  } 
  else if (gameRoom === "zeitung") {
    // Fill background gray and draw text
    ctx.fillStyle = "rgb(61,61,61)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.textAlign = "center";
    ctx.fillText("HIER ZEITUNG", canvas.width/2, canvas.height/2);
    // One button to go to slideshow
    buttonWeiter.targetRoom = "slideshow";
    buttonWeiter.update(mouseX, mouseY, mouseClicked);
    buttonWeiter.draw();
  }
  else if (gameRoom === "slideshow") {
    // Fill background gray and draw text
    ctx.fillStyle = "rgb(61,61,61)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.textAlign = "center";
    ctx.fillText("HIER SLIDES", canvas.width/2, canvas.height/2);
    // Buttons to switch rooms
    buttonWeiter.targetRoom = "polizei_wand";
    buttonWeiter.update(mouseX, mouseY, mouseClicked);
    buttonWeiter.draw();
    buttonZurueck.targetRoom = "zeitung";
    buttonZurueck.update(mouseX, mouseY, mouseClicked);
    buttonZurueck.draw();
  }
  else if (gameRoom === "chemie_raum") {
    // Black background, draw chemie_raum image
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images.chemie_raum, canvas.width * 0.1, 0, canvas.width * 0.8, canvas.height);
    // Button to go back to polizei_wand
    buttonZurueck.targetRoom = "polizei_wand";
    buttonZurueck.update(mouseX, mouseY, mouseClicked);
    buttonZurueck.draw();
    // Mini_pw button and speech bubble
    miniPw.update(mouseX, mouseY, mouseClicked);
    miniPw.draw();
    // Draw speech bubble at fixed position
    ctx.drawImage(images.sprechblase, canvas.width/2 - 50, canvas.height - 130, 100, 50);
  }
  else if (gameRoom === "aufgabe_1") {
    // White background; for demonstration, draw miniPw
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    miniPw.targetRoom = "polizei_wand";
    miniPw.update(mouseX, mouseY, mouseClicked);
    miniPw.draw();
  }
}

// Main game loop using requestAnimationFrame
function gameLoop() {
  drawScene();
  requestAnimationFrame(gameLoop);
}

// Initialize buttons once images are loaded
initButtons();

// Start the game loop
gameLoop();
