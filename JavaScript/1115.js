let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

while (lines.length) {
    let [X, Y] = lines.shift().trim().split(' ').map((x) => parseInt(x));
    
    if(X== 0 || Y == 0) break
    if(X > 0 && Y > 0){console.log("primeiro")}
    if(X > 0 && Y < 0){console.log("quarto")}
    if(X < 0 && Y < 0){console.log("terceiro")}
    if(X < 0 && Y > 0){console.log("segundo")}
}
