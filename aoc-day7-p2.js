// Requires lodash
// Put csv input here:
let input = '';
input = input.split(',');

function cardTranslate(card) {
    if (!isNaN(parseInt(card))) {
        return parseInt(card);
    }
    let map = {
        J: 0,
        T: 10,
        Q: 11,
        K: 12,
        A: 13
    };
    return map[card];
}

let sorted = [];
input = input.map((hand) => {
    const handArr = hand.split(' ');
    let hB = _.groupBy(handArr[0].split(''), (item) => {
        return item;
    });
    let uniq = Object.keys(hB);
    if (uniq.includes('J') && uniq.length !== 1) {
        let highest = -1;
        let slot = uniq[0];
        for (let x = 0; x < uniq.length; x++) {
            if (hB[uniq[x]].length > highest && uniq[x] !== 'J') {
                highest = hB[uniq[x]].length;
                slot = uniq[x];
            }
        }
        hB[slot] = hB[slot].concat(hB.J);
        delete hB.J
        uniq = Object.keys(hB);
    }
    rank = uniq.length === 5 ? 7 : uniq.length === 4 ? 6 : uniq.length === 1 ? 1 :
        uniq.length === 3 && (hB[uniq[0]].length === 2 || hB[uniq[1]].length === 2) ? 5 : uniq.length === 3 ? 4 :
        uniq.length === 2 && (hB[uniq[0]].length > 1 && hB[uniq[1]].length > 1) ? 3 : 2;
    return {
        hand: handArr[0].split('').map((i) => {
            return cardTranslate(i);
        }),
        bid: parseInt(handArr[1]),
        rank: rank
    };
}).sort((a, b) => {
    if (a.rank > b.rank) {
        return -1;
    }
    if (a.rank < b.rank) {
        return 1;
    }
    if (a.rank === b.rank) {
        for (let x = 0; x < 5; x++) {
            if (a.hand[x] < b.hand[x]) {
                return -1;
            }
            if (a.hand[x] > b.hand[x]) {
                return 1;
            }
        }
    }
    return 0;
});

let output = 0;
input.forEach((hand, index) => {
    output += (index + 1) * hand.bid;
});
console.log(output);
