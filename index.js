import express from 'express'
const app = express()

const PORT = process.env.PORT || 3000

app.use((req, res, next) => {
  console.log('1. Middleware performing task before moving on to the last handler')

  res.on('finish', () => {
    console.log('3. End the request--->middleware--->response cycle')
  })
  next()
})

app.get('/', (request, response) => {
  hello
  console.log('2.After coming from the middleware')
  response.send('Express Server Home page')
})

app.get('/users', (req, res) => {
  throw new Error('ERROR: Could not fetch users')
})

// Handling all errors with middleware

app.use((error, request, response, next) => {
  console.log(error.message)
  response.send('Interval Server Error : 500')
})

app.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`)
})
