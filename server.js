const express = require('express')
const hbs = require('hbs');
const app = express()
const PORT = 3000


app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.send('Bienvenidos a nuestro Primer Servidor con Express')
})

app.get('/navidad', function (req, res) {
    res.render('index')
});


app.get('/formulario', function (req, res) {
    res.render('formulario')
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
    
})






