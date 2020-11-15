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
export { getUserName, getUserAnswer };
