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

    this.highlight = false;
  }
  show()
  {
    fill(255);
    if (this.highlight)
    {
      fill(255, 0, 0, 100);
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
      if (bird.x > this.x && bird.x < this.x + this.w)
      {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false; 
    return false;
  }
}
