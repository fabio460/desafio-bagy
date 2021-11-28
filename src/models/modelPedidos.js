const Sequelize = require('sequelize')
const sequelize =new Sequelize({
    dialect:'sqlite',
    storage:'./src/bancoDesafioBagy.db'    
})

const modelPedido = sequelize.define("Pedido",{
   id_produto:{type:Sequelize.STRING},
   DataDeCriacao:{type:Sequelize.STRING},
   Parcelas:{type:Sequelize.STRING},
   id_comprador:{type:Sequelize.STRING},
   Status:{type:Sequelize.STRING},
})

//modelPedido.sync({force:true})

module.exports = modelPedido