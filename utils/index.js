const controllers = require('../controllers')

module.exports = {
  register (routes, router) {
    routes.forEach(({ path, method, middlewares }) => {
      if (true) {
        router[method](path, ...[controllers[path], ...middlewares])
      } else {

      }
    })
  }
}