const router = require('express').Router()
const user = require('./routes/user')
const nab = require('./routes/nab')
const transaction = require('./routes/transaction')
const member = require('./routes/user')

router.use('/api/v1/user', user)
router.use('/api/v1/ib', nab)
router.use('/api/v1/ib', transaction)
router.use('/api/v1/ib', member)

module.exports = router
