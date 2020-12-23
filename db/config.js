const knex = require('knex');
const knexfile = require('../knexfile');

const environment = 'production';

module.exports = knex(knexfile[environment]);