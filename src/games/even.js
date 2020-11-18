import getRandomInt from '../common-functions.js';

const isEven = (num) => num % 2 === 0;
const maxNumber = 99;

const getInitialData = () => getRandomInt(maxNumber);
const getQuestion = (number) => `${number}`;
const getAnswer = (number) => (isEven(number) ? 'yes' : 'no');
const getMessage = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export {
  getInitialData,
  getQuestion,
  getAnswer,
  getMessage,
};
