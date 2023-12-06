// Put csv input here:
let input = '';
input = input.split(',');
let multArr = new Array(223).fill(1);
let out = 0;
input.forEach((card, index)=>{
	let myCard = card.split(':');
  myCard = myCard[1].split('|');
  const correct = myCard[0].split(' ');
  const myNums = myCard[1].split(' ');
  let cardScore = 0;
  myNums.forEach((num)=>{
  	if (!isNaN(parseInt(num))){
    	cardScore += correct.includes(num) ? 1 : 0;
    }
  });
  for (let x = 0; x < cardScore; x++){
  	multArr[index+x+1] += multArr[index];
  }
  out += (multArr[index]*cardScore)+1;
});
console.log(out);
