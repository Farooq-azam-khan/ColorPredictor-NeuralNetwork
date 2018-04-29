let bird; // bird object
let pipes = []; // array of pipes
let background_img;
let bird_sprite;

function preload()
{
  bird_sprite = loadImage("bird.png");
  background_img = loadImage("background3.png");
}
function setup()
{
  // windowWidth, windowHeight
  createCanvas(800, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw()
{
  background(background_img); // 51);



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
