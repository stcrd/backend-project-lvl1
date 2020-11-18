import getRandomInt from '../common-functions.js';

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
  const startingNumber = getRandomInt(maxStartingNumber);
  const step = getRandomInt(maxIncrement) + 1;
  const hiddenIndex = getRandomInt(maxLength - 1);
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
const getMessage = () => 'What number is missing in the progression?';

export {
  getInitialData,
  getQuestion,
  getAnswer,
  getMessage,
};
