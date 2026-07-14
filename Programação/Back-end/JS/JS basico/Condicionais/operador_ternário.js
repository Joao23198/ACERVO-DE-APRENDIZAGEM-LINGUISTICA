"Operador ternário"

"1 - Sintaxe"

condicao ? valorSeVerdadeiro : valorSeFalso

"2 - Exemplo básico"

let idade = 18;
let status = idade >= 18 ? "Adulto" : "Menor";
console.log(status); // Adulto

"3 - Exemplo com múltiplas condições "

let nota = 6;
let resultado = nota >= 7 ? "Aprovado" : nota >= 5 ? "Recuperação" : "Reprovado";
console.log(resultado); // Recuperação

"4 - Uso prático;"

"Ideal para atribuições rápidas"

" Muito usado em renderização condicional em frameworks como React"

"Evite ternários muito complexos, pois podem prejudicar a legibilidade"
