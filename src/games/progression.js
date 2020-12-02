import getRandomInt from '../generate-random-int.js';
import runGame from '../index.js';

const maxLength = 10;
const maxStartingNumber = 20;
const maxIncrement = 5;
const instruction = 'What number is missing in the progression?';

const generateProgression = (first, increment) => {
  const iter = (progression, length) => {
    if (length === maxLength) return progression;
    return iter([...progression, first + increment * length], length + 1);
  };
  return iter([], 0);
};

const getData = () => {
  const startingNumber = getRandomInt(0, maxStartingNumber);
  const increment = getRandomInt(1, maxIncrement);
  const hiddenIndex = getRandomInt(0, maxLength - 1);
  const progression = generateProgression(startingNumber, increment);
  const question = [...progression].fill('..', hiddenIndex, hiddenIndex + 1).join(' ');
  const answer = (startingNumber + increment * hiddenIndex).toString();
  return { question, answer, instruction };
};
export default () => runGame(getData);
