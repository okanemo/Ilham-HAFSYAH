const connection = require('../config/mysql')

module.exports = {
  checkingUnitModel: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM unit', (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },
  countingUnitModel: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT SUM(unit) AS totalUnit FROM unit',
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  updateTotalBalanceModel: (setNab) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO nab SET ?', setNab, (error, result) => {
        if (!error) {
          const newResult = {
            nab_amount: setNab.nab.toFixed(5)
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  getListNabModel: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT nab, updatedAt AS date FROM nab ORDER BY updatedAt DESC',
        (error, result) => {
          const newResult = []
          let obj = ''
          for (let i = 0; i <= result.length - 1; i++) {
            const nab = result[i].nab
            const date = result[i].date.toLocaleString('es-CL')
            obj = { nab, date }
            newResult.push(obj)
          }
          !error ? resolve(newResult) : reject(new Error(error))
        }
      )
    })
  }
}
