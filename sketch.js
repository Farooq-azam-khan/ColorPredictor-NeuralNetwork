let b; // bird object
let pipes = []; // array of pipes
function setup()
{
  createCanvas(400, 600);
  b = new Bird();
  pipes.push(new Pipe());
}

function draw()
{
  background(51);
  b.update();
  b.show();

  // every fourty frames add new pipe
  if (frameCount % 40 == 0)
  {
    pipes.push(new Pipe());
  }

  for (var i = 0; i< pipes.length; i++)
  {
    pipes[i].show();
    pipes[i].update();
  }

}


function keyPressed()
{
  if (key = ' ')
  {
    b.up();
    console.log("space");
  }
}
