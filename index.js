import express from 'express'

const app = express()

const PORT = process.env.PORT | 3000

// 1. test route

app.get('/', (request, response) => {
  response.status(201).json({
    message: 'resource created'
  })
})

// Routes Practice

app.get('/api/users', (request, response) => {
  response.json([
    { id: 1, name: 'Anson' },
    { id: 2, name: 'Rafs' }
  ])
})

app.get('/api/products', (request, response) => {
  response.json([
    { id: 1, name: 'chicken', price: 2, quantity: 1 },
    { id: 2, name: 'fish', price: 1, quantity: 4 }
  ])
})

app.listen(PORT, () => {
  console.log('Server running on PORT :', PORT)
})
