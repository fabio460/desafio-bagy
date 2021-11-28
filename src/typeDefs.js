const {gql,ApolloServer} = require('apollo-server')




const typeDefs = gql`

    
    type Teste{
        id:ID,
        nome:String
    }
    type Produto{
        id:ID!,  
        nome:String!,
        imagem:String,
        descricao:String,
        peso:String!,
        preco:String!,
        quantidade:String!,
    }
    type Clientes{
        id:ID!,
        Nome_Completo:String!,
        Email:String!,
        CPF:String!,
        Data_de_nascimento:String,
        Rua:String,
        Bairro:String,
        Cidade:String,
        Estado:String,
        Pais:String,
        CEP:String,
        Numero:String,
    }
    type Pedidos{
        id:ID!,
        id_produto:String!,
        DataDeCriacao:String!,
        Parcelas:String!,
        id_comprador:String!,
        Status:String!
    }
    type Query{
        produto:[Produto]
        clientes:[Clientes]
        pedidos:[Pedidos]
        teste:[Teste]
    }



    type Mutation{
        criarPedido(
            id:ID,
            id_produto:String,
            DataDeCriacao:String,
            Parcelas:String,
            id_comprador:String,
            Status:String
        ):Pedidos

        criarProduto(
            id:ID,
            nome:String,
            imagem:String,
            descricao:String,
            peso:String,
            preco:String,
            quantidade:Float
        ):Produto

        cadastrarCliente(
            id:ID,
            Nome_Completo:String,
            Email:String,
            CPF:String,
            Data_de_nascimento:String,
            Rua:String,
            Bairro:String,
            Cidade:String,
            Estado:String,
            Pais:String,
            CEP:String,
            Numero:String,
        ):Clientes
    }

`
module.exports = typeDefs