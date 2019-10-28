const { Model } = require('objection')
const ddysCrmDb = require('../ddysCrmDb')

class UsrTag extends Model {

  static get tableName() {
    return 'usr_tag'
  }

  static get relationMappings() {
    return {    
      usr: {
        relation   : Model.BelongsToOneRelation,
        modelClass : require('./Usr'),
        join       : { from: 'usr_tag.usr_id', to: 'usr.id' }
      }
    }
  }
}

module.exports = UsrTag
module.exports.UsrTag = UsrTag.bindKnex(ddysCrmDb)