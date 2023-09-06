const model = new require ('../../models/usuarios')
const auth = require ('../auth')
const validacao = require ('../validacao')

module.exports = (app) => {
   
    app.get(`/login`, async (req, res) =>{
        res.render('login.pug')
    })
    app.post(`/login`, async (req,res)=>{
        try{
            let dados = req.body
            let validarLogin = await validacao.validarLogin(dados,model)
            console.log('/login: ', validarLogin)
            if (validarLogin){
                let {id,nome,Gmail} = validarLogin.usuario.dataValues
                dados = {id,nome,Gmail}
                console.log(dados)
                dados.token = await auth.gerarToken(dados)
                res.redirect('/home');
            }
            else{
                
                res.json(validarLogin).status(200)
            
            }
        }catch(erro){
            res.render('falso.pug')
            res.json(erro).status(400)
        }
    }),
    app.get('/home',auth.validarToken ,async (req, res)=>{
        res.render('home.pug')
    })

}
