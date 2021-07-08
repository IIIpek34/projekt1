#!/usr/bin/env node
import { haveName, haveAnswer } from '../index';
import { howToPlay, questionGames } from './brain-even';

let name = '';
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log(howToPlay);
  name = haveName();
  console.log(`Hello, ${name}`);
};

export const games = () => {
  let progressGames = 0;
  /* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
  for (const values of questionGames) {
    const [quest, answerEqual] = values;
    console.log(`Question: ${quest}`);
    const answerUser = haveAnswer();
    if (answerUser === answerEqual) {
      console.log('Correct!');
      progressGames += 1;
      if (progressGames === questionGames.length) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerEqual}'`);
      console.log(`Let\'s try again, ${name}!`);
      break;
    }
  }
};
