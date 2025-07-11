import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000

app.use((request, response, next) => {
  console.log(`logger: ${request.url} at ${Date.now()}`)
  next()
})

// Home Route
app.use('/', (request, response) => {
  response.json({
    message: 'Home Route'
  })
})

app.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`)
})
