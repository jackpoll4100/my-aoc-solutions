// Put csv input here:
let input = '';
// Account for overlaps
let digits = [[18, 'oneight'],[58,'fiveight'],[98,'nineight'],[38,'threeight'],[21,'twone'],[79,'sevenine'],[82,'eightwo'],[83,'eighthree'],[1,'one'],[2,'two'],[3,'three'],[4,'four'],[5,'five'],[6,'six'],[7,'seven'],[8,'eight'],[9,'nine']];
digits.forEach((dig)=>{ 
  input = input.replaceAll(dig[1], dig[0]);
});
input = input.split(',');
let sum = 0;
input.forEach((ind)=>{ 
	const n = ind.replace(/\D/g, '');
	sum += parseInt(`${n[0]}${n[n.length-1]}`); 
});
console.log(sum);
