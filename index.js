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
  console.log('2.After coming from the middleware')
  response.send('Express Server Home page')
})

app.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`)
})
