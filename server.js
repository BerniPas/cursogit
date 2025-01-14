const express = require('express')
const hbs = require('hbs');
const app = express()
const PORT = 3000


app.set('view engine', 'hbs');

/* para que mi appentienda los datos */
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function (req, res) {
    res.render('home')
})

app.get('/navidad', function (req, res) {
    res.render('index')
});


app.get('/formulario', function (req, res) {
    res.render('formulario')
});

app.get('/sucursales', function (req, res) {
    res.render('sucursales')
});

/* para recibir datos desde el front */
app.post('/formulario', function (req, res) {

    console.log(req);
    

    const email = req.body.email;
    const password = req.body.password;


    console.log('Datos recibidos ' + email + ' ' + password);
    res.render('datos', {
        email: email,
        password
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
    
})






