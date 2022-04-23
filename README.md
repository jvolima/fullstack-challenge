# Desafio Fullstack da Coodesh

## Como executar
### Pré requisitos 
- Node
- Yarn
- Docker

### Passo a passo
- Clonar o repositório
- Acessar a pasta backend e rodar ```yarn``` para instalar as dependências
- Rodar o comando ```docker-compose up -d ``` para subir o banco de dados no container
- Rodar o comando ```yarn prisma migrate dev``` para criar as tabelas
- Executar ```yarn seed``` para popular a database
- Executar o comando ```yarn dev``` para deixar o back rodando 
- Acessar a pasta frontend e rodar ```yarn``` para instalar as dependências
- Executar o comando ```yarn dev``` para deixar o front rodando 
- Pronto, com isso a aplicação estará rodando!

## Backend
### Tecnologias
- Node
- Express
- Prisma
- Typescript
- Docker
- PostgreSQL

### Requisitos
- [x] (GET)/:  Retornar um Status: 200 e uma Mensagem "Fullstack Challenge 2021 🏅 - Space Flight News"

- [x] (GET)/articles/:   Listar todos os artigos da base de dados, utilizar o sistema de paginação na resposta do endpoint para não sobrecarregar a REQUEST

- [x] (GET)/articles/{id}: Obter a informação somente de um artigo

- [x] CRON para adicionar novos artigos todo dia às 9 horas da manhã.

### Milha extra
- [] (POST)/articles/: Adicionar um novo artigo

- [] (PUT)/articles/{id}: Atualizar um artigo baseado no id

- [x] (DELETE)/articles/{id}: Remover um artigo baseado no id

## Frontend
### Tecnologias
- React
- Next
- Typescript
- Styled components
- Axios

### Requisitos 
- [x] Desenvolver a funcionalidade para ordenar os artigos por data, da mais antiga para a mais nova e da mais nova para a mais antiga.
- [x] Desenvolver a funcionalidade para ordenar os artigos por data, da mais antiga para a mais nova e da mais nova para a mais antiga.
- [] Desenvolver a funcionalidade do buscador para que seja possível listar artigos que contenham as palavras no título.

