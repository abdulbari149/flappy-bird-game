export default class Obsatcle {
  constructor(x, y, w, h) {
    // this.spacing = 80 + Math.trunc(Math.random() * h/2),
    this.spacing = 80;
    (this.yposition = y),
      (this.xposition = x),
      (this.w = w),
      (this.h1 = h / 2 - this.spacing / 2),
      (this.h2 = h / 2 - this.spacing / 2),
      (this.left = 3),
      (this.play = false);
  }

  createObstacles(context) {
    if (!this.play) {
      context.fillStyle = "#32CD32";
    } else {
      context.fillStyle = "orange";
    }
    context.fillRect(this.xposition - this.w, 0, this.w, this.h1);
    context.fillRect(
      this.xposition - this.w,
      this.yposition - this.h2,
      this.w,
      this.h2
    );
  }

  motion(context) {
    this.xposition -= this.left;
  }
  offScreen() {
    return this.xposition === -this.w;
  }

  hit(b) {
    if (
      (b.yposition < this.h1 || b.yposition > this.h2) &&
      this.xposition < b.xposition
    ) {
      this.play = true;
      return true;
    } 
  }
}
