const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
})

const AdminModel = mongoose.model('admin', AdminSchema)

module.exports = AdminModel
