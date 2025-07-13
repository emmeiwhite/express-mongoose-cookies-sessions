import express from 'express'
const app = express()
import session from 'express-session'

app.use(express.json())

/** Setup Session when the user visits the first time */
const sessionSetupMiddleware = session({
  secret: 'key-123-123',
  resave: false,
  saveUninitialized: false
})

app.use(sessionSetupMiddleware)
app.get('/', (req, res) => {
  res.send('WELCOME TO EXPRESS')
})
// Imitate a database:
const users = []

app.post('/register', async (req, res) => {
  const { username, password } = req.body

  // register the user in the database (passwords are encrypted but for this one let's keep it simple)

  users.push({ username, password })
  res.send('<h2>User Registered!</h2>')
})

app.listen(3000, () => {
  console.log('server running!')
})
