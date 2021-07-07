#!/usr/bin/env node
import { haveName, haveAnswer } from '../index';
import { howToPlay, questionGames } from './brain-even';

/* eslint-disable no-console */
console.log('Welcome to the Brain Games!');
console.log(howToPlay);
const name = haveName();
console.log(`Hello, ${name}`);

for (let i = 0; i < 3; i += 1) {
  /* eslint-disable no-console */
  console.log(`Question: ${questionGames[0 + i][0]}`);
  const answer = haveAnswer();
  if (answer === questionGames[0 + i][1]) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionGames[0 + i][1]}'`);
    console.log(`Let\'s try again, ${name}!`);
    break;
  }
}
