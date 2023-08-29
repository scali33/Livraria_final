const {DataTypes, Model} = require('sequelize')
const sequelize = require('../bd')
const author = new require('./autores')
const editora = new require('./editoras')
class Auth_edit_relacao extends Model{}
Auth_edit_relacao.init({


},{
    sequelize,
    modelName:"Auth_Edit_relacao"
})

sequelize.sync()
module.exports = Auth_edit_relacao