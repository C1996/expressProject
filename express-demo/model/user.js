const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
  'name': String,
  'password': Number
})

module.exports = mongoose.model('User', productSchema, 'user')