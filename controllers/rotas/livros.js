const validacao = require("../validacao")
const auth = require("../auth")
const rota = "livros"
const model = new require('../../models/livros')
const getUploadedFiles = require('../../obterArquivo')

const storage = multer.diskStorage({
    destination : (req , file , cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) =>{
        const sufixoUnico = `Stamp${Date.now()}-${Math.round(Math.random() * 1E3)}`
        const nomeArquivo = `${path.basename(file.originalname)}_${sufixoUnico}${path.extname(file.originalname)}`
    cb(null, nomeArquivo)
    }
})
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
    app.post(`/upload/${rota}`,upload.single('file'), auth.validarToken,(req, res)=>{
        res.redirect('/files')
    })
    app.get(`/ler/${rota}`, auth.validarToken,(req, res)=>{
        const files = getUploadedFiles()
        res.render('files', {files})
    })
}