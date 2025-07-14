import express from 'express'
import bcrypt from 'bcrypt'
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
  res.json({
    message: `User with email ${email} registered`
  })
})

app.listen(3000, (req, res) => {
  console.log('listening on port 3000')
})
