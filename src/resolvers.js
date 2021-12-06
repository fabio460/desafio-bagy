const modelClientes = require('./models/modelClientes')
const modelProduto = require('./models/modelProduto')
const modelPedido = require('./models/modelPedidos')
const Sequelize = require('sequelize')
const sequelize =new Sequelize({dialect:'sqlite',storage:'./src/bancoDesafioBagy.db'})
const run = require('./mailer')




//GETs
const listarProduto =async ()=>{
    let res = await modelProduto.findAll()
    //console.log(res)
    return res
  }
  const listarClientes =async ()=>{
    return await modelClientes.findAll()
  }
  const listarPedidos =async ()=>{
      return await modelPedido.findAll()
  }

  //POSTs
  const inserirProduto = (nome,imagem,descricao,peso,preco,quantidade)=>{
      try {
        modelProduto.create({
            nome,imagem,descricao,peso,preco,quantidade
         })   
         console.log('produto cadastrado com sucesso')
         return 200
      } 
      catch (error) {
        console.log('falha ao inserir produto, insira todos os campos')
      }
  }
  const cadastrarClientes = (Nome_Completo,Email,CPF,Data_de_nascimento,Rua,Bairro,Cidade,Estado,Pais,CEP,Numero)=>{
    try {
        modelClientes.create({
            Nome_Completo,
            Email,
            CPF,
            Data_de_nascimento,
            Rua,Bairro,Cidade,Estado,Pais,CEP,Numero
        })    
         console.log('cliente cadastrado com sucesso')
         return 200
    } 
    catch (error) {
        console.log('campos obrigatórios não inseridos')
    }
  }
  


  //funções necessarias
  const enviarEmail = (emailDaEmpresa,emailDoCliente,informacoes,assuntoDoEmail,nomeDaEmpresa)=>{
    run(emailDaEmpresa,emailDoCliente,informacoes,assuntoDoEmail,nomeDaEmpresa)
  }
  

  const removerQuantidadeEstoque =async (idProd,num)=>{
     try {
      modelProduto.update(
          {quantidade:num},
          {where:{id:idProd}}
      )
     } catch (error) {
         console.log(error)
     }
  }
  
  

  //Registrando uma venda
  const registrarVenda =async (id_produto,DataDeCriacao,Parcelas,id_comprador,Status)=>{
        //a quantidade teve que ser tratada pois veio como objeto
        let [quantidade] =await sequelize.query("select quantidade from produtos")
        let quantidade_tratada =await quantidade[0].quantidade - 1
    
        try {
                    //pegar produto por id 
                const produto = await modelProduto.findAll({
                    where:{
                        id : id_produto
                    }
                })
                const {id,nome,descricao,preco} =await produto[0].dataValues

                //pegar cliente por id
                const cliente = await modelClientes.findAll({
                    where:{
                        id:id_comprador
                    }
                })
                const {Email,Nome_Completo} =await cliente[0].dataValues


                const informacoesParaOCliente = `
                Parabens Sr(a) ${Nome_Completo}
                Compra efetuada com sucesso
                Produto: ${nome} //
                no valor de R$ ${preco} reais
                
            `
            const emailDaEmpresa = "fabio.alternativo.silva@gmail.com"
            const assuntoDoEmail = "compra efetuada com sucesso"
            const nomeDaEmpresa = "Bagy"
            if(quantidade_tratada > 0){
                const id_prod = await modelProduto.findAll()
                const id_cli = await modelClientes.findAll()
                modelPedido.create({
                    id_produto:id_prod[0].dataValues.id ,
                    DataDeCriacao,
                    Parcelas,
                    id_comprador:id_cli[0].dataValues.id,
                    Status
                })
                removerQuantidadeEstoque(id_produto,quantidade_tratada)
    
                enviarEmail(emailDaEmpresa,Email,informacoesParaOCliente,assuntoDoEmail,nomeDaEmpresa)
            }
           
            console.log(`produto ${nome}, cliente ${Nome_Completo}`)
            console.log(`venda registrada com sucesso`)
            return 200
        } 
        catch (error) {
          console.log('falha na criação do pedido, motivo: '+error)  
          return 401
        }

  }
// Resolver
const resolvers = {
    Query:{
        produto: ()=>{
            return listarProduto()
        },
        clientes: ()=> listarClientes(),
        pedidos: ()=>listarPedidos()
    },
    Mutation:{
        criarProduto: (_,{nome,imagem,descricao,peso,preco,quantidade})=>{
           return inserirProduto(nome,imagem,descricao,peso,preco,quantidade)
        },
        cadastrarCliente: (_,{Nome_Completo,Email,CPF,Data_de_nascimento,Rua,Bairro,Cidade,Estado,Pais,CEP,Numero})=>{
           return  cadastrarClientes(Nome_Completo,Email,CPF,Data_de_nascimento,Rua,Bairro,Cidade,Estado,Pais,CEP,Numero)
        },
        criarPedido: (_,{id_produto,DataDeCriacao,Parcelas,id_comprador,Status})=>{
          return registrarVenda(id_produto,DataDeCriacao,Parcelas,id_comprador,Status)
        }
    }
}
module.exports = resolvers

//const p = resolvers.Mutation.criarPedido("1","a","a","1","a")
//console.log(p)

