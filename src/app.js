// https://web-server-moo6.onrender.com/ is the prod env
const hbs = require('hbs')
const path = require('path')
const express = require('express')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Prathyusha',
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    aboutText: 'About',
    name: 'Prathyusha',
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Prathyusha',
  })
})

app.get('/weather', (req, res) => {
  console.log(req.query)
  if (!req.query.address) {
    return res.send({
      error: 'Please provide address',
    })
  }
  res.send({
    address: req.query.address,
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'Help',
    name: 'Prathyusha',
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: 'Weather app',
    name: 'Prathyusha',
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
