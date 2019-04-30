const express = require('express')
const router = express.Router()
const userRoutes = require('./user')
const helloRoutes = require('./hello')
const { register } = require('../utils')


register(userRoutes, router)
register(helloRoutes, router)

module.exports = router