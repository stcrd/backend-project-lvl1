import { getUserName, getUserAnswer } from './user-prompts.js';
import dispatcher from './dispatcher.js';

const game = (gameType, playerName, score) => {
  if (score === 0) {
    console.log(`Congratulations, ${playerName}!`);
    return;
  }
  const initialData = dispatcher[gameType].initialData();
  const parsedQuestion = dispatcher[gameType].parsedQuestion(initialData);
  const parsedAnswer = dispatcher[gameType].parsedAnswer(initialData);
  console.log(`Question: ${parsedQuestion}`);
  getUserAnswer().then((userAnswer) => {
    if (userAnswer === parsedAnswer) {
      console.log('Correct!');
      game(gameType, playerName, score - 1);
    } else {
      console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${parsedAnswer}'.\nLet's try again, ${playerName}!`);
    }
  });
};

export default (gameType) => {
  const maxScore = 3;
  getUserName().then((name) => {
    console.log(`${dispatcher[gameType].message}`);
    game(gameType, name, maxScore);
  });
};
