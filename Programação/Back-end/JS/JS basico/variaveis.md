"JavaScript Básico"

"1 - Declaração de variáveis"

"var" >>>> Forma antiga, escopo de função, sofre hoisting.

"let" >>> Introduzido no ES6, escopo de bloco, mais seguro.

"const" >>> também do ES6, crian constantes (não podem ser reatribuídas)

var nomeAntigo = "Maria";
let idade = 25;
const PI = 3.1415

" 2 - Escopo"

"Global" >>> acessível em todo o código

"Função" criado dentro de ma função, só existe ali.

"Bloco" >>> criado dentro de {}, só existe dentro desse bloco (com let e const)

if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
}
console.log(z); // funciona
console.log(x); // erro: x não está definido

"3 - Constantes"

"Criado com const"

"Não podem ser reatribuídas, mas objetos e arrays ainda podem ser mutados"

Ex:

const pessoa = { nome: "João" };
pessoa.nome = "Maria"; // permitido
// pessoa = {}; → erro: não pode reatribuir

"4 - Boas práticas"

"Prefira let e const em vez de var"

"Use const sempre que o valor não precisar mudar"

"Nomeie variáveis de forma clara e descritiva"
