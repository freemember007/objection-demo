const { Model } = require('objection')
// const ddysDb = require('../ddysDb')
const ddysCrmDb = require('../ddysCrmDb')
const Usr = require('./Usr')
// Usr.bindKnex(ddysCrmDb)

class BookPatient extends Model {

  static get tableName() {
    return 'book_patient'
  }

  static get relationMappings() {
    // Usr.bindKnex(ddysCrmDb)
    return {    
      usr: {
        relation   : Model.HasOneRelation,
        modelClass : Usr,
        join       : { from: 'book_patient.patient_id', to: 'usr.patient_id' }
      }
    }
  }

}

module.exports = BookPatient
// module.exports.BookPatient = BookPatient.bindKnex(ddysDb) // 无法跨数据库关联
module.exports.BookPatient = BookPatient.bindKnex(ddysCrmDb)
