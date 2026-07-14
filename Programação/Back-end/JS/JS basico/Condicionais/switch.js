"Switch em JS"


"Sintaxe:"
switch (expressao) {
    case valor_1:
        // codigo
        break;
    case valor_2:
        // codigo
        break
    default:
        //codigo
}

"Exemplos básicos:"
let cor = "azul";

switch (cor) {
  case "vermelho":
    console.log("A cor é vermelho");
    break;
  case "azul":
    console.log("A cor é azul");
    break;
  default:
    console.log("Cor não reconhecida");
}

"Exemplos com número:"

let dia = 3;

switch (dia) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  default:
    console.log("Dia inválido");
}

"Boas práticas"

"Sempre use break para evitar que os casos; 'caiam' uns nos outros"

"Use default para tratar valores inesperados"

"Prefira switch quando há muitas condições sobre o mesmo valor"
