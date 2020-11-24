import getRandomInt from '../common-functions.js';
import main from '../index.js';

const calcGcd = (a, b) => {
  if (a === b) {
    return a;
  }
  if (a > b) {
    return calcGcd(a - b, b);
  }
  return calcGcd(a, b - a);
};
const min = 2;
const max = 30;

const getInitialData = () => {
  const num1 = getRandomInt(min, max);
  const num2 = getRandomInt(min, max);
  return { num1, num2 };
};

const getQuestion = ({ num1, num2 }) => `${num1} ${num2}`;
const getAnswer = ({ num1, num2 }) => `${calcGcd(num1, num2)}`;
const getInstruction = () => 'Find the greatest common divisor of given numbers.';

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
