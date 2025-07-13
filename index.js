/** --- Session Based Authentication --- */

import express from 'express'
const app = express()

// Let me practice cookie sending and receiving

import cookieParser from 'cookie-parser'

app.use(cookieParser())

app.get('/', (req, res) => {
  res.cookie('userName', 'Rather Bhai')
  res.cookie('location', 'Srinagar')
  res.cookie('isAdmin', 'true')
  res.send('<h1>Express App</h1>')
})

// Cookie-Parser reads the cookies and makes them available via request.cookies object

app.get('/login', (req, res) => {
  console.log(req.cookies)
  const cookieValue = req.cookies
  res.json({
    cookie: cookieValue
  })
})

app.listen(3000, () => {
  console.log('Serveer running on Port 3000')
})
