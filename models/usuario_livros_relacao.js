const {DataTypes, Model} = require('sequelize')
const sequelize = require('../bd')
const usuario = new require ('./usuarios')
const livros = new require ('./livros')
class Relacao_usuLiv extends Model{}
Relacao_usuLiv.init({
    avaliacao:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    last_read:{
        type: DataTypes.STRING(100),
        allowNull:false
    }
},{
    sequelize,
    modelName:'Relacao_usuLiv'
})
usuario.hasMany(Relacao_usuLiv)
Relacao_usuLiv.belongsTo(usuario, {foreignKey:{allowNull:false}})
livros.hasMany(Relacao_usuLiv)
Relacao_usuLiv.belongsTo(livros, {foreignKey:{allowNull:false}})
sequelize.sync()
module.exports = Relacao_usuLiv

