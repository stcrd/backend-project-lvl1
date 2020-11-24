import getRandomInt from '../common-functions.js';
import main from '../index.js';

const min = 3;
const max = 100;
const initialDivisor = 2;
const isPrime = (num, divisor) => {
  if (num % divisor === 0) return false;
  if (divisor > Math.sqrt(num)) return true;
  return isPrime(num, divisor + 1);
};

const getInitialData = () => getRandomInt(min, max);
const getQuestion = (number) => `${number}`;
const getAnswer = (number) => (isPrime(number, initialDivisor) ? 'yes' : 'no');
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
