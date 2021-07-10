import { greeting, games } from './brain-games';
import { randomNum } from '../utils';

const checkNumber = (num) => {
  if (num === 1) {
    return 'no';
  }
  for (let quantityCheck = num - 1; quantityCheck > 1; quantityCheck -= 1) {
    if (num % num === 0 && num % 1 === 0 && num % quantityCheck === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generationQuest = () => {
  const arrQuest = [];
  for (let quantityQuest = 3; quantityQuest > 0; quantityQuest -= 1) {
    const number = randomNum();
    const answerCorrect = String(checkNumber(number));
    const question = String(number);
    arrQuest.push([question, answerCorrect]);
  }
  return arrQuest;
};

const howToPlay = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const questions = generationQuest();

greeting(howToPlay);
games(questions);
