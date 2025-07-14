import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Home Route')
})

app.listen(3000, (req, res) => {
  console.log('listening on port 3000')
})
