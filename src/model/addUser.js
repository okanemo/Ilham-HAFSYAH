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
  }
}
