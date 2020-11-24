import getRandomInt from '../common-functions.js';
import main from '../index.js';

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
  const randomIndex = getRandomInt(0, numberOfOperations);
  return operations[randomIndex];
};

const getInitialData = () => {
  const num1 = getRandomInt(0, maxNumber);
  const num2 = getRandomInt(0, maxNumber);
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
const getInstruction = () => 'What is the result of the expression?';

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
