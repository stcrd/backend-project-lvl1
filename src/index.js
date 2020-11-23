import promptly from 'promptly';

const getUserName = async () => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};
const getUserAnswer = async () => {
  const answer = await promptly.prompt('Your answer: ');
  return answer;
};

const game = (gameType, playerName, score) => {
  if (score === 0) {
    console.log(`Congratulations, ${playerName}!`);
    return;
  }
  const initialData = gameType.getInitialData();
  const question = gameType.getQuestion(initialData);
  const answer = gameType.getAnswer(initialData);
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
    console.log(`${gameType.getMessage()}`);
    game(gameType, name, maxScore);
  });
};
