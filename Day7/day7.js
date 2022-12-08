const { readInput, splitLines, sum} = require('../helper.js');

// get path from parameters
const file = process.argv[2] ? process.argv[2] : 'day7/input.txt';
const rawinput = splitLines(readInput(file));
const fileSystem = {};
let pwd = "";

function createDir(name){
    name != '..' ? pwd += name + '/' : goBack();
    name != '..' ? fileSystem[pwd] = {} : null;
}
function goBack(){
    pwd = pwd.slice(0, pwd.lastIndexOf('/')-1);
}
function createFile(name){
    const [size, file] = name.split(' ');

    fileSystem[pwd][file] = size;
}
function sumSize(dir){
    let sum = 0;
    for (const file in fileSystem[dir]) {
        fileSystem[dir][file] === 'dir' ? sum += sumSize( dir + file + '/') : sum += parseInt(fileSystem[dir][file])
    }
    return sum;
}

rawinput.forEach(line => {
    line[0] === '$' && line[2]==='c' ? createDir(line.slice(5)) :
    !(isNaN(line[0])) || line[0]==='d' ? createFile(line): null
});

resultado = [];
for (const dir in fileSystem) {
    const size = sumSize(dir)
    size < 100000 ? resultado.push(size) : null;
}

console.log(sum(resultado));
