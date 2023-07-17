import greet from './greet.js';
import chalk from 'chalk';
import figlet from 'figlet';

const figletText = figlet.textSync(greet('Xola'));
console.log(figletText);

const styledMessage = chalk.bgCyan.black(greet('Xola'));
console.log(styledMessage);

console.log(greet('Xola'));

const styledFigletText = chalk.yellow(figletText);
console.log(styledFigletText);
