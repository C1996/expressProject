const mongoose = require('mongoose')

const uri = "mongodb+srv://wenchei:960115@express-app-uylim.mongodb.net/test?retryWrites=true"

mongoose.connect(uri, (err) => {
  if (err) {
    console.log('连接失败');
  } else {
    console.log('连接成功');
  }
})
module.exports = mongoose

