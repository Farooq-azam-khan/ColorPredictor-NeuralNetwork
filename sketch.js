// let bird; // bird object
const TOTAL = 250;
let birds = [];
let savedBirds = [];
let pipes = []; // array of pipes
let background_img;
let counter = 0;


let slider;
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
  slider = createSlider(1, 10, 1);
  // bird = new Bird();
  for (let i=0; i<TOTAL; i++)
  {
    birds[i] = new Bird();
  }
}

function draw()
{
  for (let increment=0; increment<slider.value(); increment++)
  {
    // every 100 frames add new pipe
    if (counter % 75 == 0)
    {
      pipes.push(new Pipe());
    }
    for (let i = pipes.length-1; i>=0; i--)
    {
      pipes[i].update();

      for (let j=birds.length-1; j>=0; j--)
      {
        if(pipes[i].hits(birds[j]))
        {
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
    }

    if (birds.length === 0)
    {
      nextGeneration();
      pipes = [];
      pipes.push(new Pipe());
      counter = 0;
    }
    counter++;
  }


  // show for user
  background(background_img);
  for(let bird of birds)
  {
    bird.show();
  }
  for (let pipe of pipes)
  {
    pipe.show();
  }



}


// function keyPressed()
// {
//   if (key = ' ')
//   {
//     bird.up();
//     // console.log("space");
//   }
// }
