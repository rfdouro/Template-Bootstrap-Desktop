# Template-Bootstrap-Desktop
Template de projeto Netbeans para projeto HTML usando Bootstrap 3 para Desktop

Possui esquema de navegação com carregamento em div
- Duas funções podem ser executadas (uma utiliza jquery)

Exemplo:

< a href="paginas/home.html" data-div="divConteudo" class="navbar-brand">LOGO< /a>

--> Carrega o conteúdo de "paginas/home.html" no "divConteudo"

Atenção:
No final da página deve haver a chamada para a função de customização de tags para navegação

< script>
 customizaNavigacaoJQuery();
< /script>
