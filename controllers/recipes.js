const express = require('express')
const router = express.Router()
const Recipe = require("../models/Recipe")

router.get('/', (req, res) => {
    Recipe.find({})
        .then(recipes => {
            res.render('recipes/index', { recipes })
        })
})