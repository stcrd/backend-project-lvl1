import getRandomInt from '../common-functions.js';

const first20Primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];
const [maxNumber] = first20Primes.slice(-1);
const isPrime = (num) => first20Primes.includes(num);

export const getPrimeInitialData = () => getRandomInt(maxNumber);
export const getPrimeParsedQuestion = (number) => `${number}`;
export const getPrimeParsedAnswer = (number) => (isPrime(number) ? 'yes' : 'no');
