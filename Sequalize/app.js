const bodyParser = require('body-parser');
const express = require('express')
const routes = require('./routes/indexRouter')


const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/user', routes.user);


module.exports = app;
