const router = require('express').Router()
const { updateTotalBalance } = require('../controller/nab')

router.post('/updateTotalBalance', updateTotalBalance)

module.exports = router
