let r;
let g;
let b;

// inuts = red, green, blue
// outputs = black, white
let brain;
let which = "black"; // output decision

function pickColor()
{
  // pick random values for inputs (r,g,b);
  r = random(255);
  g = random(255);
  b = random(255);
  redraw(); // redraw canvas when function is called
}


function setup()
{
  createCanvas(600, 300);
  noLoop();

  // nn
  brain = new NeuralNetwork(3, 3, 2);
  pickColor();
}

function mousePressed()
{
  //interactive training
  //training happens with the targets being the user input
  let targets;
  if(mouseX > width/2)
  {
    // white
    targets = [0,1];
  }
  else if (mouseX < width/2)
  {
    // black
    targets = [1,0];
  }
  // call train function based on supervised learning (inputs -> targets)
  let inputs = [r/255, g/255, b/255];
  brain.train(inputs, targets);

  // everytime mouse is pressed new random colors are picked
  pickColor();
}
function colorPredictor(r, g, b)
{
  // normalize data
  let inputs = [r/255, g/255, b/255];
  let outputs = brain.predict(inputs);

  // what is the probability that it is white or black
  if(outputs[0] > outputs[1])
  {
    return "black";
  }
  else
  {
    return "white";
  }
}


function draw()
{
  background(r,g,b);

  strokeWeight(4);
  stroke(0);
  line(width/2, 0, width/2, height);

  textSize(64);
  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  text("black", 150, 100);
  fill(255);
  text("white", 450, 100);

  // nn function
  which = colorPredictor(r,g,b);
  // console.log("r+g+b: " + floor(r+g+b));
  if (which === "black")
  {
    fill(0);
    ellipse(150, 200, 60, 60);
  }
  else // if (which == "white")
  {
    fill(255);
    ellipse(450, 200, 60, 60);
  }
}
