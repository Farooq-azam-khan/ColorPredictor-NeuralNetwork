// let bird; // bird object
const TOTAL = 100;
let birds = [];
let savedBirds = [];
let pipes = []; // array of pipes
let background_img;
let counter = 0;
// let bird_sprite;

function preload()
{
  // bird_sprite = loadImage("bird.png");
  background_img = loadImage("background3.png");
}
function setup()
{
  // windowWidth, windowHeight
  createCanvas(800, 600);
  // bird = new Bird();
  for (let i=0; i<TOTAL; i++)
  {
    birds[i] = new Bird();
  }
  // pipes.push(new Pipe());
}

function draw()
{
  // every 100 frames add new pipe
  if (counter % 75 == 0)
  {
    pipes.push(new Pipe());
    // console.log("pipes length: " + pipes.length);
  }
  background(background_img); // 51);



  for (let i = pipes.length-1; i>=0; i--)
  {
    pipes[i].show();
    pipes[i].update();

    for (let j=birds.length-1; j>=0; j--)
    {
      if(pipes[i].hits(birds[j]))
      {
        // console.log("pipe hit bird");
        savedBirds.push(birds.splice(j, 1)[0]);
      }
    }
    // remove pipe
    if (pipes[i].offscreen())
    {
      pipes.splice(i, 1);
    }
  }
  for(let bird of birds)
  {
    bird.think(pipes);
    bird.update();
    bird.show();
  }

  if (birds.length === 0)
  {
    nextGeneration();
    pipes = [];
    pipes.push(new Pipe());
    counter = 0;
    // console.log("all birds are dead");
    // console.log("size: " + savedBirds.length);
  }
  counter++;



}


// function keyPressed()
// {
//   if (key = ' ')
//   {
//     bird.up();
//     // console.log("space");
//   }
// }
