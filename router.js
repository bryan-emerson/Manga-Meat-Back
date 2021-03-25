let express = require('express')
let mangaRouter = require('./src/mangaMeat/router')


let router = new express.Router()
router.use('/src/mangaMeat', mangaRouter)


module.exports = router