import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const app = express()

app.use(express.json())
// Mock DB for now:
const users = []

app.get('/', (req, res) => {
  res.send('Home Route')
})

/** 1. Register User | req.body and save contents to the users array */
app.post('/register', async (req, res) => {
  const { email, password } = req.body

  // let's encrypt the password before storing into the database
  const hashedPassword = await bcrypt.hash(password, 10)

  users.push({ email, password: hashedPassword })

  console.log(users)
  res.json({
    message: `User with email ${email} registered`
  })
})

/** --- 2. Let's now work on login Route --- */
app.post('/login', async (req, res) => {
  const { email, password } = req.body

  // 🔍 Step 1: Find user by email
  const currentUser = users.find(user => user.email === email)

  if (!currentUser) {
    return res.status(404).json({
      message: `User with email ${email} not found`
    })
  }

  // 🔐 Step 2: Compare password using bcrypt
  const isMatch = await bcrypt.compare(password, currentUser.password)

  if (!isMatch) {
    return res.status(401).json({
      message: `password is incorrect, please try again`
    })
  }

  // If gmail and password are correct, let's create a JWT token for the user

  const token = jwt.sign({ email }, 'secret#test#secret')
  res.send({ token })
  /** After sending this token, we'll use the /dashboard */
})

app.get('/dashboard', (req, res) => {
  try {
    const token = req.header('Authorization')
    const decodedToken = jwt.verify(token, 'secret#test#secret')

    if (decodedToken.email) {
      res.send(`Welcome ${decodedToken.email}`)
    } else {
      res.send('Access Denied!')
    }
  } catch (error) {
    res.send('Access Denied!')
  }
})

app.listen(3000, (req, res) => {
  console.log('listening on port 3000')
})
