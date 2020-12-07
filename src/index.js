import readlineSync from 'readline-sync';

const runGame = (generateNewRound, instruction) => {
  const maxScore = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(instruction);

  const executeGameRound = ({ question, answer }, score) => {
    if (score === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      executeGameRound(generateNewRound(), score - 1);
    } else {
      console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
    }
  };
  executeGameRound(generateNewRound(), maxScore);
};

export default runGame;
