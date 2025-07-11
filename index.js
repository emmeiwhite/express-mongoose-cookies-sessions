import express from 'express'
import authRouter from './route.js'
import usersRouter from './router2.js'

const app = express()

const PORT = process.env.PORT | 3000

/** Middleware: Fxns executed before the final request handler */
app.use((req, res, next) => {
  console.log('From Middle at this timestamp', Date.now())
  next()
})

// 0. Home Route
app.get('/', (request, response) => {
  response.send('Express Server ')
})

// 1. Router-1
app.use('/api/users', authRouter)

// 2. Router-2
app.use('/api', usersRouter)

// app.get('*', (request, response) => {
//   response.send('Invalid Route')
// })
/** Start the server */
app.listen(PORT, () => {
  console.log('Server running on PORT :', PORT)
})
