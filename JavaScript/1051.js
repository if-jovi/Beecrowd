let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let renda = +lines.shift()
let devido = 0.00;

if (renda > 4500.00) {
    devido += (renda - 4500.00) * 0.28;
    renda = 4500.00;
}
if (renda > 3000.00) {
    devido += (renda - 3000.00) * 0.18;
    renda = 3000.00;
}
if (renda > 2000.00) {
    devido += (renda - 2000.00) * 0.08;
}

if (devido === 0) {
    console.log("Isento");
} else {
    console.log(`R$ ${devido.toFixed(2)}`);
}