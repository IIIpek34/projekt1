#!/usr/bin/env node
import { greeting, games } from './brain-games.js';

export const howToPlay = 'Answer "yes" if number even otherwise answer "no".';
export const questionGames = [[15, 'no'], [6, 'yes'], [7, 'no']];

greeting();
games();
