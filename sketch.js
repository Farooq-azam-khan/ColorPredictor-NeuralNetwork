let r, g, b;
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

function colorPredictor(r, g, b)
{
  // normalize data
  let inputs = [r/255, g/255, b/255];
  let outputs = brain.predict(inputs);
  console.log(outputs);

  // what is the probability that it is white or black
  if(outputs[0] > outputs[1])
  {
    return "black";
  }
  else
  {
    return "white";
  }
  // non nn color precitor
  // if (r+g+b > 300)
  // {
  //   return "black";
  // }
  // else
  // {
  //   return "white";
  // }
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
  // everytime mouse is pressed new random colors are picked
  pickColor();
}
function draw()
{
  background(r,g,b);
  textSize(64);
  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  text("black", 200, 100);
  fill(255);
  text("white", 400, 100);

  // nn function
  which = colorPredictor(r,g,b);
  if (which === "black")
  {
    fill(0);
    ellipse(200, 200, 60, 60);
  }
  else if (which == "white")
  {
    fill(255);
    ellipse(400, 200, 60, 60);
  }

}
