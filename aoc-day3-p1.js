// Put csv input here:
let input = '';
// Stop numbers from being at ends of lines
input = input.replaceAll(',', '.,');
input = input.split(',');
let out = 0;
input.forEach((line, indexL)=>{
	let split = line.split("");
  let constructedNumber = '';
  let valid = false;
  split.forEach((sChar, indexC)=>{
  	if (isNaN(parseInt(sChar))){
    	out += valid ? parseInt(constructedNumber) : 0;
      valid = false;
      constructedNumber = '';
    }
    else {
    	constructedNumber += sChar;
      let negL = indexL - 1 >= 0;
      let negC = indexC - 1 >= 0;
      let posL = indexL + 1 < input.length;
      let posC = indexC + 1 < split.length;
      let adjacencyArr = [... negL ? [... negC ? [input[indexL-1][indexC-1]] : [], input[indexL-1][indexC], ... posC ? [input[indexL-1][indexC+1]] : []] : [],
      										... negC ? [input[indexL][indexC-1]] : [], ... posC ? [input[indexL][indexC+1]] : [],
                          ... posL ? [... negC ? [input[indexL+1][indexC-1]] : [], input[indexL+1][indexC], ... posC ? [input[indexL+1][indexC+1]] : []] : []];
      if (!valid){
      	adjacencyArr.forEach((adjChar)=>{
          valid = adjChar !== '.' && isNaN(parseInt(adjChar)) ? true : valid;
        });
      }
    }
  });
});
console.log(out);
