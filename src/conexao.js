
const Sequelize = require('sequelize')
const sequelize =new Sequelize({
    dealect:'sqlite',
    storage:'./src/bancoDesafioBagy.db'    
})
module.exports = sequelize