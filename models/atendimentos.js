const conexao = require('../infraestrtura/conexao')
class Atendimento{

    adiciona(atendimento){
        const dataCriacao = new Date();
        const atendimentoDatado =  {...adentimento, datacriacao}
        const sql = 'Insert Into Atendimentos SET ?'

        conexao.query(sql, atendimento, (erro, resultados)=>{
            if(erro){
                console.log(erro)

            } else {
                console.log(resultados)
            }
        })
    }
}
module.exports = new Atendimento