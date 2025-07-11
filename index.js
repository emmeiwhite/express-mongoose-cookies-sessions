import express from 'express'
import { connectDB } from './config/db.js'
const app = express()

await connectDB()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Express Server')
})
app.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`)
})
