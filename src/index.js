import { getUserName, getUserAnswer } from './user-prompts.js';
import dispatcher from './dispatcher.js';

const game = (gameType, playerName, score) => {
  if (score === 0) {
    console.log(`Congratulations, ${playerName}!`);
    return;
  }
  const initialData = dispatcher[gameType].getInitialData();
  const question = dispatcher[gameType].getQuestion(initialData);
  const answer = dispatcher[gameType].getAnswer(initialData);
  console.log(`Question: ${question}`);
  getUserAnswer().then((userAnswer) => {
    if (userAnswer === answer) {
      console.log('Correct!');
      game(gameType, playerName, score - 1);
    } else {
      console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${playerName}!`);
    }
  });
};

export default (gameType) => {
  const maxScore = 3;
  getUserName().then((name) => {
    console.log(`${dispatcher[gameType].getMessage()}`);
    game(gameType, name, maxScore);
  });
};
