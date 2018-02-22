const express = require('express')
const app = express()
const hbs = require('hbs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))

