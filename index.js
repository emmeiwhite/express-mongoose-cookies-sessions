const express = require('express')

const app = express()

const PORT = process.env.PORT | 3000

// 1. test route

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log('Server running on PORT :', PORT)
})
