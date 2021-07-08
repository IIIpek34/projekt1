#!/usr/bin/env node
import { greeting, games } from './brain-games';

const howToPlay = 'Answer "yes" if number even otherwise answer "no".';
const questionGames = [[15, 'no'], [6, 'yes'], [7, 'no']];

greeting(howToPlay);
games(questionGames);
