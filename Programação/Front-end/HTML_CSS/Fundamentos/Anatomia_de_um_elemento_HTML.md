Anatomia de um elemento HTML:

Partes principais:

Tags:
    Abertura:   <>;
    Conteudo:    O que esta no miolo das tags de Abertura e de Fechamento
    Fechamento: </>;
Tags de Abertura indica-se o início do elemento enquanto as tags de Fechamento, indicam o oposto, o fim do elemento.

exemplo de estrutura

<p>
Meu primeiro parágrafo
</p>


Elementos com atributos:
Além das partes mais básicas, alguns elementos podem ter atributos que adicionam algumas informações extras.
<img src="foto.jpg" alt="minha.foto"

Tipos de elementos do HTML:

Elemento de bloco:

Caracterísitcas dos elementos de bloco:
Ocupam a largura total, mesmo sendo pequeno o conteúdo;

Ha uma quebra de linha automaticamente;

São usados na estruturação do Layout;

exemplos comuns:
<div>         >>> Contêiner genérico para agrupar conteúdo
<p>           >>> Paragráfo de texto
<h1> a <h6>   >>> Títulos e sub-títulos
<section>     >>> Seção temática
<article>     >>> Artigo ou conteúdo independente
<header>      >>> Cabeçalho da página ou seção
<footer>      >>> Rodapé da página ou seção
<nav>         >>> Área de navegação

<div>
    <h1>Título principal</h1>
    <p> Este é um parágrafo dentro de um bloco</p>
</div>

Elemento in-line:

Características:
1 - Ocupam apenas o espaço necessário
2 - Não iniciam nova linha: Ficam dentro do fluxo do texto
3 - usados pra destaque ou inserção de links, imagens e estilos.

Ex:
<span> Conteiner genérico apra aplicar estilos em parte do texto
<a> Cria links
<img> Insere imagens dentro do texto
<strong> Destaca em negrito
<em> Destaca em itálico
<label> Usado em formulários

<p>Este é um <strong>texto importante <strong> dentro de um parágrafo</p>
<a href="https:// exemplo.com"> Visite meu site </a>
<img src="foto.png" alt="minha foto">

Elemento vazio:

Características: 

Não tem conteúdo >>> não existe texto ou outros elementos dentro deles.
Não precisam de tags de fechamento >>> São esctitos apenas com a tag de abertura 
Dependem de atributos >>> Definem comportamentos ou informações adicionais

Exemplos de elementos vazios!

1 - <img src="foto.png" alt="minha foto"> - Insere uma imagem

2 - Quebra de linha  (texto antes) <br> Quebra de linha (texto depois)

3 - <hr> Linha horizontal de separação

4 - <input type"text" placeholder="Digite seu nome"> Campo de formulário

5 - <meta charset="UTG-8"> metadados no <head>

6 - <link rel="stylesheet" href="style.css"> Conecta diretamente arquivos externos (CSS, JS, ícones...)
