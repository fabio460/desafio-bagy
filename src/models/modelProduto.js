const Sequelize = require('sequelize')
const sequelize =new Sequelize({
    dialect:'sqlite',
    storage:'./src/bancoDesafioBagy.db'    
})

const modelProduto = sequelize.define("Produto",{
   nome:{type:Sequelize.STRING},
   imagem:{type:Sequelize.STRING},
   descricao:{type:Sequelize.STRING},
   peso:{type:Sequelize.STRING},
   preco:{type:Sequelize.STRING},
   quantidade:{type:Sequelize.FLOAT},
})
//modelProduto.sync({force:true})

module.exports = modelProduto