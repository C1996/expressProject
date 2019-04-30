module.exports = {
  async login (data) {
    const infor = {
      'name': data.name,
      'password': data.password
    }
    return {
      msg: 'login success',
      infor
    }
  }
}