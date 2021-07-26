const express = require('express')
const app = express();

// app.listen(3000, () => console.log('servidor rodando na porta 3000'))

// app.get('/', (req, res) => res.send("sevidor rodando, tudo ok teste"))


app.listen(3000, ()=> console.log('servidor rodando na porta 3000'))

app.get('/',(req,res) => res.send('servidor rodando na porta. '))