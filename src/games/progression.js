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

export const getProgressionInitialData = () => {
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
export const getProgressionParsedQuestion = ({ progression, hiddenIndex }) => {
  const modifiedProgression = [...progression].fill('..', hiddenIndex, hiddenIndex + 1);
  return modifiedProgression.join(' ');
};
export const getProgressionParsedAnswer = ({ progression, hiddenIndex }) => `${progression[hiddenIndex]}`;
