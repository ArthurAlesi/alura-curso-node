const customExpress = require('./config/customExpress')
const conexao = require('./infraestrtura/conexao')
const Tabelas = require('./infraestrtura/tabelas')

console.log("aqui ta indo 2")

conexao.connect(erro => {
    if(erro){
        console.log(erro)
        console.log("ta dando erro")
    } else {
        console.log("ta conectando")
        const app = customExpress()
        Tabelas.init(conexao)
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
        
    }
})

