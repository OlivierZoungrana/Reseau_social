const express = require('express');
const bodyParser = require('body-parser')
const server = express();
const userRoutes = require('./routes/user')
const messRoutes = require('./routes/message')
require('dotenv').config()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.get('/', function (req, res){
    res.setHeader('content-type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon server</h1>')
});

server.use('/api',userRoutes )
server.use('/api', messRoutes)



server.listen(8080, function(){
    console.log('server en écoute')
})