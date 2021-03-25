require('./database.js')
let mongoose = require('mongoose')

let foodJson = require('./data/food.json')
let AnimeFood = require('./mangaMeat/models/food.js')

let characterJson = require('./data/character.json')
let AnimeChar = require('./mangaMeat/models/character.js')

let postJson = require('./data/posts.json')
let Posts = require('./mangaMeat/models/posts.js')

AnimeFood
  .deleteMany({})
  .then(()=> AnimeFood.create(foodJson))
  .then(mongoose.disconnect)
  .then(()=> console.log('AnimeFood seeding done!'))

AnimeChar
  .deleteMany({})
  .then(()=> AnimeChar.create(characterJson))
  .then(mongoose.disconnect)
  .then(()=> console.log('AnimeChar seeding done!'))

Posts
  .deleteMany({})
  .then(()=> Posts.create(postJson))
  .then(mongoose.disconnect)
  .then(()=> console.log('Posts seeding done!'))
