// define our recipe schema and model
// then export it

//importing mongoose that holds database that exists within the connection page for the mongoose database
//when we require a file, we'll get whatever that fil is exporting. We need to store it somewhere.
const mongoose = require("../db/connection") 

const RecipeSchema = new mongoose.Schema({ //creates model for us, create Schema, define schema, rules for the structure of the data
    //used to create model
    title: String,
    description: String,
    instructions: String,
    ingredients: String
})

//create mongoose model by passing in the name of the model and the schema for the model
//Todo translates to the name of the model in our database.
const Recipe = mongoose.model("Recipe", RecipeSchema) 
module.exports = Recipe //exporting our To Do model to access in our controller
//We're going to use this to do model to query all of our stuff, and then we'll rend that in a view. 
