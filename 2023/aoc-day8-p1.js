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

let stepCounter = 0;
let input = 'AAA';
let directionInd = 0;
while (input !== 'ZZZ') {
    stepCounter++;
    input = navMap[input][directions[directionInd]];
    directionInd = directionInd === directions.length - 1 ? 0 : directionInd + 1;
}

console.log(stepCounter);
