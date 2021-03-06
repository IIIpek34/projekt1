#!/usr/bin/env node
import { greeting, games } from './brain-games';
import { randomNum } from '../utils';

const countAnswerCorrect = (num1, num2) => {
  let found = Math.max(num1, num2);
  for (found; found >= 1; found -= 1) {
    if ((num1 % found === 0) && (num2 % found === 0)) {
      break;
    }
  }
  return found;
};

const generationQuest = () => {
  const arrQuest = [];
  for (let quantityQuest = 3; quantityQuest > 0; quantityQuest -= 1) {
    const operand1 = randomNum();
    const operand2 = randomNum();
    const question = `${operand1} ${operand2}`;
    const answerCorrect = String(countAnswerCorrect(operand1, operand2));
    arrQuest.push([question, answerCorrect]);
  }
  return arrQuest;
};

const howToPlay = 'Find the greatest common divisor of given numbers.';
const questions = generationQuest();

greeting(howToPlay);
games(questions);
