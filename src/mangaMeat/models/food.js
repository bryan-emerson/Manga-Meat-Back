let mongoose = require('mongoose')

let foodSchema = new mongoose.Schema({
    ID: Number,
    Name: String,
    Picture: String,
    Ingredients: [String],
})

let foodModel = mongoose.model("Food", foodSchema)
module.exports = foodModel