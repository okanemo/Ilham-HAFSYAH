const connection = require('../config/mysql')

module.exports = {
  checkingExistUsernameModel: (username) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM user WHERE username = ?',
        username,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  addUserModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', setData, (error, result) => {
        if (!error) {
          const newResult = {
            user_id: result.insertId
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  getTotalMemberModel: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT COUNT(*) AS total FROM user',
        (error, result) => {
          !error ? resolve(result[0].total) : reject(new Error(error))
        }
      )
    })
  },
  getMemberModel: (user_id, limit, offset, nab) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT user.userId, SUM(unit) AS totalUnit FROM user JOIN unit ON user.userId = unit.userId ${user_id} ORDER BY userId ASC LIMIT ${limit} OFFSET ${offset}`,
        (error, result) => {
          const newResult = []
          let obj = ''
          for (let i = 0; i <= result.length - 1; i++) {
            const user_id = result[i].userId
            const total_unit_per_id = result[i].totalUnit.toFixed(4)
            const total_amount_rupiah_per_id = (
              result[i].totalUnit * nab
            ).toFixed(2)
            obj = {
              user_id,
              total_unit_per_id,
              total_amount_rupiah_per_id,
              currentNAB: nab.toFixed(4)
            }
            newResult.push(obj)
          }
          !error ? resolve(newResult) : reject(new Error(error))
        }
      )
    })
  }
}
