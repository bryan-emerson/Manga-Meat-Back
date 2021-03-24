let Post = require('./models/posts')

let controller = {
  create(request, response){
    let post = request.body
    Post
      .create(post)
      .then(post=> response.json(post))
  },
  readById(request, response){
    let id = request.params.id
    Post
      .findById(id)
      .then(post=> response.json(post))
  },
  readAll(request, response){
    Post
      .find({})
      .then(post=> response.json(post))
  },
  update(request, response) {
    let post = request.body
    let id = request.params.id
    Post
      .findByIdAndUpdate(id, post, {new: true})
      .then(post=> response.json(post))

  },
  destroy(request, response){
    let id = request.params.id
    Post
      .findByIdAndDelete(id)
      .then(()=> response.json({ok: true}))
  }
}

module.exports = controller