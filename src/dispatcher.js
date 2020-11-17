import { getEvenInitialData, getEvenParsedQuestion, getEvenParsedAnswer } from './games/even.js';
import { getCalcInitialData, getCalcParsedQuestion, getCalcParsedAnswer } from './games/calculator.js';

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
};
