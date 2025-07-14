import express from 'express'
const app = express()

app.use(express.json())
// Mock DB for now:
const users = []

app.get('/', (req, res) => {
  res.send('Home Route')
})

/** 1. Register User | req.body and save contents to the users array */
app.post('/register', (req, res) => {
  const { email, password } = req.body

  users.push({ email, password })
  res.json({
    message: `User with email ${email} registered`
  })
})

app.listen(3000, (req, res) => {
  console.log('listening on port 3000')
})
