const { Model } = require('objection')
const { DDYS_MYSQL_CONN_STR } = require('./constant')

const knex = require('knex')({
  client: 'mysql',
  connection: DDYS_MYSQL_CONN_STR,
})

module.exports = knex
