const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app = express()
const port = process.env.PORT;

var options = {
  extensions: ['htm', 'html'],
}

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// servir contenido estático
app.use(express.static('public', options));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  });
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su ruta')
  });
  
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  });
  
app.listen(port, () => {
  console.log(`Aplicación de ejemplo escuchando en http://localhost:${ port}`);
})