const { error } = require('console')
const fs = require('fs')
const path = require('path')

function getUploadedFiles() {
    const uploadDirectory = path.join(__dirname, 'public/uploads')
    try {
        const files = fs.readdirSync(uploadDirectory)
        return files
    } catch (error){
        console.log('Erro ao ler o diretorio de uploads', error)
        return []
    }
}

module.exports = getUploadedFiles