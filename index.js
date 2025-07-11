import express from 'express'
import { connectDB } from './config/db.js'
import { Person } from './model/Person.js'
const app = express()

await connectDB()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Express Server')
})

// Let's create routes to create persons

app.post('/api/persons', express.json(), async (request, response) => {
  const { name, age, email } = request.body

  // Save Person to the Database
  const newPerson = new Person({
    name,
    age,
    email
  })

  await newPerson.save()
  console.log(newPerson)
  response.send('Person Created!')
})

app.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`)
})
