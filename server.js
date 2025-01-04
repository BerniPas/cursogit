const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Bienvenidos a nuestro Primer Servidor con Express')
})

app.get('/navidad', function (req, res) {
    res.send('Feliz Navidad y Prospero Año Nuevo')
});

app.listen(3000)






