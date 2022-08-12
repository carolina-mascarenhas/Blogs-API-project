# Projeto Blogs-API 💻

  Neste projeto desenvolvi uma API em `Node.js` utilizando o `sequelize` e um banco de dados para fazer um `CRUD` de posts para um blog. 
  
## Orientações

1. Clone o repositório
  * `git clone git@github.com:carolina-mascarenhas/Blogs-API-project.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd Blogs-API-project`
    
2. Instale as dependências
  * `npm install`

### Rodando no Docker vs Localmente

> Com Docker

Rode os serviços `node` e `db` com o comando `docker-compose up -d --build` na raíz do projeto.

Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

A partir daqui você pode rodar o container `blogs_api` com o comando `docker exec -it blogs_api bash`.

Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
  
> Sem Docker

Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
