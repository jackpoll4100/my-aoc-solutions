// Put csv input here:
let input = '';
input = input.split(',');
let out = 0;
input.forEach((card)=>{
	let myCard = card.split(':');
  myCard = myCard[1].split('|');
  const correct = myCard[0].split(' ');
  const myNums = myCard[1].split(' ');
  let cardScore = 0;
  myNums.forEach((num)=>{
  	if (!isNaN(parseInt(num))){
    	cardScore = correct.includes(num) && !cardScore ? 1 : correct.includes(num) ? cardScore*2 : cardScore;
    }
  });
  out += cardScore;
});
console.log(out);
