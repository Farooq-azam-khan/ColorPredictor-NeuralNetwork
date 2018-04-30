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
  let bird = random(savedBirds);
  let child = new Bird(bird.brain);
  child.mutate(); 
  return child;
}

function calculateFitness()
{
  let sum = 0;
  for(bird of birds)
  {
    sum += bird.score;
  }
  // a linear calculation of score (could be exponential / power etc)
  for(bird of birds)
  {
    bird.fitness = bird.score / sum;
  }
}
