let mongoose = require('mongoose')

let characterSchema = new mongoose.Schema({
    ID: Number,
    Name: String,
    AnimeOrigin: String,
    School: String,
    Age: Number,
    Picture: String
})

let characterModel = mongoose.model("Characters", characterSchema)
module.exports = characterModel
