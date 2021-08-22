const express = require('express')
const path = require('path')
const calc = require('./calc')

const port = 8080

const app = express();

app.use(express.static(path.join(__dirname, '/')))

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))


// app.get('/add', async(req, res) => {
//   res.status(200).json(5)
// })

app.get('/add/', async(req, res) => {
  const result = calc.add(Number(req.query.x), Number(req.query.y))
  res.status(200).json(result);
})

app.listen(port, () => console.log(`Listening to port ${port}`));