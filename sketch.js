let bird; // bird object
let pipes = []; // array of pipes
function setup()
{
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw()
{
  background(51);



  for (var i = pipes.length-1; i>=0; i--)
  {
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].hits(bird))
    {
      console.log("pipe hit bird");
    }

    // remove pipe
    if (pipes[i].offscreen())
    {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  // every 100 frames add new pipe
  if (frameCount % 100 == 0)
  {
    pipes.push(new Pipe());
    console.log("pipes length: " + pipes.length);
  }

}


function keyPressed()
{
  if (key = ' ')
  {
    bird.up();
    console.log("space");
  }
}
