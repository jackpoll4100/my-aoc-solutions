// This code works for both part 1 and part 2

// Put input times here:
let times = [];

//Put input distances here:
let distances = [];

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
