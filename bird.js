class Bird
{
  constructor(brain)
  {
    this.x = 64;
    this.y = height/2;

    this.gravity = 0.6;
    this.velocity = 0;
    this.lift = -10;

    // this.icon = bird_sprite;
    // this.width = 300;
    // this.height = 250;

    if (brain)
    {
      this.brain = brain.copy();
    }
    else
    {
      // neural network
      //            inputs, hidden nodes, outputs
      this.brain = new NeuralNetwork(4, 4, 2);
    }

    // genetic algorith
    this.score = 0;
    this.fitness = 0;
  }

  mutate()
  {
    this.brain.mutate(0.1);
  }
  offScreen()
  {
    return false;
  }

  show()
  {
    // x, y, radius, radius;
    strokeWeight(2);
    stroke(0);
    fill(100, 128, 159, 200);
    //image(this.icon, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    ellipse(this.x, this.y, 40, 40);
  }

  up()
  {
    this.velocity += this.lift;
  }

  think(pipes)
  {
    // find the closes pip
    // console.log(pipes.length);
    let closest_pipe = pipes[0]; // null;
    let closest_distance = closest_pipe.x - this.x; // Infinity;
    for (let i=0; i<pipes.length; i++)
    {
      let distance = pipes[i].x - this.x;
      if (distance < closest_distance && distance > 0)
      {
        closest_pipe = pipes[i];
        closest_distance = distance;
      }
    }
    // array of 4 numbers
    let inputs = [];

    // get the value for the inputs (also normalize values)
    inputs[0] = this.y / height; // y position of the bird
    inputs[1] = closest_pipe.top / height; // pipe to avoid
    inputs[2] = closest_pipe.bottom / height; // pipe to avoid
    inputs[3] = closest_pipe.x / width; // x position of the pipe

    let outputs = this.brain.predict(inputs);
    if (outputs[0] > outputs[1])
    {
      this.up();
    }
  }

  update()
  {
    // give it a score if the update function is called
    this.score++;

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
