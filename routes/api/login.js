const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')
const config = require('config')
const jwt = require('jsonwebtoken')
const Admin = require('../../models/Admin')
const bcrypt = require('bcryptjs')

// API route
// route to validate user for login
//  POST req => api/login

router.get('/', auth, async (req, res) => {
  try {
    // return Admin profile found using id, minus the password
    const admin = await Admin.findById(req.admin.id).select('-password')
    res.json(admin)
  } catch (err) {
    console.log(err.message)
    res.status(500).send('Server Error')
  }
})

router.post(
  '/',
  [
    check('name', 'Incorrect name').exists(),
    check('password', 'Password Required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, password } = req.body

    try {
      let admin = await Admin.findOne({ name })

      if (!admin) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Admin Credentials Incorrect' }] })
      }

      const passwordMatch = await bcrypt.compare(password, admin.password)

      if (!passwordMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Admin Credentials Incorrect' }] })
      }
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
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Server Error')
    }
  }
)

module.exports = router
