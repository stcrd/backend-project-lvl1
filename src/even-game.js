import { getUserName, getUserAnswer } from './user-prompts.js';

const ceiling = 99;
const getRandomInt = () => Math.floor(Math.random() * ceiling);
const isEven = (num) => num % 2 === 0;

const game = (playerName, score) => {
  if (score === 0) {
    console.log(`Congratulations, ${playerName}!`);
    return;
  }
  const currentNumber = getRandomInt();
  const correctAnswer = isEven(currentNumber) ? 'yes' : 'no';
  console.log(`Question: ${currentNumber}`);
  getUserAnswer().then((userAnswer) => {
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      game(playerName, score - 1);
    } else {
      console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
    }
  });
};

export default () => {
  const maxScore = 3;
  getUserName().then((name) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    game(name, maxScore);
  });
};
