var comentCtrl = require('../controllers/comment')
const express = require('express')
const router = express.Router();


router.post('/messages/:messageId/coment/new', comentCtrl.createComent)
router.get('/messages/:messageId/coment', comentCtrl.listComent)
module.exports = router;


