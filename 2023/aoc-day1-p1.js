// Put csv input here:
let input = '';
input = input.split(',');
let sum = 0;
input.forEach((ind) => {
    const n = ind.replace(/\D/g, '');
    sum += parseInt(`${n[0]}${n[n.length-1]}`);
});
console.log(sum);
