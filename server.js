const express = require('express')
const app = express()
const port = process.env.PORT || 3001

//motor de plantilla
const hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {})
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

//contenido estatico
app.use( express.static('public'));
app.use(express.static ('css'));

//Rutas
app.get('/blog', function (req, res) {
    res.render('blog', {
      titulo: "Trabajo practico N2"
    })
  });

app.get('/blogs', function (req, res) {
    res.render('blogs', {
      titulo: "Trabajo practico N2"
    })
  });


app.get('/', function (req, res) {
    res.render('index', {
      titulo: "Trabajo practico N2"
    })
  });

app.get('/perfil', function (req, res) {
    res.render('perfil', {
      titulo: "Trabajo practico N2"
    })
  });
//iniciar server
app.listen(port, () => {
    console.log('Trabajo practico 2')
})