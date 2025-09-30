// Requires lodash
// Put | separated input here:
input = input.split('|');
let out = 0;
input.forEach((game) => {
    const gameTokens = game.split(':');
    const gameLine = gameTokens[1].split(';');
    let gameObj = {
        red: 0,
        green: 0,
        blue: 0
    };
    const colors = ['red', 'green', 'blue'];
    gameLine.forEach((line) => {
        const tempLine = line.split(',');
        colors.forEach((color) => {
            const colorArr = _.filter(tempLine, (item) => {
                return item.includes(color);
            });
            if (colorArr.length) {
                const reducedColor = parseInt(colorArr[0].replace(/\D/g, ''));
                gameObj[color] = reducedColor > gameObj[color] ? reducedColor : gameObj[color];
            }
        });
    });
    out += gameObj.red * gameObj.green * gameObj.blue;
});
console.log(out);
