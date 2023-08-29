const {DataTypes, Model} = require('sequelize')
const autores = require("./autores")
const Auth_edit_relacao = require ("./Auth_Edit_relacao")
const sequelize = require('../bd')
class Editoras extends Model{}
Editoras.init({
    nome:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    CNPJ:{
        type:DataTypes.STRING(100),
        allowNull:false,
        unique:true
    }
},{
    sequelize,
    modelName:'Editoras'
})
Editoras.belongsToMany(autores, { through: Auth_edit_relacao });
autores.belongsToMany(Editoras,  { through: Auth_edit_relacao });
sequelize.sync()
module.exports = Editoras