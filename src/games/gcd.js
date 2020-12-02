import getRandomInt from '../generate-random-int.js';
import runGame from '../index.js';

const min = 2;
const max = 30;
const instruction = 'Find the greatest common divisor of given numbers.';

const calcGcd = (a, b) => {
  if (a === b) {
    return a;
  }
  if (a > b) {
    return calcGcd(a - b, b);
  }
  return calcGcd(a, b - a);
};

const getData = () => {
  const num1 = getRandomInt(min, max);
  const num2 = getRandomInt(min, max);
  const question = `${num1} ${num2}`;
  const answer = `${calcGcd(num1, num2)}`;
  return { question, answer, instruction };
};

export default () => runGame(getData);
