var likeCtrl = require('../controllers/like')
const express = require('express')
const router = express.Router();


router.post('/messages/:messageId/vote/like', likeCtrl.likePost)
router.post('/messages/:messageId/vote/dislike', likeCtrl.dislikePost)
module.exports = router;

