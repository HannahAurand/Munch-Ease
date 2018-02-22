const express = require('express')
const router = express.Router()
const Recipe = require("../models/Recipe")

router.get('/', (req, res) => {
    Recipe.find({})
        .then(recipes => {
            res.render('recipes/index', { recipes })
        })
})

router.post('/', (req, res) => {
    Recipe.create({
        title: String,
        description: String,
        instructions: String,
        ingredients: String
    }).then(recipe => {
        res.redirect('/recipes')
    })
})

router.get('/new', (req, res) => {
    res.render('recipes/new')
})

router.get('/edit/:id', (req, res) => {
    Recipe.findOne({_id: req.params.id}).then(recipe => {
        res.render('recipes/edit', recipe)
    })
})

router.put('/:id', (req, res) => {
    Recipe.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(recipe => {
        res.redirect('/recipes')
    })
})

router.delete('/:id', (req, res) => {
    Recipe.findOneAndRemove({ _id: req.params.id })
      .then(() => {
        res.redirect('/')
      })
  })

router.get('/:id', (req, res) => {
    Recipe.findOne({_id: req.params.id})
    .then(recipe => {
        res.render('recipes/show', recipe)
    })
})

module.exports = router;