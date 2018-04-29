class Bird
{
  constructor()
  {
    this.x = 64;
    this.y = height/2;

    this.gravity = 0.6;
    this.velocity = 0;
    this.lift = -10;

    this.icon = bird_sprite;
    this.width = 300;
    this.height = 250;
  }

  show()
  {
    // x, y, radius, radius;
    strokeWeight(2);
    stroke(52, 73, 94);
    fill(103, 128, 159);
    //image(this.icon, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    ellipse(this.x, this.y, 40, 40);
  }

  up()
  {
    this.velocity += this.lift;
  }

  update()
  {
    // update velocity
    this.velocity += this.gravity;
    // update position
    this.velocity *= 0.9;
    this.y += this.velocity;

    // check boundary conditions
    if (this.y >= height)
    {
      this.y = height;
      this.velocity = 0;
    }
    if (this.y < 0)
    {
      this.y = 0;
      // this.velocity = 0;
    }
  }
}
