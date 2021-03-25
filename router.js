let express = require('express')
let mangaFood = require('./src/mangaMeat/food/router')
let mangaPost = require('./src/mangaMeat/post/router')
let mangaCharacter = require('./src/mangaMeat/character/router')


let router = new express.Router()
router.use('/food', mangaFood)
router.use('/post', mangaPost)
router.use('/character', mangaCharacter)


module.exports = router