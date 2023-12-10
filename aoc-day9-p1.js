// Put csv input here:
let input = ''.split(',');

let chain = [];

function extrapolate(vals) {
    let returnVal = true;
    vals.forEach((val) => {
        if (val) {
            returnVal = false;
        }
    });
    if (returnVal) {
        return;
    }
    let extrapolated = [];
    for (let x = 0; x < vals.length - 1; x++) {
        extrapolated.push(vals[x + 1] - vals[x]);
    }
    chain.push(extrapolated[extrapolated.length - 1]);
    extrapolate(extrapolated);
}

let out = 0;
input.forEach((line) => {
    line = line.split(' ').map((val) => {
        return parseInt(val)
    });
    chain = [line[line.length - 1]];
    extrapolate(line);
    let adder = 0;
    chain.forEach((link) => {
        adder += link;
    })
    out += adder;
});

console.log(out);
