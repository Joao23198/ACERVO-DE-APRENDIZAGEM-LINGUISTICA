"For"

"1 - Sintaxe"

for (inicializacao; condicao; incremento){
    //codigo a ser repetido
}

"Inicializacao = Define a variável de controle"

"condicao = enquanto for verdadeira, o laço continua"

"incremento = Altera a variável de controle a cada repetição"

"2 - Exemplos básicos"

for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
}
// Saída: 0, 1, 2, 3, 4

"3 - Exemplo com array"

let frutas = ["maçã", "banana", "laranja"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
// Saída: maçã, banana, laranja

"4 - for aninhado"

"Um for dentro de outro, útil para percorrer matrizes ou criar combinações "

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}


"5 - Boas práticas"

"Use for quando souber o número exato de repetições"

"Prefira métodos de array(forEach, map, filter) em casos de manipulação de listas"

"Evite laços infinitos - sempre garanta que a condição seja falsa em algum momento"