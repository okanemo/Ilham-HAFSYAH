const router = require('express').Router()
const addUser = require('./routes/addUser')

router.use('/api/v1/user', addUser)

module.exports = router
