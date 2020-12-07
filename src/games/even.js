import getRandomInt from '../generate-random-int.js';
import runGame from '../index.js';

const isEven = (num) => num % 2 === 0;
const maxNumber = 99;
const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateNewRound = () => {
  const num = getRandomInt(0, maxNumber);
  const question = num.toString();
  const answer = isEven(num) ? 'yes' : 'no';
  return { question, answer };
};

export default () => runGame(generateNewRound, instruction);
