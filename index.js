import express from 'express'

const app = express()

const PORT = process.env.PORT | 3000

const mockProducts = [
  { id: 1, name: 'chicken', price: 2, quantity: 1 },
  { id: 2, name: 'fish', price: 1, quantity: 4 }
]
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

// Route Parameter: We pass in a  dynamic value in our route path (/:id e.g.,) and then the server would receive that request , it will check what the route parameter is, and then it will get the correct Entity (product, user etc) from the database

app.get('/api/products/:productId', (request, response) => {
  const { productId } = request.params

  const resProduct = mockProducts.find(product => product.id === parseInt(productId))
  console.log(resProduct)

  if (!resProduct) {
    return response.status(404).json({
      message: 'Not Found'
    })
  }

  response.status(200).json(resProduct)
})

// Query Parameter  localhost:3000/api/search?keyword=chicken

app.get('/api/search', (request, response) => {
  const keyword = request.query.keyword
  console.log(keyword)

  response.send(`Searching for ${keyword}`)
})
app.listen(PORT, () => {
  console.log('Server running on PORT :', PORT)
})
