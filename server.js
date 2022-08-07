const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
//const mongoose = require('mongoose')
require('./database')
const app = express()
const port = process.env.Port || 5000

/*mongoose.connect(
  'mongodb://localhost:27017/books',
  {
    // useUnifieldTopology: true,
    useNewUrlParser: true
    // useFindAndModify: false
  },
  function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log('mongoDb conectado com sucesso')
    }
  }
)
*/
app.use(cors())

app.use(cookieParser())

app.use(express.json())

app.get('/home', function (req, res) {
  res.json({ message: 'hello world' })
})

app.listen(port, function () {
  console.log(`server running on port ${port}`)
})
