const validacao = require("../validacao")
const auth = require("../auth")
const rota = "livros"
const multer = require('multer')
const path = require('path')
const model = new require('../../models/livros')
const getUploadedFiles = require('../../obterArquivo')


const storage = multer.diskStorage({
    destination : (req , file , cb) => {
        cb(null, global.CAMINHOLIVRO)
    },
    filename: (req, file, cb) =>{
        const sufixoUnico = `Stamp${Date.now()}-${Math.round(Math.random() * 1E3)}`
        const nomeArquivo = `${path.basename(file.originalname)}_${sufixoUnico}${path.extname(file.originalname)}`
    cb(null, nomeArquivo)
    }
})
const upload = multer({storage})

module.exports = (app) =>{
    app.get(`/consultar/${rota}`, async(res)=>{
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
    app.post(`/cadastrar/${rota}`, auth.validarToken, upload.single('file'), async(req,res)=>{
        try{
            let dados = req.body
            let files = getUploadedFiles()
            dados.Caminho_livro = files[0]
            var respBd = await model.create(dados)
            res.json(respBd).status(201)
        }catch{
            res.json(respBd).status(400)
        
    }})
    app.get(`/cadastrar/${rota}`, auth.validarToken, async(req, res)=>{
        res.render("upar_livros.pug")
    })
    app.get(`/ler/${rota}`, async (req,res)=>{
        res.render("ler.pug")
    })
}