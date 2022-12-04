const { readInput, splitLines, fullIntervalOverlap, someIntervalOverlap} = require('../helper.js');

// get path from parameters
const file = process.argv[2] ? process.argv[2] : 'day4/input.txt';
const data = readInput(file);
const [...rooster] = splitLines(data);
const elfPairs = rooster.map((elf) => {
    return [first, second] = elf.split(',');
});

const mistakes = elfPairs.reduce((acc, cur) => {
    return fullIntervalOverlap(cur) ? acc += 1 : acc;
},0);

console.log(`${mistakes} assignments pairs are contained within eachother.`);

const somemistakes = elfPairs.reduce((acc, cur) => {
    return someIntervalOverlap(cur) ? acc += 1 : acc;
},0);

console.log(`${somemistakes} assignments pairs are at least partially overlaped.`);