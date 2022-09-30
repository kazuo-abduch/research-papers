# Busca por projetos e pesquisas usando CORE API

## Sobre o projeto

O intuito deste projeto é possibilitar a busca por artigos científicos usando a API do portal CORE permitindo o usuário salvar uma lista de artigos escolhidos.

## Guia de uso

O uso do aplicativo é direto e simples. Na tela de inicio a aplicação já fará a solicitação para a API e renderizará os artigos buscados. Apertando os botões `<` e `>` mudará a página para trás e para frente respectivamente trazendo ainda mais artigos.

![Imagem da aplicação](/imagesReadme/Aplication.png)

Ao clicar na `url` você será redirecionado para o site onde o artigo está armazenado para leitura.
Clicando o botão de estrela, ela ficará azul representando o artigo favoritado que pode ser visto separadamente clicando no botão ao lado `FAVORITES`.
Para retorar a página inicial basta clicar no botão `HOME`.

## Tecnologias

### Frontend
React.js
React router
Hooks e Context

Essas tecnologias foram consideradas para componentização da aplicação e para desenvolver uma aplicação de mais de uma página. Pela pouca quantidade de componentes, optei pelo uso de Hooks e Context Api para comunicação entre os componentes


## Antes de começar


### Instalação

Clone o repositório em sua máquina local

```sh
git clone git@github.com:kazuo-abduch/gestao-conteudo.git
```

Instale as dependências para iniciar o projeto em seu navegador e testá-lo usando cypress

```sh
npm install
```

### API CORE

Para que a requisição possa ser feita, é necessário uma chave de autenticação chamada de `REACT_APP_API_KEY=` salva em uma variável de ambiente.
Para que a aplicação funcione localmente, é necessário solicitar a sua chave através do site https://core.ac.uk/services/api

Após obter sua chave, salve-a na variável de ambiente localizada no arquivo `example.env` com a estrutura abaixo e remova a palavra `example` do nome do arquivo para que fique apenas `.env`.

```
REACT_APP_API_KEY="sua chave aqui"
```

>> Não se preocupe, o arquivo está referenciado no `.gitignore` e não será salvo em seu repositório remoto.


## Iniciando a aplicação

### Frontend
Acesse o diretório do frontend e inicie a aplicação react com o comando

```sh
npm start
```

## Iniciando os teste com CYPRESS

```sh
npx cypress open
```

Este comando abrirá um cliente separado do Cypress.

![Imagem do cliente do cypress](/imagesReadme/CYPRESS_client.png)

Escolha a opção E2E Testing e clique no botão `Start E2E Testing in Chrome`

Clique no arquivo `spec.cy.js` para iniciar os testes já implementados neste arquivo

![Imagem do cypress rodando no google chrome](/imagesReadme/CYPRESS_spec.png)
