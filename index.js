const express = require('express')
const app = express()
const hbs = require('hbs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const recipesController = require('./controllers/recipes')

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use('/recipes', recipesController)
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => console.log('this is working'))