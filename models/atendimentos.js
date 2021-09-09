const moment = require('moment')
const conexao = require('../infraestrtura/conexao')
class Atendimento {

    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        const dataEhValida = moment(data, 'YYYY-MM-DD').isSameOrAfter(dataCriacao, 'YYYY-MM-DD')
        const clienteEhValido = atendimento.cliente.length >= 1

        console.log("-=-=-=-=-=-=-=-=-=")
        console.log(dataCriacao)
        console.log(data)
        console.log(dataEhValida)



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

    lista(res) {
        const sql = "SELECT * FROM Atendimentos"

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json()
            } else {
                res.status(200).json(resultados)
            }
        })

    }

    buscaPorId(id, res) {
        const sql = `select * from Atendimentos where id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0]
            if(erro){
                res.status(400).json(erro)
            }else {
                res.status(200).json(atendimento)
            }
        }
        )
    }
}
module.exports = new Atendimento