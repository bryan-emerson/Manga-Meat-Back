let mongoose = require('mongoose')

let characterSchema = new mongoose.Schema({
    id: Number,
    name: String,
    animeOrigin: String,
    school: String,
    age: Number,
    picture: URL
})

let characterModel = mongoose.model("Characters", characterSchema)
module.exports = characterModel
