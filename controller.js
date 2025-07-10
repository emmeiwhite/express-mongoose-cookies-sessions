export const mockProducts = [
  { id: 1, name: 'chicken', price: 2, quantity: 1 },
  { id: 2, name: 'fish', price: 1, quantity: 4 }
]

export const productController = (request, response) => {
  const { productId } = request.params

  const resProduct = mockProducts.find(product => product.id === parseInt(productId))
  console.log(resProduct)

  if (!resProduct) {
    return response.status(404).json({
      message: 'Not Found'
    })
  }

  response.status(200).json(resProduct)
}

export const searchController = (request, response) => {
  const keyword = request.query.keyword
  console.log(keyword)

  response.send(`Searching for ${keyword}`)
}

export const allProducts = (request, response) => {
  response.json([
    { id: 1, name: 'chicken', price: 2, quantity: 1 },
    { id: 2, name: 'fish', price: 1, quantity: 4 }
  ])
}

export const allUsers = (request, response) => {
  response.json([
    { id: 1, name: 'Anson' },
    { id: 2, name: 'Rafs' }
  ])
}
