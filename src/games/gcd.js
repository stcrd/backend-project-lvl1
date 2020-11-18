import getRandomInt from '../common-functions.js';

const calcGcd = (a, b) => {
  if (a === b) {
    return a;
  }
  if (a > b) {
    return calcGcd(a - b, b);
  }
  return calcGcd(a, b - a);
};
const maxNumber = 30;

const getInitialData = () => {
  const num1 = getRandomInt(maxNumber);
  const num2 = getRandomInt(maxNumber);
  return { num1, num2 };
};

const getQuestion = ({ num1, num2 }) => `${num1} ${num2}`;
const getAnswer = ({ num1, num2 }) => `${calcGcd(num1, num2)}`;
const getMessage = () => 'Find the greatest common divisor of given numbers.';

export {
  getInitialData,
  getQuestion,
  getAnswer,
  getMessage,
};
