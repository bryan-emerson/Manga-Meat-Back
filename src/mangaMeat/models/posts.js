let mongoose = require('mongoose')

let postSchema = new mongoose.Schema({
    comments: [String],
    photo: URL,
    characterID: String,
    foodId: String,
    caption: String
})

let postModel = mongoose.model("Posts", postSchema)
module.exports = postModel