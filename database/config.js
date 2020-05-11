const knex = require('knex')('production')

const config = require('../knexfile')

module.exports = knex(config.development)