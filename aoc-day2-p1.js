// Put | separated input here:
let input = '';
input = input.split('|');
let out = 0;
function isValid (item){
	const itemNumber = parseInt(item.replace(/\D/g, ''));
	if (item.includes('red') && itemNumber > 12){
  	return false;
  }
  if (item.includes('green') && itemNumber > 13){
  	return false;
  }
  if (item.includes('blue') && itemNumber > 14){
  	return false;
  }
  return true;
}
input.forEach((game)=>{
	const gameTokens = game.split(':');
  const gameNum = parseInt(gameTokens[0].replace(/\D/g, ''));
  const gameLine = gameTokens[1].split(';')
  let bad = false;
  gameLine.forEach((line)=>{
  	if (bad){ return; }
  	const tempLine = line.split(',');
    tempLine.forEach((token)=>{
    	if (!isValid(token)){
      	bad = true;
      }
    });
  });
  out += bad ? 0 : gameNum;
});
console.log(out);
