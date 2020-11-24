import getRandomInt from '../common-functions.js';
import main from '../index.js';

const maxLength = 10;
const maxStartingNumber = 20;
const maxIncrement = 5;

const generateProgression = (first, increment) => {
  const iter = (progression) => {
    if (progression.length === maxLength) return progression;
    const [last] = progression.slice(-1);
    return iter([...progression, last + increment]);
  };
  return iter([first]);
};

const getInitialData = () => {
  const startingNumber = getRandomInt(0, maxStartingNumber);
  const step = getRandomInt(1, maxIncrement);
  const hiddenIndex = getRandomInt(0, maxLength - 1);
  const progression = generateProgression(startingNumber, step);
  return {
    startingNumber,
    step,
    hiddenIndex,
    progression,
  };
};
const getQuestion = ({ progression, hiddenIndex }) => {
  const modifiedProgression = [...progression].fill('..', hiddenIndex, hiddenIndex + 1);
  return modifiedProgression.join(' ');
};
const getAnswer = ({ progression, hiddenIndex }) => `${progression[hiddenIndex]}`;
const getInstruction = () => 'What number is missing in the progression?';

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
