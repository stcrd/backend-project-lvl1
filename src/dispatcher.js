import { getEvenInitialData, getEvenParsedQuestion, getEvenParsedAnswer } from './games/even.js';
import { getCalcInitialData, getCalcParsedQuestion, getCalcParsedAnswer } from './games/calculator.js';
import { getGcdInitialData, getGcdParsedQuestion, getGcdParsedAnswer } from './games/gcd.js';
import { getProgressionInitialData, getProgressionParsedQuestion, getProgressionParsedAnswer } from './games/progression.js';
import { getPrimeInitialData, getPrimeParsedQuestion, getPrimeParsedAnswer } from './games/prime.js';

export default {
  even: {
    initialData: getEvenInitialData,
    parsedQuestion: getEvenParsedQuestion,
    parsedAnswer: getEvenParsedAnswer,
    message: 'Answer "yes" if the number is even, otherwise answer "no".',
  },
  calculator: {
    initialData: getCalcInitialData,
    parsedQuestion: getCalcParsedQuestion,
    parsedAnswer: getCalcParsedAnswer,
    message: 'What is the result of the expression?',
  },
  gcd: {
    initialData: getGcdInitialData,
    parsedQuestion: getGcdParsedQuestion,
    parsedAnswer: getGcdParsedAnswer,
    message: 'Find the greatest common divisor of given numbers.',
  },
  progression: {
    initialData: getProgressionInitialData,
    parsedQuestion: getProgressionParsedQuestion,
    parsedAnswer: getProgressionParsedAnswer,
    message: 'What number is missing in the progression?',
  },
  prime: {
    initialData: getPrimeInitialData,
    parsedQuestion: getPrimeParsedQuestion,
    parsedAnswer: getPrimeParsedAnswer,
    message: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  },
};
