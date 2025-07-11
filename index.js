import express from 'express'
const app = express()

const PORT = process.env.PORT || 3000

// Set EJS as the View Engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const userName = 'John Doe!'

  res.render('index', { userName })
})
app.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`)
})
