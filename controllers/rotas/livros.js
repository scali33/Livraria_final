const validacao = require("../validacao")
const auth = require("../auth")
const rota = "livros"
const model = new require('../../models/livros')
module.exports = (app) =>{
    app.get(`/consultar/${rota}`, auth.validarToken , async(res)=>{
        try {
            //Alterar
            let id = req.usuarioAtual.id
            let dados = await model.findByPk(id)
            let {nome,idioma,gen_lit} = dados
            res.json(dados).status(200)
        } catch (error) {
            res.json(error).status(400)
        }
    })
    app.post(`/cadastrar/${rota}`, auth.validarToken ,async(req,res)=>{
        let dados = req.body
        try{
            var respBd = await model.create(dados)
            res.json(respBd).status(201)
        }catch{
            res.json(respBd).status(400)
    }})
}