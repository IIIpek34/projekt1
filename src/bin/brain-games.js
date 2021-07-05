#!/usr/bin/env node
import { haveName } from '../index.js';

console.log('Welcome to the Brain Games!');
const name = haveName();
console.log('Hello, ' + name);