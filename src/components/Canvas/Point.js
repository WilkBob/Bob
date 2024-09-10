export default class Point {
  constructor(x, y, ctx) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.baseX = this.x;
    this.baseY = this.y;
    this.opacity = 0.2;
    this.velocityX = (Math.random() - 0.5) * 0.2; // Random small velocity
    this.velocityY = (Math.random() - 0.5) * 0.2; // Random small velocity
    this.hovered = false;
  }

  draw() {
    // set electric blue if hovered
    this.ctx.fillStyle = this.hovered
      ? `rgba(0, 255, 255, ${this.opacity})`
      : `rgba(255, 255, 255, ${this.opacity})`;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
  }

  update() {
    // Move points left and down with some randomness
    this.x += this.velocityX;
    this.y += this.velocityY;

    // Reset position if the point goes out of bounds
    if (this.x < 0 || this.x > window.innerWidth) {
      this.x = Math.random() * window.innerWidth;
    }
    if (this.y < 0 || this.y > window.innerHeight) {
      this.y = Math.random() * window.innerHeight;
    }
  }
}
