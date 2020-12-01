import getRandomInt from '../generate-random-int.js';
import main from '../index.js';

const min = 3;
const max = 100;

const isPrime = (num) => {
  const initialDivisor = 2;
  const iter = (number, divisor) => {
    if (number % divisor === 0) return false;
    if (divisor > Math.sqrt(number)) return true;
    return iter(number, divisor + 1);
  };
  return iter(num, initialDivisor);
};

const getInitialData = () => getRandomInt(min, max);
const getQuestion = (number) => `${number}`;
const getAnswer = (number) => (isPrime(number) ? 'yes' : 'no');
const getInstruction = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getData = () => {
  const data = getInitialData();
  const question = getQuestion(data);
  const answer = getAnswer(data);
  const instruction = getInstruction();
  return {
    getData,
    question,
    answer,
    instruction,
  };
};
export default () => main(getData());
