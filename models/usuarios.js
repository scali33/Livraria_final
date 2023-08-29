const {DataTypes, Model} =  require ('sequelize')
const sequelize = require("../bd");
class Usuario extends Model{}
Usuario.init({
    nome:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    Gmail:{
        type: DataTypes.STRING(50),
        unique:true,
        allowNull:false
    },
    senha:{
        type: DataTypes.STRING(200),
        allowNull:false
    },
    comunidade:{
        type:DataTypes.STRING(100),
        allowNull:true
    }
},{
    sequelize,
    modelName:'usuario'
})

sequelize.sync()
module.exports = Usuario