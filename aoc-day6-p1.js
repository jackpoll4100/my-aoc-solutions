// Put input times here:
let times = [45, 97, 72, 95];

//Put input distances here:
let distances = [305, 1062, 1110, 1695];

let multiplier = 1;
times.forEach((time, index)=>{
	let recordSum = 0;
	for (let x = 0; x < time; x++){
  	if ((time - x)*x > distances[index]) {
    	recordSum += 1;
    }
  }
  multiplier = multiplier * recordSum;
});

console.log(multiplier);
