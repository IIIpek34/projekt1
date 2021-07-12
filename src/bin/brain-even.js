#!/usr/bin/env node
import { greeting, games } from './brain-games';
import { randomNum } from '../utils';

const checkParity = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generationQuest = () => {
  const arrQuest = [];
  for (let quantityQuest = 3; quantityQuest > 0; quantityQuest -= 1) {
    const num = randomNum();
    const answerCorrect = String(checkParity(num));
    const question = String(num);
    arrQuest.push([question, answerCorrect]);
  }
  return arrQuest;
};

const howToPlay = 'Answer "yes" if number even otherwise answer "no".';
const questionGames = generationQuest();

greeting(howToPlay);
games(questionGames);
