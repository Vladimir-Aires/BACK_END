// Crio a aplicação express
const express = require('express')
const app = express()

app.use(express.json())

// conectar no MongoDB
const mongoose = require('mongoose')
require('dotenv').config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url)
  .then(() => {
    console.log("Conectado ao banco MongoDB!!!!")
  })
  .catch(erro => {
    console.log("Erro ao conectar no banco MongoDB: ", erro)
  })

// Model (Modelo) - Interface com o meu banco de dados
// Cada model representa uma Collection (Tabela)
const LivroModel = mongoose.model('Livros', new mongoose.Schema(
  {
    titulo: String,
    autor: String,
    editora: String,
    ano: String,
    preco: Number,
    // nome: String,
    // idade: Number,
    // dataCriacao: { type: Date, default: Date.now() }
  }
))

// CRUD
// Criação
app.post('/livros', async (req, res, next) => {
  const livro = req.body

  let campoFaltante = !livro.titulo || !livro.autor || !livro.editora || !livro.ano || !livro.preco

  if (campoFaltante) {
    return res.status(400).json({ erro: "Há campos não declarados! Todos são obrigatórios!" })
  }
  const livroCriado = await LivroModel.create(livro)
  res.status(201).json(livroCriado)
})

// Leitura
app.get('/livros', async (req, res, next) => {
  const livros = await LivroModel.find()
  res.json(livros)
})

// Atualização
app.put('/livros/:id', async (req, res, next) => {
  const id = req.params.id
  const livro = req.body

  let campoFaltante = !livro.titulo || !livro.autor || !livro.editora || !livro.ano || !livro.preco

  if (campoFaltante) {
    return res.status(400).json({ erro: "Há campos não declarados! Todos são obrigatórios!"  })
  }
  const livroAtualizado = await LivroModel.findByIdAndUpdate(id, livro, { new: true })
  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não encontrado!" })
  }
  res.json(livroAtualizado)
})

// Exclusão
app.delete('/livros/:id', async (req, res, next) => {
  const id = req.params.id
  await LivroModel.findByIdAndDelete(id)
  res.status(204).send()
})


app.listen(3000, () => {
  console.log("Aplicação rodando em http://localhost:3000")
})