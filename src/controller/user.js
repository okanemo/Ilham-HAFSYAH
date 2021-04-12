const {
  checkingExistUsernameModel,
  addUserModel,
  getTotalMemberModel,
  getMemberModel
} = require('../model/user')
const { getNabModel } = require('../model/transaction')
const helper = require('../helper/response')
const qs = require('querystring')

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
  },
  member: async (req, res) => {
    try {
      let { user_id, page, limit } = req.query
      const nab = await getNabModel()
      const pages = parseInt(page)
      const limits = parseInt(limit)
      page = page === '' ? (page = 0) : (page = pages)
      limit = limit === '' ? (limit = 20) : (limit = limits)
      user_id =
        user_id === ''
          ? 'GROUP BY user.userId'
          : `WHERE user.userId = ${user_id}`
      const totalMember = await getTotalMemberModel()
      const totalPage = Math.ceil(totalMember / limit)
      const offset = (page + 1) * limit - limit
      const prevLink =
        page > 0 ? qs.stringify({ ...req.query, ...{ page: page - 1 } }) : null
      const nextLink =
        page < totalPage - 1
          ? qs.stringify({ ...req.query, ...{ page: page + 1 } })
          : null
      const pageInfo = {
        page,
        totalPage,
        limit,
        totalMember,
        nextLink:
          nextLink && `http://localhost:3000/api/v1/ib/member?${nextLink}`,
        prevLink:
          prevLink && `http://localhost:3000/api/v1/ib/member?${prevLink}`
      }
      const result = await getMemberModel(user_id, limit, offset, nab)
      return helper.response(res, 200, 'Success get member', result, pageInfo)
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
