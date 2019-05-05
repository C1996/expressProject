const mongoose = require('../db/index')
const User = require('../model/user')

module.exports = {
  async login (data) {
    const infor = {
      'name': data.name,
      'password': data.password
    }
    User.create(infor, (err, res) => { })
    return {
      msg: 'login success',
      infor
    }
  }
}