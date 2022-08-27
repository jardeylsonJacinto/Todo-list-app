const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

app.use('/static', express.static('public'))
app.use(express.urlencoded({ extended: true }))

//connection to db
mongoose.set('userFindAndModify', false)

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParse: true }, () => {
  console.log('connected to db!')

  app.listen(3333, () => console.log('Serve up and running'))
})

//view engine configuration
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
  response.render('todo.ejs')
})

// POST method
app.post('/', (request, response) => {
  console.log(request.body)
})

app.listen(3333, () => console.log('Server up and running'))
