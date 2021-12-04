
const resolvers = require('../resolvers')

describe("teste das funções principais",()=>{
 
    it("teste de produto",async ()=>{
        const p = await resolvers.Query.produto().then(res=>res[0].dataValues.nome)
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
})

