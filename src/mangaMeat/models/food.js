let mongoose = require('mongoose')

let foodSchema = new mongoose.Schema({
    id: Number,
    name: String,
    picture: URL,
    ingredients: [String],
})

let foodModel = mongoose.model("Food", foodSchema)
module.exports = foodModel