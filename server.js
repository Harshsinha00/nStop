const express = require('express')
const app = express()
const port = 3000

app.set('view-engine','ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/login', (req, res) => {
    res.render('loginfront.ejs')
})

app.get('/register', (req, res) => {
    res.render('registerfront.ejs')
})

app.listen(3000)