const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const TodoTask = require('./models/TodoTask')

dotenv.config()

app.use('/static', express.static('public'))
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log('Connected to db!')
  app.listen(3333, () => console.log('Server Up and running'))
})

//view engine configuration
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
  response.render('todo.ejs')
})

// POST method
app.post('/', async (request, response) => {
  const TodoTask = new TodoTask({
    content: request.body.content
  })
  try {
    await TodoTask.save()
    response.redirect('/')
  } catch (e) {
    response.redirect('/')
  }
})
