const {DataTypes, Model} = require('sequelize')
const sequelize = require('../bd')
const pagamento = new require ('./pagamentos')
class Assinaturas extends Model{}
Assinaturas.init({
    data_venc:{
        type: DataTypes.STRING(50),
        allownull:false
    },
    data_exped:{
        type: DataTypes.STRING(50),
        allownull:false
    }
},{
    sequelize,
    modelName:'assinaturas'
})
Assinaturas.hasOne(pagamento, {foreignKey:{allowNull:false}})
sequelize.sync()
module.exports = Assinaturas