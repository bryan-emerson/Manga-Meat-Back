let mongoose = require('mongoose')

let postSchema = new mongoose.Schema({
    Photo: String,
    CharacterID: Number,
    FoodId: Number,
    Caption: String,
    Comments: [String]
})

let postModel = mongoose.model("Posts", postSchema)
module.exports = postModel