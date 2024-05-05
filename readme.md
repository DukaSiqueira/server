# CRUD de usuários em NODE

Este é um projeto desenvolvido em Node.js utilizando Express como controlador de rotas, Sequelize como ORM e jsonwebtoken para geração de tokens JWT. O projeto é executado em um ambiente Docker-compose.

## Requisitos

- Node.js
- Docker

## Configuração

1. Clone o repositório:
```git
    git clone https://github.com/DukaSiqueira/server.git
```

2. Instale as dependências do projeto

```js
    npm install
```

3. Inicie o ambiente Docker-compose:
```docker
    docker-compose up ou docker-compose up -d para rodar em nodemon
```

## Uso

1. Acesse as rotas API:

- `GET /api/users`: Obter todos os usuários. Apenas quando autenticado.
- `GET /api/users/:id`: Obter um usuário específico. Apenas quando autenticado.
- `POST /api/users`: Criar um novo usuário.
- `PUT /api/users/:id`: Atualizar um usuário existente. Apenas quando autenticado.
- `DELETE /api/users/:id`: Excluir um usuário. Apenas quando autenticado.
- `POST /api/login`: Autenticar um usuário e obter um token JWT.

## Variáveis de Ambiente

Certifique-se de configurar as seguintes variáveis de ambiente:

- `DB_HOST`: Host do banco de dados.
- `DB_USER`: Usuário do banco de dados.
- `DB_PASSWORD`: Senha do banco de dados.
- `DB_NAME`: Nome do banco de dados.
- `JWT_SECRET`: Chave secreta para geração de tokens JWT.