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
  res.json({
    users
  })
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body

  const currentUser = users.find(user => user.username === username)
  if (!currentUser) {
    return res.status(404).json({
      message: 'User Not Found'
    })
  }

  if (currentUser.password !== password) {
    return res.status(401).json({
      message: 'Invalid Password'
    })
  }

  // And if the user is registered, we'll setup the session
  req.session.userName = currentUser.username

  res.send('<h2>User Registered!</h2>')
})

app.listen(3000, () => {
  console.log('server running!')
})
