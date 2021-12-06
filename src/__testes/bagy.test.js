
const resolvers = require('../resolvers')
const removerQuantidadeEstoque = require('../resolvers')
describe("teste das funções principais",()=>{
 
    it("teste de produto",async ()=>{
        const p = await resolvers.Query.produto().then(res=>res[2].dataValues.nome)
        expect(p).toBe("Galaxy S21")
    })
    it("teste de clientes",async ()=>{
        const p = await resolvers.Query.clientes().then(res=>res[0].dataValues.Nome_Completo)
        expect(p).toBe("fabio da silva")
    })
    it("teste de pedidos", async ()=>{
        const p = await resolvers.Query.pedidos().then(res=>res[0].dataValues)
        expect(p).toMatchObject({id:1})
    })
    it("teste de criação produtos",()=>{
        const p = resolvers.Mutation.criarProduto("a","a","a","a","a",4)
        expect(p).toBe(200)
    })
    it("teste de cadastro de cliente",async()=>{
        const p =await resolvers.Mutation.cadastrarCliente("a","a","a","a","a","a","a","a","a","a")
        expect(p).toBe(200)
    })
    it("teste registro de venda",async()=>{
        const p =await resolvers.Mutation.criarPedido("1","27/11/2021","1","1","efetuado")
        expect(p).toBe(200)
    })
    
})

