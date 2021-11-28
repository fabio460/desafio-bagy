                                    DOCUMENTO DA DESAFIO BAGY


Projeto Back-End usando Node.js com SQLITE e GraphQl.
Api rodando na porta 4000, cujo link é: http://localhost:4000/ 


MUTATIONS:

                         INSERINDO PEDIDO
mutation{
  criarPedido(id_produto:" ",DataDeCriacao: " ",Parcelas: " ",id_comprador: " ",Status: " ") {
    id_comprador
  }
}

exemplo:
    mutation{
      criarPedido(id_produto:"1",DataDeCriacao: "27/11/2021",Parcelas: "5",id_comprador: "1",Status: "efetuado") {
        id_comprador
      }
    }

                         INSERINDO PRODUTO
mutation{
  criarProduto(nome:" ",imagem:" ",descricao:"",peso:" ",preco:" ",quantidade:" ") {
      id
  }
}
exemplo:
    mutation{
      criarProduto(nome:"Galaxy S21",imagem:"https://samsungbr.vtexassets.com/arquivos/ids/315751-1600-auto?width=1600&height=auto&aspect=true",descricao:"Samsung Galaxy S21+ Preto, com Tela Infinita de 6,7",peso:"160g",preco:"4.859,10",quantidade:40) {
          id
      }
    }

                       INSERINDO USUARIO

mutation{
  cadastrarCliente(Nome_Completo: "",Email: " ",CPF: " ",Data_de_nascimento: " ",Rua:" ",Bairro: " ",Cidade: " ,Estado: "",Pais: " ",CEP: " ",Numero: " ") {
     Nome_Completo
  }
}

exemplo:
    mutation{
      cadastrarCliente(Nome_Completo: "fabio da silva",Email: "jazzfabios@gmail.com",CPF: "123456789",Data_de_nascimento: "19/02/1982",Rua:"rua J",Bairro: "nova Campinas",Cidade: "Duque de Caxias",Estado: "RJ",Pais: "Brasil",CEP: "25268-160",Numero: "365") {
        Nome_Completo
      }
    }

QUERYS:

                                    LISTANDO PRODUTO
query{
  produto {
    nome
    id
    quantidade
    descricao
    preco
  }
}
                                    LISTANDO CLIENTES
query{
   clientes {
     id
    Nome_Completo
    Bairro
    Cidade
    Email
    Estado
    CEP
  }
  
}
                                    LISTANDO PEDIDOS
query{
  pedidos {
    id_comprador
    id_produto
    DataDeCriacao
    Status
  }
}


