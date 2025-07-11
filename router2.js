import express from 'express'
const router = express.Router()

// CRUD operations
router.get('/users', (request, response) => {
  response.json({
    message: 'get all users'
  })
})

// Get single user
router.get('/users/:id', (request, response) => {
  const { id } = request.params
  response.json({
    message: `Get User with id:${id}`
  })
})

// 3. POST Request
router.post('/users', express.json(), (request, response) => {
  const { name, age } = request.body
  response.json({
    message: `User created with Name: ${name} & Age: ${age}`
  })
})

// 4. PUT/PATCH Request
router.patch('/users/:id', express.json(), (request, response) => {
  const { id } = request.params
  const { name, age } = request.body
  response.json({
    message: `User with id: ${id} updated with the following. Name:${name} & Age: ${age}`
  })
})

// 5. DELETE
router.delete('/users/:id', (request, response) => {
  const { id } = request.params

  response.json({
    message: `User with id: ${id} has been deleted!`
  })
})

export default router
