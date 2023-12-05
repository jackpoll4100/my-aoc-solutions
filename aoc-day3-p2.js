// Put csv input here:
let input = '';
// Stop numbers from being at ends of lines
input = input.replaceAll(',', '.,');
input = input.split(',');
let out = 0;
let numberMatrix = [...Array(140)].map(e => Array(141));
input.forEach((line, indexL)=>{
	let split = line.split("");
  let constructedNumber = '';
  let indices = [];
  split.forEach((sChar, indexC)=>{
  	if (isNaN(parseInt(sChar))){
			indices.forEach((ind)=>{
      	numberMatrix[ind[0]][ind[1]] = parseInt(constructedNumber);
      });
      indices = [];
      constructedNumber = '';
    }
    else {
    	constructedNumber += sChar;
      indices.push([indexL, indexC])
    }
  });
});
input.forEach((line, indexL)=>{
	let split = line.split("");
  split.forEach((sChar, indexC)=>{
  	if (sChar === '*'){
    	let negL = indexL - 1 >= 0;
      let negC = indexC - 1 >= 0;
      let posL = indexL + 1 < input.length;
      let posC = indexC + 1 < split.length;
      let adjacencyArr = [... negL ? [... negC ? [numberMatrix[indexL-1][indexC-1]] : [], numberMatrix[indexL-1][indexC], ... posC ? [numberMatrix[indexL-1][indexC+1]] : []] : [],
      										... negC ? [numberMatrix[indexL][indexC-1]] : [], ... posC ? [numberMatrix[indexL][indexC+1]] : [],
                          ... posL ? [... negC ? [numberMatrix[indexL+1][indexC-1]] : [], numberMatrix[indexL+1][indexC], ... posC ? [numberMatrix[indexL+1][indexC+1]] : []] : []];
      let gears = [];
      adjacencyArr.forEach((item, index)=>{
      	if (!isNaN(parseInt(item)) && (!gears.includes(item) || adjacencyArr[index-1] !== item)){
        	gears.push(parseInt(item))
        }
      });
      if (gears.length == 2){
      	out += gears[0]*gears[1];
      }
    }
  });
});
console.log(out);
