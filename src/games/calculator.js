import getRandomInt from '../generate-random-int.js';
import runGame from '../index.js';

const operations = {
  add: { symbol: '+', function: (num1, num2) => num1 + num2 },
  subtract: { symbol: '-', function: (num1, num2) => num1 - num2 },
  multiply: { symbol: '*', function: (num1, num2) => num1 * num2 },
};
const numberOfOperations = Object.keys(operations).length;
const maxNumber = 20;
const instruction = 'What is the result of the expression?';

const getData = () => {
  const randomIndex = getRandomInt(0, numberOfOperations);
  const operation = Object.keys(operations)[randomIndex];
  const { symbol } = operations[operation];
  const num1 = getRandomInt(0, maxNumber);
  const num2 = getRandomInt(0, maxNumber);
  const question = `${num1} ${symbol} ${num2}`;
  const answer = operations[operation].function(num1, num2).toString();
  return { question, answer, instruction };
};

export default () => runGame(getData);
