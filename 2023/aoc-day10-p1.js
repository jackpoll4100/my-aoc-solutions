// Put csv input here:
let grid = ''.split(',');

let startCoords = [];
for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
        if (grid[x][y] === 'S') {
            startCoords = [x, y];
        }
    }
}

let routeLength = 0;
let checkedCoords = [];

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

// Replace the character on the following line with whatever your starting character should be. You should be able to intuit what it is from the surrounding characters.
grid[startCoords[0]] = grid[startCoords[0]].replaceAt(startCoords[1], '-');

function traceLoop(coord) {

    checkedCoords.push(`${coord}`);
    routeLength++;
    let checkSet = [
        [coord[0] - 1, coord[1]],
        [coord[0] + 1, coord[1]],
        [coord[0], coord[1] - 1],
        [coord[0], coord[1] + 1]
    ];
    let foundAdjacent = false;
    let checkIndex = 0;
    let pipe = [];
    while (!foundAdjacent) {
        if (!foundAdjacent && checkIndex === checkSet.length) {
            return;
        }
        pipe = checkSet[checkIndex];
        if (grid[pipe[0]] && grid[pipe[0]][pipe[1]]) {
            foundAdjacent = !checkedCoords.includes(`${pipe}`) && (
                (grid[coord[0]][coord[1]] === '-' && checkIndex === 2 && ['F', '-', 'L'].includes(grid[pipe[0]][pipe[1]])) ||
                (grid[coord[0]][coord[1]] === '-' && checkIndex === 3 && ['-', '7', 'J'].includes(grid[pipe[0]][pipe[1]])) ||
                (grid[coord[0]][coord[1]] === '|' && checkIndex === 0 && ['F', '7', '|'].includes(grid[pipe[0]][pipe[1]])) ||
                (grid[coord[0]][coord[1]] === '|' && checkIndex === 1 && ['L', 'J', '|'].includes(grid[pipe[0]][pipe[1]])) ||
                (grid[coord[0]][coord[1]] === 'F' && checkIndex === 3 && ['-', '7', 'J'].includes(grid[pipe[0]][pipe[1]])) ||
                (grid[coord[0]][coord[1]] === 'F' && checkIndex === 1 && ['|', 'L', 'J'].includes(grid[pipe[0]][pipe[1]])) ||
                (grid[coord[0]][coord[1]] === 'L' && checkIndex === 3 && ['-', '7', 'J'].includes(grid[pipe[0]][pipe[1]])) ||
                (grid[coord[0]][coord[1]] === 'L' && checkIndex === 0 && ['|', '7', 'F'].includes(grid[pipe[0]][pipe[1]])) ||
                (grid[coord[0]][coord[1]] === '7' && checkIndex === 2 && ['-', 'L', 'F'].includes(grid[pipe[0]][pipe[1]])) ||
                (grid[coord[0]][coord[1]] === '7' && checkIndex === 1 && ['|', 'L', 'J'].includes(grid[pipe[0]][pipe[1]])) ||
                (grid[coord[0]][coord[1]] === 'J' && checkIndex === 2 && ['-', 'L', 'F'].includes(grid[pipe[0]][pipe[1]])) ||
                (grid[coord[0]][coord[1]] === 'J' && checkIndex === 0 && ['|', 'F', '7'].includes(grid[pipe[0]][pipe[1]])));
        }
        checkIndex++;
    }

    return pipe;
}

while (startCoords) {
    startCoords = traceLoop(startCoords);
}
console.log(routeLength / 2);
