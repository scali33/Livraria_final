const { render } = require("pug")

const model = new require('../../models/usuarios')
module.exports = (app)=>{
    app.get('/recuperar-senha', async (req,res)=>{
        res.render('recuperarSenha.pug')
    })
    app.post('/recuperar-senha', async (req, res)=>{
        dados = req.body
        Senha = dados.Gmail
    })
}