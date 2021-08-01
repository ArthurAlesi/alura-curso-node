// possivelmente ter q trocar a conecao do mysql no trabalho
const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user : "root",
    password: 'admin',
    database: 'agenda-petshop'
    
}) 

console.log("ate aqui ta indo")

module.exports = conexao
// module.exports = conexao