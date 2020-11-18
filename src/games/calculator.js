import getRandomInt from '../common-functions.js';

const symbols = {
  add: '+',
  subtract: '-',
  multiply: '*',
};
const functions = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
};
const operations = ['add', 'subtract', 'multiply'];
const numberOfOperations = operations.length;

const maxNumber = 20;

const getRandomOperation = () => {
  const randomIndex = getRandomInt(numberOfOperations);
  return operations[randomIndex];
};

const getInitialData = () => {
  const num1 = getRandomInt(maxNumber);
  const num2 = getRandomInt(maxNumber);
  const operation = getRandomOperation();
  const symbol = symbols[operation];
  return {
    num1,
    num2,
    symbol,
    operation,
  };
};
const getQuestion = ({ num1, num2, symbol }) => `${num1} ${symbol} ${num2}`;
const getAnswer = ({ num1, num2, operation }) => {
  const operationFunction = functions[operation];
  const result = operationFunction(num1, num2);
  return `${result}`;
};
const getMessage = () => 'What is the result of the expression?';

export {
  getInitialData,
  getQuestion,
  getAnswer,
  getMessage,
};
