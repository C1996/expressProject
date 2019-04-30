const { login } = require('../services')

module.exports = {
  '/login': async function (req, res) {
    const params = req.body
    const data = await login(params)
    res.end(JSON.stringify(data))
  },
  '/hello': async function (req, res) {
    res.end('hello world')
  }
}