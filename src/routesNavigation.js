const router = require('express').Router()
const addUser = require('./routes/addUser')
const nab = require('./routes/nab')
const transaction = require('./routes/transaction')

router.use('/api/v1/user', addUser)
router.use('/api/v1/ib', nab)
router.use('/api/v1/ib', transaction)

module.exports = router
