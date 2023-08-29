const {DataTypes, Model} = require('sequelize')
const sequelize = require('../bd')
const usuario = new require ('./usuarios')
const editora = new require ('./editoras')
class Livros extends Model{}
Livros.init({
    nome:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    idioma:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    gen_lit:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    data_publi:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    quant_pags:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Caminho_livro:{
        type:DataTypes.STRING(400),
        allowNull:false
    }
},{
    sequelize,
    modelName:'livros'
})
Livros.belongsTo(usuario, {foreignKey:{allowNull:false}})
usuario.hasMany(Livros)
Livros.hasOne(editora, {foreignKey:{allowNull:false}})
editora.belongsTo(Livros)
sequelize.sync()
module.exports = Livros