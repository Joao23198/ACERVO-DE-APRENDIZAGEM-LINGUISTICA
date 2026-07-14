"Do...While em JS"

"Sintaxe"

do {
  // código a ser repetido
} while (condicao);

"Exemplo básico"

let numero = 0;

do {
  console.log("Número: " + numero);
  numero++;
} while (numero < 3);

// Saída: 0, 1, 2

"Diferença pra while"

"Ideal quando precisamos garantir pelo menos uma execução"
"Ex: Pedir uma entrada de usuário até ser válida"


let contador = 5;

while (contador < 5) {
  console.log("While: " + contador); // não executa
}

do {
  console.log("Do...While: " + contador); // executa uma vez
} while (contador < 5);

"Uso prático"

let senha;
do {
  senha = "1234"; // simulação
} while (senha !== "1234");

console.log("Acesso liberado!");
































































