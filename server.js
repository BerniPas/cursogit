const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Bienvenidos a nuestro Primer Servidor con Express')
})

app.listen(3000)

