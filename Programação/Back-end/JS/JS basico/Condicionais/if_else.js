"Condicionais: If_else_else if"


"1 - If"

"Executa um bloco de código se a condicão for verdadeira"

"Ex:"

let idade = 20;

if (idade > 18) {
    console.log("Maior de idade")
}


"2 - Else"

"O else é usado para tratar o caso em que a condição não é verdadeira"

let idade = 15;

if (idade >= 18){
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
}

"3 - Else if"

"Permite testar múltiplas condições em sequência"

let nota = 6;

if(nota >= 7){
    console.log("Aprovado")
} else if (nota >= 5) {
    console.log("Recuperação")
} else{
    console.log("Reprovado")
}

"4 - Boas práticas"

"Use === em vez de ==, para evitar coerção de tipos inesperada"

"Evite muitos else if seguidos -- nesse caso, considere switch"

"Mantenha o código legível e organizado"