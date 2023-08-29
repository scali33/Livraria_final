const {DataTypes, Model} = require ('sequelize')
const sequelize = require("../bd");
const Usuario = require('./usuarios');
class Comunidades extends Model{}
Comunidades.init({
    nome:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    adm:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    desc:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    data_cria:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    quant_usu:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
},{
    sequelize,
    modelName:'Comunidade'
})
sequelize.sync()
module.exports = Comunidades
