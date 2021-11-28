const nodemeiler = require('nodemailer')
require('dotenv').config()
const transporter = nodemeiler.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"fabio.alternativo.silva@gmail.com",
        pass:process.env.SenhaEmail
    },
    tls:{
        rejectUnauthorized:false
    }
})

async function run(emailDaEmpresa,emailDoCliente,informacoes,assuntoDoEmail,nomeDaEmpresa){
    const emailTransport =await transporter.sendMail({
        text:informacoes,
        subject:assuntoDoEmail,
        from:`${nomeDaEmpresa} <${emailDaEmpresa}>`,
        to:`${emailDaEmpresa},${emailDoCliente}`

    })
    
    return emailTransport
    
}

module.exports= run