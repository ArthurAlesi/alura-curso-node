const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => { // res.send('<h1>titulo</h1> voce esta na rota de get')
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {// console.log(req.params)
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id,res)
        // res.send("ok")
    })


    app.post('/atendimentos',
        (req, res) => {

            const atendimento = req.body
            Atendimento.adiciona(atendimento, res)

            // res.send('voce esta na rota de antendimentoe esta realizando um     POST')
        }


    )

}