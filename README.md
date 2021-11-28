                                    DOCUMENTO DA DESAFIO BAGY


MUTATIONS:

mutation{
  criarPedido(id_produto:"1",DataDeCriacao: "27/11/2021",Parcelas: "5",id_comprador: "1",Status: "efetuado") {
    id_comprador
  }
}


mutation{
  criarProduto(nome:"Galaxy S21",imagem:"https://samsungbr.vtexassets.com/arquivos/ids/315751-1600-auto?width=1600&height=auto&aspect=true",descricao:"Samsung Galaxy S21+ Preto, com Tela Infinita de 6,7",peso:"160g",preco:"4.859,10",quantidade:40) {
      id
  }
}


mutation{
  cadastrarCliente(Nome_Completo: "fabio da silva",Email: "jazzfabios@gmail.com",CPF: "123456789",Data_de_nascimento: "19/02/1982",Rua:"rua J",Bairro: "nova Campinas",Cidade: "Duque de Caxias",Estado: "RJ",Pais: "Brasil",CEP: "25268-160",Numero: "365") {
     Nome_Completo
  }
}

QUERYS:

query{
  produto {
    nome
    id
    quantidade
    descricao
    preco
  }
}

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
query{
  pedidos {
    id_comprador
    id_produto
    DataDeCriacao
    Status
  }
}


