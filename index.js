const {ApolloServer} = require('apollo-server')
require('dotenv').config()
const PORT = process.env.PORT || 4000;
const typeDefs = require('./src/typeDefs')
const resolvers = require('./src/resolvers')


const server = new ApolloServer({typeDefs,resolvers})
server.listen(PORT)