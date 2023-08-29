const auth = require ('./auth')
const editora = require('./rotas/editora')
module.exports={
    validarCadastro: async(dados, model)=>{
        let usuario = await model.findOne({where:{Gmail: dados.Gmail}})
        if (usuario!=null){
            return {erro: 'email inválido', message:"Email já cadastrado!"}
        }
        if (dados.senha != dados.confirmacao){
            return{ erro:'Senhas não conferem!',message:"As senhas nao conhencidem!"}
        }
        return {validacao:true}
    },
    validarLogin: async(dados, model)=>{
        let usuario = await model.findOne({where:{ Gmail:dados.Gmail }})
        console.log('validarLogin:', usuario)
        if (usuario == null){
            return {message: 'Conta de email inválida', autenticado:false}
        }
        else{
            let authSenha = await auth.validarSenha(dados.senha, usuario.senha)
            console.log("AuthSenha: ",authSenha)
            return authSenha? {usuario, autenticado:true}:{erro:{message:'Senha inválida'},autenticado:false}
        }
    }
}