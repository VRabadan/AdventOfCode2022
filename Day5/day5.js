const { readInput, splitLines, generateStacks, hannoiBulk, hannoiSequential } = require('../helper.js');

// get path from parameters
const file = process.argv[2] ? process.argv[2] : 'day5/input.txt';
const rawinput = readInput(file);
const rawdata = splitLines(rawinput);

//remember that instructions are ALL "MOVE X from Y to Z" so we only keep the numbers.
const [...instructions] = rawdata.slice(rawdata.indexOf('')+1).map((line) => line.replace(/[^0-9]/g, ' ').trim().replace(/ +/g, ' '));
const numberOfStacks = rawdata.slice(rawdata.indexOf('')-1, rawdata.indexOf('')).pop().split(' ').pop();

//Generate two stacks as we are going to apply two different transformations
const [...stacks] = generateStacks(rawdata.slice(0, rawdata.indexOf('')-1), numberOfStacks);
const [...stacks2] = generateStacks(rawdata.slice(0, rawdata.indexOf('')-1), numberOfStacks);

instructions.reduce((acc, instruction) => acc = hannoiSequential(acc,instruction), stacks);

//print the top container of each stack
console.log("Crates on top for sequential move: ", stacks.map((stack) => stack[stack.length-1]).join(''));

instructions.reduce((acc, instruction) => acc = hannoiBulk(acc,instruction), stacks2);

//print the top container of each stack
console.log("Crates on top for bulk move: ", stacks2.map((stack) => stack[stack.length-1]).join(''));