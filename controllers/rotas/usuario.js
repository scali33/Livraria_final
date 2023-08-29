const model = new require('../../models/usuarios')
const validacao = require('../validacao')
const auth = require ('../auth')
const rota = 'usuarios'
module.exports = (app)=>{
    app.post(`/cadastrar/${rota}`, async (req, res)=>{
        try{
        let dados = req.body
        console.log(dados)
        let dadosLogin = await validacao.validarCadastro(dados,model)
        
        if (dadosLogin.validacao){
            dados.senha = await auth.criptografarsenha(dados.senha)
            var respBd = await model.create(dados)
            delete respBd.dataValues.senha
            res.json(respBd).status(201)
        }   else{
            res.json(dadosLogin).status(200)
        }
        }catch{
            res.json(respBd).status(422)
        }
    })
    
    app.get(`/consultar/${rota}/:id?`, async (req, res)=>{
        let dados = req.params.id? await model.findOne({where:{id:req.params.id}}) : 
        await model.findAll()
        res.json(dados)
    })
    app.put(`/atualizar/${rota}/:id`, async (req, res) => {
        let id = req.params.id
        let dados = req.body
        let respBd = await model.update(dados, {where:{id:id}})
        res.json(respBd)
    })
    app.delete(`/excluir/${rota}/:id`, async (req, res) => {
        let id = req.params.id
        
        let respBd = await model.destroy({where:{id:id}})
        res.json(respBd)
    })
}