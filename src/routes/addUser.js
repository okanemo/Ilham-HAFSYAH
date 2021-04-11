const router = require('express').Router()
const { addUser } = require('../controller/addUser')

router.post('/add', addUser)

module.exports = router
