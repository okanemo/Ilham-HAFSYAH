const {
  checkingExistUsernameModel,
  addUserModel,
  getTotalMemberModel,
  getMemberModel
} = require('../model/user')
const { checkingUserIdModel } = require('../model/transaction')
const { getNabModel } = require('../model/transaction')
const helper = require('../helper/response')
const qs = require('querystring')

module.exports = {
  addUser: async (req, res) => {
    try {
      const { name, username } = req.body
      const setData = {
        name,
        username,
        profilePicture: req.file === undefined ? '' : req.file.filename
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
      const checkingUserId = await checkingUserIdModel(req.query.user_id)
      if (checkingUserId.length > 0 || req.query.user_id === '') {
        const result = await getMemberModel(user_id, limit, offset, nab)
        if (result.length > 0) {
          return helper.response(
            res,
            200,
            'Success get member',
            result,
            pageInfo
          )
        } else {
          return helper.response(
            res,
            400,
            'No user has yet become a NOZOMU investment member!'
          )
        }
      } else {
        return helper.response(
          res,
          400,
          `User with id ${req.query.user_id} is not valid!`
        )
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
