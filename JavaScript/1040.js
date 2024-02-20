let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)


let [n1,n2,n3,n4] = pegarValores(lines.shift())


media = (((n1*2)+(n2*3)+(n3*4)+(n4*1))/10)

if (media >= 7.0)
    console.log(`Media: ${(media).toFixed(1)}\nAluno aprovado.`)
  
    if (media < 5.0)
    console.log(`Media: ${(media).toFixed(1)}\nAluno reprovado.`)
    
    if (media >= 5.0  &&  media < 6.9) {
      console.log(`Media: ${(media).toFixed(1)}\nAluno em exame.`)
      let exame = +lines.shift()
      mediaf = ((media+exame)/2)
      
      if (mediaf >= 5.0)
        console.log(`Nota do exame: ${exame.toFixed(1)}\nAluno aprovado.\nMedia final: ${(mediaf).toFixed(1)}`)
       
        if (mediaf < 5.0) 
        console.log(`Nota do exame: ${exame.toFixed(1)}\nAluno reprovado.\nMedia final: ${(mediaf).toFixed(1)}`)
    }
   
    