import getRandomInt from '../common-functions.js';
import main from '../index.js';

const isEven = (num) => num % 2 === 0;
const maxNumber = 99;

const getInitialData = () => getRandomInt(0, maxNumber);
const getQuestion = (number) => `${number}`;
const getAnswer = (number) => (isEven(number) ? 'yes' : 'no');
const getInstruction = () => 'Answer "yes" if the number is even, otherwise answer "no".';

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
