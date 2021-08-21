const moment = require('moment')
const conexao = require('../infraestrtura/conexao')
class Atendimento {

    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = atendimento.cliente.lentgh >= 1

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: "data deve ser maior ou igual a data atual"
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos  cinco caracterios'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)

        const existemErros = erros.length

        if (existemErros) {
            res.status(400).json(erros)

        } else {



            const atendimentoDatado = { ...atendimento, dataCriacao, data }
            const sql = 'Insert Into Atendimentos SET ?'

            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if (erro) {
                    // console.log(erro)
                    res.status(400).json(erro)
                } else {
                    // console.log(resultados)
                    res.status(201).json(resultados)
                }
            })
        }
    }
}
module.exports = new Atendimento