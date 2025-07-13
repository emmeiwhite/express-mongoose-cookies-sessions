import express from 'express'
const app = express()

import session from 'express-session'

app.use(
  session({
    secret: 'sample-secret', //sid=sample-secret
    resave: false,
    saveUninitialized: false
  })
)

app.get('/', (req, res) => {
  res.send('<h1>Express Application!</h1>')
})

app.get('/visit', (req, res) => {
  if (req.session.page_viiews) {
    req.session.page_views++
    res.send(`You visited this page ${req.session.page_views} times`)
  } else {
    req.session.page_views = 1
    res.send('Welcome to this page for the first time')
  }
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
