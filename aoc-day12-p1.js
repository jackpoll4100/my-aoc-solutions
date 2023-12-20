// Put | separated input here:
let input = ''.split('|');

function genComboArray(arr, length) {
    let out = [];
    arr.forEach((num) => {
        out.push(num + ".");
        out.push(num + '#');
    });
    if (out[0].length === length) {
        return out;
    }
    return genComboArray(out, length);
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

let totalValidPerms = 0;

input.forEach((line) => {
    let permLength = line.replace(/[^\?]/g, "").length
    const combos = genComboArray(['.', '#'], permLength);
    const lineSet = line.split(" ");
    const groupSet = lineSet[1].split(",").map(i => parseInt(i));
    combos.forEach((combo) => {
        let comboInd = 0;
        let outStr = '';
        let groupArr = [];
        let tempArr = [];
        Array.from(lineSet[0]).forEach((el) => {
            let pushChar = ''
            if (el === '?') {
                pushChar = combo[comboInd];
                comboInd += 1;
            } else {
                pushChar = el;
            }
            outStr += pushChar;
            if (pushChar === '.' && tempArr.length) {
                groupArr.push([...tempArr]);
                tempArr = [];
            } else if (pushChar === '#') {
                tempArr.push(pushChar);
            }
        });
        if (tempArr.length) {
            groupArr.push([...tempArr]);
            tempArr = [];
        }
        if (arrayEquals(groupArr.map(i => i.length), groupSet)) {
            totalValidPerms += 1;
        }
    });
});
console.log(totalValidPerms);
