import express from 'express'
import { userLogin, userSignup } from './controller.js'
import router from './route.js'
const app = express()

const PORT = process.env.PORT | 3000

// 0. Home Route
app.get('/', (request, response) => {
  response.send('Express Server ')
})

// 1. Route
app.use('/api/users', router)

app.listen(PORT, () => {
  console.log('Server running on PORT :', PORT)
})
