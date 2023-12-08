// Put seed input here:
let seeds = '';
seeds = seeds.split(' ');

let mapMap = {};

// Put seed to soil csv input here:
mapMap.seedTosoil = '';
mapMap.seedTosoil = mapMap.seedTosoil.split(',');

// Put soil to fertilizer csv input here:
mapMap.soilTofertilizer = '';
mapMap.soilTofertilizer = mapMap.soilTofertilizer.split(',');

// Put fertilizer to water csv input here:
mapMap.fertilizerTowater = '';
mapMap.fertilizerTowater = mapMap.fertilizerTowater.split(',');

// Put water to light csv input here:
mapMap.waterTolight = '';
mapMap.waterTolight = mapMap.waterTolight.split(',');

// Put light to temperature csv input here:
mapMap.lightTotemperature = '';
mapMap.lightTotemperature = mapMap.lightTotemperature.split(',');

// Put temperature to humidity csv input here:
mapMap.temperatureTohumidity = '';
mapMap.temperatureTohumidity = mapMap.temperatureTohumidity.split(',');

// Put humidity to location csv input here:
mapMap.humidityTolocation = '';
mapMap.humidityTolocation = mapMap.humidityTolocation.split(',');

// We are traversing the map backwards to find the lowest end value that maps to a valid starting value
let typeMap = {
	"location": "humidity",
  "humidity": "temperature",
  "temperature": "light",
  "light": "water",
  "water": "fertilizer",
  "fertilizer": "soil",
  "soil": "seed"
};

let seedOut = [];
let seedLowest = false;

function checkSolution (sol){

  // Unwrapped this from being a loop for a slight speed bump
  if ((sol >= seeds[0] && sol < (seeds[0] + seeds[1])) ||
      (sol >= seeds[2] && sol < (seeds[2] + seeds[3])) ||
      (sol >= seeds[4] && sol < (seeds[4] + seeds[5])) ||
      (sol >= seeds[6] && sol < (seeds[6] + seeds[7])) ||
      (sol >= seeds[8] && sol < (seeds[8] + seeds[9])) ||
      (sol >= seeds[10] && sol < (seeds[10] + seeds[11])) ||
      (sol >= seeds[12] && sol < (seeds[12] + seeds[13])) ||
      (sol >= seeds[14] && sol < (seeds[14] + seeds[15])) ||
      (sol >= seeds[16] && sol < (seeds[16] + seeds[17])) ||
      (sol >= seeds[18] && sol < (seeds[18] + seeds[19]))){
    return true;
  }

  return false;
}

function runCalc(seedVal, jumping){
  let solCounter = seedVal;
  let oldSol = -1;
  let olderSol = -1;
  let solutionVal = -1;
  let oldSolution = -1;
  while (!checkSolution(solutionVal)){
    oldSolution = solutionVal;
    let currentVal = solCounter;
    let currentType = 'location';
    while (currentType !== 'seed'){
      let nextType = typeMap[currentType];
      let nextVal = -1;
      mapMap[nextType + 'To' + currentType ].forEach((range)=>{
        if (nextVal === -1){
          let rangeVal = range.split(' ');
          let sourceStart = parseInt(rangeVal[0]);
          let destStart = parseInt(rangeVal[1]);
          let rangeSize = parseInt(rangeVal[2]);
          if (currentVal >= sourceStart && currentVal < (sourceStart + rangeSize)){
            nextVal = destStart + (currentVal - sourceStart);
          }
        }
      });
      currentVal = nextVal === -1 ? currentVal : nextVal;
      currentType = nextType;
    }
    solutionVal = currentVal;
    olderSol = oldSol;
    oldSol = solCounter;
    console.log('New Seed Solution: ', solutionVal, 'Location: ', solCounter);
    solCounter ++;

    // To make this solution run substantially faster, this is using sampling.
    // Basically the first run uses skips of 1000 to find the 'general area' of the solution and then
    // a subsequent run checks every value within that range of 1000 to find an exact answer.
    if (jumping && solutionVal - 1 === oldSolution){
      solCounter += 1000;
    }
  }
  return olderSol;
}

let approx = runCalc(0, true);
let answer = runCalc(approx) + 1;
console.log('Answer: ', answer);
