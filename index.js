import express from 'express'
const app = express()
import cookieParser from 'cookie-parser'

app.use(cookieParser())

app.get('/', (request, response) => {
  response.cookie('cookie1', 'eat and enjoy')
  response.send('Express Home')
})
app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
