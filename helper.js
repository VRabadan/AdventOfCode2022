const fs = require('fs');

function readInput(fileName) {
    return fs.readFileSync(fileName, 'utf8')
}

function splitLines(data) {
    return data.split('\n');
}

function splitAndGroupLines(data) {
    const lines = data.split('\n');
    const groups = [];
    for (let i = 0; i < lines.length; i += 3) {
        groups.push(lines.slice(i, i + 3));
    }
    return groups;
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
        score += 1+3;
    } else if (first === 'A' && second === 'Y') {
        score += 2+6;
    } else if (first === 'A' && second === 'Z') {
        score += 3+0;
    } else if (first === 'B' && second === 'X') {
        score += 1+0;
    } else if (first === 'B' && second === 'Y') {
        score += 2+3;
    } else if (first === 'B' && second === 'Z') {
        score += 3+6;
    } else if (first === 'C' && second === 'X') {
        score += 1+6
    } else if (first === 'C' && second === 'Y') {
        score += 2+0;
    } else if (first === 'C' && second === 'Z') {
        score += 3+3;
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

function splitString(item) {
    const first = item.substring(0, item.length / 2);
    const second = item.substring(item.length / 2);
    return [first.trim(), second.trim()];
}

function findRepeated(data){
    let chars = '';
    for (let i = 0; i < data[0].length; i++) {
        const found = [];
        for (let j = 1; j < data.length; j++) {
            data[j].includes(data[0][i]) ? found.push(true) : null;
        }
    found.length === data.length - 1 ? chars += data[0][i] : null;
    }
    return chars;
}

function fullIntervalOverlap(data) {
    const [first, second] = data;
    const [firstStart, firstEnd] = first.split('-').map(Number);
    const [secondStart, secondEnd] = second.split('-').map(Number);
    if (firstStart <= secondStart && firstEnd>= secondEnd) {
        return true;
    } else if (secondStart <= firstStart && secondEnd >= firstEnd) {
        return true;
    } else {
        return false;
    }
}

function someIntervalOverlap(data) {
    const [first, second] = data;
    const [x1, x2] = first.split('-').map(Number);
    const [y1, y2] = second.split('-').map(Number);
    return (x1 >= y1 && x1 <= y2) ||
            (x2 >= y1 && x2 <= y2) ||
            (y1 >= x1 && y1 <= x2) ||
            (y2 >= x1 && y2 <= x2);
}

function generateStacks(data) {
    const stacks = [];
    let first = true;
    for (let i = data.length - 1; i >= 0; i--) {
        let index = 0;
        for (let j = 1; j < data[i].length; j+=4) {
            first ? stacks.push([]) : null;
            data[i][j] != ' ' ? stacks[index].push(data[i][j]) : null;
            index +=1;
        }
        first = false;
    }
    return stacks;
}

function hannoiSequential(towers, moves) {
    const [howMany, from, to] = moves.split(' ');
    //move the containers in the stacks according to the move instructions, but one at a time.
    for (let index = 0; index < howMany; index++) {
        towers[to-1].push(...towers[from-1].splice(towers[from-1].length-1, 1));
    }
    return towers;
}

function hannoiBulk(towers, moves) {
    const [howMany, from, to] = moves.split(' ');
    //move the containers in the stacks according to the move instructions, but on groups.
    towers[to-1].push(...towers[from-1].splice(towers[from-1].length-howMany, howMany));
    return towers;
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
    splitString,
    findRepeated,
    splitAndGroupLines,
    fullIntervalOverlap,
    someIntervalOverlap,
    generateStacks,
    hannoiBulk,
    hannoiSequential,
}