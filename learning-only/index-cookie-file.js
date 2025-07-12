import cookieParser from 'cookie-parser'

app.use(cookieParser())

app.get('/', (request, response) => {
  response.cookie('cookie1', 'eat and enjoy')
  response.send('Express Home')
})

app.get('/fetch', (request, response) => {
  console.log(request.cookies)
  response.send('API Data Fetched!')
})

app.get('/clear-cookie', (request, response) => {
  response.clearCookie('cookie1')
  response.send('Cookie cleared!')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
