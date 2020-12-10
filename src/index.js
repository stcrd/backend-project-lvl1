import readlineSync from 'readline-sync';

const runGame = (generateRound, instruction) => {
  const maxScore = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(instruction);

  const executeGameRound = (score) => {
    if (score === maxScore) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const { question, answer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      executeGameRound(score + 1);
    } else {
      console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  executeGameRound(0);
};

export default runGame;
