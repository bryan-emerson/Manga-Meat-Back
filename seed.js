require('./database.js')
let mongoose = require('mongoose')

let foodJson = require('./src/data/food.json')
let AnimeFood = require('./src/mangaMeat/models/food.js')

let characterJson = require('./src/data/character.json')
let AnimeChar = require('./src/mangaMeat/models/character.js')

let postJson = require('./src/data/posts.json')
let Posts = require('./src/mangaMeat/models/posts.js')

AnimeFood
  .deleteMany({})
  .then(()=> AnimeFood.create(foodJson))
  // .then(mongoose.disconnect)
  .then(()=> console.log('AnimeFood seeding done!'))

AnimeChar
  .deleteMany({})
  .then(()=> AnimeChar.create(characterJson))
  // .then(mongoose.disconnect)
  .then(()=> console.log('AnimeChar seeding done!'))

Posts
  .deleteMany({})
  .then(()=> Posts.create(postJson))
  // .then(mongoose.disconnect)
  .then(()=> console.log('Posts seeding done!'))
