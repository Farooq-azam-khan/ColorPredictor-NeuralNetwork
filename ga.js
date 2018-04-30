// genetic algorithm class

function nextGeneration()
{

  // calculate all the fitness values
  calculateFitness();
  // creaate new array of bird objects
  for (let i=0; i<TOTAL; i++)
  {
    birds[i] = pickOne(); //  new Bird();
  }
  savedBirds = [];
}

// genetic algorithm component (pick a bird with probability mapped to fitness)
function pickOne()
{
  let index = 0;
  let r = random(1); // choose random number 0 to 1

  // pick something from a list based on an array of probabiliteies/(fitness)
  while(r>0) // while that random number is not 0
  {
    r = r - savedBirds[index].fitness;
    index++;
  }
  index--;
  let bird = savedBirds[index];
  let child = new Bird(bird.brain);
  child.mutate();
  return child;
}

function calculateFitness()
{
  let sum = 0;
  for(bird of savedBirds)
  {
    sum += bird.score;
  }
  // a linear calculation of score (could be exponential / power etc)
  for(bird of savedBirds)
  {
    bird.fitness = bird.score / sum;
  }
}
