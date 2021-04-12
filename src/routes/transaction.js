const router = require('express').Router()
const { topup } = require('../controller/transaction')

router.post('/topup', topup)

module.exports = router
