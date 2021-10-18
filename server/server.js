const express = require('express');
const bodyParser = require('body-parser')
const server = express();
const userRoutes = require('./routes/user')
const messRoutes = require('./routes/message')
const likeRoutes= require('./routes/like')
const comentRoutes= require('./routes/comment')
const cookie = require('cookie-parser')
let jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const JWT_SIGN_SECRET= "secret"
const path = require('path')



server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  


server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())


 server.use('./images', express.static(path.join(__dirname, 'images')));

server.use('/api',userRoutes )
server.use('/api', messRoutes)
server.use('/api',likeRoutes)
server.use('/api', comentRoutes)
// server.use(cookieParser());

server.get('/', function (req, res, next){
    res.setHeader('content-type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon server</h1>')
});

// server.get("/login", (req, res) => {
//     const token = jwt.sign({ userId: 7,  }, JWT_SIGN_SECRET);
//     return res
//       .cookieParser("access_token", token, JWT_SIGN_SECRET, {
//         httpOnly: true,
//       })
//       .status(200)
//       .json({ message: "Logged in successfully 😊 👌" });
//   });






server.listen(8080, function(){
    console.log('server en écoute')
})

