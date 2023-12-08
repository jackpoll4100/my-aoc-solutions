// Requires lodash
// Put csv input here:
let input = '';
input = input.split(',');

function cardTranslate(card){
	if (!isNaN(parseInt(card))){
  	return parseInt(card);
  }
  let map = {
  	T: 10,
  	J: 11,
    Q: 12,
    K: 13,
    A: 14
  };
  return map[card];
}

let sorted = [];
input = input.map((hand)=>{
	const handArr = hand.split(' ');
  const hB = _.groupBy(handArr[0].split(''), (item)=>{return item;});
  const uniq = Object.keys(hB);
  rank = uniq.length === 5 ? 7 : uniq.length === 4 ? 6 : uniq.length === 1 ? 1 : 
  	uniq.length === 3 && (hB[uniq[0]].length === 2 || hB[uniq[1]].length === 2) ? 5 : uniq.length === 3 ? 4 : 
    uniq.length === 2 && (hB[uniq[0]].length > 1 && hB[uniq[1]].length > 1) ? 3 : 2;
  return {
  	hand: handArr[0].split('').map((i)=>{ return cardTranslate(i); }),
    bid: parseInt(handArr[1]),
    rank: rank
  };
}).sort((a,b)=>{
	if (a.rank > b.rank) {
    return -1;
  }
  if (a.rank < b.rank) {
    return 1;
  }
  if (a.rank === b.rank) {
  	for (let x = 0; x < 5; x++){
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
input.forEach((hand, index)=>{ output += (index+1)*hand.bid; });
console.log(output);
