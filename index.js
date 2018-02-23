const express = require('express')
const app = express()
const hbs = require('hbs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
//passport stuff
const passport = require('passport')
const recipesController = require('./controllers/recipes')

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//Passport stuff
require('./config/passport')(passport)
  app.use(passport.initialize())
  app.use(passport.session())
  
//requiring flash
req.flash('signupMessage', 'This email is already used.')

// '/'
app.get('/', (req, res) => {
    res.render('index')
})
// '/recipes'
app.use('/recipes', recipesController)

app.listen(3000, () => console.log('this is working'))