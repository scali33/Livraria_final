const {Sequelize} = require('sequelize')
const schema = 'bdlivros'
const sequelize = new Sequelize(
    schema, 'pao', '123', { 
        host:'localhost', 
        dialect:'mysql', 
        charset: 'utf8',
        collate: 'utf8_general_ci', 
        timezone:'-03:00'
    })
try {
    sequelize.authenticate() 
    console.log('Conectado ao banco: '+ schema)
} catch (erro) {
    console.log('Não foi possível conectar: ', erro )
}
module.exports = sequelize