const { Model } = require('objection')
const { DDYS_CRM_PG_CONN_STR } = require('./constant')

const knex = require('knex')({
  client: 'pg',
  connection: DDYS_CRM_PG_CONN_STR,
})
// Model.knex(knex)
module.exports = knex

