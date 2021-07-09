import { greeting, games } from './brain-games';
import { randomNum } from '../utils';

const checkNumber = (num) => {
  let quantityDivider = 0;
  for (let quantityCheck = num; quantityCheck > 0; quantityCheck -= 1) {
    if (quantityDivider > 2) {
      return 'no';
    } if (num % quantityCheck === 0) {
      quantityDivider += 1;
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
