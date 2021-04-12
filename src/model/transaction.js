const connection = require('../config/mysql')

module.exports = {
  getNabModel: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        // 'SELECT nab FROM nab WHERE MAX(updatedAt)',
        'SELECT nab FROM nab ORDER BY updatedAt DESC LIMIT 1',
        (error, result) => {
          !error ? resolve(result[0].nab) : reject(new Error(error))
        }
      )
    })
  },
  checkingUserIdModel: (user_id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM user WHERE userId = ?',
        user_id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  totalUnitModelByUsedId: (user_id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT SUM(unit) AS totalUnit FROM unit WHERE userId = ?',
        user_id,
        (error, result) => {
          !error ? resolve(result[0].totalUnit) : reject(new Error(error))
        }
      )
    })
  },
  topupModel: (setData, total) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO unit SET ?', setData, (error, result) => {
        if (!error) {
          const newResult = {
            nilai_unit_hasil_topup: setData.unit.toFixed(4),
            nilai_unit_total: total.nilai_unit_total.toFixed(4),
            saldo_rupiah_total: total.saldo_rupiah_total.toFixed(2)
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  }
}
