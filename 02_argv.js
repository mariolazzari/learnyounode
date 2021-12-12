// line arguments
let sum = 0;
const { argv } = process;

for (let i = 2; i < argv.length; i++) {
  sum += +argv[i];
}

console.log(sum);
