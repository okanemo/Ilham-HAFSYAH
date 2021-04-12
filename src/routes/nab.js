const router = require('express').Router()
const { updateTotalBalance, listNab } = require('../controller/nab')

router.post('/updateTotalBalance', updateTotalBalance)
router.get('/listNAB', listNab)

module.exports = router
