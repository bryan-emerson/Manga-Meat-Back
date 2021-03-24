let mongoose = require('mongoose')

let postSchema = new mongoose.Schema({
    photo: URL,
    characterID: Number,
    foodId: Number,
    caption: String,
    comments: [String]
})

let postModel = mongoose.model("Posts", postSchema)
module.exports = postModel