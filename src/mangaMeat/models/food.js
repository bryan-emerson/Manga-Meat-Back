let mongoose = require('mongoose')

let foodSchema = new mongoose.Schema({
    picture: URL,
    ingredients: Array
})

let foodModel = mongoose.model("Food", foodSchema)
module.exports = foodModel