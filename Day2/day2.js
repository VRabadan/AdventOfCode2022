const { readInput, splitLines, rockPaperScissors, rPsCristalBall, } = require('../helper.js');

// get path from parameters
const file = process.argv[2];

const data = readInput(file);
const dataArray = splitLines(data);

const score1 = dataArray.reduce((p, c) => p + rockPaperScissors(c), 0);
console.log(`Part1: ${score1}`);

const score2 = dataArray.reduce((p, c) => p + rPsCristalBall(c), 0);
console.log(`Part2: ${score2}`);
