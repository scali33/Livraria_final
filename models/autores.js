const {DataTypes, Model} = require('sequelize')
const editora = require("./editoras")
const sequelize = require("../bd");
const Usuario = require('./usuarios');
class Autores extends Model{}
Autores.init({
    nome:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    idade:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    livros:{
        type:DataTypes.STRING(50),
        allowNull:false
    }
},{
    sequelize,
    modelName:'autores'
})
sequelize.sync()
module.exports = Autores