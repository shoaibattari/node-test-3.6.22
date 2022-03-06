const express = require('express')
const bodyParser = require("body-parser");
const log = console.log;
const { dirname } = require('path');
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res ,next) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/login', (req, res ,next) => {
    res.send('Hello login!')
  })

  app.get('/products', (req, res ,  next) => {
    res.sendFile(path.join(__dirname, '/public/products.html'));
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})