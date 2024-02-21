const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const tasksRoutes = require('./routes/tasks');

const app = express();
app.set('port', 4000);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views')
app.engine('.hbs', engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test2',
  });

app.listen(app.get('port'), () => {
    console.log('Server on port 4000', app.get('port'));
})

app.use('/', tasksRoutes)

app.get('/', (req, res) => {
    res.render('home');
})

