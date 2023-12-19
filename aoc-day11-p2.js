// Put csv input here:
let input = ''.split(',');

let exCols = [];
for (let x = 0; x < input[0].length; x++) {
    let expandable = true;
    for (let y = 0; y < input.length; y++) {
        if (input[y][x] === '#') {
            expandable = false;
        }
    }
    if (expandable) {
        exCols.push(x);
    }
}

let galArr = [];
let galIndices = [];
for (let x = 0; x < input.length; x++) {
    let row = [];
    let expando = true;
    for (let y = 0; y < input[x].length; y++) {
        row.push(input[x][y]);
        if (input[x][y] === '#') {
            expando = false;
            galIndices.push([galArr.length, row.length - 1]);
        }
    }
    galArr.push(row);
}

let out = 0;
let usedPoints = [];
galIndices.forEach((coord) => {
    galIndices.forEach((point2) => {
        if (!usedPoints.includes(point2) && coord !== point2) {
            let checkSet = [
                [coord[0] - 1, coord[1]],
                [coord[0] + 1, coord[1]],
                [coord[0], coord[1] - 1],
                [coord[0], coord[1] + 1]
            ];
            let length = 0;
            let next = [];
            let continueLoop = true;
            while (continueLoop) {
                let index = -1;
                let currDistance = 0;
                checkSet.forEach((item, ind) => {
                    let distance = (item[0] - point2[0]) * (item[0] - point2[0]) + (item[1] - point2[1]) * (item[1] - point2[1]);
                    if (index === -1 || distance < currDistance) {
                        currDistance = distance;
                        index = ind;
                    }
                });
                next = checkSet[index];
                checkSet = [
                    [next[0] - 1, next[1]],
                    [next[0] + 1, next[1]],
                    [next[0], next[1] - 1],
                    [next[0], next[1] + 1]
                ];
                length += 1;
                let matches = checkSet.filter((set) => set[0] === point2[0] && set[1] === point2[1]);
                continueLoop = !matches.length;
            }
            out += length + 1;
        }
    });
    usedPoints.push(coord);
});

galArr = [];
galIndices = [];
for (let x = 0; x < input.length; x++) {
    let row = [];
    let expando = true;
    for (let y = 0; y < input[x].length; y++) {
        row.push(input[x][y]);
        if (exCols.includes(y)) {
            row.push(input[x][y]);
        }
        if (input[x][y] === '#') {
            expando = false;
            galIndices.push([galArr.length, row.length - 1]);
        }
    }
    galArr.push(row);
    if (expando) {
        galArr.push(row);
    }
}

let preExpand = out;
out = 0;
usedPoints = [];
galIndices.forEach((coord) => {
    galIndices.forEach((point2) => {
        if (!usedPoints.includes(point2) && coord !== point2) {
            let checkSet = [
                [coord[0] - 1, coord[1]],
                [coord[0] + 1, coord[1]],
                [coord[0], coord[1] - 1],
                [coord[0], coord[1] + 1]
            ];
            let length = 0;
            let next = [];
            let continueLoop = true;
            while (continueLoop) {
                let index = -1;
                let currDistance = 0;
                checkSet.forEach((item, ind) => {
                    let distance = (item[0] - point2[0]) * (item[0] - point2[0]) + (item[1] - point2[1]) * (item[1] - point2[1]);
                    if (index === -1 || distance < currDistance) {
                        currDistance = distance;
                        index = ind;
                    }
                });
                next = checkSet[index];
                checkSet = [
                    [next[0] - 1, next[1]],
                    [next[0] + 1, next[1]],
                    [next[0], next[1] - 1],
                    [next[0], next[1] + 1]
                ];
                length += 1;
                let matches = checkSet.filter((set) => set[0] === point2[0] && set[1] === point2[1]);
                continueLoop = !matches.length;
            }
            out += length + 1;
        }
    });
    usedPoints.push(coord);
});

// Expanding increases by a fixed amount, so we can just find the paths once, then after one expansion,
// and then multiply by the remaining number of expansions:

console.log(preExpand + 999999*(out - preExpand));
