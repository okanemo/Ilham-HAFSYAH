const {
  getNabModel,
  checkingUserIdModel,
  totalUnitModelByUsedId,
  topupModel
} = require('../model/transaction')
const helper = require('../helper/response')

module.exports = {
  topup: async (req, res) => {
    try {
      const { user_id, amount_rupiah } = req.body
      const nab = await getNabModel()
      const rupiahToUnit = amount_rupiah / nab
      const setData = {
        userId: user_id,
        unit: rupiahToUnit,
        createdAt: new Date()
      }
      const totalUnit = await totalUnitModelByUsedId(user_id)
      const total = {
        nilai_unit_total: totalUnit + rupiahToUnit,
        saldo_rupiah_total: (totalUnit + rupiahToUnit) * nab
      }
      const checkingUserId = await checkingUserIdModel(user_id)
      if (checkingUserId.length > 0) {
        const result = await topupModel(setData, total)
        return helper.response(res, 200, 'topup successfully', result)
      } else {
        return helper.response(
          res,
          400,
          `User with id ${user_id} is not valid!`
        )
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
