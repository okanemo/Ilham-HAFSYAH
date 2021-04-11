const { checkingExistUsernameModel, addUserModel } = require('../model/addUser')
const helper = require('../helper/response')

module.exports = {
  addUser: async (req, res) => {
    try {
      const { name, username } = req.body
      const setData = {
        name,
        username
      }
      const checkingUsername = await checkingExistUsernameModel(username)
      if (checkingUsername.length > 0) {
        return helper.response(
          res,
          400,
          `User with username ${username} already exist!`
        )
      } else {
        const result = await addUserModel(setData)
        return helper.response(
          res,
          200,
          `Success add user with username ${username}`,
          result
        )
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
