const fs = require('fs');

function readInput(fileName) {
    return fs.readFileSync(fileName, 'utf8')
}

function splitLines(data) {
    return data.split('\n');
}

function splitSpace(data) {
    return data.split(' ');
}

function sortDesc (data) {
    return data.sort((a, b) => b - a);
}

function sum(data) {
    return data.reduce((p, c) => p + c, 0);
}

function sumSome(data, n) {
    return sum(data.slice(0, n));
}

// First Column A for rock B for Paper C for Scissors
// Second Column X for rock Y for Paper Z for Scissors
// Score is 1 for Rock, 2 for Paper, 3 for Scissors plus 6 for win, 3 for draw, 0 for loss
// Calculate the score for each game following the input guides
 function rockPaperScissors(data) {
    let score = 0;
    const [first, second] = data.split(' ');
    if (first === 'A' && second === 'X') {
        score += 3;
    } else if (first === 'B' && second === 'Y') {
        score += 3;
    } else if (first === 'C' && second === 'Z') {
        score += 3;
    } else if (first === 'A' && second === 'Y') {
        score += 6;
    } else if (first === 'A' && second === 'Z') {
        score += 0;
    } else if (first === 'B' && second === 'X') {
        score += 0;
    } else if (first === 'B' && second === 'Z') {
        score += 6;
    } else if (first === 'C' && second === 'X') {
        score += 6;
    } else if (first === 'C' && second === 'Y') {
        score += 0;
    }

    if (second === 'X'){
        score += 1;
    } else if (second === 'Y') {
        score += 2;
    } else if (second === 'Z') {
        score += 3;
    }
    return score;
}

// First Column A for rock B for Paper C for Scissors
// Second Column X for LOSE Y for DRAW Z for WIN
// Score is 1 for Rock, 2 for Paper, 3 for Scissors plus 6 for win, 3 for draw, 0 for loss
// Calculate the score for each game following the input guides
function rPsCristalBall(data) {
    let score = 0;
    const [first, second] = data.split(' ');
    if (first === 'A' && second === 'X') {
        score += 3+0;
    } else if (first === 'A' && second === 'Y') {
        score += 1+3;
    } else if (first === 'A' && second === 'Z') {
        score += 6+2;
    } else if (first === 'B' && second === 'X') {
        score += 1+0;
    } else if (first === 'B' && second === 'Y') {
        score += 2+3;
    } else if (first === 'B' && second === 'Z') {
        score += 3+6;
    } else if (first === 'C' && second === 'X') {
        score += 2+0
    } else if (first === 'C' && second === 'Y') {
        score += 3+3;
    } else if (first === 'C' && second === 'Z') {
        score += 6+1;
    }

    return score;
}

module.exports = {
    readInput,
    splitLines,
    sortDesc,
    sum,
    sumSome,
    splitSpace,
    rockPaperScissors,
    rPsCristalBall,
}