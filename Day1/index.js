const { readInput, splitLines, sortDesc, sumSome } = require('../helper.js');

// get path from parameters
const file = process.argv[2];

const data = readInput(file);
const dataArray = splitLines(data);

// Reduce juega con el array, permite hacer operaciones con el elemento current y previous. Con la linea de abajo
// inicializamos previous a un array con 0, si current existe, sumamos current a previous, si no, hacemos push del valor
// y reiniciamos previous a 0. Al final, devolvemos el array con los valores sumados de cada grupo. (si lo he entendido bien al escribirlo)
const calories = dataArray.reduce((p, c) => (c ? p[p.length - 1] += parseInt(c) : p.push(0), p), [0]);

sortDesc(calories);
console.log(calories[0]);
console.log(sumSome(calories, 3));


