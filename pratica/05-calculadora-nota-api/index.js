//importa o express
const express = require('express')
//criar instância do application com express
const app = express()
//importa o intermediário que configura o cors
const cors = require('cors')
//habilitar para chegar requisição de qualquer origem
app.use(cors())

//Middlewares
app.use((req, res, next) => {
    console.log("#### REQUISIÇÃO RECEBIDA ####")
    console.log("Time: ", new Date().toLocaleString())
    console.log("Método: ", req.method)
    console.log("Rota: ", req.url)
    next()
})

app.get("/hello", (req, res, next) => {
    res.send("Hello ATUALIZADO!!!")
})

//importando o roteador CalculadoraNota
const calculadoraNotaRouter = require('./routes/CalculadoraNota')
//configurar a aplicação para usar o router (CalculadoraNota) como intermediário
app.use("/", calculadoraNotaRouter)

//executar a aplicação
app.listen(8080, () => {
    console.log("API rodando em http://localhost:8080")
})