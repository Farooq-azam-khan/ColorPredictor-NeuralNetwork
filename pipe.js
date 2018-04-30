class Pipe
{
  constructor()
  {
    // spacing between pipe
    let spacing = random(100, height/2);
    // where that random spacing appears is also random
    let centery = random(50, height-50);
    // top rectangle (heght)
    this.top = centery - spacing/2;
    // botton rectangle (height)
    this.bottom = height - centery - spacing/2;
    this.x = width;
    this.w = 30; // width of all rectangles
    this.speed = 3; // speed of how fast the pipe is moving

    this.highlight = false;
  }
  show()
  {
    fill(249, 105, 14, 250);
    if (this.highlight)
    {
      fill(207, 0, 15, 150);
    }
    // top rectangle
    rect(this.x,  0, this.w, this.top);
    // bottom rectangel
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  update()
  {
    this.x -= this.speed; // -= because moving to the left
  }

  offscreen()
  {
    // if width is less than zero
    return this.x < -this.w;
  }

  hits(bird)
  {
    if(bird.y < this.top || bird.y > height - this.bottom)
    {
      if (bird.x+32 > this.x && bird.x < this.x + this.w)
      {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }
}
