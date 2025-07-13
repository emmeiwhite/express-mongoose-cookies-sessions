/** --- Session Based Authentication --- */

import express from 'express'
const app = express()

// Let me practice cookie sending and receiving

import cookieParser from 'cookie-parser'

app.use(cookieParser())

app.get('/', (req, res) => {
  res.cookie('userName', 'Rather Bhai')
  res.send('<h1>Express App</h1>')
})

app.get('/login', (req, res) => {
  const cookieValue = req.cookies('userName')
  res.json({
    cookie: cookieValue
  })
})
app.listen(3000, () => {
  console.log('Serveer running on Port 3000')
})
