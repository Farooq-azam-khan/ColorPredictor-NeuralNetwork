class Pipe
{
  constructor()
  {
    // top rectangle (heght)
    this.top = random(height/2);
    // botton rectangle (height)
    this.bottom = random(height/2);
    this.x = width;
    this.w = 20; // width of all rectangles
    this.speed = 3; // speed of how fast the pipe is moving
  }
  show()
  {
    fill(255);
    // top rectangle
    rect(this.x,  0, this.w, this.top);
    // bottom rectangel
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  update()
  {
    this.x -= this.speed; // -= because moving to the left
  }
}
