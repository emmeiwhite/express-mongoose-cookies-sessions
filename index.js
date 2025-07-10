import express from 'express'
import { allProducts, allUsers, productController, searchController } from './controller.js'

const app = express()

const PORT = process.env.PORT | 3000

// 1. test route | Home Route

app.get('/', (request, response) => {
  response.status(201).json({
    message: 'resource created'
  })
})

// Routes Practice

app.get('/api/users', allUsers)

app.get('/api/products', allProducts)

// Route Parameter: We pass in a  dynamic value in our route path (/:id e.g.,) and then the server would receive that request , it will check what the route parameter is, and then it will get the correct Entity (product, user etc) from the database

app.get('/api/products/:productId', productController)

// Query Parameter  localhost:3000/api/search?keyword=chicken

app.get('/api/search', searchController)

app.listen(PORT, () => {
  console.log('Server running on PORT :', PORT)
})
