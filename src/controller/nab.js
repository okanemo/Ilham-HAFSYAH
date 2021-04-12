const {
  checkingUnitModel,
  countingUnitModel,
  updateTotalBalanceModel
} = require('../model/nab')
const helper = require('../helper/response')

module.exports = {
  updateTotalBalance: async (req, res) => {
    try {
      const { current_balance } = req.body
      const checkingUnit = await checkingUnitModel()
      if (checkingUnit.length === 0) {
        const noUnitResult = { nab_amount: 1 }
        return helper.response(res, 200, 'nab_amount: 1', noUnitResult)
      } else {
        const countingUnit = await countingUnitModel()
        const setNab = {
          nab: current_balance / countingUnit[0].totalUnit,
          updatedAt: new Date()
        }
        const result = await updateTotalBalanceModel(setNab)
        return helper.response(res, 200, 'Success update total balance', result)
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
