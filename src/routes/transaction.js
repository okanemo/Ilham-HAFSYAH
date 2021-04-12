const router = require('express').Router()
const { topup, withdraw } = require('../controller/transaction')

router.post('/topup', topup)
router.post('/withdraw', withdraw)

module.exports = router
