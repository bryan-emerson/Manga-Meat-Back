let Food = require('./food')
require('../../database.js')

let controller = {
  create(request, response){
    let food = request.body
    Food
      .create(food)
      .then(food=> response.json(food))
  },
  readById(request, response){
    let id = request.params.id
    Food
      .findById(id)
      .then(food=> response.json(food))
  },
  readAll(request, response){
    Food
      .find({})
      .then(food=> response.json(food))
  },
  update(request, response) {
    let food = request.body
    let id = request.params.id
    Food
      .findByIdAndUpdate(id, food, {new: true})
      .then(food=> response.json(food))

  },
  destroy(request, response){
    let id = request.params.id
    Food
      .findByIdAndDelete(id)
      .then(()=> response.json({ok: true}))
  }
}

module.exports = controller