const users = require("./src/routes/user")
const { signUp } = require('./src/controllers/authenticate')
const { validateLogin } = require('./src/middlewares/validation')
const db = require('./src/db')
const requestLogger = require('./src/middlewares/requestLogger')


const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(requestLogger)

app.use('/users', users)
app.use('/login', validateLogin, signUp)

// Sincroniza a aplicação com o DB (Converte os models em tabelas caso não existam)
db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

