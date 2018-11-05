const express = require("express");
const app = express();
const morgan = require('morgan')
const path = require('path')
const {mongoose} = require('./database')


//setting
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks',require('./routes/task.routes'));

//Static  Files

app.use(express.static(path.join(__dirname, 'public')));

//starting the server
app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
})