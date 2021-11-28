const Sequelize = require('sequelize')
const sequelize =new Sequelize({
    dialect:'sqlite',
    storage:'./src/bancoDesafioBagy.db'    
})

const modelClientes = sequelize.define("Clientes",{
    Nome_Completo:{type:Sequelize.STRING},
    Email:{type:Sequelize.STRING},
    CPF:{type:Sequelize.STRING},
    Data_de_nascimento:{type:Sequelize.STRING},
    Rua:{type:Sequelize.STRING},
    Bairro:{type:Sequelize.STRING},
    Cidade:{type:Sequelize.STRING},
    Estado:{type:Sequelize.STRING},
    Pais:{type:Sequelize.STRING},
    CEP:{type:Sequelize.STRING},
    Numero:{type:Sequelize.STRING},
})
//modelClientes.sync({force:true})
module.exports = modelClientes