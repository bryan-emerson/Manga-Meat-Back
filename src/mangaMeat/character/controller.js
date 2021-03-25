let Character = require('./character')

let controller = {
  create(request, response){
    let character = request.body
    Character
      .create(character)
      .then(character=> response.json(character))
  },
  readById(request, response){
    let id = request.params.id
    Character
      .findById(id)
      .then(character=> response.json(character))
  },
  readAll(request, response){
    Character
      .find({})
      .then(character=> response.json(character))
  },
  update(request, response) {
    let character = request.body
    let id = request.params.id
    Character
      .findByIdAndUpdate(id, character, {new: true})
      .then(character=> response.json(character))

  },
  destroy(request, response){
    let id = request.params.id
    Character
      .findByIdAndDelete(id)
      .then(()=> response.json({ok: true}))
  }
}

module.exports = controller