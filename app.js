//Require de Express
const express = require('express')

// Ejecución de Express
const app = express();

// Requiere path
const path = require('path')

//Usando recursos estáticos
app.use(express.static(__dirname + '/public'))

//Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});