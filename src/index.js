import readlineSync from 'readline-sync';

export const haveName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const haveAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
