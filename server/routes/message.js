const express = require('express')
const router = express.Router();
const MessagesCtrl = require('../controllers/message')

router.post('/messages/new/', MessagesCtrl.createMessage)
router.get('/messages/', MessagesCtrl.listMessage)

module.exports = router;