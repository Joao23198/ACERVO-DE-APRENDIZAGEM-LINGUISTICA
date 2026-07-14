"While em JS"

"1 - Sintaxe"

while (condicao) {
  // código a ser repetido
}

"A condição é avaliada ANTES de cada execução"
"Se for falsa logo de início, não roda nenhuma vez"

"2 - Exemplos Básicos"

let contador = 0;

while (contador < 3) {
  console.log("Contador: " + contador);
  contador++;
}
// Saída: 0, 1, 2

"3 - Exemplos com entrada do usuário"

let senha = "";
while (senha !== "1234") {
  // simulando entrada
  senha = "1234"; 
}
console.log("Acesso liberado!");

"4 - Laço infinito"

" Se a condição nunca se tornar falsa, o loop será infinito"

"Ex:"

while (true) {
  console.log("Loop sem fim!");
}

"Sempre garanta que a condição seja falsa em algum momento"

"Boas práticas:"

"Use while quando não souber o número exato de repetições"

"Certifique-se de atualizar variáveis dentro do laço para evitar loops infinitos"

"Prefira for quando o número de repetições for conhecido"
























































































