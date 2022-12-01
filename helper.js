const fs = require('fs');

function readInput(fileName) {
    return fs.readFileSync(fileName, 'utf8')
}

function splitLines(data) {
    return data.split('\n');
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

module.exports = {
    readInput,
    splitLines,
    sortDesc,
    sum,
    sumSome,
}