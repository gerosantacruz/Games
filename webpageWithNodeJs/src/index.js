const express = require ('express');
const path = require('path')
const app =express();

//setting
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

//middlewares

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'));