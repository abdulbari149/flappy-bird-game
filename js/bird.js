export default class Bird {
  constructor(x, y, r, color) {
    (this.xposition = x),
      (this.yposition = y),
      (this.radius = r),
      (this.color = color),
      (this.velocity = 50),
      (this.gravity = 2);
  }

  createBird(context) {
    context.beginPath();
    context.arc(this.xposition, this.yposition, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
  }

  motion(canvas) {
    if (this.yposition <= canvas.height) {
      this.yposition += this.gravity;
    }
  }
  keyPress() {
    this.yposition -= this.velocity;
  }
  
}
