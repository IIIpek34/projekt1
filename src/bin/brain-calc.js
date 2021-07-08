#!/usr/bin/env node
import { greeting, games } from './brain-games.js';

const randomNum = () => {
  const min = 1;
  const max = 50;
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

const randomOperation = () => {
  const arr = ['+', '-', '*'];
  const operation = Math.floor(Math.random() * arr.length);
  return arr[operation];
};

const countAnswerCorrect = (num1, num2, operation) => {
  let answerCorrect = 0;
  if (operation === '+') {
    answerCorrect = num1 + num2;
  } else if (operation === '-') {
    answerCorrect = num1 - num2;
  } else if (operation === '*') {
    answerCorrect = num1 * num2;
  }
  return answerCorrect;
};

let quantityQuest = 3;
const generationQuest = () => {
  const arrQuest = [];
  for (; quantityQuest > 0; quantityQuest -= 1) {
    const operand1 = randomNum();
    const operand2 = randomNum();
    const action = randomOperation();
    const question = `${operand1} ${action} ${operand2}`;
    const answerCorrect = countAnswerCorrect(operand1, operand2, action);
    arrQuest.push([question, answerCorrect]);
  }
  return arrQuest;
};

export const howToPlay = 'What is the result of the expression';
export const questions = generationQuest();

greeting();
games();
