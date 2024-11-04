 # Aplicação de Consumo de APIs

 Esta é uma aplicação React que consome três APIs diferentes para exibir:
 1. Uma lista de filmes da API do OMDB.
 2. Uma lista de receitas da API Recipe Puppy.
 3. Citações aleatórias da API Quotable.

 ## Funcionalidades

 - **Lista de Filmes**: Exibe uma lista de filmes com seus títulos e imagens.
 - **Lista de Receitas**: Mostra uma lista de receitas com nome e imagem.
 - **Citações Aleatórias**: Apresenta citações aleatórias com o autor.
 Inicie a aplicação:
    ```bash
    npm start
    ```
    ou
    ```bash
    yarn start
    ```

 ## Configurações das APIs

 - Para a API do OMDB, use a chave de API: `969f4741`.

 ## Estrutura do Projeto

 A estrutura do projeto é a seguinte:

 ```
 src/
 ├── components/
 │   ├── MovieList.js
 │   ├── Quote.js
 │   └── RecipeList.js
 ├── App.js
 ├── App.css
 └── index.js
 ```

 ## Notas

 - A funcionalidade de citações pode estar temporariamente indisponível se a API estiver desligada. Uma mensagem de erro será exibida na interface do usuário.
 - A aplicação foi desenvolvida utilizando React e utiliza `fetch` para realizar requisições às APIs.

 ## Licença

 Este projeto está licenciado sob a MIT License.
