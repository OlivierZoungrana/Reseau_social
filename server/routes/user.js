const express = require('express')
const router = express.Router();
const userCtrl = require('../controllers/user')


router.post('/users/register/', userCtrl.register)
router.post('/users/login/',userCtrl.login)
router.get('/users/me/',userCtrl.getUserProfile)
router.put('/users/me/', userCtrl.updateUserProfile)
router.delete('/users/me/:userId', userCtrl.deleteUserProfile)



module.exports = router;