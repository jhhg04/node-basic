const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/show', (req, res) => {
  res.sendFile(__dirname + '/img/js.png')
})

app.get('/about', (req, res) => {
  res.send('about')
})

app.get('/skills', (req, res) => {
  res.send('skills')
})

app.get('/skills', (req, res) => {
  res.send('skills')
})

app.get('/new', (req, res) => {
  res.send('new page')
})

app.get('/name', (req, res) => {
  res.send('<h1>John</h1>')
})

app.listen(process.env.PORT || 3000)