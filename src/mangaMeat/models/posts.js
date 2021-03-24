let mongoose = require('mongoose')

let postSchema = new mongoose.Schema({
    comments: [],
    photo: URL,
    characterID: String,
    foodId: Number,
    caption: String
})

let postModel = mongoose.model("Posts", postSchema)
module.exports = postModel