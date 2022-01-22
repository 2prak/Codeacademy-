let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 9);
};

const getAbsoluteDistance = (number1, number2) => {
  return Math.abs(number1 - number2);
};

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
 
const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  };
};

const advanceRound = () => {
  currentRoundNumber += 1;
};
