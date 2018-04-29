let b; // bird object
function setup()
{
  createCanvas(400, 600);
  b = new Bird();
}

function draw()
{
  background(51);
  b.update();
  b.show();

}
