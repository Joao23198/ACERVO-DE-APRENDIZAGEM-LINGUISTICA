TABELAS EM HTML

<table> Define a tabela
<tr>    Cria uma linha
<td>    Cria uma célula de dados
<th>    Celula de cabeçalho (negrito e centralizado por padrão)

<table border="1">
  <tr>
    <th>Nome</th>
    <th>Idade</th>
  </tr>
  <tr>
    <td>João</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Maria</td>
    <td>30</td>
  </tr>
</table>

Elementos adicionais;

<capcion> Titulo da tabela
<thead>   Agrupa cabeçalhos
<tbody>   Agrupa corpos de tabela
<tfoot>   Agrupa corpo do cabeçalho

<table>
  <caption>Lista de Alunos</caption>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Idade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ana</td>
      <td>22</td>
    </tr>
    <tr>
      <td>Carlos</td>
      <td>28</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total: 2 alunos</td>
    </tr>
  </tfoot>
</table>















































