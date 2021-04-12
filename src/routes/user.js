const router = require('express').Router()
const { addUser, member } = require('../controller/user')

router.post('/add', addUser)
router.get('/member', member)

module.exports = router
