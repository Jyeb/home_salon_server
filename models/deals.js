const mongoose = require('mongoose')

const DealSchema = new mongoose.Schema({
  dealname: {
    type: String
  },
  price: {
    type: Number
  },
  services: {
    type: String
  }
})

const DealModel = mongoose.model('deal', DealSchema)

exports.DealModel = DealModel
