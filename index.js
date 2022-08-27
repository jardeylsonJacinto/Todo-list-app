const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config()

app.use('/static', express.static('public'))
app.use(express.urlencoded({ extended: true }))

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
