const model = new require ('../../models/usuarios')
const auth = require ('../auth')
const validacao = require ('../validacao')

module.exports = (app) => {
    app.post(`/login`, async (req,res)=>{
        try{
            let dados = req.body
            let validarLogin = await validacao.validarLogin(dados,model)
            console.log('/login: ', validarLogin)
            if (validarLogin){
                let {id,nome,Gmail} = validarLogin.usuario.dataValues
                dados = {id,nome,Gmail}
                console.log(dados)
                let token = await auth.gerarToken(dados)
                return res.json({dados,token:token}).status(200)
            }
            else{
                return res.json(validarLogin).status(200)
            }
        }catch(erro){
            return res.json(erro).status(400)
        }
    })
}
//leo me ahuida pela mor de deus cara eu não aguento mais 