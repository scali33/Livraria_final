const {DataTypes, Model} = require('sequelize')
const sequelize = require('../bd')
const usuario = new require('./usuarios')
class Pagamentos extends Model{}
Pagamentos.init({
    method:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    data_pag:{
        type: DataTypes.STRING(50),
        allowNull:false
    }
},{
    sequelize,
    modelName:'pagamento'
})
usuario.hasMany(Pagamentos)
Pagamentos.belongsTo(usuario, {foreignKey:{allowNull:false}})
sequelize.sync()
module.exports = Pagamentos
