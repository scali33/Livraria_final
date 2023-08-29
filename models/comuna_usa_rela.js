const {DataTypes, Model} = require('sequelize')
const sequelize = require("../bd");
const comunidade = new require('./Comunidades')
const usuario = new require('./usuarios')
class Comuna_usa_rela extends Model{}
Comuna_usa_rela.init({

    data_entrada:{
        type: DataTypes.STRING(100),
        allowNull:false
    }
},{
    sequelize,
    modelName:'Comuna_usa_rela'
})
usuario.hasMany(Comuna_usa_rela)
Comuna_usa_rela.belongsTo(usuario, {allowNull:false})
comunidade.hasMany(Comuna_usa_rela)
Comuna_usa_rela.belongsTo(comunidade, {allowNull:false})
sequelize.sync()
module.exports=Comuna_usa_rela;
