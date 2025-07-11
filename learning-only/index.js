import express from 'express'
const app = express()

import router from './routes/userRoutes.js'
import { loggerMiddleware } from './middleware/loggerMiddleware.js'

app.use('/welcome', loggerMiddleware)
// Home Route
app.use(router)

app.get('/welcome', (request, response) => {
  response.send('Welcome to Middleware era')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`)
})
