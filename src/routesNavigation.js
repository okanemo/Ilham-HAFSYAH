const router = require('express').Router()
const addUser = require('./routes/addUser')
const nab = require('./routes/nab')

router.use('/api/v1/user', addUser)
router.use('/api/v1/ib', nab)

module.exports = router
