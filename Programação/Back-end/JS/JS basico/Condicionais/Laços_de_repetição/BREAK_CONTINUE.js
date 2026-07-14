"Break e continue em JS "

"Break"

"Interrompe o laço imediatamente, mesmo que a condição ainda seja verdadeira"

"Usado quando não faz sentido continuar a repetição"

"Ex:"

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // encerra o loop quando i = 3
  }
  console.log(i);
}
// Saída: 0, 1, 2

"Continue"

"Pula a execução atual e vai direto para a próxima iteração"

"Usado quando queremos ignorar certos casos sem encerrar o laço"

"Ex:"
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // pula o número 2
  }
  console.log(i);
}
// Saída: 0, 1, 3, 4

"Uso combinado"

for (let i = 0; i < 6; i++) {
  if (i === 2) continue; // ignora o 2
  if (i === 5) break;    // encerra no 5
  console.log(i);
}
// Saída: 0, 1, 3, 4
