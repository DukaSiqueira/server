# CRUD de usuários em NODE

## Visão Geral
Este projeto é uma aplicação back-end que segue o padrão Model-View-Controller (MVC) simplificado. Embora não haja uma camada de visão (View), a estrutura MVC ainda é utilizada para manter a organização e facilitar o desenvolvimento.

Além disso, foi adicionada uma camada de serviço (Service) para abstrair e encapsular as operações relacionadas ao banco de dados, mantendo a lógica de negócios separada das operações de acesso aos dados.

## Requisitos

- Node.js
- Docker

## Configuração

1. Clone o repositório:
```git
git clone https://github.com/DukaSiqueira/server.git
```

2. Acesse o repositório
```cmd
cd server
```

4. Instale as dependências do projeto

```js
npm install
```

4. Inicie o ambiente Docker-compose:
```docker
docker-compose up ou docker-compose up -d para rodar em nodemon
```

## Variáveis de Ambiente

Certifique-se de configurar as seguintes variáveis de ambiente:

- `DB_HOST`: Host do banco de dados.
- `DB_USER`: Usuário do banco de dados.
- `DB_PASSWORD`: Senha do banco de dados.
- `DB_NAME`: Nome do banco de dados.
- `JWT_SECRET`: Chave secreta para geração de tokens JWT.

## Uso

1. Acesse as rotas API:

- `GET /api/users`: Obter todos os usuários. Apenas quando autenticado.
- `GET /api/users/:id`: Obter um usuário específico. Apenas quando autenticado.
- `POST /api/users`: Criar um novo usuário.
- `PUT /api/users/:id`: Atualizar um usuário existente. Apenas quando autenticado.
- `DELETE /api/users/:id`: Excluir um usuário. Apenas quando autenticado.
- `POST /api/login`: Autenticar um usuário e obter um token JWT.

## Componentes Principais
- `Node.js:` O Node.js é a plataforma escolhida para este projeto devido à sua eficiência no desenvolvimento de aplicativos back-end e sua capacidade de lidar com um grande número de conexões simultâneas de forma escalável.

- `Express.js:` Express.js é utilizado como o framework web para Node.js, facilitando a criação de rotas HTTP e o gerenciamento de solicitações e respostas.

- `Sequelize:` Sequelize é um ORM (Object-Relational Mapping) utilizado para mapear objetos JavaScript para modelos de dados relacionais e realizar operações no banco de dados de forma fácil e segura.

- `JSON Web Tokens (JWT):` Tokens JWT são utilizados para autenticação de usuários, oferecendo uma forma segura de transmitir informações de autenticação entre cliente e servidor.

## Estrutura de Diretórios
```lua
|-- src/
|   |-- controllers/
|   |
|   |-- logs/
|   |
|   |-- middlewares/
|   |
|   |-- models/
|   |
|   |-- routes/
|   |
|   |-- services/
|   |
|   |-- db.js
|
|-- index.js
|-- package-lock.json
|-- package.json
```

## Fluxo de Dados
- CRUD de Usuários: As requisições do usuário são roteadas para os controladores correspondentes, que chamam os métodos apropriados na camada de serviço (Service). A camada de serviço manipula as operações do banco de dados, como criar, ler, atualizar e excluir usuários.

- Autenticação JWT: Quando um usuário faz login, um token JWT é gerado e retornado ao cliente. Este token é então incluído nas requisições subsequentes do usuário para autenticação.

## Fluxo de Requisições HTTP

- Roteamento: As rotas HTTP são definidas no arquivo de rotas (src/routes/) e os controladores correspondentes são chamados para lidar com as solicitações.

- Middlewares: Middlewares podem ser utilizados para realizar tarefas comuns, como autenticação, validação de entrada, etc., antes que as requisições alcancem os controladores.

## Banco de Dados

- Modelos de Dados: Os modelos de dados são definidos na pasta src/models, utilizando o Sequelize para representar a estrutura das tabelas no banco de dados.

- Conexão com o Banco de Dados: A conexão com o banco de dados é estabelecida na inicialização da aplicação, utilizando as configurações fornecidas no arquivo index.js e src/db.js.
