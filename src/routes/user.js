const router = require('express').Router()
const { addUser, member } = require('../controller/user')
const uploadImage = require('../middleware/multer')

router.post('/add', uploadImage, addUser)
router.get('/member', member)

module.exports = router
