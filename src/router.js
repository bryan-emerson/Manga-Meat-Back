let express = require('express')
let mangaRouter = require('./mangaMeat/router')


let router = new express.Router()
router.use('/mangaMeat', mangaRouter)


module.exports = router