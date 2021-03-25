let mongoose = require('mongoose')

let foodSchema = new mongoose.Schema({
    id: Number,
    name: String,
    picture: String,
    ingredients: [String],
})

let foodModel = mongoose.model("Food", foodSchema)
module.exports = foodModel