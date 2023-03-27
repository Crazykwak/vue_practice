'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const dotenv = require('dotenv');


module.exports = merge(prodEnv, dotenv.config({path: '.env.dev'}).parsed,{
  NODE_ENV: '"development"',

})
