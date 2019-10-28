const { Model } = require('objection')
const ddysCrmDb = require('../ddysCrmDb')

class Usr extends Model {

  static get tableName() {
    return 'usr'
  }

  static get relationMappings() {
    return {    
      usrTags: {
        relation   : Model.HasManyRelation,
        modelClass : require('./UsrTag'),
        join       : { from: 'usr.id', to: 'usr_tag.usr_id' }
      }
    }
  }

}

module.exports = Usr
module.exports.Usr = Usr.bindKnex(ddysCrmDb)
