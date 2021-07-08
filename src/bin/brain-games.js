#!/usr/bin/env node
import { haveName, haveAnswer } from '../index';

let name = '';
export const greeting = (greet) => {
  console.log('Welcome to the Brain Games!');
  console.log(greet);
  name = haveName();
  console.log(`Hello, ${name}`);
};

export const games = (array) => {
  let progressGames = 0;
  /* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
  for (const values of array) {
    const [quest, answerСorrect] = values;
    console.log(`Question: ${quest}`);
    const answerUser = haveAnswer();
    if (answerUser === answerСorrect) {
      console.log('Correct!');
      progressGames += 1;
      if (progressGames === array.length) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerСorrect}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};
