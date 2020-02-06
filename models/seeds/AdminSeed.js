const bcrypt = require('bcryptjs')

let password = 'philharper1'
var salt = bcrypt.genSaltSync(10)
var hash = bcrypt.hashSync(password, salt)

let Admin = {
  name: 'Maxine',
  password: hash,
  mobile: '0404579007',
  location: 'Redcliffe, QLD 4019'
}

module.exports = Admin
