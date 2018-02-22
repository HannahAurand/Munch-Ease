//import the Restaurant model
const Recipe = require("../models/Recipe") //not requiring the whole mongoose database; requiring connection page
//import our seed data
const data = require('./seeds.json')

//removing any existing Restaurants and inserting all the restaurants in our json file
Recipe.remove({})
  .then(() => {
    return Recipe.collection.insert(data);
})
.then(() => {
    process.exit()
})