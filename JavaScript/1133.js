let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

// let X = +lines.shift()
// let Y = +lines.shift()

// if(X< Y){
//     let primeiro = Y
//     for(let i = primeiro;i<X;++i){
//     if(i%5 == 2){console.log(i)}
//     if(i%5 == 3){console.log(i)}
// }
// }
// if(X>Y){
//     for(let i = X;i<Y;++i){
//         if(i%5 == 2){console.log(i)}
//         if(i%5 == 3){console.log(i)}
//     }
// }

let x, y, l1, arr1 = [], width;
l1 = input.split("\n")

x = parseInt(l1.shift());
y = parseInt(l1.shift());

if(x < y){
    for (i=x += 1; x<y; x++){
        if (x%5==2||x%5===3){
            arr1.push(x);
        }
    }
}
else if (x > y){
    for (i = x -= 1; x>y; x--){
        if (x%5===2||x%5===3){
            arr1.push(x)
            arr1.sort((a, b) => a -b);
        }
    }
}
width = arr1.length;

for (j = 0; j<width;j++){
    console.log(arr1.shift())
}