const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./router')
const app = express()

// 静态文件
const staticPath = './public'
app.use(express.static(path.join(__dirname, staticPath)))

// body解析
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(router)

app.listen(3000, () => {
  console.log('your app listening at http://192.168.1.110:3000')
})