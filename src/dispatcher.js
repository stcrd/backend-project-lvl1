import * as even from './games/even.js';
import * as calculator from './games/calculator.js';
import * as gcd from './games/gcd.js';
import * as progression from './games/progression.js';
import * as prime from './games/prime.js';

export default {
  even: {
    initialData: even.getInitialData,
    parsedQuestion: even.getQuestion,
    parsedAnswer: even.getAnswer,
    message: even.getMessage(),
  },
  calculator: {
    initialData: calculator.getInitialData,
    parsedQuestion: calculator.getQuestion,
    parsedAnswer: calculator.getAnswer,
    message: calculator.getMessage(),
  },
  gcd: {
    initialData: gcd.getInitialData,
    parsedQuestion: gcd.getQuestion,
    parsedAnswer: gcd.getAnswer,
    message: gcd.getMessage(),
  },
  progression: {
    initialData: progression.getInitialData,
    parsedQuestion: progression.getQuestion,
    parsedAnswer: progression.getAnswer,
    message: progression.getMessage(),
  },
  prime: {
    initialData: prime.getInitialData,
    parsedQuestion: prime.getQuestion,
    parsedAnswer: prime.getAnswer,
    message: prime.getMessage(),
  },
};
