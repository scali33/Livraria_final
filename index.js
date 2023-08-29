const express = require('express')
const consign = require('consign')
const app = express()
const usuario = new require ('./models/usuarios')
const cita_livros = new require ('./models/cita_livros')
const Livros = new require ('./models/livros')
const editora = new require ('./models/editoras')
const autor = new require ('./models/autores')
const comunidade = new require ('./models/comunidades')
const assinatura = new require ('./models/assinaturas')
const pagamento = new require ('./models/pagamentos')

var porta = '3200'

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/', (req ,res) =>res.send('API - Sistema de livros'))
consign()
    .include('./controllers/rotas')
    .into(app)

app.listen(porta, ()=>console.log(`Servidor rodando em: http:localhost:${porta}`))