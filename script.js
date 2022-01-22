let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 9);
};

// This finds the distance between two numbers and returns absolute of distance

const getAbsoluteDistance = (number1, number2) => {
  return Math.abs(number1 - number2);
};

/*  This function checks if a valid number is input by user and alerts if not. It also calls the getAbsoluteDistance function 
to determine distance and ompares the user and computer guesses to target and returns true if human is closer to target or false if not */

const compareGuesses = (human, computer, target) => {
  if (human > 10) {
    alert();
  }; 
  if (getAbsoluteDistance(human, target) <= getAbsoluteDistance(computer, target)) {
    return true;
  } else { 
    return false;
  };
};

// This function updates the scores after each round for computer and user

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  };
};

// This function increase the round counter after each game
const advanceRound = () => {
  currentRoundNumber += 1;
};
