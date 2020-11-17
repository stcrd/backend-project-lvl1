import getRandomInt from '../common-functions.js';

const isEven = (num) => num % 2 === 0;
const maxNumber = 99;
export const getEvenInitialData = () => getRandomInt(maxNumber);
export const getEvenParsedQuestion = (number) => `${number}`;
export const getEvenParsedAnswer = (number) => (isEven(number) ? 'yes' : 'no');
