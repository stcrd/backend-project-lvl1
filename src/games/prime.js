import getRandomInt from '../generate-random-int.js';
import runGame from '../index.js';

const min = 3;
const max = 100;
const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const initialDivisor = 2;
  const iter = (divisor) => {
    if (num % divisor === 0) return false;
    if (divisor > Math.sqrt(num)) return true;
    return iter(divisor + 1);
  };
  return iter(initialDivisor);
};

const generateNewRound = () => {
  const num = getRandomInt(min, max);
  const question = num.toString();
  const answer = isPrime(num) ? 'yes' : 'no';
  return { question, answer };
};

export default () => runGame(generateNewRound, instruction);
