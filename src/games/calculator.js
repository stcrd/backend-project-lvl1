import getRandomInt from '../generate-random-int.js';
import runGame from '../index.js';

const operations = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
};
const numberOfOperations = Object.keys(operations).length;
const maxNumber = 20;
const instruction = 'What is the result of the expression?';

const generateNewRound = () => {
  const randomIndex = getRandomInt(0, numberOfOperations);
  const operation = Object.keys(operations)[randomIndex];
  const num1 = getRandomInt(0, maxNumber);
  const num2 = getRandomInt(0, maxNumber);
  const question = `${num1} ${operation} ${num2}`;
  const answer = operations[operation](num1, num2).toString();
  return { question, answer };
};

export default () => runGame(generateNewRound, instruction);
