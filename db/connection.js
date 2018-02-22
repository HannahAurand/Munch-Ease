
//importing the mongoose library
//mongoose (ODM) is mapping documents to objects
const mongoose = require('mongoose') 

//set up connection (link this application to mongo)
//using a connection string
//"mongodv://localhost is required in the connection string"
//recipes is the name of the mongo database. call it something that makes sense
//database names and collections are never capitalized
mongoose.connect("mongodb://localhost/recipes")

//using promises native to javascript; give mongoose a promise library to use
mongoose.Promise = Promise

//export mongoose 
module.exports = mongoose