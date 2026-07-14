"Tipos de dados "

"1 - Primitivos"

"String" >>> texto ("Olá", 'Mundo')

"Number" >>> números inteiros e decimais (42, 3.1415)

"Boolean" >>> valores lógicos (true, false)

"Null" >>> valores intencionalmente vazio

Undefined >>> variável decretada, mas sem valor atribuído

let nome = "João";      // string
let idade = 30;         // number
let ativo = true;       // boolean
let vazio = null;       // null
let indefinido;         // undefined

"2 - Tipos especiais"

"Symbol" >>> identificador único (útil em objetos avançados)
"Bigint" >>> Números inteiros muito grandes, além do limite do Number

Ex:

const id = Symbol("id");
const numeroGrande = 123456789012345678901234567890n; // BigInt

"3 - Tipagem dinâmica"
Em JS, o tipo de uma variável pode mudar durante a execução

Isso torna a linguagem flexível, mas também pode gerar erros se não houver cuidado.

Ex:

let dado = "123";   // string
dado = 123;         // agora é number

"4 - Conversão de tipos"

Explícita >>> usando funções (Number("123")), String((123))
Implícita >>> O JS converte automaticamente em algumas operacões.

console.log("5" + 1);   // "51" (string)
console.log("5" - 1);   // 4   (number)

