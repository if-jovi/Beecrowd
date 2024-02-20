let animais = [{nome : 'fumaça',idade : 3,tipo: "gato"},
            {nome : "tobby", idade: 6 , tipo:"cao"},
            {nome : "laminha", idade: 1 , tipo:"gato"},
            {nome : "nutella", idade: 3 , tipo:"cao"},
            {nome : "luke", idade: 3 , tipo:"cao"},]

let caos = animais.filter(a => a.tipo == "cao")

let resultado = caos.map(a => a.idade = a.idade * 7)

console.log(resultado.reduce((a,b) => a+ b))