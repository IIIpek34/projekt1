import { greeting, games } from './brain-games';
import { randomNum } from '../utils';

const assemProgression = () => {
  const startProgression = randomNum();
  const stepProgression = randomNum(1, 3);
  let nextElement = startProgression + stepProgression;
  const progression = [];
  for (let longProgression = 10; longProgression > 0; longProgression -= 1) {
    if (progression.length === 0) {
      progression.push(startProgression);
    }
    progression.push(nextElement);
    nextElement += stepProgression;
  }
  return progression;
};

const arrayToString = (arr) => arr.join(' ');

let quantityQuest = 3;
const generationQuest = () => {
  const arrQuest = [];
  for (; quantityQuest > 0; quantityQuest -= 1) {
    const array = assemProgression();
    const numElementArr = randomNum(0, 9);
    const answerCorrect = String(array[numElementArr]);
    array[numElementArr] = '..';
    const question = arrayToString(array);
    arrQuest.push([question, answerCorrect]);
  }
  return arrQuest;
};

const howToPlay = 'What number is missing in the progression?';
const questions = generationQuest();

greeting(howToPlay);
games(questions);
