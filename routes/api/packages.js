const express = require('express')
const router = express.Router()
const {PackageModel} = require('../../models/packages')
// Auth required to create packages
const auth = require('../../middleware/auth')
// Package validation
const { check, validationResult } = require('express-validator')
// Admin model
const Admin = require('../../models/Admin')

// API route to create packages
// POST req => api/package
router.post(
  '/',
  [
    auth,
    [
      check('packagename', 'Package Name required').exists(),
      check('price', 'Package Price Required').exists(),
      check('services', 'A minimum of one service is required').isArray({
        min: 1
      })
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const newPackage = new PackageModel({
        packagename: req.body.packagename,
        price: req.body.price,
        services: req.body.services
      })

      const package = await newPackage.save()

      res.json(package)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// API route to return all packages
router.get('/', async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const packages = await PackageModel.find()
    res.send(packages)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// Route to delete a package
router.delete('/:id', auth, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const package = await PackageModel.findById()
    res.send(package)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// Route to update a package
router.patch('/:id', auth, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
    PackageModel.updateOne({ _id: req.params.id }, req.body, async (err, raw) => {
      const package = await PackageModel.findById(req.params.id)
      res.send(package)
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
