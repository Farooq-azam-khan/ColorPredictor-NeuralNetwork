class Bird
{
  constructor()
  {
    this.x = 64;
    this.y = height/2;

    this.gravity = 0.6;
    this.velocity = 0;
    // this.lift = -10;
  }

  show()
  {
    // x, y, radius, radius;
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  }

  up()
  {
    this.velocity = this.lift;
  }

  update()
  {
    // update velocity
    this.velocity += this.gravity;
    // update position
    this.y += this.velocity;

    // check boundary conditions
    if (this.y >= height - this.height / 2)
    {
      this.y = height - this.height / 2;
      this.velocity = 0;
    }

    if (this.y <= this.height / 2)
    {
      this.y = this.height / 2;
      this.velocity = 0;
    }
  }
}
