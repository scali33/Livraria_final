const {DataTypes, Model} = require('sequelize')
const sequelize = require('../bd')
const livros = new require('./livros')
const usuario = new require('./usuarios')
class Cita_livros extends Model{}
Cita_livros.init({
    Citacao:{
        type: DataTypes.STRING(255),
        allownull:false
    }
},{
    sequelize,
    modelname:'Cita_livros'
})
Cita_livros.belongsTo(usuario, {foreignKey:{allowNull:false}});    // Cita_livros pertence a um Usuario
usuario.hasMany(Cita_livros);   // Um Usuario pode ter muitas Cita_livros
Cita_livros.belongsTo(livros, {foreignKey:{allowNull:false}}); // Cita_livros pertence a um Livro
livros.hasMany(Cita_livros);   // Um Livro pode ter muitas Cita_livros
sequelize.sync()
module.exports = Cita_livros