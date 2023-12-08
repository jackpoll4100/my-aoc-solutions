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

let typeMap = {
  "seed": "soil",
  "soil": "fertilizer",
  "fertilizer": "water",
  "water": "light",
  "light": "temperature",
  "temperature": "humidity",
  "humidity": "location"
};

let seedOut = [];
let seedLowest = false;

seeds.forEach((seed)=>{
	let currentVal = parseInt(seed);
  let currentType = 'seed';
  while (currentType !== 'location'){
  	let nextType = typeMap[currentType];
    let nextVal = -1;
  	mapMap[currentType + 'To' + nextType ].forEach((range)=>{
    	if (nextVal === -1){
      	let rangeVal = range.split(' ');
        let sourceStart = parseInt(rangeVal[1]);
        let destStart = parseInt(rangeVal[0]);
        let rangeSize = parseInt(rangeVal[2]);
        if (currentVal >= sourceStart && currentVal < (sourceStart + rangeSize)){
        	nextVal = destStart + (currentVal - sourceStart);
        }
      }
    });
    currentVal = nextVal === -1 ? currentVal : nextVal;
    currentType = nextType;
  }
  seedOut.push(currentVal);
  if ((!seedLowest && seedLowest !== 0) || currentVal < seedLowest) {
  	seedLowest = currentVal;
  }
});

console.log(seedOut);
console.log(seedLowest);
