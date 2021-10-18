const express = require('express')
const router = express.Router();
const MessagesCtrl = require('../controllers/message')
const multer = require('../utils/multer-config')

router.post('/messages/new/',multer, MessagesCtrl.createMessage)
router.get('/messages/', MessagesCtrl.listMessage)
router.get('/messages/:id', MessagesCtrl.listMessagebyId)
router.get('/messages/recent', MessagesCtrl.lastMessage)
module.exports = router;


// let jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

// let jwtParts = jwt.split('.')

// console.log(jwtParts[1])

// let jwtInfos = JSON.parse(atob(jwtParts[1]))

// console.log(jwtInfos)

// console.log(jwtInfos.name)