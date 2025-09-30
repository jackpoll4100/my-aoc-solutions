// Requires math.js
const math = require('mathjs');

// Put directional input here:
let directions = ''.split('');

// Put | separated map input here:
let map = ''.split('|');

let navMap = {};
map.forEach((node) => {
    let navTokens = node.split(' = ');
    let lrTokens = navTokens[1].replace('(', '').replace(')', '').split(', ');
    navMap[navTokens[0]] = {
        L: lrTokens[0],
        R: lrTokens[1]
    };
});

const inputs = Object.keys(navMap).filter((key) => {
    return key[2] === 'A';
});
let stepBox = [];
inputs.forEach((input) => {
    let stepCounter = 0;
    let directionInd = 0;
    while (input[2] !== 'Z') {
        stepCounter++;
        input = navMap[input][directions[directionInd]];
        directionInd = directionInd === directions.length - 1 ? 0 : directionInd + 1;
    }
    stepBox.push(stepCounter)
});

console.log(math.lcm(...stepBox));
