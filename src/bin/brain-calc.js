#!/usr/bin/env node
import { greeting, games } from './brain-games';
import { randomNum, randomElementArray } from '../utils';

/* eslint consistent-return: ["off", "ForOfStatement"] */
const countAnswerCorrect = (num1, num2, operation) => {
  if (operation === '+') {
    return num1 + num2;
  } if (operation === '-') {
    return num1 - num2;
  } if (operation === '*') {
    return num1 * num2;
  }
};

const arr = ['+', '-', '*'];
const generationQuest = () => {
  const arrQuest = [];
  for (let quantityQuest = 3; quantityQuest > 0; quantityQuest -= 1) {
    const operand1 = randomNum();
    const operand2 = randomNum();
    const action = randomElementArray(arr);
    const question = `${operand1} ${action} ${operand2}`;
    const answerCorrect = String(countAnswerCorrect(operand1, operand2, action));
    arrQuest.push([question, answerCorrect]);
  }
  return arrQuest;
};

const howToPlay = 'What is the result of the expression';
const questions = generationQuest();

greeting(howToPlay);
games(questions);
