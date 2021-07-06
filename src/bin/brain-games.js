#!/usr/bin/env node
import haveName from '../index';

console.log('Welcome to the Brain Games!'); // eslint-disable-line no-console
const name = haveName();
console.log(`Hello, ${name}`); // eslint-disable-line no-console
