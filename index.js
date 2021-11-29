const {ApolloServer} = require('apollo-server')
require('dotenv').config()
const PORT = process.env.PORT || 4000;
const typeDefs = require('./src/typeDefs')
const resolvers = require('./src/resolvers')

async function teste(){
    //const p = await resolvers.Query.pedidos().then(res=>res[0].dataValues)
    //console.log(p)

   // resolvers.Mutation.criarPedido("_","1", "27/11/2021","9","1","efetuado")


    //resolvers.Mutation.criarPedido("1","29/11/2021","6","2","aceito")
}
teste()

const server = new ApolloServer({typeDefs,resolvers})
server.listen(PORT)