const express = require('express')
const router = express.Router()
let Admin = require('../../models/seeds/AdminSeed')
const AdminModel = require('../../models/Admin')
const jwt = require('jsonwebtoken')
const config = require('config')
// const auth = require('../../middleware/auth')
// API Route
// GET req => api/admin
// "auth" parameter to protect route from non authorized requests
router.get('/', (req, res) => {
  // Create admin profile
  AdminModel.create(Admin)
    .then(admin => {
      const payload = {
        admin: {
          id: admin.id
        }
      }
      // Add auth token to admin user
      jwt.sign(
        payload,
        config.get('jwtsecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
    })
    .catch(err => {
      res.sendStatus(err.message)
    })
})

module.exports = router
